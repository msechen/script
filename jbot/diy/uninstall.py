#!/usr/bin/env python3
# -*- coding: utf-8 -*-


import os
import sys
from asyncio import exceptions

from telethon import events, Button

from .. import chat_id, jdbot, logger, BOT_DIR, ch_name, BOT_SET, JD_DIR
from ..bot.utils import split_list, row, press_event, QL


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/uninstall$'))
async def myuninstall(event):
    try:
        SENDER = event.sender_id
        mydiy = {
            "checkcookie.py": "检查账号过期",
            "tempblockcookie.py": "屏蔽账号",
            "upbot.py": "升级机器人",
            "download.py": "下载文件",
            "addrepo.py": "添加仓库",
            "addexport.py": "添加环境变量",
            "editexport.py": "修改环境变量",
            "user.py": "user.py"
        }
        btns = []
        dirs = os.listdir(f"{BOT_DIR}/diy")
        for dir in dirs:
            if dir in mydiy:
                btns.append(Button.inline(mydiy[f'{dir}'], data=dir))
        btns.append(Button.inline("帮我取消对话", data='cancel'))
        async with jdbot.conversation(SENDER, timeout=60) as conv:
            msg = await conv.send_message("请问你需要删除哪个功能？", buttons=split_list(btns, row))
            convdata = await conv.wait_event(press_event(SENDER))
            fname = bytes.decode(convdata.data)
            if fname == 'cancel':
                await jdbot.edit_message(msg, '对话已取消，感谢你的使用')
                conv.cancel()
                return
            conv.cancel()
        fpath_1 = f"{BOT_DIR}/diy/{fname}"
        fpath_2 = f"{JD_DIR}/repo/diybot/jbot/{fname}"
        os.system(f'rm -f {fpath_1} && rm -f {fpath_2}')
        if not os.path.isfile(fpath_1):
            await jdbot.edit_message(msg, "删除成功，正在自动重启")
            if QL:
                cmdtext = "if [ -d '/jd' ]; then cd /jd/jbot; pm2 start ecosystem.config.js; cd /jd; pm2 restart jbot; else " \
                          "ps -ef | grep 'python3 -m jbot' | grep -v grep | awk '{print $1}' | xargs kill -9 2>/dev/null; " \
                          "nohup python3 -m jbot >/ql/log/bot/bot.log 2>&1 & fi "
                os.system(cmdtext)
        else:
            await jdbot.edit_message(msg, f"删除失败，请手动删除{fpath_1}文件和{fpath_2}文件")
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
    jdbot.add_event_handler(myuninstall, events.NewMessage(from_users=chat_id, pattern=BOT_SET['命令别名']['cron']))