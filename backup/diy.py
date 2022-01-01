from JD_Diy.jbot import chat_id, jdbot, _LogDir, _ConfigDir
from ..bot.utils import cookies
from telethon import events, Button
from asyncio import exceptions
import requests, re, os, json, asyncio


with open(f'{_ConfigDir}/bot.json', 'r', encoding='utf-8') as botf:
    bot_id = int(json.load(botf)['bot_token'].split(':')[0])


def press_event(user_id):
    return events.CallbackQuery(func=lambda e: e.sender_id == user_id)


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


# 监测到机器人发送 cookie 失效信息时，自动屏蔽此账号
@jdbot.on(events.NewMessage(from_users=bot_id, pattern=r'.*cookie.*已失效'))
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
            await jdbot.edit_message(msg, '成功屏蔽')
        elif config.find('AutoDelCron') != -1: # 如果 config 中找不到符合条件的字符串，但是却找到了 AutoDelCron 则证明找过头了
            break # 退出 for 循环


# 发送欢迎语
@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/start'))
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
    /checkcookie 检测Cookie并屏蔽（暂不适用于青龙）

    仓库：https://github.com/chiupam/JD_Diy.git
    欢迎🌟Star & 提出🙋[isuss](https://github.com/chiupam/JD_Diy/issues/new) & 请勿🚫Fork
"""
    await asyncio.sleep(1) # 等待 1 秒后才发送欢迎语
    await jdbot.send_message(chat_id, diy_hello) # 给用户发送一条消息证明程序没有在偷懒


# 获取自定义机器人的快捷命令
@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/help'))
async def myhelp(event):
    """
    发送快捷命令
    :param event:
    :return:
    """
    diy_help = """restart - 重启机器人
checkcookie - 检测cookie
"""
    await asyncio.sleep(1) # 等待 1 秒后才发送快捷命令
    await jdbot.send_message(chat_id, diy_help) # 给用户发送一条消息证明程序没有在偷懒


# 自动检测cookie的过期情况并临时屏蔽此账号
@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/checkcookie'))
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
@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/restart'))
async def myrestart(event):
    """
    发送 /restart 重启机器人
    :param event:
    :return:
    """
    await jdbot.send_message(chat_id, '准备重启机器人……')
    os.system('pm2 restart jbot')
