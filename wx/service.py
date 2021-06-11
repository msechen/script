# -*- coding: utf-8 -*-

import re

from typing import Match

from jd.service import generate_popularize_url
from surl.service import generate
from wx.entity import PassiveMsgReq, PassiveMsgRsp


JD_ITEM_PATTERN = r'^https://item(.m)?.jd.com/(product/)?([0-9]+).html'


def handle_text_msg(req: PassiveMsgReq) -> str:
    """处理文本消息"""

    msg_content = req.Content

    # 正则表达式匹配是否京东商品链接
    match = re.match(JD_ITEM_PATTERN, msg_content)
    if match:
        return jd_popularize(req, match)

    return unknown_command(req)


def handle_event_msg(req: PassiveMsgReq) -> str:
    if req.Event == 'subscribe':
        return PassiveMsgRsp.to_xml(req, '欢迎关注[玫瑰]\n发送商品链接即可获得京东返利推广链接')
    return 'success'


def jd_popularize(req: PassiveMsgReq, match: Match) -> str:
    """京东推广转链"""

    url = match.group(0)
    skuid = int(match.group(3))

    popularize_url = generate_popularize_url(url, skuid, req.FromUserName)
    if popularize_url:
        # 公众号不支持转链，这里用网站来转链，故此需要从网站跳转到京东，所以采用短链来跳转
        popularize_url = generate(popularize_url).short_url()

    return PassiveMsgRsp.to_xml(req, popularize_url or url)


def unknown_command(req: PassiveMsgReq) -> str:
    return PassiveMsgRsp.to_xml(req, '无法识别的指令\n温馨提示：您的消息已存储在后台，将由人工进行处理')
