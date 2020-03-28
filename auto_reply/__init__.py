from common import web_spider
from .reminder import *


def reply(msg):
    if '天气' == msg.text:
        return web_spider.get_weather_today()
    if '篮球' == msg.text:
        return "https://sports.qq.com/kbsweb/kbsshare/gamelist.htm#nav-nba"
    if '热榜' == msg.text:
        return "https://tophub.today/"
    if '提醒' in msg.text:
        return invoke_remind()
    if 'test' == msg.text:
        content = '/Users/kolly/workspace-demo/python-work/wx-robot/image/donate.png'
        msg.reply_image(content)
        return
    if '我要定制' == msg.text:
        return "请联系作者添加你想要的定制功能吧"
    if 'help' == msg.text.lower():
        return "输入「天气」即可查询天气\n" \
               "输入「提醒」即可查询未来的提醒\n" \
               "输入「无聊」即可打发时间\n" \
               "输入「热榜」即可查询今日热榜消息\n" \
               "输入「股票」即可查询你关注的股票涨跌\n" \
               "输入「篮球」即可查询 NBA 今日赛事\n" \
               "输入「笑话」即可获得一个段子\n" \
               "输入「我要定制」即可添加小糖定制功能\n" \
               "输入「好文」即可开启阅读\n" \
               "输入「打卡」即可完成打卡\n" \
               "输入「我的打卡」即可查看打卡列表\n" \
               "输入「作者」即可联系作者\n" \
               "输入「赞赏」即可为小糖充电唷"
    return "小糖无法识别这个指定喔😯"
