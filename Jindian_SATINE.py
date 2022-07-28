# -*- coding: utf-8 -*-
"""
new Env('金典SATINE');
"""

import requests

from notify_mtr import send
from utils import get_data

requests.packages.urllib3.disable_warnings()

class SATINE:
    def __init__(self,check_items):
        self.check_items = check_items
    
    @staticmethod
    def getheaders(accesstoken):
        headers = {
            'Host': 'jdshop.yili.com',
            'Connection': 'keep-alive',
            'accesstoken': f'{accesstoken}',
            'content-type': 'application/x-www-form-urlencoded',
            'scene': '1053',
            'Accept-Encoding': 'gzip,compress,br,deflate',
            'User-Agent': f'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.26(0x18001a25) NetType/WIFI Language/zh_CN',
            'Referer': f'https://servicewechat.com/wxf32616183fb4511e/381/page-frame.html'
            }
        return headers

    @staticmethod
    def getUsrInfoAndSign(headers):
        url = "https://jdshop.yili.com/api/user/daily/sign?exParams=true"
        try:
            res = requests.get(url=url, headers=headers).json()
            if res["code"] == 200:
                url = "https://jdshop.yili.com/api/user/score"
                res = requests.get(url=url, headers=headers).json()
                if res["code"] == 200:
                    score = res["data"]
                    msg = "签到成功，当前有机值共有 " + str(score)
            elif res["code"] == -99999:
                msg = "未登陆或登陆超时"
            else:
                msg = "签到失败，请检查 accesstoken 变量"        
        except Exception as err:
            msg = "签到失败:" + str(err)
        return msg

    def main(self):
        msg_all = ""
        for check_item in self.check_items:
            accesstoken = str(check_item.get("accessToken"))
            headers = self.getheaders(accesstoken)
            sign_msg = self.getUsrInfoAndSign(headers)
            msg = f"{sign_msg}\n"
            msg_all += msg + "\n\n"
        return msg_all

if __name__ == "__main__":
    data= get_data()
    _check_items_list = data.get("SATINE", [])
    res = SATINE(check_items=_check_items_list).main()
    send("金典SATINE",res)