#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Author   : Chiupam
# @Data     : 2021-06-13
# @Version  : v 1.0
# @Updata   :
# @Future   :


from .. import chat_id, jdbot, logger, TOKEN, _JdbotDir, _ConfigDir
from ..bot.utils import press_event, backfile, _DiyDir, V4, QL, split_list, row, mybot, mycron, qlcron, _Auth, upcron
from telethon import events, Button
from asyncio import exceptions
import requests, os, asyncio, json

bot_id = int(TOKEN.split(':')[0])


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/start$'))
async def myhello(event):
    try:
        msg_id = event.id
        msg = '''使用方法如下：
    /help 获取命令，可直接发送至botfather。
    /start 开始使用本程序。
    /restart 重启本程序。
    /up 升级本程序。
    /upbot 升级拓展功能。
    /a 使用你的自定义快捷按钮。
    /bean 获取京豆变化，默认为总京豆收支。/bean in 京豆进账，/bean out 京豆支出。
    /chart 获取京豆变化数据柱状图和曲线图。例：/chart 1，获取账号1京豆变化。
    /cmd 执行命令，例：/cmd python3 /python/bot.py，则执行python目录下的bot.py。不建议使用BOT使用并发，可能产生不明原因的崩溃。 
    /dl 下载文件
    /edit 从/jd目录选择文件并编辑，需要将编辑好信息全部发给BOT，BOT会根据你发的信息进行替换。建议仅编辑config或crontab.list，其他文件慎用！！！
    /getcookie 扫码获取cookie，30s内可取消，31s~2分钟内不能进行其他交互直到超时或获取到cookie。
    /getfile 获取/jd目录下文件。
    /log 查看脚本执行日志。
    /node 执行js脚本，输入/node jd_bean_change。如执行非scripts目录js，需输入绝对路径执行。node命令会等待脚本执行完，期间不能使用BOT，建议使用snode命令。
    /set 设置。
    /setshort 设置自定义按钮，每次设置会覆盖原设置。
    /snode 选择脚本执行，只能选择/scripts和/own目录下的脚本，选择完后直接后台运行，不影响BOT响应其他命令。 
    /repo 管理添加的仓库。
    /checkcookie 检测账号过期。
    /install 拓展本程序功能。
    /uninstall 删除本程序拓展功能。
    /list 列出本程序拓展的功能。

    此外，直接发送文件至BOT，会让您选择保存到目标文件夹，支持保存并运行。发送以 .git 结尾的链接开始添加仓库。发送以 .js .sh .py结尾的已raw链接开始下载文件。发送格式为 key="value" 或者 key='value' 的消息开始添加环境变量。

[原机器人项目地址](https://github.com/SuMaiKaDe/bot) | [原机器人交流频道](https://t.me/tiangongtong) | [原机器人基本教程](https://github.com/SuMaiKaDe/bot#readme)
[diy机器人项目地址](https://github.com/chiupam/JD_Diy) | [diy机器人通知频道](https://t.me/JD_Diy_Channel)'''
        await jdbot.edit_message(bot_id, msg_id + 1, msg)
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/help$'))
async def myhelp(event):
    try:
        msg_id = event.id
        msg = '''
a-自定义快捷按钮
bean-获取收支
chart-统计收支变化
checkcookie-检测过期
cmd-执行cmd命令
dl-下载文件
edit-编辑文件
getcookie-扫码获取cookie
getfile-获取jd目录下文件
install-扩展此程序功能
log-选择日志
list-列出已拓展功能
node-执行js脚本文件，绝对路径
restart-重启本程序
repo-仓库管理
set-BOT设置
setshort-设置自定义按钮
snode-选择脚本后台运行
start-开始使用本程序
uninstall-删除拓展功能
upbot-更新拓展功能
'''
        await jdbot.edit_message(bot_id, msg_id + 1, msg)
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/restart$'))
async def myrestart(event):
    try:
        await restart()
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/install$'))
async def myinstall(event):
    try:
        SENDER = event.sender_id
        furl_startswith = "https://raw.githubusercontent.com/chiupam/JD_Diy/master/jbot/"
        btns = [
            Button.inline("升级机器人", data="upbot.py"),
            Button.inline("检查账号过期", data="checkcookie.py"),
            Button.inline("下载文件", data="download.py"),
            Button.inline("添加仓库", data="addrepo.py"),
            Button.inline("添加环境变量", data="addexport.py"),
            Button.inline("修改环境变量", data="editexport.py"),
            Button.inline("帮我取消对话", data='cancel')
        ]
        async with jdbot.conversation(SENDER, timeout=60) as conv:
            msg = await conv.send_message("请问你需要拓展什么功能？", buttons=split_list(btns, row))
            convdata = await conv.wait_event(press_event(SENDER))
            fname = bytes.decode(convdata.data)
            if fname == 'cancel':
                await jdbot.edit_message(msg, '对话已取消，感谢你的使用')
                conv.cancel()
                return
            conv.cancel()
        msg = await jdbot.edit_message(msg, "开始下载文件")
        furl = f"{furl_startswith}{fname}"
        if '下载代理' in mybot.keys() and str(mybot['下载代理']).lower() != 'false':
            furl = f'{str(mybot["下载代理"])}/{furl}'
        try:
            resp = requests.get(furl).text
            info = f"下载{fname}成功，准备重启程序"
            botresp = True
        except Exception as e:
            info = f"下载{fname}失败，请自行拉取文件进/jbot/diy目录，或尝试使用 /set 指令更换下载代理"
            botresp = False
        await jdbot.edit_message(msg, info)
        if botresp:
            path = f"{_JdbotDir}/diy/{fname}"
            backfile(path)
            with open(path, 'w+', encoding='utf-8') as f:
                f.write(resp)
            await restart()
    except exceptions.TimeoutError:
        msg = await jdbot.edit_message(msg, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/uninstall$'))
async def myuninstall(event):
    try:
        SENDER = event.sender_id
        mydiy = {
            "checkcookie.py": "检查账号过期",
            "upbot.py": "升级机器人",
            "download.py": "下载文件",
            "addrepo.py": "添加仓库",
            "addexport.py": "添加环境变量",
            "editexport.py": "修改环境变量",
            "user.py": "user.py"
        }
        btns = []
        dirs = os.listdir(f"{_JdbotDir}/diy")
        for dir in dirs:
            if dir in mydiy:
                btns.append(Button.inline(mydiy[f'{dir}'], data=dir))
        btns.append(Button.inline("帮我取消对话", data='cancel'))
        async with jdbot.conversation(SENDER, timeout=60) as conv:
            msg = await conv.send_message("请问你需要删除哪个功能？", buttons=split_list(btns, row))
            convdata = await conv.wait_event(press_event(SENDER))
            fname = bytes.decode(convdata.data)
            if fname == 'cancel':
                await jdbot.edit_message(msg, '对话已取消，感谢你的使用')
                conv.cancel()
                return
            conv.cancel()
        fpath = f"{_JdbotDir}/diy/{fname}"
        msg = await jdbot.edit_message(msg, "开始删除机器人功能")
        os.system(f'rm -rf {fpath}')
        await asyncio.sleep(1.5)
        if not os.path.isfile(fpath):
            await jdbot.edit_message(msg, "删除成功")
        else:
            await jdbot.edit_message(msg, f"删除失败，请手动删除{fpath}文件")
        await restart()
    except exceptions.TimeoutError:
        msg = await jdbot.edit_message(msg, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/list$'))
async def mylist(event):
    try:
        lists = []
        mydiy = {
            "checkcookie.py": "检查账号过期",
            "upbot.py": "升级机器人",
            "download.py": "下载文件",
            "addrepo.py": "添加仓库",
            "addexport.py": "添加环境变量",
            "editexport.py": "修改环境变量",
            "user.py": "user.py"
        }
        dirs = os.listdir(f"{_JdbotDir}/diy")
        for dir in dirs:
            if dir in mydiy:
                lists.append(mydiy[f'{dir}'])
        lists = '\n'.join(lists)
        await jdbot.send_message(chat_id, f"目前你拓展的功能有：\n\n{lists}")
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/beta$'))
async def mydiyset(event):
    try:
        SENDER = event.sender_id
        btns = [
            Button.inline("内测功能1", data="install_getcookie.py"),
            Button.inline("内测功能2", data="install_web.py"),
            Button.inline("取消对话", data='cancel')
        ]
        async with jdbot.conversation(SENDER, timeout=60) as conv:
            msg = await conv.send_message("请做出你的选择", buttons=split_list(btns, row))
            convdata = await conv.wait_event(press_event(SENDER))
            fname = bytes.decode(convdata.data)
            if fname == 'cancel':
                await jdbot.edit_message(msg, '对话已取消，感谢你的使用')
                conv.cancel()
                return
            conv.cancel()
            await jdbot.edit_message(msg, "正在安装内测功能")
            cmdtext = f"python {_JdbotDir}/diy/{fname}"
            os.system(cmdtext)
    except exceptions.TimeoutError:
        msg = await jdbot.edit_message(msg, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


# 重启函数
async def restart():
    try:
        if V4:
            await jdbot.send_message(chat_id, "重启程序")
            os.system("pm2 restart jbot")
        elif QL:
            await jdbot.send_message(chat_id, "重启程序")
            os.system("ql bot")
        else:
            await jdbot.send_message(chat_id, "未知用户，自行重启机器人")
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


# 修改原作者的 cronup() 函数便于我继续进行此功能的编写
async def mycronup(jdbot, conv, resp, filename, msg, SENDER, markup, path):
    try:
        cron = mycron(resp)
        msg = await jdbot.edit_message(msg, f"这是我识别的定时\n```{cron}```\n请问是否需要修改？", buttons=markup)
    except:
        msg = await jdbot.edit_message(msg, f"我无法识别定时，将使用默认定时\n```0 0 * * *```\n请问是否需要修改？", buttons=markup)
    convdata3 = await conv.wait_event(press_event(SENDER))
    res3 = bytes.decode(convdata3.data)
    if res3 == 'confirm':
        await jdbot.delete_messages(chat_id, msg)
        msg = await conv.send_message("请回复你需要设置的 cron 表达式，例如：0 0 * * *")
        cron = await conv.get_response()
        cron = cron.raw_text
        msg = await jdbot.edit_message(msg, f"好的，你将使用这个定时\n```{cron}```")
        await asyncio.sleep(1.5)
    await jdbot.delete_messages(chat_id, msg)
    if QL:
        crondata = {"name": f'{filename.split(".")[0]}', "command": f'task {path}/{filename}', "schedule": f'{cron}'}
        with open(_Auth, 'r', encoding='utf-8') as f:
            auth = json.load(f)
        qlcron('add', crondata, auth['token'])
    else:
        upcron(f'{cron} mtask {path}/{filename}')
    await jdbot.send_message(chat_id, '添加定时任务成功')


# 升级 user.py 的函数
async def upuser(fname, msg):
    try:
        furl_startswith = "https://raw.githubusercontent.com/chiupam/JD_Diy/master/jbot/"
        speeds = ["http://ghproxy.com/", "https://mirror.ghproxy.com/", ""]
        msg = await jdbot.edit_message(msg, "开始下载文件")
        for speed in speeds:
            resp = requests.get(f"{speed}{furl_startswith}{fname}").text
            if "#!/usr/bin/env python3" in resp:
                break
        if resp:
            msg = await jdbot.edit_message(msg, f"下载{fname}成功")
            path = f"{_JdbotDir}/diy/user.py"
            backfile(path)
            with open(path, 'w+', encoding='utf-8') as f:
                f.write(resp)
            await restart()
        else:
            await jdbot.edit_message(msg, f"下载{fname}失败，请自行拉取文件进/jbot/diy目录")
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))

