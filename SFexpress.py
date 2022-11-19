# -*- coding: utf-8 -*-
"""
new Env('顺丰速递');
顺丰app进行了大改动，请求头多了很多参数，为保持与自己环境一致，对limoruirui的代码进行了修改
修改自作者limoruirui(https://github.com/limoruirui)的代码
"""

import requests
import time,json,sys
from hashlib import md5 
from notify_mtr import send
from utils import get_data

requests.packages.urllib3.disable_warnings()

class SFexpress:
    def __init__(self,check_items):
        self.check_items = check_items
        # self.sign = check_items[0]['sign']
        self.session = requests.Session()
    
    def refreshCookie(self,sign):
        loginUrl = f"https://mcs-mimp-web.sf-express.com/mcs-mimp/share/app/shareRedirect?sign={sign}&source=SFAPP&bizCode=619"
        loginHeaders = {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,zh-TW;q=0.7",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "none",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": f"Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 mediaCode=SFEXPRESSAPP-iOS-ML"
        }
        res = self.session.get(url = loginUrl, headers = loginHeaders)
        referURL=res.url
        return referURL,loginHeaders

    def getTaskHeaders(self,referURL):
        headers={
            "Host": "mcs-mimp-web.sf-express.com",
            "Accept": "application/json, text/plain, */*",
            "sysCode": "MCS-MIMP-CORE ",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/json;charset=utf-8",
            "Origin": "https://mcs-mimp-web.sf-express.com",
            "User-Agent": f"Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 mediaCode=SFEXPRESSAPP-iOS-ML",
            "Referer": referURL,
            "Connection": "keep-alive ",
            "Content-Length": "",
            "timestamp": "",
            "signature": ""
        }
        return headers

    @staticmethod
    def get_sign_md5(timestr):
        md5str="token=wwesldfs29aniversaryvdld29&timestamp={0}&sysCode=MCS-MIMP-CORE".format(timestr)
        if isinstance(md5str, str):
            md5str = md5str.encode("utf8")
        md5str = md5(md5str)
        return md5str.hexdigest()

    def checkin(self,commHeaders):
        url = "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskSignPlusService~automaticSignFetchPackage"
        body = {"comeFrom":"vioin","channelFrom":"SFAPP"}
        timestr=int(round(time.time()*1000))
        commHeaders["timestamp"]=str(timestr)
        commHeaders["signature"]=SFexpress.get_sign_md5(timestr)
        commHeaders["Content-Length"]=str(len(json.dumps(body).replace(" ", "")))
        try:
            res = self.session.post(url=url,headers=commHeaders,json=body).json()
            hasFinishSign = res['obj']['hasFinishSign']
            if hasFinishSign == 1:
                msg = "今日已签到，无需重复签到！\n"
                # scoremsg = self.queryScore(commHeaders)
                # msg = msg + scoremsg
                # print(msg)
                # sys.exit()
            else:
                countDay = res['obj']['countDay']
                msg= ("今日签到成功，连续签到【{0}】天！".format(countDay))
        except Exception:
            msg = "签到失败，可能是Sign已经失效！"
        return msg
    
    def doTask(self,commHeaders, referHeaders):
        url = 'https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~queryPointTaskAndSignFromES'
        timestr=int(round(time.time()*1000))
        commHeaders["timestamp"]=str(timestr)
        commHeaders["signature"]=SFexpress.get_sign_md5(timestr)
        commHeaders["Content-Length"]= "22"
        msgList=[]
        for i in range(1, 3):
            body = {"channelType": f"{i}"}
            res = self.session.post(url, headers=commHeaders, json=body).json()
            for task_msg in res["obj"]["taskTitleLevels"]:
                task_title = task_msg["title"]
                task_status = task_msg["status"]
                task_strategyId = task_msg["strategyId"]
                task_code = task_msg["taskCode"]
                task_id = task_msg["taskId"]
                print(task_title)
                msg = task_title + "："
                if task_status == 2:
                    self.finishTask(referHeaders, task_code)
                    mtask = self.exchangeTask(commHeaders, task_strategyId, task_id, task_code)
                    msg = msg + mtask
                elif task_status == 1:
                    mtask = self.exchangeTask(commHeaders,task_strategyId, task_id, task_code)
                    msg = msg + mtask
                elif task_status == 3:
                    msg = msg +"任务已完成\n"
                    print("当前任务已完成")
                msgList.append(msg)
        msgList=list(set(msgList))
        msg = "".join(msgList)
        return msg

    def finishTask(self,referHeaders,task_code):
        url = f"https://mcs-mimp-web.sf-express.com/mcs-mimp/task/finishTask?id={task_code}"
        res = self.session.get(url, headers=referHeaders).json()
        print(res)

    def exchangeTask(self,commHeaders, strategyId, task_id, task_code):
        url = "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~fetchIntegral"
        body = {"strategyId": strategyId, "taskId": task_id, "taskCode": task_code}
        timestr=int(round(time.time()*1000))
        commHeaders["timestamp"]=str(timestr)
        commHeaders["signature"]=SFexpress.get_sign_md5(timestr)
        commHeaders["Content-Length"]="22"
        res = self.session.post(url, headers=commHeaders, json=body).json()
        print(res)
        msg=''
        if(res["success"]==True):
            msg = "完成时间：{0}\n".format(res['date'])
        else:
            msg = "任务未完成\n"
        return msg
        
    def queryScore(self,commHeaders):
        url = "https://mcs-mimp-web.sf-express.com/mcs-mimp/member/points/balance"
        body = {}
        timestr=int(round(time.time()*1000))
        commHeaders["timestamp"]=str(timestr)
        commHeaders["signature"]=SFexpress.get_sign_md5(timestr)
        commHeaders["Content-Length"]=str(len(json.dumps(body).replace(" ", "")))
        data = self.session.post(url, headers=commHeaders, json=body).json()
        total_score = data["obj"]["availablePoints"]
        msg = f"您当前共有积分：{total_score}"
        return msg

    def main(self):
        msg_all = ""
        for check_item in self.check_items:
            sign = str(check_item.get("sign"))
            referUrl, referHeaders = self.refreshCookie(sign)
            commHeaders=self.getTaskHeaders(referUrl)
            sign_msg = self.checkin(commHeaders)
            if "失败" in sign_msg:
                msg_all = f"{sign_msg}\n"
            else:
                task_msg = self.doTask(commHeaders,referHeaders)
                scoremsg = self.queryScore(commHeaders)
                msg = f"{sign_msg}\n{task_msg}\n\n{scoremsg}"
                msg_all += msg + "\n\n"
        return msg_all


if __name__ == "__main__":
    data= get_data()
    _check_items_list = data.get("SFexpress", [])
    res = SFexpress(check_items=_check_items_list).main()
    send("顺丰速递",res)