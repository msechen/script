from .. import chat_id, jdbot, logger, TOKEN, chname, mybot
from ..bot.utils import press_event, V4, QL, _ConfigFile, myck, _Auth
from telethon import events
from asyncio import exceptions
import requests, re, asyncio, time, json


bot_id = int(TOKEN.split(':')[0])


def get(cookie, message):
    if "东东工厂" in message:
        url = "https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2"
        headers = {
        "Accept": "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Cookie": cookie,
        "Referer": "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1"
        }
        key = 'retcode'
        value = '13'
    else:
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
        key = 'retcode'
        value = '1001'
    return url, headers, key, value


async def checkCookie(cookie, message):
    url, headers, key, value = get(cookie, message)
    r = requests.get(url, headers=headers).json()
    await asyncio.sleep(1)
    if r[key] == value:
        return True
    return False


@jdbot.on(events.NewMessage(from_users=[chat_id, bot_id], pattern=r'^/checkcookie$|.*cookie已失效'))
async def mycheckcookie(event):
    try:
        message = event.message.raw_text
        msg = await jdbot.send_message(chat_id, "正在检测 cookie 过期情况……")
        text, o, expireds = '检测结果\n\n', '\n\t   └ ', []
        if V4:
            cookies = myck(_ConfigFile)
            for cookie in cookies:
                cknum = cookies.index(cookie) + 1
                check = await checkCookie(cookie, message)
                if check:
                    msg = await jdbot.edit_message(msg, f"账号{cknum}已过期")
                    expireds.append(cknum)
                else:
                    msg = await jdbot.edit_message(msg, f"账号{cknum}有效")
                await asyncio.sleep(1)
        elif QL:
            with open(_Auth, 'r', encoding='utf-8') as f:
                auth = json.load(f)
            token = auth['token']
            headers = {'Authorization': f'Bearer {token}'}
            try:
                ql_version = '2.2'
                url = 'http://127.0.0.1:5600/api/cookies'
                body = {'t': int(round(time.time() * 1000))}
                datas = requests.get(url, params=body, headers=headers).json()['data']
                valids = []
                for data in datas:
                    cknum = datas.index(data) + 1
                    check = await checkCookie(data['value'], message)
                    if check:
                        msg = await jdbot.edit_message(msg, f"账号{cknum}已过期")
                        expireds.append([data['_id'], cknum])
                    else:
                        msg = await jdbot.edit_message(msg, f"账号{cknum}有效")
                        valids.append([data['_id'], data['nickname'], cknum])
                    await asyncio.sleep(1)
            except:
                ql_version = '2.8+'
                url = 'http://127.0.0.1:5600/api/envs'
                body = {
                    'searchValue': 'JD_COOKIE',
                    'Authorization': f'Bearer {token}'
                }
                datas = requests.get(url, params=body, headers=headers).json()['data']
                valids, changes, removes = [], [], []
                for data in datas:
                    cookie = data['value']
                    if "&" in cookie:
                        cookies = cookie.split("&")
                        len_cooke = len(cookies)
                        for ck in cookies:
                            check = await checkCookie(ck, message)
                            if check:
                                msg = await jdbot.edit_message(msg, f"Cookie：{ck} 已过期")
                                cookies.remove(ck)
                                removes.append(ck)
                            else:
                                msg = await jdbot.edit_message(msg, f"Cookie：{ck} 有效")
                            await asyncio.sleep(1)
                        if len(cookies) != len_cooke:
                            changes.append([data['remarks'] if 'remarks' in data.keys() else '未备注', '&'.join(cookies), data['_id']])
                    else:
                        cknum = datas.index(data) + 1
                        check = await checkCookie(cookie, message)
                        if check:
                            msg = await jdbot.edit_message(msg, f"账号{cknum}已过期")
                            expireds.append([data['_id'], cknum])
                        else:
                            msg = await jdbot.edit_message(msg, f"账号{cknum}有效")
                            valids.append([data['_id'], data['remarks'] if 'remarks' in data.keys() else '未备注', cknum])
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
                    if ql_version == '2.2':
                        url = 'http://127.0.0.1:5600/api/cookies/disable'
                        body = [f"{expired[0]}"]
                        r = requests.put(url, json=body, headers=headers)
                        if r.ok:
                            text += f'账号{expired[1]}：{o}禁用成功，记得及时更新\n'
                        else:
                            text += f'账号{expired[1]}：{o}禁用失败，请手动禁用\n'
                    else:
                        url = 'http://127.0.0.1:5600/api/envs/disable'
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
                    if ql_version == '2.2':
                        url = 'http://127.0.0.1:5600/api/cookies/enable'
                        body = [f"{valid[0]}"]
                        r = requests.put(url, json=body, headers=headers)
                        if r.ok:
                            text += f'账号{valid[2]} - {valid[1]}：{o}启用成功\n'
                        else:
                            text += f'账号{valid[2]} - {valid[1]}：{o}启用失败，请手动启用\n'
                    else:
                        url = 'http://127.0.0.1:5600/api/envs/enable'
                        body = [f"{valid[0]}"]
                        r = requests.put(url, json=body, headers=headers)
                        if r.ok:
                            text += f'账号{valid[2]} - {valid[1]}：{o}启用成功\n'
                        else:
                            text += f'账号{valid[2]} - {valid[1]}：{o}启用失败，请手动启用\n'
                text += '\n'
            if changes != []:
                text += f'【更新情况】\n'
                for change in changes:
                    url = 'http://127.0.0.1:5600/api/envs'
                    body = {
                        "name": "JD_COOKIE",
                        "remarks": change[0],
                        "value": change[1],
                        "_id": change[2]
                    }
                    r = requests.put(url, json=body, headers=headers)
                    if r.ok:
                        removes = ' '.join(removes)
                        text += f'更新JD_COOKIE：{o}{body["value"]}\n移除的COOKIE：{o}{removes}\n\n'
                    else:
                        text += f'更新JD_COOKIE：{o}更新失败，请手动更新\n'
            await jdbot.edit_message(msg, text)
    except exceptions.TimeoutError:
        await jdbot.edit_message(msg, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


if chname:
    jdbot.add_event_handler(mycheckcookie, events.NewMessage(from_users=chat_id, pattern=mybot['命令别名']['cron']))