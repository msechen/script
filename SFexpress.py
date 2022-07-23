# -*- coding: utf-8 -*-
"""
new Env('顺丰速递');
"""

import requests
import time

from notify_mtr import send
from utils import get_data

requests.packages.urllib3.disable_warnings()

class SFexpress:
    def __init__(self,check_items):
        self.check_items = check_items
    
    @staticmethod
    def getheaders(sessionId):
        headers = {
                "user-agent": f"Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 mediaCode=SFEXPRESSAPP-iOS-ML",
                "cookie":f"{sessionId}",
                "Accept-Encoding": "gzip, deflate, br",
                "accept-language": "zh-CN,zh-Hans;q=0.9",
                "accept": "application/json, text/plain, */*",
                "Host": "mcs-mimp-web.sf-express.com",
                "content-type": "application/json",
            }
        return headers
    @staticmethod
    def sign(headers):
        url = 'https://mcs-mimp-web.sf-express.com/mcs-mimp/integralTaskSignPlusService/automaticSignFetchPackage'
        data = '{"comeFrom":"vioin","channelFrom":"SFAPP"}'
        try:
            res = requests.post(url=url,headers=headers,data=data,verify=False).json()
            hasFinishSign = res['obj']['hasFinishSign']
            if hasFinishSign == 1:
                msg = "今日已签到，无需重复签到"
            else:
                countDay = res['obj']['countDay']
                commodityName = res['obj']['integralTaskSignPackageVOList'][0]['commodityName']
                msg= ("今日签到成功，连续签到【{0}】天，获得【{1}】".format(countDay,commodityName))
        except Exception:
            msg = "签到失败，可能是Cookie过期"
        return msg

    @staticmethod
    def weal(headers):
        url = 'https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberActLengthy~redPacketActivityService~superWelfare~receiveRedPacket'
        data = '{"channel":"SignIn"}'
        try:
            res = requests.post(url=url, headers=headers, data=data, verify=False).json()
            success = res['success']
            if success == True:
                giftName = res['obj']['giftList'][0]['giftName']
                msg = "超值福利签到成功，获得{0}奖励".format(giftName)
        except Exception as err:
            msg = "超值福利签到失败 " + str(err)
        return msg
    
    @staticmethod
    def task(headers):
        url = 'https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~queryPointTaskAndSignFromES'
        data = '{"channelType":"1"}'
        try:
            res = requests.post (url=url, headers=headers,data=data,verify=False).json()
            list = res['obj']['taskTitleLevels']
            msg_task=""
            for i in range(len(list)):
                taskId = list[i]['taskId']
                strategyId = list[i]['strategyId']
                taskCode = list[i]['taskCode']
                title = list[i]['description']
                if "邀请" in title:
                    pass
                else:
                    # getask(sessionId,taskCode)
                    # msg = dotask(sessionId,title,strategyId,taskId,taskCode)
                    ### 获取任务列表
                    url_getask = f'https://mcs-mimp-web.sf-express.com/mcs-mimp/task/finishTask?id={taskCode}'
                    res = requests.get (url=url_getask, headers=headers, verify=False).json()
                    success = res['success']
                    if success == True:
                        time.sleep(20)

                    ### 做任务并领取
                    url_dotask = f'https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~fetchIntegral'
                    data_dotask = '{"strategyId":' + f"{strategyId}" + ',"taskId":"' + f"{taskId}" + '","taskCode":"' + f"{taskCode}" + '"}'
                    res = requests.post (url=url_dotask, headers=headers, data=data_dotask, verify=False).json()
                    success = res['success']
                    msg = ""
                    if success == True:
                        point = res['obj']['point']
                        msg = "完成 {0} 任务成功，领取{1}积分".format(title,point)
                    else:
                        errorMessage = res['errorMessage']
                        if "已领取" in errorMessage:
                            msg = "{0} 任务已完成".format(title) 
                        if '未完成' in errorMessage:
                            msg = "{0} 任务未完成".format(title)              
                    msg_task = msg_task + msg +"\n"
            return msg_task
        except Exception as err:
            msg_task = "获取任务列表失败:"+ str(err)
            return msg_task

    def main(self):
        msg_all = ""
        for check_item in self.check_items:
            sessionId="sessionId=" + str(check_item.get("sessionId"))
            headers = self.getheaders(sessionId)
            sign_msg = self.sign(headers)
            weal_msg = self.weal(headers)
            task_msg = self.task(headers)
            msg = f"{sign_msg}\n{weal_msg}\n{task_msg}"
            msg_all += msg + "\n\n"
        return msg_all


if __name__ == "__main__":
    data= get_data()
    _check_items_list = data.get("SFexpress", [])
    res = SFexpress(check_items=_check_items_list).main()
    send("顺丰速递",res)