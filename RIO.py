# -*- coding: utf-8 -*-
"""
new Env('特步');
"""

import requests
import json

from notify_mtr import send
from utils import get_data

requests.packages.urllib3.disable_warnings()

class RIO:
    def __init__(self,check_items):
        self.check_items = check_items
    
    @staticmethod
    def getheaders(Authorization):
        headers = {
            'Host': 'club.rioalc.com',
            'Connection': 'keep-alive',
            'Authorization': f'{Authorization}',
            'content-type': 'application/json',
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip,compress,br,deflate',
            'User-Agent': f'Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.25(0x1800192a) NetType/WIFI Language/zh_CN',
            'Referer': f'https://servicewechat.com/wx225b10f204323da5/41/page-frame.html'
            }
        return headers

    @staticmethod
    def getUsrInfoAndSign(headers):
        url = "https://club.rioalc.com/api/miniprogram/user-sign-info"
        try:
            res = requests.get(url=url, headers=headers).json()
            if res['data']['sign_click'] == False:
                url = 'https://club.rioalc.com/api/miniprogram/user-sign-click'
                headers['Content-Length'] = '0'
                try:
                    res = requests.post(url=url, headers=headers).json()
                    if res['code'] == 200:
                        msg = '签到成功'
                    else:
                        msg = '签到未完成，请检查变量'
                except Exception as err:
                    msg = str(err)
            else:
                msg = "今日已签到"
        except Exception as err:
            msg = str(err)
        return msg

    def main(self):
        msg_all = ""
        for check_item in self.check_items:
            Authorization = str(check_item.get("Authorization"))
            headers = self.getheaders(Authorization)
            sign_msg = self.getUsrInfoAndSign(headers)
            msg = f"{sign_msg}\n"
            msg_all += msg + "\n\n"
        return msg_all

if __name__ == "__main__":
    data= get_data()
    _check_items_list = data.get("RIO", [])
    res = RIO(check_items=_check_items_list).main()
    send("RIO鸡尾酒",res)