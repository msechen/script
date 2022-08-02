# -*- coding: utf-8 -*-
"""
new Env('携程旅行');
"""

import requests  #,grequests
import urllib
import re,json
import time

from notify_mtr import send
from utils import get_data

requests.packages.urllib3.disable_warnings()

class Ctrip:
    def __init__(self,check_items):
        self.check_items = check_items

    @staticmethod
    def getMainCookie(Cookie,readerId):
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
        DUID = re.findall(r'DUID=(.*?);',CK)[0]
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
            'SourceID': SourceID,
            'DUID': DUID,
            'readerId': readerId
        }
        #构造查询参数query
        exmktID={
                "openid":f"{maindic['openid']}",
                "unionid":f"{maindic['unionid']}",
                "channelUpdateTime":f"{int(round(time.time()*1000))}",
                "serverFrom":"WAP/WECHATAPP",
                "innersid":"260",
                "innerouid":"task",
                "pushcode":""
            }
        exmktID = str(exmktID).replace("'",'\\"')
        _cwxobj={
            "cid":f"{maindic['GUID']}",
            "appid":f"{maindic['appid']}",
            "mpopenid":f"{maindic['openid']}",
            "mpunionid":f"{maindic['unionid']}",
            "allianceid":f"{maindic['AID']}",
            "sid":f"{maindic['SID']}",
            "ouid":"",
            "sourceid":f"{maindic['SourceID']}",
            "exmktID":f"{exmktID}",
            "scene":"1089",
            "personalRecommendSwitch":"true",
            "localRecommendSwitch":"true",
            "marketSwitch":"true"
            }
        query = f"&fromminiapp=weixin&allianceid={maindic['AID']}&sid={maindic['SID']}&sourceid={maindic['SourceID']}&_cwxobj=" + str(_cwxobj)
        maindic['query'] = query
        return maindic

    @staticmethod
    def getheaders(Cookie, mainCK):
        str = 'm.ctrip.com/activitysetupapp/mkt/index/membersignin2021?isHideNavBar=YES&pushcode=miniprogram"' + mainCK['query']
        Referer = urllib.parse.quote(str)
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
            'Referer': 'https://' + Referer,
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
                rmsToken = "fp=sqkm95-1poj0zf-1uks0cc" + "&vid=" + str(mainCK["vid"]) +"&r=" + str(mainCK["RGUID"]) +"&ip=" + str(mainCK["ip"]) + "&ua=" + urllib.parse.quote(str(headers["User-Agent"])) + "&pageId=10650004935&rg=fin&screen=414x896&tz=+8&blang=zh-CN&oslang=zh-CN&v=m17&bl=false&clientid="
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

    # @staticmethod
    # def getTaskList(headers, mainCK):
    #     url = "https://m.ctrip.com/restapi/soa2/22598/userTaskList?_fxpcqlniredt=" + mainCK['GUID']
    #     data = {"allianceid": mainCK['AID'],
    #             "sid": mainCK['SID'],
    #             "ouid":"",
    #             "sourceid": mainCK['SourceID'],
    #             "pushcode":"miniprogram\"",
    #             "innersid":"",
    #             "innerouid":"",
    #             "channelCode":channelCode,
    #             "oAuthHead":{},
    #             "platform":"miniProgram",
    #             "rmsToken":"",
    #             "version":"3",
    #             "osType":"ios",
    #             "appVersion":"",
    #             "subOsType":"iphone",
    #             "head":{"cid": mainCK['GUID'],"ctok":"","cver":"1.0","lang":"01","sid":"8888","syscode":"09","auth":"","xsid":"","extension":[]}
    #     }
    #     msg = " "
    #     try:
    #         res = requests.post(url=url, headers=headers, data=json.dumps(data)).json()
    #         taskList = res['todoTaskList']
    #         # for i in taskList:
    #         #     displayname = i["displayName"]
    #         #     msg = msg + "{0}\n".format(displayname)
    #     except Exception as err:
    #        msg = "任务列表获取失败：" + str(err)
    #     return taskList, msg    
        
    # @staticmethod
    # def doTask(headers, mainCK, taskList):
    #     for i in taskList:
    #         if (i['extendJson'] != '{"ballName":"浏览任务"}'):
    #             continue
    #         else:
    #             wechatUrl = i['wechatUrl']
    #             if ('http' in wechatUrl ):
    #                 wechatUrl = wechatUrl + '&' + mainCK["query"]
    #                 taskHeader = {
    #                     'Host': 'm.ctrip.com',
    #                     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    #                     'Cookie': headers['Cookie'],
    #                     'Accept-Language':'zh-CN,zh-Hans;q=0.9',
    #                     'Accept-Encoding': 'gzip,deflate,br',
    #                     'User-Agent': f'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.26(0x18001a26) NetType/WIFI Language/zh_CN miniProgram/wx0e6ed4f51db9d078',
    #                     'Connection': 'keep-alive',
    #                 }
    #                 res = requests.get(url=wechatUrl, headers=taskHeader)

    #                 time.sleep(18)

    #             else:#天天领现金
    #                 wechatUrl =	i['wechatUrl']
    #     return

    @staticmethod
    def doCash(mainCK):
        cashmsg=" "
        headers={
            "Host": "m.ctrip.com",
            "Connection": "keep-alive",
            "GUID": f'{mainCK["GUID"]}',
            "content-type": "application/json",
            "x-ctx-personal-recommend": "1",
            "x-ctx-group": "ctrip",
            "x-ctx-locale": "zh-CN",
            "duid":f'{mainCK["DUID"]}',
            "x-ctx-currency": "CNY",
            "x-wx-openid": f'{mainCK["openid"]}',
            "x-ctx-region": "CN",
            "Accept-Encoding": "gzip,compress,br,deflate",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.26(0x18001a29) NetType/WIFI Language/zh_CN",
            "Referer": "https://servicewechat.com/wx0e6ed4f51db9d078/617/page-frame.html"
        }
        extension = [{"name":"appId","value":"wx0e6ed4f51db9d078"},{"name":"scene","value":"1089"}]
        head={
            "cid": f"{mainCK['GUID']}",
            "ctok": "",
            "cver": "1.1.137",
            "lang": "01",
            "sid": "",
            "syscode": "30",
            "auth": f"{mainCK['cticket']}",
            "sauth": "",
            "extension": extension
            }
        deviceInfo = {
            "screenHeight":896,
            "screenWidth":414,
            "deviceType":"PHONE",
            "os":"iOS",
            "osv":"15.5",
            "type":"MINIAPP"
        }         
        flowurl = "https://m.ctrip.com/restapi/soa2/13012/getWaterflowInfo?_fxpcqlniredt=" + mainCK['GUID']
        flowbody = {
        "sourceid":"bank",
        "appId":"99999999",
        "source":"bank",
        "componentType":"miniapp",
        "tabType":"",
        "tabId":"",
        "pageInfo":{"index":1,"size":20},
        "globalInfo":{},
        "hotelInfo":{},
        "deviceInfo": deviceInfo,
        "coordinate":{},
        "ext":{"cver":"9999.000","extra":"null"},
        "head": head
        }
        flow = requests.post(url = flowurl, headers = headers, data=json.dumps(flowbody)).json()
        items = flow['data']['items']
        loadurl = "https://m.ctrip.com/restapi/soa2/13458/loadTemplate?_fxpcqlniredt=" + mainCK['GUID']
        loadbody={
            "templateCode":"317sqhb","version":"3","platform":"miniprogramOrigin","head":head
        }
        load = requests.post(url = loadurl, headers = headers, data=json.dumps(loadbody)).json()
        temp = load["components"][1]["property"]
        channelCode = re.findall(r'"channelCode":"(.*?)",',temp)[0]
        try:
            taskbody = {
                "channelCode":channelCode,
                "taskId":891,
                "status":0,
                "done":0,
                "allianceid": mainCK['AID'],
                "sid": mainCK['SID'],
                "ouid":"",
                "sourceid": mainCK['SourceID'],
                "pushcode":"",
                "innersid":"260",
                "innerouid":"task",
                "version":"3",
                "platform":"miniprogramOrigin",
                "osType":"ios",
                "head": head
            }
            taskurl = "https://m.ctrip.com/restapi/soa2/22598/todoTask?_fxpcqlniredt=" + mainCK['GUID']
            res = requests.post(url = taskurl, headers = headers, data=json.dumps(taskbody)).json()
            n=0
            if(res["code"] == 200):
                for item in items:
                    item = json.loads(item)
                    id = item["id"]
                    title = item["title"]
                    tripbody = {
                        "action":"get",
                        "articleId":id,
                        "sharer": {"clientAuth":"","token":""},
                        "reader": {"readerId":mainCK["readerId"],"platform":"wechat"},
                        "needPoiTag":"true",
                        "needCtagTypes":"[2,4]",
                        "head": head
                    }
                    try:
                        tripurl = "https://m.ctrip.com/restapi/soa2/14045/json/tripShoot?" + mainCK['GUID']
                        requests.post(url = tripurl, headers = headers, data=json.dumps(tripbody))
                        listurl = "https://m.ctrip.com/restapi/soa2/16189/json/moduleListSearch?_fxpcqlniredt=" + mainCK['GUID']
                        listbody = {
                            "lat":0,
                            "lon":0,
                            "locationDistrictId":0,
                            "pageCode":"task_wx_article",
                            "head":head
                        }
                        requests.post(url = listurl, headers = headers, data = json.dumps(listbody))
                        ruleurl = "https://m.ctrip.com/restapi/soa2/14045/json/ruleSortCommentList?" + mainCK['GUID']
                        rulebody={
                            "articleId":id,
                            "para":{"pageIndex":1,"pageSize":2,"sortType":0},
                            "isContentEncode":"false",
                            "displayType":2,
                            "showCommentCount":"true",
                            "sortDirection":0,
                            "excludeCommentIds":[],
                            "levels":[0],
                            "head": head
                        }
                        rule = requests.post(url = ruleurl, headers = headers, data=json.dumps(rulebody)).json()
                        if(len(rule["comments"]) == 0): continue
                        clientAuth = rule["comments"][0]["author"]["clientAuth"]
                        rtRdurl = "https://m.ctrip.com/restapi/soa2/14045/json/relatedRecommend?_fxpcqlniredt=" + mainCK['GUID']
                        rtRdbody = {
                            "articleId":id,
                            "head": head
                        }
                        shimurl = "https://m.ctrip.com/restapi/soa2/15416/json/getShareImage?_fxpcqlniredt="+ mainCK['GUID']
                        shimbody = {
                            "businessId":id,
                            "imageType":"tripShootShareImg",
                            "sourceType":0,
                            "head":head
                        }
                        requests.post(url = rtRdurl, headers = headers, data = json.dumps(rtRdbody))
                        requests.post(url = shimurl, headers = headers, data = json.dumps(shimbody))
                        rMkturl = "https://m.ctrip.com/restapi/soa2/20725/json/reportMktProductClick?" + mainCK['GUID']
                        rMktbody = {
                            "clientAuth":clientAuth,
                            "pageid":"10650013077",
                            "page_type":"article_detail",
                            "materialid":id,
                            "product_infos":"[null]",
                            "click_type":"expo_product",
                            "note":"{sourceFrom:undefined}",
                            "head":head
                            }
                        Mkt = requests.post(url = rMkturl, headers = headers, data=json.dumps(rMktbody)).json()
                        if(Mkt["result"]["result"] == True):
                            taskurl = "https://m.ctrip.com/restapi/soa2/22598/taskBrowseCheck?" + mainCK['GUID']
                            taskbody= {
                                "_taskDetailId":"pages/you/lvpai/detail/detail?_mktTaskActivityId=317sqhb&wxpopup=201&inpopup=true&articleId={0}".format(id),
                                "_mktTaskActivityId":"317sqhb",
                                "head": head
                            }
                            check = requests.post(url = taskurl, headers = headers, data=json.dumps(taskbody)).json()
                            if (check["code"]==200):
                                taskCount = check["taskBrowseCheckData"]["_mktTaskCountTimes"]
                                if(n == taskCount): break
                                time.sleep(2)
                                riskurl = "https://m.ctrip.com/restapi/soa2/20725/json/getRiskInfo?" + mainCK['GUID']
                                riskbody={"head":head}
                                risk = requests.post(url = riskurl, headers = headers, data=json.dumps(riskbody)).json()
                                if(risk["riskResult"]["riskMessage"] == "PASS"):
                                    time.sleep(13)
                                    taskurl = "https://m.ctrip.com/restapi/soa2/22598/taskBrowseDone? " + mainCK['GUID']
                                    done = requests.post(url = taskurl, headers = headers, data=json.dumps(taskbody)).json()
                                    if(done["code"] == 200): 
                                        cashmsg = cashmsg + "完成浏览 {0} 任务\n".format(title)
                                        print("完成浏览 {0} 任务\n".format(title))
                                    else:
                                        cashmsg = done['message']
                                        break
                                else:
                                    print("请检查riskinfo信息！")
                        else:
                            print("请检查Mkt请求body！")   
                        n = n + 1       
                    except Exception as e:
                        print("天天领现金任务中失败：" + str(e))
                  
            #查询现金
            queryurl = "https://m.ctrip.com/restapi/soa2/16225/json/getContentFissionCashIndex?_fxpcqlniredt=" + mainCK['GUID']
            body = {
                "env":1,
                "serverFrom":"miniProgram",
                "taskId":"",
                "head": head
            }
            try:
                res = requests.post(url = queryurl, headers = headers, data=json.dumps(body)).json()
                cashBalance = res["cashBalance"]
                msg = cashmsg + "\n天天领现金任务已完成，共有现金：" + str(cashBalance)
            except Exception as e:
                msg = "天天领现金任务 查询现金失败：" + str(e)
        except Exception as err:
           msg = "天天领现金任务失败：" + str(err)
        return msg

    def main(self):
        msg_all = ""
        for check_item in self.check_items:
            Cookie = str(check_item.get("cookie"))
            readerId = str(check_item.get("readerId"))
            mainCK = self.getMainCookie(Cookie,readerId)
            headers = self.getheaders(Cookie,mainCK)
            sign_msg = self.Sign(headers,mainCK)
            # taskList, list_msg =self.getTaskList(headers, mainCK)
            # list_msg = "任务列表暂时不做，搞不定"
            cash_msg = self.doCash(mainCK)
            msg = f"{sign_msg}\n\n{cash_msg}"
            msg_all += msg + "\n\n"
        return msg_all

if __name__ == "__main__":
    data= get_data()
    _check_items_list = data.get("Ctrip", [])
    res = Ctrip(check_items=_check_items_list).main()
    send("Ctrip 携程旅行",res)









