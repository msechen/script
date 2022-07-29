# -*- coding: utf-8 -*-
"""
new Env('携程旅行');
"""

import requests
import urllib
import re,json

from notify_mtr import send
from utils import get_data

requests.packages.urllib3.disable_warnings()

class Ctrip:
    def __init__(self,check_items):
        self.check_items = check_items

    @staticmethod
    def getMainCookie(Cookie):
        CK = urllib.parse.unquote(urllib.parse.unquote(Cookie))
        openid = re.findall(r'"openid":"(.*?)",',CK)[0]
        appid = re.findall(r'"appid":"(.*?)",',CK)[0]
        unionid= re.findall('"unionid":"(.*?)",',CK)[0]
        GUID = re.findall(r'GUID=(.*?);',CK)[1]
        vid = re.findall(r'"vid":"(.*?)",',CK)[0]
        RGUID = re.findall(r'_RGUID=(.*?);',CK)[0].replace('-','')  #需要去掉内部‘-’
        ip = re.findall(r'_RF1=(.*?);',CK)[0]
        cticket = re.findall(r'cticket=(.*?);',CK)[0]
        AID = re.findall(r'&AID=(.*?)&',CK)[0]
        SID = re.findall(r'&SID=(.*?)&',CK)[0]
        SourceID = re.findall(r'&SourceID=(.*?)&',CK)[0]
        maindic={
            'openid': openid,
            'appid': appid,
            'unionid': unionid,
            'GUID': GUID,
            'vid': vid,
            'RGUID': RGUID,
            'ip': ip,
            'cticket': cticket,
            'AID': AID,
            'SID': SID,
            'SourceID': SourceID
        }

        return maindic

    @staticmethod
    def getheaders(Cookie):
        headers = {
            'Host': 'm.ctrip.com',
            'Accept': '*/*',
            'Accept-Language':'zh-CN,zh-Hans;q=0.9',
            'Accept-Encoding': 'gzip,deflate,br',
            'cookieOrigin':'https://m.ctrip.com',
            'content-type': 'application/json',
            'Origin': 'https://m.ctrip.com',
            'User-Agent': f'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.26(0x18001a26) NetType/WIFI Language/zh_CN miniProgram/wx0e6ed4f51db9d078',
            'Connection': 'keep-alive',
            'Referer': f'https://m.ctrip.com/activitysetupapp/mkt/index/membersignin2021?isHideNavBar=YES&pushcode=miniprogram%22&fromminiapp=weixin&allianceid=7225&sid=1000387&sourceid=55552689&_cwxobj=%7B%22cid%22%3A%2252271043311018565466%22%2C%22appid%22%3A%22wx0e6ed4f51db9d078%22%2C%22mpopenid%22%3A%2201f65619-1ee8-4d96-91f9-d4dbb7c2d744%22%2C%22mpunionid%22%3A%22oHkqHt46MNKqp8duSWUVeD9yyDzE%22%2C%22allianceid%22%3A%227225%22%2C%22sid%22%3A%221000387%22%2C%22ouid%22%3A%22%22%2C%22sourceid%22%3A%2255552689%22%2C%22exmktID%22%3A%22%7B%5C%22openid%5C%22%3A%5C%2201f65619-1ee8-4d96-91f9-d4dbb7c2d744%5C%22%2C%5C%22unionid%5C%22%3A%5C%22oHkqHt46MNKqp8duSWUVeD9yyDzE%5C%22%2C%5C%22channelUpdateTime%5C%22%3A%5C%221658847536425%5C%22%2C%5C%22serverFrom%5C%22%3A%5C%22WAP%2FWECHATAPP%5C%22%2C%5C%22innersid%5C%22%3A%5C%22324%5C%22%2C%5C%22innerouid%5C%22%3A%5C%22%5C%22%2C%5C%22pushcode%5C%22%3A%5C%22%5C%22%7D%22%2C%22scene%22%3A1089%2C%22personalRecommendSwitch%22%3Atrue%2C%22localRecommendSwitch%22%3Atrue%2C%22marketSwitch%22%3Atrue%7D',
            # 'Content-Length': '137',
            'Cookie': f'{Cookie}' 
        }
        return headers

    @staticmethod
    def Sign(headers, mainCK):
        url = "https://m.ctrip.com/restapi/soa2/22769/isTodaySign?_fxpcqlniredt=" + str(mainCK['GUID'])
        data = {"head":{"cid":str(mainCK['GUID']),"ctok":"","cver":"1.0","lang":"01","sid":"8888","syscode":"09","auth":"","xsid":"","extension":[]}}
        try:
            res = requests.post(url=url, headers=headers, data=json.dumps(data)).json()
            # print(res)
            if(res['sign']) == False:
                url = "https://m.ctrip.com/restapi/soa2/22769/signToday?_fxpcqlniredt=" + str(mainCK['GUID'])
                #构建body
                rmsToken = "fp=sqkm95-1poj0zf-1uks0cc" + "&vid=" + str(mainCK["vid"]) +"&r=" + str(mainCK["RGUID"]) +"&ip=" + str(mainCK["ip"]) + "&ua=" + urllib.parse.quote(str(headers["User-Agent"])) + "&pageId=10650004935&rg=fin&screen=414x896&tz=+8&blang=zh-CN&oslang=zh-CN&v=m17&bl=false&clientid="
                # print(rmsToken)
                body= {
                    "platform":"miniProgram",
                    "openId": str(mainCK['openid']),
                    "rmsToken":rmsToken,
                    "head": data
                    }
                try:
                    res = requests.post(url=url, headers=headers, data=json.dumps(body)).json()
                    if(res['message'] == "SUCCESS"):
                        msg = "签到成功：已连续{0}天签到".format(str(res["continueDay"]))
                    else:
                        msg = "签到失败，请检查cookie"
                except Exception as err:
                    msg = "签到失败：" + str(err)
            else:
                msg = "今日已签到，请勿重复签到！"
        except Exception as err:
            msg = "签到失败：" + str(err)
        return msg

    @staticmethod
    def getTaskList(headers, mainCK):
        url = "https://m.ctrip.com/restapi/soa2/22598/userTaskList?_fxpcqlniredt=" + mainCK['GUID']
        data = {"allianceid": mainCK['AID'],
                "sid": mainCK['SID'],
                "ouid":"",
                "sourceid": mainCK['SourceID'],
                "pushcode":"miniprogram\"",
                "innersid":"",
                "innerouid":"",
                "channelCode":"2H3294O46M",
                "oAuthHead":{},
                "platform":"miniProgram",
                "rmsToken":"",
                "version":"3",
                "osType":"ios",
                "appVersion":"",
                "subOsType":"iphone",
                "head":{"cid": mainCK['GUID'],"ctok":"","cver":"1.0","lang":"01","sid":"8888","syscode":"09","auth":"","xsid":"","extension":[]}}
        try:
            res = requests.post(url=url, headers=headers, data=json.dumps(data)).json()
            taskList = res['todoTaskList']
            #print(taskList)
            for i in len(taskList):
                ballName = i['extendJson']['ballName']
                if (ballName != '浏览任务'):
                    continue
                else:
                    wechatUrl =	i['wechatUrl']



            msg = "任务还有部分没搞懂，先不做了"
        except Exception as err:
           msg = "任务列表获取失败：" + str(err)
        return msg    




    def main(self):
        msg_all = ""
        for check_item in self.check_items:
            Cookie = str(check_item.get("cookie"))
            #URL编码解码转换
            #cid=GUID,ctick=auth
            # CK = urllib.parse.unquote(urllib.parse.unquote(Cookie))
            # print(CK)
            mainCK = self.getMainCookie(Cookie)
            headers = self.getheaders(Cookie)
            sign_msg = self.Sign(headers,mainCK)
            tasklist =self.getTaskList(headers, mainCK)
            msg = f"{sign_msg}\n{tasklist}"
            msg_all += msg + "\n\n"
        return msg_all

if __name__ == "__main__":
    data= get_data()
    _check_items_list = data.get("Ctrip", [])
    res = Ctrip(check_items=_check_items_list).main()
    send("Ctrip",res)









