#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Author   : Chiupam (https://t.me/chiupam)
# @Data     : 2021-06-02 16：42
# @Version  : v1.6
# @Updata   : 1. 添加 /start 指令，发送欢迎语；2. 添加 /help 指令，发送使用帮助；3. 添加 /restart 指令，重启自定义机器人；4. 修复 /checkcookie 指令的逻辑错误；5. 删除 /umtempblockcookie 指令；6. 仅监控自己在机器人窗口的发言信息；
# @Future   : 1. Null


from .. import chat_id, api_hash, api_id, proxystart, proxy, jdbot, _LogDir, _ConfigDir
from ..bot.utils import cookies
from telethon import events, TelegramClient, Button
from asyncio import exceptions
import requests, re, os, json, asyncio


# --------------------------------------------------------------------------------------- #
# 声明：
#     此脚本是根据布道场群文件 shopbean.py(v1.1) 改写的，并非完全自创
# 已有功能：
#     1. 解析 GET 请求后的包，以及其推送到 Telegram Bot 的消息会更加美观
#     2. 同时监控龙王庙频道，截取RRA，配合 redrain.py 定时使用（但 redrain.py 正在测试）
# 使用方法：（直链: https://t.me/monk_dust_channel/692）
#     1. 存储路径：/jd/jbot/diy/（如果没有需要重新映射此文件夹）
#     2. 进入容器：docker exec -it jd bash
#     3. 停机器人：pm2 stop jbot
#     4. 开机器人：python3 -m jbot
#     5. 登陆后按 Ctrl + C 退出前台
#     6. 后台启动：pm2 start jbot
# 报错处理：（直链：https://t.me/monk_dust_channel/714）
#     一、 机器人交互没有反应，或者测试没有反应
#         1. docker exec -it jd bash
#         2. rm shopbean.session
#         3. pm2 stop jbot
#         4. python -m jbot
#         5. 登陆后按 Ctrl + C 退出前台
#         6. pm2 start jbot
#     二、 青龙暂不适用某些指令
#         1. /checkcookie
#         2. /untempblockcookie
#     三、 新建容器后未成功启用原机器人
#         1. 建议先删除 shopbean.py
#         2. 把原机器人启动成功
#         3. 再来配置 shopbean.py
# --------------------------------------------------------------------------------------- #


"""机器人所有快捷命令
start - 开始使用
restart - 重启机器人
help - 获取命令
a - 快捷按钮
cmd - 执行CMD命令
node - 前台执行脚本
snode - 后台执行脚本
getfile - 获取文件
edit - 文件编辑
getcookie - 扫码获取Cookie
checkcookie - 检测失效Cookie并临时屏蔽
"""


if proxystart:
    client = TelegramClient("shopbean", api_id, api_hash, proxy=proxy, connection_retries=None).start()
else:
    client = TelegramClient("shopbean", api_id, api_hash, connection_retries=None).start()


with open(f'{_ConfigDir}/bot.json', 'r', encoding='utf-8') as botf:
    bot_id = int(json.load(botf)['bot_token'].split(':')[0])


def press_event(user_id):
    return events.CallbackQuery(func=lambda e: e.sender_id == user_id)


# 监控布道场频道，检测到关键事件的触发时执行的函数
def getbean(i, cookie, url):
    """
    发起 GET 请求
    :param i: 账号
    :param cookie: 传入Cookie
    :param url: 传入 GET 所需的 url
    :return: 返回推送的消息主体
    """
    headers = { # 请求头
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Safari/537.36",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "Cookie": cookie, # cookie
    }
    result, o = '', '\n\t\t└' # 定义一些变量
    try: # 开始尝试执行下列代码
        r = requests.get(url=url, headers=headers) # 发起 GET 网络请求
        res = r.json() # 使用 json 解析 GET 后的数据包
       # 判断 cookie 是否过期
        if res['code'] == '0': # cookie 未过期
            followDesc = res['result']['followDesc'] # 截取 followDesc 的值
            if followDesc.find('成功') != -1: # 成功获取奖励
                try:
                    for n in range(len(res['result']['alreadyReceivedGifts'])):
                        redWord = res['result']['alreadyReceivedGifts'][n]['redWord']
                        rearWord = res['result']['alreadyReceivedGifts'][n]['rearWord']
                        result += f"{o}领取成功，获得{redWord}{rearWord}"
                except:
                    giftsToast = res['result']['giftsToast'].split(' \n ')[1]
                    result = f"{o}{giftsToast}"
            elif followDesc.find('已经') != -1: # 已经获取过奖励
                result = f"{o}{followDesc}"
        else: # cookie 已过期或请求头缺少某些键值对
            result = f"{o}Cookie 可能已经过期"
    except Exception as e: # 如果 try 中发生任何错误
        if str(e).find('(char 0)') != -1: # 如果错误提示中找到 (char 0) 字符
            result = f"{o}访问发生错误：无法解析数据包" # 无法解析 GET 后的数据包
        else: # 其他情况的错误
            result = f"{o}访问发生错误：{e}" # 直接返回错误信息
    return f"\n京东账号{i}{result}\n" # 执行函数后输出的内容


# 检查 cookie 是否过期的第一个函数
def checkCookie1():
    """
    检测 Cookie 是否过期
    :return: 返回过期的 Cookie 的账号数字列表
    """
    expired = [] # 首先定义一个空列表，名为 expired 列表
    for cookie in cookies: # 从 cookies 列表中轮询 cookie
       # 判断 cookie 是否过期
        if checkCookie2(cookie): # 过期了
            expired.append(cookies.index(cookie) + 1) # 把过期的第x个账号添加进 expired 列表中
    return expired # 执行函数后输出 expired 列表


# 检查 cookie 是否过期的第二个函数
def checkCookie2(cookie):
    """
    检测 Cookie 是否过期
    :param cookiex: 传入 Cookie
    :return: 返回是否过期
    """
    url = "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion" # 定义 GET 的链接
    headers = { # 请求头
        "Host": "me-api.jd.com",
        "Accept": "*/*",
        "Connection": "keep-alive",
        "Cookie": cookie, # 传入 cookie 的值
        "User-Agent": "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        "Accept-Language": "zh-cn",
        "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
        "Accept-Encoding": "gzip, deflate, br"
    }
    try: # 开始尝试执行下列代码
        r = requests.get(url, headers=headers) # 发起 GET 网络请求
        if r.ok: # 状态码为 200
            res = r.json() # 解析 GET 后返回的数据包
            if res['retcode'] == '1001': # 如果 retcode 的值为 1001 则视为 cookie 过期
                return True # 执行函数后输出真
            else: # 如果 retcode 的值不为 1001 则视为 cookie 未过期
                return False # 执行函数后输出假
        else: # 状态码不为 200
            return False # 执行函数后输出假
    except: # 如果 try 中发生任何错误
        return False # 执行函数后输出假


# 监控布道场频道
@client.on(events.NewMessage(chats=-1001197524983))
async def shopbean(event):
    """
    监控布道场
    :param event:
    :return:
    """
    message = event.message.text # 获取频道发布的消息
    url = re.findall(re.compile(r"[(](https://api\.m\.jd\.com.*?)[)]", re.S), message) # 获取频道发布的消息中符合正则表达式的 url 链接
    if url != [] and len(cookies) > 0: # 如果 url 链接不为空，且 cookies 列表的长度大于 0
        i = 0 # 定义 i 为 0
        info = '关注店铺\n' + message.split("\n")[0] + "\n" # 定义给 Telegram Bot 发送消息的消息标题
        for cookie in cookies: # 从 cookies 列表中轮询 cookie
            try: # 开始尝试执行下列代码
                i += 1 # 把上一个 i 加上 1
                info += getbean(i, cookie, url[0]) # 执行 getBean() 函数后生成消息的消息内容
            except: # 如果 try 中发生任何错误
                continue # 继续执行 for 下的代码
        await jdbot.send_message(chat_id, info) # 执行完 for 下的代码给 Telegram Bot 发送消息


# 监控龙王庙频道
@client.on(events.NewMessage(chats=-1001159808620))
async def redrain(event):
    """
    监控龙王庙
    :param event:
    :return:
    """
    message = event.message.text
    if message.find('RRA') != -1:
        RRA = re.findall(r"RRA.*", message) # 截取 RRA 字符串
        input_RRA = '&'.join(RRA) # 处理 RRA 字符串
        start_time = re.findall(re.compile(r"开.*"), message) # 截取开始时间
        file = '-'.join(start_time[0].split(' ')[1].split(':')[:-1]) # 定义文件名
        with open(f'{_LogDir}/{file}.txt', 'w', encoding='utf-8') as f: # 打开 log 下一个新的写入文件
            print(input_RRA, file=f) # 把 RRA 字符串写入文件中


# 监测到机器人发送 cookie 失效信息时，自动屏蔽此账号
@client.on(events.NewMessage(from_users=bot_id, pattern=r'.*cookie.*已失效'))
async def myexpiredcookie(event):
    """
    当监测到 Cookie 失效时第一时间屏蔽此账号并发送提醒
    :param event:
    :return:
    """
    path = f'{_ConfigDir}/config.sh' # 设置 config.sh 的路径，并定义为变量 path
    message = event.message.text # 处理机器人发送的消息，并定义为变量 message
    m = message.split('\n') # 以换行符为分隔符，对变量 message 进行切割，生成一个列表，并定义为变量 m
    for n in m: # 从 m 列表轮询元素，并将元素定义为变量 n
        if n.find('京东账号') != -1: # 如果在变量 n 中找到字符串 京东账号
            # x =  # 以空格为分隔符，对变量 n 进行切割，生成一个列表，去第一个元素并定义为变量 x
            i = ''.join(re.findall(r'\d', n.split(' ')[0])) # 从变量 x 中使用正则表达式寻找到账号数，并定义为变量 i
            msg = await jdbot.send_message(chat_id, f'监测到京东账号{i}的 cookie 已过期，正在自动屏蔽') # 给用户发送一条消息证明程序没有在偷懒
            break # 退出 for 循环
    with open(path, 'r', encoding='utf-8') as f1: # 打开 config.sh 文件，只读
        configs = f1.readlines() # 把 config.sh 文件的每一行写入一个列表，定义为 configs 变量
    for config in configs: # 从 configs 列表轮询元素，并将元素定义为变量 config
        if config.find('TempBlockCookie') != -1 and configs[configs.index(config) + 1].find(';;\n') == -1 and config.find('举例') == -1: # 如果找到需要的。。。
            z = configs.index(config) # 定位改元素顺序
            y = config[config.find('="') + 2:-2].split( ) # 截取先前就已经被屏蔽的账号，以空格为分隔符，切割字符串，并定义为变量 y 列表
            if y != []: # 判断 y 列表为非空列表
                if i in y: # 已经屏蔽过了
                    await jdbot.edit_message(msg, f'早前就已经屏蔽了京东账号{i}的 cookie ，无需再次屏蔽')
                    break # 退出 for 循环
                else: # 没有被屏蔽
                    y.append(i) # 把新失效的账号添加进去
                    i = ' '.join(y) # 把新的 y 列表转化成字符串，并定义为 i
                    configs[z] = f'TempBlockCookie="{i}"\n' # 修改此元素的内容为新的需要屏蔽账号 TempBlockCookie="{i}"\n 
            else: # 判断 y 列表为空列表
                configs[z] = f'TempBlockCookie="{i}"\n' # 修改此元素的内容为新的需要屏蔽账号 TempBlockCookie="{i}"\n 
            with open(path, 'w', encoding='utf-8') as f2:  # 打开 config.sh 文件，覆写
                del (configs[-1])  # 删除 configs 列表最后一个元素，因为这一行往往是空白行
                print(''.join(configs), file=f2)  # 把新的 configs 列表转化成字符串，最后写入进 config.sh 文件
            await jdbot.edit_message(msg, '成功屏蔽此帐号\n请及时 /getcookie 获取')
        elif config.find('AutoDelCron') != -1: # 如果 config 中找不到符合条件的字符串，但是却找到了 AutoDelCron 则证明找过头了
            break # 退出 for 循环


# -------------------------------------------------------- 指令部分 -------------------------------------------------------- #


# 发送欢迎语
@client.on(events.NewMessage(chats=[bot_id], from_users=chat_id, pattern=r'^/start'))
async def myhello(event):
    """
    发送欢迎语
    :param event:
    :return:
    """
    diy_hello = """自定义机器人使用方法如下：
    /start 开始使用此自定义机器人
    /restart 重启机器人
    /help 获取机器人所有快捷命令，可直接发送至botfather
    /checkcookie 检测失效Cookie并临时屏蔽（暂不适用于青龙）

    仓库：https://github.com/chiupam/JD_Diy.git
    欢迎🌟Star & 提出🙋[isuss](https://github.com/chiupam/JD_Diy/issues/new) & 请勿🚫Fork
"""
    await asyncio.sleep(1) # 等待 1 秒后才发送欢迎语
    await jdbot.send_message(chat_id, diy_hello) # 给用户发送一条消息证明程序没有在偷懒


# 获取自定义机器人的快捷命令
@client.on(events.NewMessage(chats=[bot_id], from_users=chat_id, pattern=r'^/help'))
async def myhello(event):
    """
    发送快捷命令
    :param event:
    :return:
    """
    diy_help = """restart - 重启机器人
checkcookie - 检测临时屏蔽
"""
    await asyncio.sleep(1) # 等待 1 秒后才发送快捷命令
    await jdbot.send_message(chat_id, diy_help) # 给用户发送一条消息证明程序没有在偷懒


# 自动检测cookie的过期情况并临时屏蔽此账号
@client.on(events.NewMessage(chats=[bot_id], from_users=chat_id, pattern=r'^/checkcookie'))
async def mycheckcookie(event):
    """
    临时屏蔽某个cookie
    :param event:
    :return:
    """
    expired = checkCookie1()
    msg = await jdbot.send_message(chat_id, '正在自动检测 cookie 过期情况')
    if expired != []:
        n = " ".join('%s' % i for i in expired)
        path = f'{_ConfigDir}/config.sh'
        with open(path, 'r', encoding='utf-8') as f1:
            configs = f1.readlines()
        for config in configs:
            if config.find('TempBlockCookie') != -1 and configs[configs.index(config) + 1].find(';;\n') == -1 and config.find('举例') == -1:
                configs[configs.index(config)] = f'TempBlockCookie="{n}"\n'
                with open(path, 'w', encoding='utf-8') as f2:
                    print(''.join(configs), file=f2)
                await jdbot.edit_message(msg, f'以下是屏蔽的账号\n{n}')
                break
            elif config.find('AutoDelCron') != -1:
                break
    else:
        await jdbot.edit_message(msg, '没有 Cookie 过期，无需临时屏蔽')


# 重启机器人
@client.on(events.NewMessage(chats=[bot_id], from_users=chat_id, pattern=r'^/restart'))
async def myuntempblockcookie(event):
    """
    发送 /restart 重启机器人
    :param event:
    :return:
    """
    await jdbot.send_message(chat_id, '准备重启机器人……')
    os.system('pm2 restart jbot')


# -------------------------------------------------------- 指令部分 -------------------------------------------------------- #

