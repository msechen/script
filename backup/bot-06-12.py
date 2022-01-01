#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Author   : Chiupam (https://t.me/chiupam)
# @Data     : 2021-06-12 18:24
# @Version  : v 2.8
# @Updata   : 1. 尝试支持青龙用户添加额外的环境变量；2. 修改添加环境变量函数的执行逻辑；3. 不读取用户自定义的第六区域额外的环境变量；4. 使用标准config模版才可以使某些函数运行，因为某些函数需要标准模板的定位标志
# @Future   :


from JD_Diy.jbot import chat_id, jdbot, _ConfigDir, _ScriptsDir, _OwnDir, _LogDir, logger, TOKEN, _JdbotDir
from ..bot.utils import cmd, press_event, backfile, jdcmd, _DiyDir, V4, QL, _ConfigFile, mycron, myck
from telethon import events, Button
from asyncio import exceptions
import requests, re, os, asyncio


bot_id = int(TOKEN.split(':')[0])


# def readCookies():
#     """
#     读取 cookie
#     :return: 最新的 cookies 列表
#     """
#     ckreg = re.compile(r'pt_key=\S*;pt_pin=\S*;')
#     with open(f'{_ConfigDir}/config.sh', 'r', encoding='utf-8') as f:
#         lines = f.read()
#     cookies = ckreg.findall(lines)
#     for cookie in cookies:
#         if cookie == 'pt_key=xxxxxxxxxx;pt_pin=xxxx;':
#             cookies.remove(cookie)
#             break
#     return cookies


def checkCookie1():
    """
    检测 Cookie 是否过期
    :return: 返回过期的 Cookie 的账号数字列表
    """
    expired = []
    # cookies = readCookies()
    cookies = myck(_ConfigFile)
    for cookie in cookies:
        cknum = cookies.index(cookie) + 1
        if checkCookie2(cookie):
            expired.append(cknum)
    return expired, cookies


def checkCookie2(cookie):
    """
    检测 Cookie 是否过期
    :param cookiex: 传入 Cookie
    :return: 返回是否过期
    """
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
    try:
        r = requests.get(url, headers=headers)
        if r.ok:
            res = r.json()
            if res['retcode'] == '1001':
                return True
            else:
                return False
        else:
            return False
    except:
        return False


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/start$'))
async def myhello(event):
    """
    发送欢迎语
    :param event:
    :return:
    """
    try:
        diy_hello = """自定义机器人使用方法如下：
    /start 开始使用此自定义机器人
    /restart 重启机器人
    /upbot 升级此自定义机器人
    /help 获取机器人所有快捷命令，可直接发送至botfather
    /checkcookie 检测失效Cookie并把它屏蔽
    /export 读取第五区域额外的环境变量并进行修改
    此外 1、发送已 raw 的链接会下载文件，并让用户做出选择（可能不支持青龙）
        2、发送仓库链接会开始添加仓库，用户按要求回复即可（不支持青龙）
        3、接收到 cookie 过期消息自动执行 /checkcookie 指令
        4、发送 export key="value" 或 key="value" 的格式可添加额外的环境变量

    对于青龙用户，如需要支持一些功能，请和我说明白青龙的实现步骤，因为我不使用青龙，谢谢
    频道：[👬和东哥做兄弟](https://t.me/joinchat/kTJGWeHx5aAyYjBl) （限量进入以控制人数）
"""
        await asyncio.sleep(0.5)
        await jdbot.send_message(chat_id, diy_hello)
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/help$'))
async def myhelp(event):
    """
    获取自定义机器人的快捷命令
    :param event:
    :return:
    """
    try:
        diy_help = """restart - 重启机器人
upbot - 升级自定义机器人
export - 修改额外的环境变量
checkcookie - 检测cookie过期
"""
        await asyncio.sleep(0.5)
        await jdbot.send_message(chat_id, diy_help)
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@jdbot.on(events.NewMessage(from_users=[chat_id, bot_id], pattern=r'^/checkcookie$|.*cookie已失效'))
async def mycheckcookie(event):
    """
    自动检测cookie的过期情况
    :param event:
    :return:
    """
    try:
        msg = await jdbot.send_message(chat_id, '正在检测 cookie 过期情况')
        check = checkCookie1()
        expireds = check[0]
        text, o = '检测结果\n\n', '\n\t   └ '
        edit = False
        with open(_ConfigFile, 'r', encoding='utf-8') as f1:
            configs = f1.readlines()
        if V4:
            for config in configs:
                i = configs.index(config)
                if config.find("TempBlockCookie") != -1 and config.find("##") == -1 and configs[i + 1].find(";") == -1:
                    line = configs.index(config)
                    Temp = configs[line][:-1]
                    configs[line] = f"{Temp}program\n"
                    configs = ''.join(configs)
                    break
                elif config.find("AutoDelCron") != -1:
                    await jdbot.edit_message(msg, "无法寻找到目标行，请使用初始配置")
                    return
            n = " ".join('%s' % expired for expired in expireds)
            configs = re.sub(r'TempBlockCookie=".*"program', f'TempBlockCookie="{n}"', configs, re.M)
            text += f'【屏蔽情况】{o}TempBlockCookie="{n}"\n'
            edit = True
        elif QL:
            with open(_ConfigFile, 'r', encoding='utf-8') as f1:
                configs = f1.readlines()
            if configs[-1] == '\n':
                del (configs[-1])
            for expired in expireds:
                cookie = configs[int(expired) - 1]
                pt_pin = cookie.split(';')[-2]
                del (configs[int(expired) - 1])
                text += f'【删除情况】{pt_pin}{o}已经删除第 {expired} 个用户的Cookie\n'
                edit = True
        else:
            await jdbot.edit_message(msg, '未知环境的用户，无法使用 /checkcookie 指令')
            return
        if V4:
            with open(_ConfigFile, 'w', encoding='utf-8') as f2:
                f2.write(configs)
            await jdbot.edit_message(msg, text)
        elif edit and QL:
            with open(_ConfigFile, 'w', encoding='utf-8') as f2:
                f2.write(''.join(configs))
            await jdbot.edit_message(msg, text)
        else:
            await jdbot.edit_message(msg, '配置无需改动，可用cookie中并没有cookie过期')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/restart$'))
async def myrestart(event):
    """
    发送 /restart 重启机器人
    :param event:
    :return:
    """
    try:
        await jdbot.send_message(chat_id, '准备重启机器人')
        os.system('pm2 restart jbot')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/upbot$'))
async def myupbot(event):
    """
    发送 /upbot 升级我的自定义机器人
    :param event:
    :return:
    """
    try:
        SENDER = event.sender_id
        msg = await jdbot.send_message(chat_id, '开始更新机器人文件')
        btn = [Button.inline("请帮我更新 bot-06-21.py 文件", data='bot')]
        if os.path.isfile(f'{_JdbotDir}/diy/user.py'):
            userbtn = Button.inline("请帮我更新 user.py 文件", data='user')
            btn.append(userbtn)
        btns = [btn, [Button.inline("请帮我取消对话", data='cancel')]]
        async with jdbot.conversation(SENDER, timeout=60) as conv:
            await jdbot.delete_messages(chat_id, msg)
            msg = await conv.send_message("请问你需要更新哪个机器人文件？")
            msg = await jdbot.edit_message(msg, "请问你需要更新哪个机器人文件？", buttons=btns)
            convdata = await conv.wait_event(press_event(SENDER))
            res = bytes.decode(convdata.data)
            if res == 'cancel':
                msg = await jdbot.edit_message(msg, "对话已取消，感谢你的使用")
                conv.cancel()
                return
            else:
                fpath = f'{_JdbotDir}/diy/{res}.py'
                furl = f'https://raw.githubusercontent.com/chiupam/JD_Diy/master/jbot/{res}.py'
            conv.cancel()
        resp = requests.get(f'http://ghproxy.com/{furl}').text
        if resp.find('#!/usr/bin/env python3') == -1:
            resp = requests.get(f'https://mirror.ghproxy.com/{furl}').text
        if resp.find('#!/usr/bin/env python3') == -1:
            resp = requests.get(furl).text
        if resp.find('#!/usr/bin/env python3') != -1:
            backfile(fpath)
            with open(fpath, 'w+', encoding='utf-8') as f:
                f.write(resp)
            await jdbot.edit_message(msg, "准备重启机器人")
            os.system('pm2 restart jbot')
        elif resp.find('404: Not Found') != -1:
            await jdbot.edit_message(msg, "下载失败，库未开放或网络问题")
        else:
            await jdbot.edit_message(msg, "下载失败，请稍后重试")
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^https?://(raw)?.*(js|py|sh)$'))
async def mydownload(event):
    """
    用户发送 raw 链接后自动下载链接文件
    :param event:
    :return:
    """
    try:
        if not V4:
            await jdbot.send_message(chat_id, "警告！请悉知！\n此功能可能不支持非 v4-bot 用户")
        SENDER = event.sender_id
        start = await jdbot.send_message(chat_id, '开启下载文件会话')
        btn = [
            [Button.inline('我需要下载此链接文件，请继续', data='confirm')],
            [Button.inline('我不需要下载，请取消对话', data='cancel')]
        ]
        async with jdbot.conversation(SENDER, timeout=60) as conv:
            msg = await conv.send_message('检测到你发送了一条链接，请做出你的选择：\n', buttons=btn)
            convdata = await conv.wait_event(press_event(SENDER))
            await jdbot.delete_messages(chat_id, msg)
            res = bytes.decode(convdata.data)
            if res == 'cancel':
                await jdbot.edit_message(start, '对话已取消，感谢你的使用')
                conv.cancel()
                return
            else:
                # 以下代码大部分参照原作者：@MaiKaDe666，并作出一定的修改
                furl = event.raw_text
                if furl.startswith('https://raw.githubusercontent.com'):
                    furl = f'http://ghproxy.com/{furl}'
                resp = requests.get(furl).text
                if resp.find("<html>") != -1:
                    furl = event.raw_text
                    resp = requests.get(f"https://mirror.ghproxy.com/{furl}").text
                if resp.find("<html>") != -1:
                    furl = event.raw_text
                    resp = requests.get(furl).text
                if resp:
                    fname = furl.split('/')[-1]
                    fname_cn = re.findall(r"(?<=new\sEnv\(').*(?=')", resp, re.M)  # ((\d\s|\*\s){4}\*|(?<=cron\s\").*(?=\*\"))
                    cron = mycron(resp) # 导入新的机器人函数
                    if fname_cn != []:
                        fname_cn = fname_cn[0]
                    else:
                        fname_cn = ''
                    btn = [
                        [Button.inline('放入config目录', data=_ConfigDir),
                         Button.inline('放入jbot/diy目录', data=f'{_JdbotDir}/diy')],
                        [Button.inline('放入own目录', data=_DiyDir), Button.inline('放入own并运行', data='run_own')],
                        [Button.inline('放入scripts目录', data=_ScriptsDir),
                         Button.inline('放入scripts并运行', data='run_scripts')],
                        [Button.inline('请帮我取消对话', data='cancel')]
                    ]
                    write, cmdtext, addcron = True, None, True
                    msg = await conv.send_message(f'成功下载{fname_cn}脚本\n现在，请做出你的选择：', buttons=btn)
                    convdata = await conv.wait_event(press_event(SENDER))
                    await jdbot.delete_messages(chat_id, msg)
                    res = bytes.decode(convdata.data)
                    if res == 'cancel':
                        await jdbot.delete_messages(chat_id, start)
                        msg = await jdbot.send_message(chat_id, '对话已取消，感谢你的使用')
                        conv.cancel()
                        return
                    elif res == 'run_own':
                        path, cmdtext = f'{_DiyDir}/{fname}', f'{jdcmd} {_DiyDir}/{fname} now'
                        await jdbot.send_message(chat_id, f'我已经把{fname_cn}脚本已保存到own目录\n再进行一些操作，我将运行它')
                    elif res == 'run_scripts':
                        path, cmdtext = f'{_ScriptsDir}/{fname}', f'{jdcmd} {_ScriptsDir}/{fname} now'
                        await jdbot.send_message(chat_id, f'我已经把{fname_cn}脚本已保存到scripts目录\n再进行一些操作，我将运行它')
                    elif res == f'{_JdbotDir}/diy':
                        path = f'{res}/{fname}'
                        await jdbot.send_message(chat_id, f'机器人文件已保存到{res}目录\n请记得使用 /restart 指令重启机器人')
                        cron, addcron = False, False
                    else:
                        path = f'{res}/{fname}'
                        await jdbot.send_message(chat_id, f'{fname_cn}脚本已保存到{res}目录')
                    if cron:
                        btn = [
                            [Button.inline('是的，请帮我添加定时任务', data='add')],
                            [Button.inline('谢谢，但我有更好的想法', data='input')],
                            [Button.inline('谢谢，但我暂时不需要', data='cancel')]
                        ]
                        msg = await conv.send_message(f"这是我识别出来的 cron 表达式\n{cron}\n请问需要把它添加进定时任务中吗？", buttons=btn)
                        convdata = await conv.wait_event(press_event(SENDER))
                        await jdbot.delete_messages(chat_id, msg)
                        res2 = bytes.decode(convdata.data)
                        if res2 == 'cancel':
                            msg = await conv.send_message('那好吧，感谢你的使用')
                            conv.cancel()
                            await asyncio.sleep(2)
                            addcron = False
                        elif res2 == 'input':
                            msg = await conv.send_message("那请输入你所需的 cron 表达式")
                            cron = await conv.get_response()
                            cron = cron.raw_text
                    else:
                        btn = [
                            [Button.inline("我要手动输入cron表达式", data="input")],
                            [Button.inline("谢谢，但我暂时不需要", data='cancel')]
                        ]
                        msg = await conv.send_message("我没有识别出 cron 表达式\n请问你需要手动输入添加吗？", buttons=btn)
                        convdata = await conv.wait_event(press_event(SENDER))
                        await jdbot.delete_messages(chat_id, msg)
                        res2 = bytes.decode(convdata.data)
                        if res2 == 'cancel':
                            msg = await conv.send_message('那好吧，感谢你的使用')
                            await asyncio.sleep(2)
                            addcron = False
                        else:
                            msg = await conv.send_message('那请输入你所需的 cron 表达式')
                            cron = await conv.get_response()
                            cron = cron.raw_text
                    await jdbot.delete_messages(chat_id, msg)
                    await jdbot.delete_messages(chat_id, start)
                    conv.cancel()
                    if addcron:
                        cronfpath = f'{_ConfigDir}/crontab.list'
                        with open(cronfpath, 'a', encoding='utf-8') as f:
                            f.write(f'{cron} mtask {path}\n')
                        await jdbot.send_message(chat_id, "好的，我已经添加进定时任务中了")
                    if write:
                        backfile(path)
                        with open(path, 'w+', encoding='utf-8') as f:
                            f.write(resp)
                    if cmdtext:
                        await cmd(cmdtext)
                else:
                    conv.cancel()
                    await jdbot.delete_messages(chat_id, start)
                    await conv.send_message('下载失败，请稍后重试')
            conv.cancel()
    except exceptions.TimeoutError:
        msg = await jdbot.send_message(chat_id, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^https?://github\.com/\S+git$'))
async def myaddrepo(event):
    """
    用户发送仓库链接后开始在 config.sh 中添加仓库
    :param event:
    :return:
    """
    try:
        start = await jdbot.send_message(chat_id, '开始添加仓库，请按提示进行选择或操作')
        SENDER = event.sender_id
        url = event.raw_text
        short_url = url.split('/')[-1].replace(".git", "")
        tips = [
            f'正在设置 OwnRepoBranch 的值\n该值为你想使用脚本在[仓库]({url})的哪个分支', '正在设置 OwnRepoPath 的\n该值为你要使用的脚本在分支的哪个路径'
        ]
        tips_2 = [
            f'回复 main 代表使用 [{short_url}]({url}) 仓库的 "main" 分支\n回复 master 代表使用 [{short_url}]({url}) 仓库的 "master" 分支\n具体分支名称以你所发仓库实际为准\n',
            f'回复 scripts/jd normal 代表你想使用的脚本在 [{short_url}]({url}) 仓库的 scripts/jd 和 normal文件夹下\n回复 root cron 代表你想使用的脚本在 [{short_url}]({url}) 仓库的 根目录 和 cron 文件夹下\n具体目录路径以你所发仓库实际为准\n'
        ]
        btns = [
            [
                [Button.inline('我使用仓库的 "默认" 分支', data='root')],
                [Button.inline('我使用仓库的 "main" 分支', data='main'), Button.inline('我使用仓库的 "master" 分支', data='master')],
                [Button.inline('请让我手动输入', data='input'), Button.inline('请帮我取消对话', data='cancel')]
            ],
            [
                [Button.inline('我使用的脚本就在仓库根目录下', data='root')],
                [Button.inline('请让我手动输入', data='input'), Button.inline('请帮我取消对话', data='cancel')]
            ]
        ]
        replies = []
        nums = []
        async with jdbot.conversation(SENDER, timeout=180) as conv:
            for tip in tips:
                i = tips.index(tip)
                msg = await conv.send_message(tip)
                msg = await jdbot.edit_message(msg, tip, buttons=btns[i])
                convdata = await conv.wait_event(press_event(SENDER))
                res = bytes.decode(convdata.data)
                if res == 'cancel':
                    msg = await jdbot.edit_message(msg, '对话已取消，感谢你的使用')
                    conv.cancel()
                    return
                elif res == 'input':
                    await jdbot.delete_messages(chat_id, msg)
                    msg = await conv.send_message(tips_2[i])
                    reply = await conv.get_response()
                    replies.append(reply.raw_text)
                    await jdbot.delete_messages(chat_id, msg)
                else:
                    await jdbot.delete_messages(chat_id, msg)
                    replies.append(res)
            conv.cancel()
        with open(_ConfigFile, 'r', encoding='utf-8') as f1:
            configs = f1.readlines()
        for config in configs:
            if config.find('启用其他开发者的仓库方式一') != -1:
                line = int(configs.index(config))
            elif config.find('OwnRepoUrl') != -1 and config.find('#') == -1:
                num = int(re.findall(r'(?<=OwnRepoUrl)[\d]+(?==")', config)[0])
                content_data = re.findall(r'(?<==")[\S]+(?=")', config)
                if content_data == []:
                    nums.append(num)
                    break
                else:
                    nums.append(num + 1)
        nums.sort()
        OwnRepoUrl = f'OwnRepoUrl{nums[-1]}="{url}"'
        OwnRepoBranch = f'OwnRepoBranch{nums[-1]}="{replies[0].replace("root", "")}"'
        Path = replies[1].replace("root", "''")
        OwnRepoPath = f'OwnRepoPath{nums[-1]}="{Path}"'
        configs.insert(line + 1, f'\n{OwnRepoUrl}\n{OwnRepoBranch}\n{OwnRepoPath}\n')
        with open(_ConfigFile, 'w', encoding='utf-8') as f2:
            f2.write(''.join(configs))
        await jdbot.delete_messages(chat_id, start)
        await jdbot.send_file(chat_id, _ConfigFile, caption='你可以查阅上面这个文件')
        async with jdbot.conversation(SENDER, timeout=60) as conv:
            btns2 = [
                [Button.inline(f'是的，请帮我拉取{short_url}这个仓库的脚本', data='jup')],
                [Button.inline('谢谢，但我暂时不需要', data='cancel')]
            ]
            msg = await jdbot.send_message(chat_id, '请问你需要拉取仓库里面的脚本吗？', buttons=btns2)
            convdata = await conv.wait_event(press_event(SENDER))
            res = bytes.decode(convdata.data)
            if res == 'cancel':
                msg = await jdbot.edit_message(msg, '配置完成，感谢你的使用')
            else:
                msg = await jdbot.edit_message(msg, '正在为你拉取仓库脚本，详情请查阅下一条通知')
                await cmd(res)
            conv.cancel()
    except exceptions.TimeoutError:
        msg = await jdbot.send_message(chat_id, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'(export\s)?\w*=(".*"|\'.*\')'))  # 旧的表达式：(^export\s.*|.*=(\".*\"|\'.*\'))
async def myaddexport(event):
    """
    快捷添加额外的环境变量
    :param event:
    :return:
    """
    try:
        start = await jdbot.send_message(chat_id, '开始添加环境变量')
        SENDER = event.sender_id
        message = event.raw_text
        kv = message.replace("export ", "")
        kname = kv.split("=")[0]
        vname = re.findall(r"(\".*\"|'.*')", kv)[0][1:-1]
        async with jdbot.conversation(SENDER, timeout=60) as conv:
            btns = [
                [Button.inline("是的，就是这样", data='yes')],
                [Button.inline("错了，取消对话重新设置", data='cancel')]
            ]
            msg = await conv.send_message(f"我检测到你需要添加一个环境变量\n键名：{kname}\n值名：{vname}\n请问是这样吗？", buttons=btns)
            convdata = await conv.wait_event(press_event(SENDER))
            res = bytes.decode(convdata.data)
            if res == 'cancel':
                await jdbot.delete_messages(chat_id, start)
                await jdbot.edit_message(msg, '对话已取消，感谢你的使用')
                conv.cancel()
                return
            else:
                await jdbot.delete_messages(chat_id, msg)
                msg = await conv.send_message(f"好的，请稍等\n你设置变量为：{kname}=\"{vname}\"")
            conv.cancel()
        with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f1:
            configs = f1.read()
        await asyncio.sleep(1.5)
        await jdbot.delete_messages(chat_id, msg)
        if configs.find(kname) != -1:
            configs = re.sub(f'{kname}=(\"|\').*(\"|\')', f'{kname}="{vname}"', configs)
            end = "替换环境变量成功"
        else:
            async with jdbot.conversation(SENDER, timeout=60) as conv:
                btns = [
                    [Button.inline("是的，我需要", data='yes')],
                    [Button.inline("谢谢，但我暂时不需要", data='cancel')]
                ]
                msg = await conv.send_message(f"这个环境变量是新增的，需要我给他添加注释嘛？", buttons=btns)
                convdata = await conv.wait_event(press_event(SENDER))
                await jdbot.delete_messages(chat_id, msg)
                res = bytes.decode(convdata.data)
                if res == 'cancel':
                    msg = await conv.send_message("那好吧，准备新增变量")
                    note = ''
                else:
                    msg = await conv.send_message("那请回复你所需要添加的注释")
                    note = await conv.get_response()
                    await jdbot.delete_messages(chat_id, msg)
                    note = f" # {note.raw_text}"
                conv.cancel()
            with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f3:
                configs = f3.readlines()
            for config in configs:
                if config.find("第五区域") != -1 and config.find("↑") != -1:
                    end_line = configs.index(config)
                    break
            configs.insert(end_line - 2, f'export {kname}="{vname}"{note}\n')
            await asyncio.sleep(1.5)
            await jdbot.delete_messages(chat_id, msg)
            end = "新增环境变量成功"
        with open(f"{_ConfigDir}/config.sh", 'w', encoding='utf-8') as f2:
            f2.write(''.join(configs))
        await jdbot.delete_messages(chat_id, start)
        await jdbot.send_message(chat_id, end)
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/export$'))
async def mychangeexport(event):
    """
    修改第五区域额外的环境变量
    :param event:
    :return:
    """
    try:
        SENDER = event.sender_id
        start = await jdbot.send_message(chat_id, "开始读取你额外的环境变量")
        with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f1:
            configs = f1.readlines()
        for config in configs:
            if config.find("第五区域") != -1 and config.find("↓") != -1:
                start_line = configs.index(config) + 1
            elif config.find("第五区域") != -1 and config.find("↑") != -1:
                end_line = configs.index(config)
        knames, vnames, notes = [], [], []
        for config in configs[start_line:end_line]:
            if config.find("export") != -1 and config.find("##") == -1:
                kv = config.replace("export ", "")
                kname = kv.split("=")[0]
                vname = re.findall(r"[^\"']+(?=\"|')", kv)[1]
                if kv.find(" # ") != -1:
                    note = re.findall(r"(?<=#\s).*", kv)[0]
                else:
                    note = 'none'
                knames.append(kname), vnames.append(vname), notes.append(note)
            elif config.find("↓") != -1:
                break
        btns = []
        for i in range(len(knames)):
            if notes[i] != 'none':
                btn = Button.inline(f"{notes[i]}", data=knames[i])
            else:
                btn = Button.inline(f"{knames[i]}", data=knames[i])
            btns.append(btn)
        btns.append(Button.inline("帮我取消对话", data='cancel'))
        btns = [btns[i:i + 3] for i in range(0, len(btns), 3)]
        async with jdbot.conversation(SENDER, timeout=60) as conv:
            msg = await conv.send_message("这是我查询到的环境变量名称\n请问你需要修改哪一个？", buttons=btns)
            convdata = await conv.wait_event(press_event(SENDER))
            await jdbot.delete_messages(chat_id, msg)
            res = bytes.decode(convdata.data)
            if res == 'cancel':
                await jdbot.delete_messages(chat_id, msg)
                await jdbot.edit_message(start, '对话已取消，感谢你的使用')
                conv.cancel()
                return
            else:
                kname = res
                msg = await conv.send_message("现在请回复你所需要设置的值")
                vname = await conv.get_response()
                vname = vname.raw_text
                await jdbot.delete_messages(chat_id, msg)
                btns = [
                    [Button.inline("是的，就是这样", data='yes')],
                    [Button.inline("错了，取消对话重新设置", data='cancel')]
                ]
                msg = await conv.send_message(f'好的，请稍等\n键名：{kname}\n值名：{vname}\n请问是这样吗？', buttons=btns)
                convdata = await conv.wait_event(press_event(SENDER))
                res = bytes.decode(convdata.data)
                if res == 'cancel':
                    await jdbot.delete_messages(chat_id, start)
                    await jdbot.edit_message(msg, '对话已取消，感谢你的使用')
                    conv.cancel()
                    return
                else:
                    await jdbot.delete_messages(chat_id, msg)
                    msg = await conv.send_message(f'好的，请稍等\n你设置变量为：{kname}="{vname}"')
                conv.cancel()
                with open(f"{_ConfigDir}/config.sh", 'r', encoding='utf-8') as f2:
                    configs = f2.read()
                configs = re.sub(f'{kname}=(\"|\')\S+(\"|\')', f'{kname}="{vname}"', configs)
                with open(f"{_ConfigDir}/config.sh", 'w', encoding='utf-8') as f3:
                    f3.write(configs)
                await asyncio.sleep(1.5)
                await jdbot.delete_messages(chat_id, msg)
                await jdbot.delete_messages(chat_id, start)
                await jdbot.send_message(chat_id, "修改环境变量成功")
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))
