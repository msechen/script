#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Author   : Chiupam
# @Data     : 2021-06-20
# @Version  : v 1.0
# @Updata   :
# @Future   :


from .. import chat_id, jdbot, logger, _JdbotDir
from ..bot.utils import split_list, row, press_event, V4, QL
from telethon import events, Button
from asyncio import exceptions
import os


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/uninstall$'))
async def myuninstall(event):
    try:
        SENDER = event.sender_id
        mydiy = {
            "checkcookie.py": "检查账号过期",
            "upbot.py": "升级机器人",
            "download.py": "下载文件",
            "addrepo.py": "添加仓库",
            "addexport.py": "添加环境变量",
            "editexport.py": "修改环境变量",
            "user.py": "user.py"
        }
        btns = []
        dirs = os.listdir(f"{_JdbotDir}/diy")
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
        fpath = f"{_JdbotDir}/diy/{fname}"
        os.system(f'rm -rf {fpath}')
        if not os.path.isfile(fpath):
            await jdbot.edit_message(msg, "删除成功，正在自动重启")
        else:
            await jdbot.edit_message(msg, f"删除失败，请手动删除{fpath}文件")
    except exceptions.TimeoutError:
        msg = await jdbot.edit_message(msg, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))

