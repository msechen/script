# -*- coding: utf-8 -*-

import hashlib

from flask import Blueprint,  request

from wx.config import TOKEN
from wx.entity import PassiveMsgReq
from wx.service import handle_event_msg, handle_text_msg


wxa = Blueprint('wxa', __name__, url_prefix='/wxa')


@wxa.route('', methods=['POST', 'GET'])
def wxapi():

    args = request.args

    if not args:
        return '', 400

    if not sign_verify(args):
        return '', 401

    if request.method == 'GET':
        return args.get('echostr')

    xml = request.get_data()
    req = PassiveMsgReq.parse_xml(xml)

    # 文本消息
    if req.MsgType == 'text':
        return handle_text_msg(req)
    # 事件(关注，取消关注，......)
    elif req.MsgType == 'event':
        return handle_event_msg(req)

    return 'success'


def sign_verify(args: dict) -> bool:
    """签名验证"""

    signature = args.get('signature')
    timestamp = args.get('timestamp')
    nonce = args.get('nonce')

    if not (signature and timestamp and nonce):
        return False

    params = [timestamp, nonce, TOKEN]
    params.sort()
    src = ''.join(params)
    sha1 = hashlib.sha1()
    sha1.update(src.encode("utf-8"))
    return sha1.hexdigest() == signature
