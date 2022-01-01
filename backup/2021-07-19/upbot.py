#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Author   : Chiupam
# @Data     : 2021-06-13
# @Version  : v 1.0
# @Updata   :
# @Future   :


from .. import chat_id, jdbot, logger, _JdbotDir
from ..bot.utils import press_event, V4, QL, split_list, row, backfile, mybot, cmd
from ..diy.utils import upuser
from telethon import events, Button
from asyncio import exceptions
import requests, re, os, asyncio


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/upbot$'))
async def myupbot(event):
    try:
        SENDER = event.sender_id
        furl_startswith = "https://raw.githubusercontent.com/chiupam/JD_Diy/master/jbot/"
        mydiy = {
            "checkcookie.py": "检查过期",
            "upbot.py": "升级upbot指令",
            "download.py": "下载文件",
            "addrepo.py": "添加仓库",
            "addexport.py": "添加变量",
            "editexport.py": "修改变量",
            "user.py": "更新user文件"
        }
        btns = []
        dirs = os.listdir(f"{_JdbotDir}/diy")
        for dir in dirs:
            if dir in mydiy:
                btns.append(Button.inline(mydiy[f'{dir}'], data=dir))
        btns.append(Button.inline("更新全部", data='all'))
        btns.append(Button.inline("帮我取消对话", data='cancel'))
        async with jdbot.conversation(SENDER, timeout=60) as conv:
            msg = await conv.send_message("请问你需要更新什么功能的机器人文件？", buttons=split_list(btns, row))
            convdata = await conv.wait_event(press_event(SENDER))
            fname = bytes.decode(convdata.data)
            if fname == 'cancel':
                await jdbot.edit_message(msg, '对话已取消，感谢你的使用')
                conv.cancel()
                return
            elif fname == 'user.py':
                await upuser(fname, msg)
            elif fname == 'all':
                await jdbot.edit_message(msg, "准备自动升级并重启，请耐心等待")
                furl = "https://ghproxy.com/https://raw.githubusercontent.com/chiupam/JD_Diy/master/config/diybot.sh"
                cmdtext = f"rm -f diybot.sh && wget {furl} && bash diybot.sh"
                await cmd(cmdtext)
                return
            conv.cancel()
        msg = await jdbot.edit_message(msg, "开始下载文件")
        furl = f'{furl_startswith}{fname}'
        if '下载代理' in mybot.keys() and str(mybot['下载代理']).lower() != 'false':
            furl = f'{str(mybot["下载代理"])}/{furl_startswith}{fname}'
        try:
            resp = requests.get(furl).text
        except Exception as e:
            await jdbot.send_message(chat_id, f"下载{fname}失败，请自行拉取文件进/jbot/diy目录")
            return
        path = f"{_JdbotDir}/diy/{fname}"
        backfile(path)
        with open(path, 'w+', encoding='utf-8') as f:
            f.write(resp)
            await jdbot.edit_message(msg, f"下载{fname}成功，正在自动重启")
    except exceptions.TimeoutError:
        msg = await jdbot.edit_message(msg, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


