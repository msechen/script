#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Author   : Chiupam
# @Data     : 2021-06-13
# @Version  : v 1.0
# @Updata   :
# @Future   :


from .. import chat_id, jdbot, _ConfigDir, logger
from ..bot.utils import press_event, V4, QL
from telethon import events, Button
from asyncio import exceptions
import re, asyncio


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'(export\s)?\w*=(".*"|\'.*\')'))
async def myaddexport(event):
    try:
        SENDER = event.sender_id
        messages = event.raw_text.split("\n")
        for message in messages:
            kv = message.replace("export ", "")
            kname = kv.split("=")[0]
            vname = re.findall(r"(\".*\"|'.*')", kv)[0][1:-1]
            btns = [Button.inline("是", data='yes'), Button.inline("否", data='cancel')]
            async with jdbot.conversation(SENDER, timeout=60) as conv:
                msg = await conv.send_message(f"我检测到你需要添加一个环境变量\n键名：{kname}\n值名：{vname}\n请问是这样吗？", buttons=btns)
                convdata = await conv.wait_event(press_event(SENDER))
                res = bytes.decode(convdata.data)
                if res == 'cancel':
                    await jdbot.edit_message(msg, '对话已取消，感谢你的使用')
                    conv.cancel()
                    return
                else:
                    msg = await jdbot.edit_message(msg, f"好的，请稍等\n你设置变量为：{kname}=\"{vname}\"")
                conv.cancel()
            with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f1:
                configs = f1.read()
            await asyncio.sleep(1.5)
            if configs.find(f"export {kname}=") != -1:
                configs = re.sub(f'{kname}=(\"|\').*(\"|\')', f'{kname}="{vname}"', configs)
                end = "替换环境变量成功"
            else:
                async with jdbot.conversation(SENDER, timeout=60) as conv:
                    msg = await jdbot.edit_message(msg, f"这个环境变量是新增的，需要给他添加注释嘛？", buttons=btns)
                    convdata = await conv.wait_event(press_event(SENDER))
                    res = bytes.decode(convdata.data)
                    if res == 'cancel':
                        msg = await jdbot.edit_message(msg, "那好吧，准备新增变量")
                        note = ''
                    else:
                        await jdbot.delete_messages(chat_id, msg)
                        msg = await conv.send_message("那请回复你所需要添加的注释")
                        note = await conv.get_response()
                        note = f" # {note.raw_text}"
                    conv.cancel()
                if V4:
                    with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f3:
                        configs = f3.readlines()
                    for config in configs:
                        if config.find("第五区域") != -1 and config.find("↑") != -1:
                            end_line = configs.index(config)
                            break
                    configs.insert(end_line - 1, f'export {kname}="{vname}"{note}\n')
                    configs = ''.join(configs)
                else:
                    with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f4:
                        configs = f4.read()
                    configs += f'export {kname}="{vname}"{note}\n'
                await asyncio.sleep(1.5)
                end = "新增环境变量成功"
            with open(f"{_ConfigDir}/config.sh", 'w', encoding='utf-8') as f2:
                f2.write(configs)
            await jdbot.edit_message(msg, end)
    except exceptions.TimeoutError:
        msg = await jdbot.edit_message(msg, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))
