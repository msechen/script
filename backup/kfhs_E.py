# -*- coding: utf-8 -*-
"""
new Env('卡夫亨氏');
"""

import requests
import json

from notify_mtr import send
from utils import get_data

requests.packages.urllib3.disable_warnings()

class KraftHeinz:
    def __init__(self,check_items):
        self.check_items = check_items

    @staticmethod
    def sign(token):
        msg =""
        cookie = "_ga=GA1.3.1301390980.1658973902; _gid=GA1.3.1871859338.1659543902; _gat=1"
        headers = {
            "Host": "fscrm.kraftheinz.net.cn",
            "Accept": "*/*",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            "token": f"{token}",
            "Content-Type": "application/x-www-form-urlencoded",
            "Origin": "https://fscrm.kraftheinz.net.cn",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.26(0x18001a2b) NetType/WIFI Language/zh_CN",
            "Connection": "keep-alive",
            "Referer": "https://fscrm.kraftheinz.net.cn/",
            # "Content-Length": 84
            "Cookie": cookie
            }
        signUrl="https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/getUserInfo"
        try:
            sign = requests.get(url=signUrl, headers=headers).json()
            if(sign["error_code"]==0):
                nickname = sign["data"]["nickname"]
                memberId = sign["data"]["member_id"]
                balance = sign['data']['serialSign'][0]['memberBalance']
                msg = msg + str(nickname) + "当前拥有 {0} 个积分\n".format(balance)
                traceUrl = "https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/traceEvent"
                traceBody= "type=page_view&trace_value=%23%2F&trace_detail=%E4%B8%AA%E4%BA%BA%E4%B8%AD%E5%BF%83%E9%A6%96%E9%A1%B5"
                trace = requests.post(url=traceUrl, headers=headers, data=traceBody).json()
                if(trace["error_code"]==0):
                    msg = msg + "{0}\n".format(trace['msg'])
                    checkUrl = "https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/checkScoreValidation"
                    checkBody= "memberId="+str(memberId)
                    check = requests.post(url=checkUrl, headers=headers, data=checkBody).json()
                    if(check["error_code"] == "-3"):
                        msg = msg + "{0}\n".format(check['msg'])
                        exchangeUrl = "https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/exchangeIntegralNew"
                        exchangeBody= f"value=%E4%BA%AC%E4%B8%9CE%E5%8D%A12%E5%85%83&phone=&type=%E8%A7%86%E9%A2%91%E5%8D%A1"
                        res = requests.post(url=exchangeUrl, headers=headers, data=exchangeBody).json()
                        if res["error_code"]=="30005":
                            msg = msg + "{0}\n".format(res["msg"])
                        else:
                            msg = "请手动查看是否领取到！"
            else:
                msg = "请检查登录参数！！！"
        except Exception as err:
            msg = str(err)
        return msg

    def main(self):
        msg_all = ""
        for check_item in self.check_items:
            token = str(check_item.get("Token"))
            sign_msg = self.sign(token)
            msg = f"{sign_msg}\n"
            msg_all += msg + "\n\n"
        return msg_all

if __name__ == "__main__":
    data= get_data()
    _check_items_list = data.get("KraftHeinz", [])
    res = KraftHeinz(check_items=_check_items_list).main()
    send("KraftHeinz",res)