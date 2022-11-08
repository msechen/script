# -*- coding: utf-8 -*-
"""
new Env('特步');
"""

import requests
import json

from notify_mtr import send
from utils import get_data

requests.packages.urllib3.disable_warnings()

class tebu:
    def __init__(self,check_items):
        self.check_items = check_items

    @staticmethod
    def sign(vuid,st,ss,userid):
        headers = {
            'Host': 'wxa-tp.ezrpro.com',
            'ezr-cop-id': '143',
            'ezr-vuid': f"{vuid}",
            'ezr-source': 'weapp',
            'ezr-st': f"{st}",
            'ezr-ss': f"{ss}",
            'ezr-userid': f"{userid}",
            'ezr-sv': '1',
            'ezr-brand-id': '254',
            'content-type': 'application/json'
            }
        url = "https://wxa-tp.ezrpro.com/myvip/Vip/SignIn/GetSignInDtlInfo"
        msg = " "
        try:
            res = requests.get(url=url, headers=headers, verify=False).json()
            if res["Result"]["VipSignInDtl"]["IsSigInToday"]:
                msg = "今日已签到"
            elif not res["Result"]["VipSignInDtl"]["IsSigInToday"]:
                url = "https://wxa-tp.ezrpro.com/myvip/Vip/SignIn/SignIn"
                data = json.dumps({
                    "ActId": 792,
                    "ActRemindStatus": True
                })
                try:
                    result = requests.post(url=url, headers=headers, data=data, verify=False).json()
                    # print(result)
                    if result["Success"]:
                        msg = f"签到成功, 获得积分: {result['Result']['BonusValue']} 个!"
                    else:
                        msg = "签到信息失败 ,请检查 变量参数 是否正确!"
                except Exception as err:
                    msg = str(err)
            else:
                msg = "签到信息失败 ,请检查 变量参数 是否正确!"
        except Exception as err:
            msg = str(err)
        return msg

    def main(self):
        msg_all = ""
        for check_item in self.check_items:
            vuid = str(check_item.get("ezr-vuid"))
            st = str(check_item.get("ezr-st"))
            ss = str(check_item.get("ezr-ss"))
            userid = str(check_item.get("ezr-userid"))
            sign_msg = self.sign(vuid,st,ss,userid)
            msg = f"{sign_msg}\n"
            msg_all += msg + "\n\n"
        return msg_all

if __name__ == "__main__":
    data= get_data()
    _check_items_list = data.get("Tebu", [])
    res = tebu(check_items=_check_items_list).main()
    send("特步",res)