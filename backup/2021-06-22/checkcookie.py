#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Author   : Chiupam
# @Data     : 2021-06-13
# @Version  : v 1.0
# @Updata   :
# @Future   :
import json

from .. import chat_id, jdbot, logger, TOKEN
from ..bot.utils import press_event, V4, QL, _ConfigFile, myck, _Auth
from telethon import events, Button
from asyncio import exceptions
import requests, re, os, asyncio, time


bot_id = int(TOKEN.split(':')[0])


async def checkCookie(cookie):
    url = "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion"
    headers = {
        "Host": "me-api.jd.com",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "User-Agent": "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        "Accept-Language": "zh-cn",
        "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
        "Accept-Encoding": "gzip, deflate, br"
    }
    i = 5
    while i:
        try:
            r = requests.get(url, headers=headers).json()
            if r['retcode'] == '1001':
                return True
            else:
                return False
        except:
            i -= 1
            await asyncio.sleep(5)
    return False


@jdbot.on(events.NewMessage(from_users=[chat_id, bot_id], pattern=r'^/checkcookie$|.*cookie已失效'))
async def mycheckcookie(event):
    try:
        msg = await jdbot.send_message(chat_id, '正在检测 cookie 过期情况')
        text, o, expireds = '检测结果\n\n', '\n\t   └ ', []
        if V4:
            cookies = myck(_ConfigFile)
            for cookie in cookies:
                cknum = cookies.index(cookie) + 1
                check = await checkCookie(cookie)
                if check:
                    expireds.append(cknum)
                await asyncio.sleep(1)
        elif QL:
            with open(_Auth, 'r', encoding='utf-8') as f:
                auth = json.load(f)
            token = auth['token']
            url = 'http://127.0.0.1:5600/api/cookies'
            body = {'t': int(round(time.time() * 1000))}
            headers = {'Authorization': f'Bearer {token}'}
            datas = requests.get(url, params=body, headers=headers).json()['data']
            valids = []
            for data in datas:
                cknum = datas.index(data) + 1
                check = await checkCookie(data['value'])
                if check:
                    expireds.append([data['_id'], cknum])
                else:
                    valids.append([data['_id'], data['nickname'], cknum])
                await asyncio.sleep(1)
        if V4:
            with open(_ConfigFile, 'r', encoding='utf-8') as f1:
                configs = f1.readlines()
            for config in configs:
                i = configs.index(config)
                if config.find("TempBlockCookie") != -1 and config.find("##") == -1 and configs[i + 1].find(";") == -1:
                    line = configs.index(config)
                    Temp = configs[line][:-1]
                    configs[line] = f"{Temp}program\n"
                    configs = ''.join(configs)
                    break
            n = " ".join('%s' % expired for expired in expireds)
            configs = re.sub(r'TempBlockCookie=".*"program', f'TempBlockCookie="{n}"', configs, re.M)
            text += f'【屏蔽情况】{o}TempBlockCookie="{n}"\n'
            with open(_ConfigFile, 'w', encoding='utf-8') as f2:
                f2.write(configs)
            await jdbot.edit_message(msg, text)
        elif QL:
            headers = {'Authorization': f'Bearer {token}'}
            if expireds != []:
                text += f'【禁用情况】\n'
                for expired in expireds:
                    url = 'http://127.0.0.1:5600/api/cookies/disable'
                    body = [f"{expired[0]}"]
                    r = requests.put(url, json=body, headers=headers)
                    if r.ok:
                        text += f'账号{expired[1]}：{o}禁用成功，记得及时更新\n'
                    else:
                        text += f'账号{expired[1]}：{o}禁用失败，请手动禁用\n'
                text += '\n'
            if valids != []:
                text += f'【启用情况】\n'
                for valid in valids:
                    url = 'http://127.0.0.1:5600/api/cookies/enable'
                    body = [f"{valid[0]}"]
                    r = requests.put(url, json=body, headers=headers)
                    if r.ok:
                        text += f'账号{valid[2]} - {valid[1]}：{o}启用成功\n'
                    else:
                        text += f'账号{valid[2]} - {valid[1]}：{o}启用失败，请手动启用\n'
            await jdbot.edit_message(msg, text)
    except exceptions.TimeoutError:
        msg = await jdbot.edit_message(msg, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))
