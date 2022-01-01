#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Author   : Chiupam
# @Data     : 2021-06-20
# @Version  : v 1.0
# @Updata   :
# @Future   :

from .. import chat_id, jdbot, logger, _JdbotDir
from ..bot.utils import split_list, row, press_event, mybot, backfile, V4, QL
from telethon import events, Button
from asyncio import exceptions
import requests


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/install$'))
async def myinstall(event):
    try:
        SENDER = event.sender_id
        furl_startswith = "https://raw.githubusercontent.com/chiupam/JD_Diy/master/jbot/"
        btns = [
            Button.inline("升级机器人", data="upbot.py"),
            Button.inline("检查账号过期", data="checkcookie.py"),
            Button.inline("下载文件", data="download.py"),
            Button.inline("添加仓库", data="addrepo.py"),
            Button.inline("添加环境变量", data="addexport.py"),
            Button.inline("修改环境变量", data="editexport.py"),
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
        if '下载代理' in mybot.keys() and str(mybot['下载代理']).lower() != 'false':
            furl = f'{str(mybot["下载代理"])}/{furl}'
        try:
            resp = requests.get(furl).text
            info = f"下载{fname}成功，正在自动重启"
            botresp = True
        except Exception as e:
            info = f"下载{fname}失败，请自行拉取文件进/jbot/diy目录，或尝试使用 /set 指令更换下载代理"
            botresp = False
        await jdbot.edit_message(msg, info)
        if botresp:
            path = f"{_JdbotDir}/diy/{fname}"
            backfile(path)
            with open(path, 'w+', encoding='utf-8') as f:
                f.write(resp)
    except exceptions.TimeoutError:
        msg = await jdbot.edit_message(msg, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))

