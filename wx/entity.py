# -*- coding: utf-8 -*-

import time
import xml.etree.ElementTree as ET


class PassiveMsgReq(object):
    """微信被动消息请求"""

    def __init__(self,
                 ToUserName: str, FromUserName: str,
                 CreateTime: str, MsgType: str, Content: str, Event: str, MsgId: str) -> None:
        self.ToUserName = ToUserName
        self.FromUserName = FromUserName
        self.CreateTime = CreateTime
        self.MsgType = MsgType
        self.Content = Content
        self.Event = Event
        self.MsgId = MsgId

    @classmethod
    def parse_xml(cls, xml) -> "PassiveMsgReq":
        tree = ET.fromstring(xml)

        Content = None
        Event = None
        MsgId = None

        MsgType = tree.findtext('MsgType').strip()
        if MsgType == 'text':
            Content = tree.findtext('Content').strip()
            MsgId = tree.findtext('MsgId').strip()
        elif MsgType == 'event':
            Event = tree.findtext('Event').strip()

        return cls(
            tree.findtext('ToUserName').strip(),
            tree.findtext('FromUserName').strip(),
            tree.findtext('CreateTime').strip(),
            MsgType, Content, Event, MsgId
        )


class PassiveMsgRsp(object):
    """微信被动消息响应"""

    @staticmethod
    def to_xml(req: PassiveMsgReq, content: str) -> str:
        """构造被动消息响应 xml 格式"""

        xml = ET.Element('xml')

        ET.SubElement(xml, 'ToUserName').text = req.FromUserName
        ET.SubElement(xml, 'FromUserName').text = req.ToUserName
        ET.SubElement(xml, 'CreateTime').text = str(int(time.time()))
        ET.SubElement(xml, 'MsgType').text = 'text'
        ET.SubElement(xml, 'Content').text = content

        return ET.tostring(xml, encoding='utf-8')
