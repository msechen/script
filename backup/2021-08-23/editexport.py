#!/usr/bin/env python3
# -*- coding: utf-8 -*-


from .. import chat_id, jdbot, _ConfigDir, logger, chname, mybot
from ..bot.utils import press_event, V4, QL, split_list, row
from telethon import events, Button
from asyncio import exceptions
import re, asyncio, sys, os


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/export$'))
async def mychangeexport(event):
    try:
        SENDER = event.sender_id
        with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f1:
            configs = f1.readlines()
        knames, vnames, notes, btns = [], [], [], []
        if V4:
            for config in configs:
                if config.find("第五区域") != -1 and config.find("↓") != -1:
                    start_line = configs.index(config) + 1
                elif config.find("第五区域") != -1 and config.find("↑") != -1:
                    end_line = configs.index(config)
                    break
            for config in configs[start_line:end_line]:
                if config.find("export") != -1 and config.find("##") == -1:
                    kv = config.replace("export ", "")
                    kname = kv.split("=")[0]
                    try:
                        vname = re.findall(r"[^\"']+(?=\"|')", kv)[1]
                    except:
                        vname = '你没有设置任何值'
                    if kv.find(" # ") != -1:
                        note = re.findall(r"(?<=#\s).*", kv)[0]
                    else:
                        note = 'none'
                    knames.append(kname), vnames.append(vname), notes.append(note)
                elif config.find("↓") != -1:
                    break
        elif QL:
            for config in configs:
                if config.find("## 其他需要的变量") != -1:
                    line = configs.index(config)
                    break
            for config in configs[line:]:
                if config.find("export") != -1:
                    kv = config.replace("export ", "")
                    kname = kv.split("=")[0]
                    try:
                        vname = re.findall(r"[^\"']+(?=\"|')", kv)[1]
                    except:
                        vname = '你没有设置任何值'
                    if kv.find(" # ") != -1:
                        note = re.findall(r"(?<=#\s).*", kv)[0]
                    else:
                        note = 'none'
                    knames.append(kname), vnames.append(vname), notes.append(note)
        for i in range(len(knames)):
            if notes[i] != 'none':
                btn = Button.inline(notes[i], data=knames[i])
            else:
                btn = Button.inline(knames[i], data=knames[i])
            btns.append(btn)
        btns.append(Button.inline("帮我取消对话", data='cancel'))
        async with jdbot.conversation(SENDER, timeout=60) as conv:
            msg = await jdbot.send_message(chat_id, "这是我查询到的环境变量名称\n请问你需要查看哪一个？", buttons=split_list(btns, row))
            convdata = await conv.wait_event(press_event(SENDER))
            res = bytes.decode(convdata.data)
            if res == 'cancel':
                await jdbot.edit_message(msg, '对话已取消，感谢你的使用')
                conv.cancel()
                return
            valuedata = vnames[knames.index(res)]
            btns = [Button.inline("是", data=res), Button.inline("否", data="no")]
            msg = await jdbot.edit_message(msg, f"这是{res}键对应的值\n```{valuedata}```\n请问你需要修改吗？", buttons=split_list(btns, row))
            convdata = await conv.wait_event(press_event(SENDER))
            res = bytes.decode(convdata.data)
            if res == 'no':
                await jdbot.edit_message(msg, '对话已取消，感谢你的使用')
                conv.cancel()
                return
            kname, loop = res, True
            await jdbot.delete_messages(chat_id, msg)
            btns.append(Button.inline("取消对话", data="cancel"))
            while loop:
                valuedatamsg = await jdbot.send_message(chat_id, f"```{valuedata}```")
                msg = await conv.send_message("上一条消息为待修改的值\n现在请回复你所需要设置的新值")
                vname = await conv.get_response()
                vname = vname.raw_text
                msg = await jdbot.edit_message(msg, f'好的，请稍等\n键名：{kname}\n值名：{vname}\n请问是这样吗？', buttons=btns)
                convdata = await conv.wait_event(press_event(SENDER))
                res = bytes.decode(convdata.data)
                if res == 'cancel':
                    await jdbot.edit_message(msg, '对话已取消，感谢你的使用')
                    conv.cancel()
                    return
                elif res == 'no':
                    await jdbot.delete_messages(chat_id, valuedatamsg)
                    await jdbot.delete_messages(chat_id, msg)
                    loop = True
                else:
                    await jdbot.delete_messages(chat_id, valuedatamsg)
                    msg = await jdbot.edit_message(msg, f'好的，请稍等\n你设置变量为：{kname}="{vname}"')
                    loop = False
                    conv.cancel()
        with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f2:
            configs = f2.read()
        configs = re.sub(f'{kname}=(\"|\')\S+(\"|\')', f'{kname}="{vname}"', configs)
        with open(f"{_ConfigDir}/config.sh", 'w', encoding='utf-8') as f3:
            f3.write(configs)
        await asyncio.sleep(1.5)
        await jdbot.delete_messages(chat_id, msg)
        await jdbot.send_message(chat_id, "修改环境变量成功")
    except exceptions.TimeoutError:
        await jdbot.edit_message(msg, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        function = "函数名：" + sys._getframe().f_code.co_name
        tip = '建议百度/谷歌进行查询'
        await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
        logger.error(f"错误--->{str(e)}")


if chname:
    jdbot.add_event_handler(mychangeexport, events.NewMessage(from_users=chat_id, pattern=mybot['命令别名']['cron']))