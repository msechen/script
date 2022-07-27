# -*- coding: utf-8 -*-
"""
cron: 48 7 * * *
new Env('微博');
"""

from urllib import parse

import requests
import urllib3

from notify_mtr import send
from utils import get_data

urllib3.disable_warnings()


class WeiBo:
    def __init__(self, check_items):
        self.check_items = check_items

    @staticmethod
    def sign(token):
        headers = {"User-Agent": "Weibo/52588 (iPhone; iOS 14.5; Scale/3.00)"}
        res = requests.get(
            url=f"https://api.weibo.cn/2/checkin/add?c=iphone&{token}",
            headers=headers,
        ).json()
        if res.get("status") == 10000:
            msg = f'连续签到: {res.get("data").get("continuous")}天\n本次收益: {res.get("data").get("desc")}'
        elif res.get("errno") == 30000:
            msg = "每日签到: 今日已签到"
        elif res.get("status") == 90005:
            msg = f'每日签到: {res.get("msg")}'
        else:
            msg = "每日签到: 签到失败"
        return msg

    @staticmethod
    def card(cookie):
        headers = { "Host": "luck.sc.weibo.com",
                    "Pragma": "no-cache",
                    "Accept": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    "If-Modified-Since": "0",
                    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Origin": "https://luck.sc.weibo.com",
                    "User-Agent": f"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
                    "Referer": f"https://luck.sc.weibo.com/?ua=Mozilla%2F5.0+%28Windows+NT+10.0%3B+Win64%3B+x64%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Chrome%2F103.0.0.0+Safari%2F537.36&source=ugsx&kxly=home&wbtpuuid=123ebbdd5d28204adbcdbef11e91caaa2706",
                    "Content-Length": "0",
                    "Connection": "keep-alive",
                    "Cookie": f"{cookie}"
}
        res = requests.post(
            url=f"https://luck.sc.weibo.com/aj/jifen/info",
            headers=headers,
        ).json()
        if res["code"] == "100000":
            # nickname = res.get("data").get("user").get("nickname")
            msg = (
                # f'用户昵称: {nickname}\n每日打卡: {res.get("data").get("signin").get("title").split("<")[0]}天\n'
                f'积分总计: {res["data"]["score"]} 积分'
            )
        else:
            msg = "每日打卡: 活动过期或失效"
        return msg

    @staticmethod
    def pay(token):
        headers = {
            "Accept-Encoding": "gzip, deflate",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "pay.sc.weibo.com",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Weibo (iPhone10,1__weibo__11.2.1__iphone__os14.5)",
        }
        data = token + "&lang=zh_CN&wm=3333_2001&v_p=90&mode=h5d"
        try:
            response = requests.post(
                url="https://pay.sc.weibo.com/api/client/sdk/app/balance?",
                headers=headers,
                data=data,
            )
            res = response.json()
            if res["code"] == "100000":
                msg = f'微博钱包余额:  {res["data"]["balance"]} 元'
            else:
                msg = "微博钱包: Cookie失效"
            return msg
        except Exception as err:
            msg = "微博钱包，Cookie失效：" + str(err)
            return msg

    def main(self):
        msg_all = ""
        for check_item in self.check_items:
            url = check_item.get("url")
            cookie = check_item.get("cookie")
            query_dict = dict(parse.parse_qsl(parse.urlsplit(url).query))
            token = "&".join(
                [
                    f"{key}={value}"
                    for key, value in query_dict.items()
                    if key in ["from", "uid", "s", "gsid"]
                ]
            )
            sign_msg = self.sign(token=token)
            card_msg = self.card(cookie=cookie)
            pay_msg = self.pay(token=token)
            msg = f"{sign_msg}\n{card_msg}\n{pay_msg}"
            # msg = f"{sign_msg}\n{pay_msg}"
            msg_all += msg + "\n\n"
        return msg_all


if __name__ == "__main__":
    data = get_data()
    _check_items_list = data.get("WEIBO", [])
    res = WeiBo(check_items=_check_items_list).main()
    send("微博", res)