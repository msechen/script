#!/usr/bin/env python3
# -*- coding: utf-8 -*-


from .. import chat_id, jdbot, logger, api_id, api_hash, proxystart, proxy, _ConfigDir, _ScriptsDir, _JdbotDir
from ..bot.utils import cmd, backfile, jdcmd, V4, QL, _ConfigFile, myck
from ..diy.utils import getbean
from telethon import events, TelegramClient
import re, json, requests, asyncio, time, datetime, os

from ..diy.utils import my_chat_id, bot_id, myzdjr_chatIds, myjoinTeam_chatIds


if proxystart:
    client = TelegramClient("user", api_id, api_hash, proxy=proxy, connection_retries=None).start()
else:
    client = TelegramClient("user", api_id, api_hash, connection_retries=None).start()


# user?
@client.on(events.NewMessage(chats=[bot_id, my_chat_id], from_users=chat_id, pattern=r"^user(\?|\？)$"))
async def fortest(event):
    try:
        msg = await jdbot.send_message(chat_id, '你好无聊。。。\n我在监控。。。\n不要烦我。。。')
        await asyncio.sleep(5)
        await jdbot.delete_messages(chat_id, msg)
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@client.on(events.NewMessage(chats=[-1001197524983, my_chat_id], pattern=r'.*店'))
async def shopbean(event):
    cookies = myck(_ConfigFile)
    message = event.message.text
    url = re.findall(re.compile(r"[(](https://api\.m\.jd\.com.*?)[)]", re.S), message)
    if url != [] and len(cookies) > 0:
        i = 0
        info = '关注店铺\n' + message.split("\n")[0] + "\n"
        for cookie in cookies:
            try:
                i += 1
                info += getbean(i, cookie, url[0])
            except:
                continue
        await jdbot.send_message(chat_id, info)


@client.on(events.NewMessage(chats=[-1001419355450, -1001284907085, my_chat_id]))
async def zoo_shopbean(event):
    """
    动物园关注店铺
    关注频道：https://t.me/zoo_channel
    """
    cookies = myck(_ConfigFile)
    message = event.message.text
    url = re.findall(re.compile(r"[(](https://api\.m\.jd\.com.*?)[)]", re.S), message)
    if url != [] and len(cookies) > 0:
        i = 0
        info = '关注店铺\n' + "\n"
        for cookie in cookies:
            try:
                i += 1
                info += getbean(i, cookie, url[0])
            except:
                continue
        await jdbot.send_message(chat_id, info)


@client.on(events.NewMessage(chats=myzdjr_chatIds, pattern=r"export\sjd_zdjr_activityId=\".*\"|.*='.*'"))
async def myzdjr(event):
    try:
        msg = await jdbot.send_message(chat_id, '监控到 jd_zdjr_activityId 环境变量')
        messages = event.message.text.split("\n")
        change = ''
        for message in messages:
            kv = message.replace("export ", "")
            kname = kv.split("=")[0]
            vname = re.findall(r"(\".*\"|'.*')", kv)[0][1:-1]
            with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f1:
                configs = f1.read()
            if vname in configs:
                continue
            if configs.find(kname) != -1:
                configs = re.sub(f'{kname}=(\"|\').*(\"|\')', kv, configs)
                change += f"替换 {kname} 环境变量成功\n{kv}\n\n"
                msg = await jdbot.edit_message(msg, change)
            else:
                if V4:
                    with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f2:
                        configs = f2.readlines()
                    for config in configs:
                        if config.find("第五区域") != -1 and config.find("↑") != -1:
                            end_line = configs.index(config)
                            break
                    configs.insert(end_line - 2, f'export {kname}="{vname}"\n')
                    configs = ''.join(configs)
                else:
                    with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f2:
                        configs = f2.read()
                    configs += f'export {kname}="{vname}"\n'
                change += f"新增 {kname} 环境变量成功\n{kv}\n\n"
                msg = await jdbot.edit_message(msg, change)
            with open(f"{_ConfigDir}/config.sh", 'w', encoding='utf-8') as f3:
                f3.write(configs)
        if len(change) == 0:
            await jdbot.edit_message(msg, "目前配置中的 jd_zdjr_activityId 环境变量无需改动")
            return
        try:
            from ..diy.diy import smiek_jd_zdjr
            await smiek_jd_zdjr()
        except:
            None
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@client.on(events.NewMessage(chats=myjoinTeam_chatIds, pattern=r"^export\sjd_joinTeam_activityId=\".*\"|.*='.*'"))
async def myjoinTeam(event):
    try:
        msg = await jdbot.send_message(chat_id, '监控到 jd_joinTeam_activityId 环境变量')
        messages = event.message.text.split("\n")
        change = ''
        for message in messages:
            kv = message.replace("export ", "")
            kname = kv.split("=")[0]
            vname = re.findall(r"(\".*\"|'.*')", kv)[0][1:-1]
            with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f1:
                configs = f1.read()
            if vname in configs:
                continue
            if configs.find(kname) != -1:
                configs = re.sub(f'{kname}=(\"|\').*(\"|\')', kv, configs)
                change += f"替换 {kname} 环境变量成功\n{kv}\n\n"
                msg = await jdbot.edit_message(msg, change)
            else:
                if V4:
                    with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f2:
                        configs = f2.readlines()
                    for config in configs:
                        if config.find("第五区域") != -1 and config.find("↑") != -1:
                            end_line = configs.index(config)
                            break
                    configs.insert(end_line - 2, f'export {kname}="{vname}"\n')
                    configs = ''.join(configs)
                else:
                    with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f2:
                        configs = f2.read()
                    configs += f'export {kname}="{vname}"\n'
                change += f"新增 {kname} 环境变量成功\n{kv}\n\n"
                msg = await jdbot.edit_message(msg, change)
            with open(f"{_ConfigDir}/config.sh", 'w', encoding='utf-8') as f3:
                f3.write(configs)
        if len(change) == 0:
            await jdbot.edit_message(msg, "目前配置中的 jd_joinTeam_activityId 环境变量无需改动")
            return
        try:
            from ..diy.diy import jd_joinTeam_activityId
            await jd_joinTeam_activityId()
        except:
            None
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@client.on(events.NewMessage(chats=[-1001419355450, my_chat_id], pattern=r"^#开卡"))
async def myzoo(event):
    """
    动物园开卡
    关注频道：https://t.me/zoo_channel
    """
    try:
        messages = event.message.text
        url = re.findall(re.compile(r"[(](https://raw\.githubusercontent\.com.*?)[)]", re.S), messages)
        if url == []:
            return
        else:
            url = url[0]
        speeds = ["http://ghproxy.com/", "https://mirror.ghproxy.com/", ""]
        for speed in speeds:
            resp = requests.get(f"{speed}{url}").text
            if resp:
                break
        if resp:
            fname = url.split('/')[-1]
            fpath = f"{_ScriptsDir}/{fname}"
            backfile(fpath)
            with open(fpath, 'w+', encoding='utf-8') as f:
                f.write(resp)
            with open(f"{_ConfigDir}/diybotset.json", 'r', encoding='utf-8') as f:
                diybotset = json.load(f)
            run = diybotset['zoo_opencard']
            if run == "False":
                await jdbot.send_message(chat_id, f"开卡脚本将保存到{_ScriptsDir}目录\n自动运行请在config目录diybotset.json中设置为Ture")
            else:
                cmdtext = f'{jdcmd} {fpath} now'
                await jdbot.send_message(chat_id, f"开卡脚本将保存到{_ScriptsDir}目录\n不自动运行请在config目录diybotset.json中设置为False")
                await cmd(cmdtext)
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@client.on(events.NewMessage(chats=[-1001159808620, my_chat_id], pattern=r".*京豆雨.*"))
async def redrain(event):
    """
    龙王庙京豆雨
    关注频道：https://t.me/longzhuzhu
    """
    try:
        if V4:
            if not os.path.exists('/jd/jredrain.sh'):
                cmdtext = 'cd /jd && wget https://raw.githubusercontent.com/chiupam/JD_Diy/master/pys/jredrain.sh'
                await cmd(cmdtext)
        else:
            if not os.path.exists('/ql/jredrain.sh'):
                cmdtext = 'cd /ql && wget https://raw.githubusercontent.com/chiupam/JD_Diy/master/pys/jredrain.sh'
                await cmd(cmdtext)
        message = event.message.text
        RRAs = re.findall(r'RRA.*', message)
        Times = re.findall(r'开始时间.*', message)
        for RRA in RRAs:
            i = RRAs.index(RRA)
            if V4:
                cmdtext = f'/cmd bash /jd/jredrain.sh {RRA}'
            else:
                cmdtext = f'/cmd bash /ql/jredrain.sh {RRA}'
            Time_1 = Times[i].split(" ")[0].split("-")
            Time_2 = Times[i].split(" ")[1].split(":")
            Time_3 = time.localtime()
            year, mon, mday = Time_3[0], Time_3[1], Time_3[2]
            await client.send_message(bot_id, cmdtext, schedule=datetime.datetime(year, int(Time_1[1]), int(Time_1[2]), int(Time_2[0]) - 8 , int(Time_2[1]), 0, 0))
            await jdbot.send_message(chat_id, f'监控到RRA：{RRA}\n预定时间：{Times[i].split("：")[1]}\n\n将在预定时间执行脚本，具体请查看当前机器人的定时任务')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


# -100123456789 是频道的id，例如我需要把频道1的消息转发给机器人，则下一行的相应位置中填写频道1的id
@client.on(events.NewMessage(chats=-100123456789))
async def myforward(event):
    try:
        # -100123456789 是频道的id，例如我需要把频道1的消息转发给机器人，则下一行的相应位置中填写频道1的id
        await client.forward_messages(bot_id, event.id, -100123456789)
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


# @client.on(events.NewMessage(chats=[-1001431256850, my_chat_id], from_users=1185488678))
# async def myupuser(event):
#     """
#     关注频道：https://t.me/jd_diy_bot_channel
#     """
#     try:
#         if event.message.file:
#             fname = event.message.file.name
#             try:
#                 if fname.endswith("bot-06-21.py") or fname.endswith("user.py"):
#                     path = f'{_JdbotDir}/diy/{fname}'
#                     backfile(path)
#                     await client.download_file(input_location=event.message, file=path)
#                     from ..diy.bot import restart
#                     await restart()
#             except:
#                 return
#     except Exception as e:
#         await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
#         logger.error('something wrong,I\'m sorry\n' + str(e))


