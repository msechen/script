# -*- coding: utf-8 -*-
import sys
import ntchat

from api.douyin import get_video_info, get_video_id, get_video_url
from api.hefeng import get_city_weather
from api.life import get_province_oil

wechat = ntchat.WeChat()

wechat.open(smart=True)


@wechat.msg_register(ntchat.MT_RECV_TEXT_MSG)
def on_recv_text_msg(wechat: ntchat.WeChat, message):
    data = message["data"]
    msg = data["msg"]
    from_wxid = data["from_wxid"]
    room_wxid = data["room_wxid"]
    self_wxid = wechat.get_login_info()["wxid"]

    if from_wxid == self_wxid:
        return

    if msg[0:2] == "功能":
        res ="""注意：目前所有带+的查询，中间必须是一个空格
        
--------------生活-------------
1、实时天气+地点(实时天气 北京)
2、天气+地点(天气 北京)
3、油价+省份名称(油价 江苏)

--------------娱乐-------------
1、解析抖音视频(抖音-分享-复制链接-在微信群粘贴，链接类似于https://v.douyin.com/YDcCAGg/
"""
        if room_wxid != "":
            wechat.send_text(to_wxid=room_wxid, content=res)
        else:
            wechat.send_text(to_wxid=from_wxid, content=res)

    if msg[0:5] == "实时天气 " or msg == "实时天气":
                res = get_city_weather(city_name=msg[5:] if msg[5:] else "北京", now=True)
                if res:
                    info = res['now']
                    # res = "当前温度   体感温度   天气   风向   风力   相对湿度(%)\n{:>7s}   {:>13s}   {:>7}   {:>7}   {:>3}   {:>13}".format(
                    #     info['temp'], info['feelsLike'], info['text'], info['windDir'], info['windScale'], info['humidity'])
                    res = "观测时间: {}\n当前温度: {}\n体感温度: {}\n天气: {}\n风向: {}\n风力: {}\n相对湿度(%): {}\n".format(
                        info['obsTime'][0: 10] + ' ' + info['obsTime'][11: 16],
                        info['temp'],
                        info['feelsLike'],
                        info['text'],
                        info['windDir'],
                        info['windScale'],
                        info['humidity'])
                    if room_wxid != "":
                        wechat.send_text(to_wxid=room_wxid, content=res)
                    else:
                        wechat.send_text(to_wxid=from_wxid, content=res)
                else:
                    wechat.send_text(to_wxid=from_wxid, content="查询失败，请输入正确的城市名")

    if msg[0:3] == "天气 " or msg == "天气":
        res = get_city_weather(city_name=msg[3:] if msg[3:] else "北京")
        if res:
            info = ""
            for i in res['daily']:
                text = "日期: {}\n最高温度: {}\n最低温度: {}\n天气: {}\n相对湿度: {}\n\n".format(i['fxDate'], i['tempMax'],
                                                                                 i['tempMin'],
                                                                                 i['textDay'], i['humidity'])
                info += text
            if room_wxid != "":
                wechat.send_text(to_wxid=room_wxid, content=info)
            else:
                wechat.send_text(to_wxid=from_wxid, content=info)
        else:
            wechat.send_text(to_wxid=from_wxid, content="查询失败，请输入正确的城市名")

    if msg[0:3] == "油价 " or msg == "油价":
        res = get_province_oil(province=msg[3:] if msg[3:] else "北京")
        print(res)
        if room_wxid != "":
            wechat.send_text(to_wxid=room_wxid, content=res)
        else:
            wechat.send_text(to_wxid=from_wxid, content=res)

    if 'https://v.douyin.com' in msg:
        douyin_result = get_video_info(get_video_id(get_video_url(msg)))
        if room_wxid != "":
            wechat.send_text(to_wxid=room_wxid, content=douyin_result[2])
        else:
            wechat.send_text(to_wxid=from_wxid, content=douyin_result[2])


try:
    while True:
        pass
except KeyboardInterrupt:
    ntchat.exit_()
    sys.exit()
