# -*- coding: utf-8 -*-

import json
import logging

import requests

logger = logging.getLogger('wx')


class WeChat(object):
    def __init__(self, corpid, secret, agentid):
        self.url = "https://qyapi.weixin.qq.com"
        self.corpid = corpid
        self.secret = secret
        self.agentid = agentid

    # 获取企业微信的 access_token
    def access_token(self):
        url_arg = '/cgi-bin/gettoken?corpid={id}&corpsecret={crt}'.format(
            id=self.corpid, crt=self.secret)
        url = self.url + url_arg
        response = requests.get(url=url)
        text = response.text
        self.token = json.loads(text)['access_token']

    # 构建消息格式
    def messages(self, msg):
        values = {
            "touser": '@all',
            "msgtype": 'text',
            "agentid": self.agentid,
            "text": {'content': msg},
            "safe": 0
        }
        # python 3
        self.msg = (bytes(json.dumps(values), 'utf-8'))
        # python 2
        # self.msg = json.dumps(values)

    # 发送信息
    def send_message(self, msg):
        self.access_token()
        self.messages(msg)

        send_url = '{url}/cgi-bin/message/send?access_token={token}'.format(
            url=self.url, token=self.token)
        response = requests.post(url=send_url, data=self.msg)
        errcode = json.loads(response.text)['errcode']

        if errcode == 0:
            logger.info('企业微信消息发送成功！')
        else:
            print('发送失败！')


# 下面是身份信息
wechat = WeChat('ww8c8a0901d4d06901', 'QB5hNIsKF51GBQ3TGFgew6xYEzbFDVrdjv9QSlhKVuU', '1000002')

if __name__ == "__main__":
    wechat.send_message('ooo')
