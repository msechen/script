#!/usr/bin/env python3
# -*- coding: utf-8 -*-


import os
import sys

from telethon import events

from .. import chat_id, jdbot, logger, TOKEN
from ..bot.utils import V4, QL

bot_id = int(TOKEN.split(':')[0])


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/help$'))
async def myhelp(event):
    try:
        msg_id = event.id
        if V4:
            msg = '''a-自定义快捷按钮
bean-获取收支
blockcookie-屏蔽账号
chart-统计收支变化
checkcookie-检测过期
clearboard-删除快捷输入按钮
cmd-执行cmd命令
dl-下载文件
edit-编辑文件
export-管理环境变量
help-获取帮助
getcookie-扫码获取cookie
getfile-获取jd目录下文件
install-扩展此程序功能
log-选择日志
list-列出已拓展功能
node-执行js脚本文件，绝对路径
restart-重启本程序
repo-仓库管理
set-BOT设置
setname-设置命令别名
setshort-设置自定义按钮
snode-选择脚本后台运行
start-开始使用本程序
uninstall-删除拓展功能
up-升级原机器人
upbot-更新拓展功能
ver-版本'''
        elif QL:
            msg = '''a-自定义快捷按钮
addenv-青龙新增环境变量
bean-获取收支
blockcookie-屏蔽账号
chart-统计收支变化
clearboard-删除快捷输入按钮
cmd-执行cmd命令
dl-下载文件
edit-编辑文件
env-青龙管理环境变量
export-V4管理环境变量
help-获取帮助
getcookie-扫码获取cookie
getfile-获取jd目录下文件
install-扩展此程序功能
log-选择日志
list-列出已拓展功能
node-执行js脚本文件，绝对路径
restart-重启本程序
repo-仓库管理
set-BOT设置
setname-设置命令别名
setshort-设置自定义按钮
snode-选择脚本后台运行
start-开始使用本程序
uninstall-删除拓展功能
up-升级原机器人
upbot-更新拓展功能
ver-版本'''
        await jdbot.edit_message(bot_id, msg_id + 1, msg)
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        function = "函数名：" + sys._getframe().f_code.co_name
        tip = '建议百度/谷歌进行查询'
        await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
        logger.error(f"错误--->{str(e)}")