#!/usr/bin/env python3
# -*- coding: utf-8 -*-


from asyncio import exceptions

import os
import requests
import sys
from telethon import events, Button

from .. import chat_id, jdbot, logger, BOT_DIR, ch_name
from ..bot.utils import split_list, row, press_event, BOT_SET, backup_file, QL


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/install$'))
async def myinstall(event):
    try:
        SENDER = event.sender_id
        furl_startswith = "https://raw.githubusercontent.com/chiupam/JD_Diy/master/jbot/diy/"
        btns = [
            Button.inline("升级机器人", data="upbot.py"),
            Button.inline("检查账号过期", data="checkcookie.py"),
            Button.inline("屏蔽账号", data="tempblockcookie.py"),
            Button.inline("下载文件", data="download.py"),
            Button.inline("添加仓库", data="addrepo.py"),
            Button.inline("添加环境变量", data="addexport.py"),
            Button.inline("修改环境变量", data="editexport.py"),
            Button.inline("添加wskey", data="wskey.py"),
            Button.inline("帮我取消对话", data='cancel')
        ]
        async with jdbot.conversation(SENDER, timeout=60) as conv:
            msg = await conv.send_message("请问你需要拓展什么功能？", buttons=split_list(btns, row))
            convdata = await conv.wait_event(press_event(SENDER))
            fname = bytes.decode(convdata.data)
            if fname == 'cancel':
                await jdbot.edit_message(msg, '对话已取消，感谢你的使用')
                conv.cancel()
                return
            conv.cancel()
        msg = await jdbot.edit_message(msg, "开始下载文件")
        furl = f"{furl_startswith}{fname}"
        if '下载代理' in BOT_SET.keys() and str(BOT_SET['下载代理']).lower() != 'false':
            furl = f'{str(BOT_SET["下载代理"])}/{furl}'
        try:
            resp = requests.get(furl).text
            info = f"下载{fname}成功，正在自动重启"
            botresp = True
        except Exception as e:
            info = f"下载{fname}失败，请自行拉取文件进/jbot/diy目录，或尝试使用 /set 指令更换下载代理"
            botresp = False
        await jdbot.edit_message(msg, info)
        if botresp:
            path = f"{BOT_DIR}/diy/{fname}"
            backup_file(path)
            with open(path, 'w+', encoding='utf-8') as f:
                f.write(resp)
            if QL:
                cmdtext = "if [ -d '/jd' ]; then cd /jd/jbot; pm2 start ecosystem.config.js; cd /jd; pm2 restart jbot; else " \
                          "ps -ef | grep 'python3 -m jbot' | grep -v grep | awk '{print $1}' | xargs kill -9 2>/dev/null; " \
                          "nohup python3 -m jbot >/ql/log/bot/bot.log 2>&1 & fi "
                os.system(cmdtext)
    except exceptions.TimeoutError:
        await jdbot.edit_message(msg, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        function = "函数名：" + sys._getframe().f_code.co_name
        tip = '建议百度/谷歌进行查询'
        await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
        logger.error(f"错误--->{str(e)}")


if ch_name:
    jdbot.add_event_handler(myinstall, events.NewMessage(from_users=chat_id, pattern=BOT_SET['命令别名']['cron']))