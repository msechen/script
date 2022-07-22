# -*- coding: utf-8 -*-
"""
文件修改自https://github.com/treasunew/SillyLib/blob/main/qlScripts/txxq.py
"""


"""
new Env('天选时刻 奖品详情');
"""
import requests
import json

from notify_mtr import send
from utils import get_data

class Bilibili_txsk:
    def __init__(self,check_items):
        self.check_items = check_items
    
    @staticmethod
    def getheaders(cookie):
        headers = {
                "user-agent": " ",
                "cookie":f"{cookie}",
                "Accept-Encoding": "gzip, deflate",
                "accept-language": "zh-cn",
                "accept": "*/*",
                "Host": " ",
                "Connection": "keep-alive",
            }
        return headers

    @staticmethod
    def getUserInfo(headers):
        headers["Host"] = "api.bilibili.com"
        headers["user-agent"]= f"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
        url = "https://api.bilibili.com/x/web-interface/nav"
        try:
            res = requests.get(url=url,headers=headers).json()
            if res['code'] == 0:
                msg = " 用户 "+ res['data']['uname'] + " 拥有 "+ str(res['data']['money']) + " 硬币!"
            else:
                msg= "获取失败，请检查Cookie"
        except Exception as err:
            msg = "获取失败，请检查Cookie" + str(err)
        return msg

    @staticmethod
    def NeedRewardInfo(headers):
        headers["Host"] = "api.live.bilibili.com"
        headers["user-agent"]= f"bili-universal/68100100 CFNetwork/1333.0.4 Darwin/21.5.0 os/ios model/iPhone XR mobi_app/iphone build/68100100 osVer/15.5 network/2 channel/AppStore"
        url = 'https://api.live.bilibili.com/xlive/lottery-interface/v1/Anchor/AwardRecord?page=1'
        try:
            res = requests.get(url=url, headers=headers).json()
            totalGift = res['data']['total_count']
            if totalGift != 0:
                msg = "共获得"+str(totalGift)+"个奖品"
            else:
                msg = "并未获得任何奖励"
        except Exception as err:
            msg = "获取失败，请检查Cookie"+ str(err)
        return msg
    
    @staticmethod
    def getRewardInfo(headers):
        headers["Host"] = "api.live.bilibili.com"
        headers["user-agent"]= f"bili-universal/68100100 CFNetwork/1333.0.4 Darwin/21.5.0 os/ios model/iPhone XR mobi_app/iphone build/68100100 osVer/15.5 network/2 channel/AppStore"
        url = 'https://api.live.bilibili.com/xlive/lottery-interface/v1/Anchor/AwardRecord?page={}'.format(1)   #只列一页
        try:
            res = requests.get(url=url,headers=headers).json()
            msg = ""
            for i in len(res['data']['list']):
                giftName  = res['data']['list'][i]['award_name']
                giftAnchor = res['data']['list'][i]['anchor_name']
                giftTime = res['data']['list'][i]['end_time']
                msg = msg + "主播{i}" + giftAnchor +"于" + giftTime + "发放奖品：" + giftName + "\n"
            return msg
        except Exception as err:
            msg = "获取失败，请检查Cookie"+ str(err)
            return msg

    def main(self):
        msg_all = ""
        for check_item in self.check_items:
            cookie = str(check_item.get("cookie"))
            headers = self.getheaders(cookie)
            UserInfo = self.getUserInfo(headers)
            NeedRnfo = self.NeedRewardInfo(headers)
            if any(chr.isdigit() for chr in NeedRnfo) == True:
                getRInfo = self.getRewardInfo(headers)
                msg = f"{UserInfo}\n{NeedRnfo}\n{getRInfo}"
            else:
                msg = f"{UserInfo}\n{NeedRnfo}"
            msg_all += msg + "\n\n"
        return msg_all


if __name__ == "__main__":
    data= get_data()
    _check_items_list = data.get("BILIBILI", [])
    res = Bilibili_txsk(check_items=_check_items_list).main()
    send("天选时刻 奖品详情",res)















