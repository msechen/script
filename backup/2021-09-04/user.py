#!/usr/bin/env python3
# -*- coding: utf-8 -*-


import asyncio
import datetime
import os
import re
import sys
import time

from telethon import events, TelegramClient

from .. import chat_id, jdbot, logger, api_id, api_hash, proxystart, proxy, _ConfigDir, _JdDir, TOKEN
from ..bot.utils import cmd, V4, QL, _ConfigFile, myck
from ..diy.utils import getbean, my_chat_id, myzdjr_chatIds, shoptokenIds
from ..diy.utils import read, write

bot_id = int(TOKEN.split(":")[0])

if proxystart:
    client = TelegramClient("user", api_id, api_hash, proxy=proxy, connection_retries=None).start()
else:
    client = TelegramClient("user", api_id, api_hash, connection_retries=None).start()


@client.on(events.NewMessage(chats=[bot_id, my_chat_id], from_users=chat_id, pattern=r"^user(\?|\？)$"))
async def user(event):
    try:
        msg = await jdbot.send_message(chat_id, '你好无聊。。。\n我在监控。。。\n不要烦我。。。')
        await asyncio.sleep(5)
        await jdbot.delete_messages(chat_id, msg)
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        function = "函数名：" + sys._getframe().f_code.co_name
        tip = '建议百度/谷歌进行查询'
        await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
        logger.error(f"错误--->{str(e)}")


@client.on(events.NewMessage(chats=[-1001320212725, my_chat_id]))
async def follow(event):
    try:
        url = re.findall(re.compile(r"[(](https://api\.m\.jd\.com.*?)[)]", re.S), event.message.text)
        if not url:
            return
        i = 0
        info = '关注店铺\n\n'
        for cookie in myck(_ConfigFile):
            i += 1
            info += getbean(i, cookie, url[0])
        await jdbot.send_message(chat_id, info)
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        function = "函数名：" + sys._getframe().f_code.co_name
        tip = '建议百度/谷歌进行查询'
        await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
        logger.error(f"错误--->{str(e)}")


@client.on(events.NewMessage(chats=[-1001159808620, my_chat_id], pattern=r".*京豆雨.*"))
async def red(event):
    """
    龙王庙京豆雨
    关注频道：https://t.me/longzhuzhu
    """
    try:
        file = "jredrain.sh"
        if not os.path.exists(f'{_JdDir}/{file}'):
            cmdtext = f'cd {_JdDir} && wget https://raw.githubusercontent.com/chiupam/JD_Diy/master/pys/{file}'
            await cmd(cmdtext)
            if not os.path.exists(f'{_JdDir}/{file}'):
                await jdbot.send_message(chat_id, f"【龙王庙】\n\n监控到RRA，但是缺少{file}文件，无法执行定时")
                return
        message = event.message.text
        RRAs = re.findall(r'RRA.*', message)
        Times = re.findall(r'开始时间.*', message)
        for RRA in RRAs:
            i = RRAs.index(RRA)
            cmdtext = f"/cmd bash {_JdDir}/{file} {RRA}"
            Time_1 = Times[i].split(" ")[0].split("-")
            Time_2 = Times[i].split(" ")[1].split(":")
            Time_3 = time.localtime()
            year, mon, mday = Time_3[0], Time_3[1], Time_3[2]
            if int(Time_2[0]) >= 8:
                await client.send_message(bot_id, cmdtext, schedule=datetime.datetime(year, int(Time_1[1]), int(Time_1[2]), int(Time_2[0]) - 8 , int(Time_2[1]), 0, 0))
            else:
                await client.send_message(bot_id, cmdtext, schedule=datetime.datetime(year, int(Time_1[1]), int(Time_1[2]) - 1, int(Time_2[0]) + 16, int(Time_2[1]), 0, 0))
            await jdbot.send_message(chat_id, f'监控到RRA：{RRA}\n预定时间：{Times[i].split("：")[1]}\n\n将在预定时间执行脚本，具体请查看当前机器人的定时任务')
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        function = "函数名：" + sys._getframe().f_code.co_name
        tip = '建议百度/谷歌进行查询'
        await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
        logger.error(f"错误--->{str(e)}")


@client.on(events.NewMessage(chats=shoptokenIds, pattern=r'(export\s)?MyShopToken\d*=(".*"|\'.*\')'))
async def myshoptoken(event):
    try:
        messages = event.message.text.split("\n")
        exports = re.findall(r'export MyShopToken(\d+)="(.*)"', read("str"))
        change = ""
        if not exports:
            msg = await jdbot.send_message(chat_id, '监控到店铺签到环境变量，直接添加！')
            configs = read("str")
            for message in messages:
                value = re.findall(r'"([^"]*)"', message)[0]
                if V4:
                    configs = read("list")
                    for config in configs:
                        if "第五区域" in config and "↑" in config:
                            line = configs.index(config)
                            break
                    change += f'export MyShopToken1="{value}"\n'
                    configs.insert(line - 2, f'export MyShopToken1="{value}"\n')
                elif QL:
                    change += f'export MyShopToken1="{value}"\n'
                    configs += f'export MyShopToken1="{value}"\n'
                write(configs)
            await jdbot.edit_message(msg, f"【店铺签到领京豆】\n\n此次添加的变量\n{change}")
            return
        msg = await jdbot.send_message(chat_id, '监控到店铺签到环境变量，继续添加！')
        for message in messages:
            value = re.findall(r'"([^"]*)"', message)[0]
            configs = read("str")
            if value in configs:
                continue
            configs = read("list")
            for config in configs:
                if "export MyShopToken" in config:
                    number = int(re.findall(r'\d+', config.split("=")[0])[0]) + 1
                    line = configs.index(config) + 1
            change += f'export MyShopToken{number}="{value}"\n'
            configs.insert(line, f'export MyShopToken{number}="{value}"\n')
            write(configs)
        if len(change) == 0:
            await jdbot.edit_message(msg, "目前配置中的环境变量无需改动")
            return
        await jdbot.edit_message(msg, f"【店铺签到领京豆】\n\n此次添加的变量\n{change}")
        try:
            from ..diy.diy import signCollectGift
            await signCollectGift()
        except:
            None
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        function = "函数名：" + sys._getframe().f_code.co_name
        tip = '建议百度/谷歌进行查询'
        await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
        logger.error(f"错误--->{str(e)}")


@client.on(events.NewMessage(chats=myzdjr_chatIds, pattern=r'export\s(jd_zdjr_activity|jd_joinTeam_activity).*=(".*"|\'.*\')'))
async def activityID(event):
    try:
        text = event.message.text
        if "jd_zdjr_activity" in text:
            activity = "jd_zdjr_activity"
        elif "jd_joinTeam_activity" in text:
            activity = "jd_joinTeam_activity"
        msg = await jdbot.send_message(chat_id, f'监控到 {activity} 环境变量')
        messages = event.message.text.split("\n")
        change = ""
        for message in messages:
            kv = message.replace("export ", "")
            key = kv.split("=")[0]
            value = re.findall(r'"([^"]*)"', kv)[0]
            if "jd_zdjr_activityId" in key and len(value) != 32:
                await jdbot.edit_message(msg, f"这是一趟灵车，不上车了\n\n{event.message.text}")
                return
            configs = read("str")
            if kv in configs:
                continue
            if key in configs:
                configs = re.sub(f'{key}=(\"|\').*(\"|\')', kv, configs)
                change += f"替换 {activity} 环境变量成功\n{kv}\n\n"
                msg = await jdbot.edit_message(msg, change)
            else:
                if V4:
                    configs = read("list")
                    for config in configs:
                        if config.find("第五区域") != -1 and config.find("↑") != -1:
                            end_line = configs.index(config)
                            break
                    configs.insert(end_line - 2, f'export {key}="{value}"\n')
                    configs = ''.join(configs)
                else:
                    configs = read("str")
                    configs += f'export {key}="{value}"\n'
                change += f"新增 {activity} 环境变量成功\n{kv}\n\n"
                msg = await jdbot.edit_message(msg, change)
            write(configs)
        if len(change) == 0:
            await jdbot.edit_message(msg, f"目前配置中的 {activity} 环境变量无需改动")
            return
        if "jd_zdjr_activity" in event.message.text:
            from ..diy.diy import smiek_jd_zdjr
            await smiek_jd_zdjr()
        elif "jd_joinTeam_activityId" in event.message.text:
            from ..diy.diy import jd_joinTeam_activityId
            await jd_joinTeam_activityId()
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        function = "函数名：" + sys._getframe().f_code.co_name
        tip = '建议百度/谷歌进行查询'
        await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
        logger.error(f"错误--->{str(e)}")


# @client.on(events.NewMessage(chats=myzdjr_chatIds, pattern=r'export\sjd_zdjr_activity(Url|Id)=(".*"|\'.*\')'))
# async def myzdjr(event):
#     try:
#         msg = await jdbot.send_message(chat_id, '监控到 jd_zdjr_activity 环境变量')
#         messages = event.message.text.split("\n")
#         change = ''
#         for message in messages:
#             kv = message.replace("export ", "")
#             key = kv.split("=")[0]
#             value = re.findall(r'"([^"]*)"', kv)[0]
#             if "Id" in key and len(value) != 32:
#                 await jdbot.edit_message(msg, f"这是一趟灵车，不上车了\n\n{event.message.text}")
#                 return
#             with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f1:
#                 configs = f1.read()
#             if kv in configs:
#                 continue
#             if configs.find(key) != -1:
#                 configs = re.sub(f'{key}=(\"|\').*(\"|\')', kv, configs)
#                 change += f"替换 jd_zdjr_activity 环境变量成功\n{kv}\n\n"
#                 msg = await jdbot.edit_message(msg, change)
#             else:
#                 if V4:
#                     with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f2:
#                         configs = f2.readlines()
#                     for config in configs:
#                         if config.find("第五区域") != -1 and config.find("↑") != -1:
#                             end_line = configs.index(config)
#                             break
#                     configs.insert(end_line - 2, f'export {key}="{value}"\n')
#                     configs = ''.join(configs)
#                 else:
#                     with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f2:
#                         configs = f2.read()
#                     configs += f'export {key}="{value}"\n'
#                 change += f"新增 jd_zdjr_activity 环境变量成功\n{kv}\n\n"
#                 msg = await jdbot.edit_message(msg, change)
#             with open(f"{_ConfigDir}/config.sh", 'w', encoding='utf-8') as f3:
#                 f3.write(configs)
#         if len(change) == 0:
#             await jdbot.edit_message(msg, "目前配置中的 jd_zdjr_activity 环境变量无需改动")
#             return
#         try:
#             from ..diy.diy import smiek_jd_zdjr
#             await smiek_jd_zdjr()
#         except:
#             None
#     except Exception as e:
#         title = "【💥错误💥】"
#         name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
#         function = "函数名：" + sys._getframe().f_code.co_name
#         tip = '建议百度/谷歌进行查询'
#         await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
#         logger.error(f"错误--->{str(e)}")


# @client.on(events.NewMessage(chats=myjoinTeam_chatIds, pattern=r"^export\sjd_joinTeam_activityId=\".*\"|.*='.*'"))
# async def myjoinTeam(event):
#     try:
#         end = False
#         env = event.message.text
#         messages = env.split("\n")
#         for message in messages:
#             kv = message.replace("export ", "")
#             key = kv.split("=")[0]
#             value = re.findall(r'"([^"]*)"', kv)[0]
#             with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f1:
#                 configs = f1.read()
#             if kv in configs:
#                 continue
#             if configs.find(key) != -1:
#                 configs = re.sub(f'{key}=(\"|\').*(\"|\')', kv, configs)
#                 end = f"替换 jd_joinTeam_activityId 环境变量成功\n\n{env}"
#             else:
#                 if V4:
#                     with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f2:
#                         configs = f2.readlines()
#                     for config in configs:
#                         if config.find("第五区域") != -1 and config.find("↑") != -1:
#                             end_line = configs.index(config)
#                             break
#                     configs.insert(end_line - 2, f'export {key}="{value}"\n')
#                     configs = ''.join(configs)
#                 else:
#                     with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f2:
#                         configs = f2.read()
#                     configs += f'export {key}="{value}"\n'
#                 end = f"新增 jd_joinTeam_activityId 环境变量成功\n\n{env}"
#             with open(f"{_ConfigDir}/config.sh", 'w', encoding='utf-8') as f3:
#                 f3.write(configs)
#         if end:
#             await jdbot.send_message(chat_id, end)
#         try:
#             from ..diy.diy import jd_joinTeam_activityId
#             await jd_joinTeam_activityId()
#         except:
#             None
#     except Exception as e:
#         title = "【💥错误💥】"
#         name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
#         function = "函数名：" + sys._getframe().f_code.co_name
#         tip = '建议百度/谷歌进行查询'
#         await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
#         logger.error(f"错误--->{str(e)}")


# # -100123456789 是频道的id，例如我需要把频道1的消息转发给机器人，则下一行的相应位置中填写频道1的id
# @client.on(events.NewMessage(chats=-100123456789))
# async def myforward(event):
#     try:
#         # -100123456789 是频道的id，例如我需要把频道1的消息转发给机器人，则下一行的相应位置中填写频道1的id
#         await client.forward_messages(bot_id, event.id, -100123456789)
#     except Exception as e:
#         title = "【💥错误💥】"
#         name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
#         function = "函数名：" + sys._getframe().f_code.co_name
#         tip = '建议百度/谷歌进行查询'
#         await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
#         logger.error(f"错误--->{str(e)}")


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
#         title = "【💥错误💥】"
#         name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
#         function = "函数名：" + sys._getframe().f_code.co_name
#         tip = '建议百度/谷歌进行查询'
#         await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
#         logger.error(f"错误--->{str(e)}")


# @client.on(events.NewMessage(chats=[-1001197524983, my_chat_id], pattern=r'.*店'))
# async def shopbean(event):
#     cookies = myck(_ConfigFile)
#     message = event.message.text
#     url = re.findall(re.compile(r"[(](https://api\.m\.jd\.com.*?)[)]", re.S), message)
#     if url != [] and len(cookies) > 0:
#         i = 0
#         info = '关注店铺\n' + message.split("\n")[0] + "\n"
#         for cookie in cookies:
#             try:
#                 i += 1
#                 info += getbean(i, cookie, url[0])
#             except:
#                 continue
#         await jdbot.send_message(chat_id, info)


# @client.on(events.NewMessage(chats=[-1001419355450, my_chat_id], pattern=r"^#开卡"))
# async def myzoo(event):
#     """
#     动物园开卡
#     关注频道：https://t.me/zoo_channel
#     """
#     try:
#         messages = event.message.text
#         url = re.findall(re.compile(r"[(](https://raw\.githubusercontent\.com.*?)[)]", re.S), messages)
#         if url == []:
#             return
#         else:
#             url = url[0]
#         speeds = ["http://ghproxy.com/", "https://mirror.ghproxy.com/", ""]
#         for speed in speeds:
#             resp = requests.get(f"{speed}{url}").text
#             if resp:
#                 break
#         if resp:
#             fname = url.split('/')[-1]
#             fpath = f"{_ScriptsDir}/{fname}"
#             backfile(fpath)
#             with open(fpath, 'w+', encoding='utf-8') as f:
#                 f.write(resp)
#             with open(f"{_ConfigDir}/diybotset.json", 'r', encoding='utf-8') as f:
#                 diybotset = json.load(f)
#             run = diybotset['zoo_opencard']
#             if run == "False":
#                 await jdbot.send_message(chat_id, f"开卡脚本将保存到{_ScriptsDir}目录\n自动运行请在config目录diybotset.json中设置为Ture")
#             else:
#                 cmdtext = f'{jdcmd} {fpath} now'
#                 await jdbot.send_message(chat_id, f"开卡脚本将保存到{_ScriptsDir}目录\n不自动运行请在config目录diybotset.json中设置为False")
#                 await cmd(cmdtext)
#     except Exception as e:
#         title = "【💥错误💥】"
#         name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
#         function = "函数名：" + sys._getframe().f_code.co_name
#         tip = '建议百度/谷歌进行查询'
#         await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
#         logger.error(f"错误--->{str(e)}")
