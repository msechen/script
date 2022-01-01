#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Author   : Chiupam
# @Data     : 2021-06-15
# @Version  : v 1.0
# @Updata   :
# @Future   :


from .. import chat_id, jdbot, _ConfigDir, _ScriptsDir, _OwnDir, logger, _JdbotDir
from ..bot.utils import cmd, press_event, backfile, jdcmd, V4, QL, _ConfigFile, mycron, split_list, row, qlcron, _Auth, upcron, mybot
from ..diy.utils import mycronup
from telethon import events, Button
from asyncio import exceptions
import requests, re


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^https?://.*(js|py|sh)$'))
async def mydownload(event):
    try:
        SENDER = event.sender_id
        furl = event.raw_text
        if '下载代理' in mybot.keys() and str(mybot['下载代理']).lower() != 'false' and 'github' in furl:
            furl = f'{str(mybot["下载代理"])}/{furl}'
        try:
            resp = requests.get(furl).text
            if "</html>" in resp:
                await jdbot.send_message(chat_id, f"接收到的[链接]({furl})是一个页面并非raw数据，会话结束")
                return
        except Exception as e:
            await jdbot.send_message(chat_id, f"下载失败\n{e}")
            return
        async with jdbot.conversation(SENDER, timeout=60) as conv:
            fname = furl.split('/')[-1]
            fname_cn = ''
            if furl.endswith(".js"):
                fname_cn = re.findall(r"(?<=new\sEnv\(').*(?=')", resp, re.M)
                if fname_cn != []:
                    fname_cn = fname_cn[0]
                else:
                    fname_cn = ''
            if V4:
                btns = [Button.inline('放入config目录', data=_ConfigDir), Button.inline('放入jbot/diy目录', data=f'{_JdbotDir}/diy'), Button.inline('放入scripts目录', data=_ScriptsDir), Button.inline('放入own目录', data=_OwnDir ), Button.inline('取消对话', data='cancel')]
            else:
                btns = [Button.inline('放入config目录', data=_ConfigDir), Button.inline('放入scripts目录', data=_ScriptsDir), Button.inline('取消对话', data='cancel')]
            write, cmdtext = True, False
            msg = await conv.send_message(f'成功下载{fname_cn}脚本\n现在，请做出你的选择：', buttons=split_list(btns, row))
            convdata = await conv.wait_event(press_event(SENDER))
            res1 = bytes.decode(convdata.data)
            if res1 == 'cancel':
                await jdbot.edit_message(msg, '对话已取消，感谢你的使用')
                conv.cancel()
                return
            elif res1 == _ScriptsDir:
                fpath = f"{_ScriptsDir}/{fname}"
                btns = [Button.inline("是", data="confirm"), Button.inline("否", data="cancel")]
                msg = await jdbot.edit_message(msg, f"请问需要运行{fname_cn}脚本吗？", buttons=btns)
                convdata = await conv.wait_event(press_event(SENDER))
                res2 = bytes.decode(convdata.data)
                if res2 == "confirm":
                    cmdtext = f'{jdcmd} {_ScriptsDir}/{fname} now'
                msg = await jdbot.edit_message(msg, f"请问需要添加定时吗？", buttons=btns)
                convdata = await conv.wait_event(press_event(SENDER))
                res2 = bytes.decode(convdata.data)
                if res2 == 'cancel':
                    await jdbot.edit_message(msg, f"{fname_cn}脚本将保存到{_ScriptsDir}目录")
                else:
                    await mycronup(jdbot, conv, resp, fname, msg, SENDER, btns, _ScriptsDir)
            elif res1 == _OwnDir:
                fpath = f"{_OwnDir}/raw/{fname}"
                btns = [Button.inline("是", data="confirm"), Button.inline("否", data="cancel")]
                msg = await jdbot.edit_message(msg, f"请问需要运行{fname_cn}脚本吗？", buttons=btns)
                convdata = await conv.wait_event(press_event(SENDER))
                res2 = bytes.decode(convdata.data)
                if res2 == "confirm":
                    cmdtext = f'{jdcmd} {fpath} now'
                    await jdbot.edit_message(msg, f"文件将保存到{res1}目录，且已写入配置中，准备执行脚本")
                else:
                    await jdbot.edit_message(msg, f'文件将保存到{res1}目录，且已写入配置中，准备拉取单个脚本，请耐心等待')
                with open(_ConfigFile, 'r', encoding="utf-8") as f1:
                    configs = f1.readlines()
                for config in configs:
                    if config.find("OwnRawFile") != -1 and config.find("## ") == -1:
                        line = configs.index(config) + 1
                        configs.insert(line, f"\t{event.raw_text}\n")
                        with open(_ConfigFile, 'w', encoding="utf-8") as f2:
                            f2.write(''.join(configs))
                    elif config.find("第五区域") != -1:
                        break
                await cmd("jup own")
            else:
                fpath = f"{res1}/{fname}"
                await jdbot.edit_message(msg, f"文件将保存到{res1}目录")
            backfile(fpath)
            with open(fpath, 'w+', encoding='utf-8') as f:
                f.write(resp)
            conv.cancel()
        if cmdtext:
            await cmd(cmdtext)
    except exceptions.TimeoutError:
        msg = await jdbot.edit_message(msg, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))

