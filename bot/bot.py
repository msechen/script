#!/usr/bin/env python3
# _*_ coding:utf-8 _*_
# time：     2021
# newtime：  2021-04-25
# version：  0.1.7
# log：      新增：连接成功，机器人发送通知，修复：没有中文名称脚本不能识别
# author：   https://github.com/SuMaiKaDe

from telethon import TelegramClient, events, Button
import requests
import re
import json
import time
import os
import qrcode
import logging
import subprocess
import shutil
from asyncio import exceptions
logging.basicConfig(
    format='%(asctime)s-%(name)s-%(levelname)s=> [%(funcName)s] %(message)s ', level=logging.INFO)
logger = logging.getLogger(__name__)
# 定义目录,以bot.py所在目录上级目录为/jd或/ql文件夹
_JdDir = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
_ConfigDir = _JdDir + '/config'
_ScriptsDir = _JdDir + '/scripts'
_OwnDir = _JdDir + '/own'
_LogDir = _JdDir + '/log'
_shortcut = _ConfigDir + '/shortcut.list'
_bot = _ConfigDir + '/bot.json'
_qr = _ConfigDir + 'qr.jpg'
# 频道id/用户id
with open(_bot, 'r', encoding='utf-8') as f:
    bot = json.load(f)
chat_id = int(bot['user_id'])
# 机器人 TOKEN
TOKEN = bot['bot_token']
# 发消息的TG代理
# my.telegram.org申请到的api_id,api_hash
api_id = bot['api_id']
api_hash = bot['api_hash']
proxystart = bot['proxy']
if 'proxy_user' in bot.keys() and bot['proxy_user'] != "代理的username,有则填写，无则不用动":
    proxy = {
        'proxy_type': bot['proxy_type'],
        'addr':  bot['proxy_add'],
        'port': bot['proxy_port'],
        'username': bot['proxy_user'],
        'password': bot['proxy_password']}
else:
    proxy = (bot['proxy_type'], bot['proxy_add'], bot['proxy_port'])
# 开启tg对话
if proxystart:
    client = TelegramClient('bot', api_id, api_hash,
                            proxy=proxy, connection_retries=None).start(bot_token=TOKEN)
else:
    client = TelegramClient('bot', api_id, api_hash,
                            connection_retries=None).start(bot_token=TOKEN)
cookiemsg = ''
img_file = _qr
StartCMD = bot['StartCMD']


async def hello():
    await client.send_message(chat_id, 'duang duang duang \n您的机器人已成功激活\n发个 /start 试试吧')


def press_event(user_id):
    return events.CallbackQuery(func=lambda e: e.sender_id == user_id)


# 扫码获取cookie 直接采用LOF大佬代码
# getSToken请求获取，s_token用于发送post请求是的必须参数
s_token = ""
# getSToken请求获取，guid,lsid,lstoken用于组装cookies
guid, lsid, lstoken = "", "", ""
# 由上面参数组装生成，getOKLToken函数发送请求需要使用
cookies = ""
# getOKLToken请求获取，token用户生成二维码使用、okl_token用户检查扫码登录结果使用
token, okl_token = "", ""
# 最终获取到的可用的cookie
jd_cookie = ""


def getSToken():
    time_stamp = int(time.time() * 1000)
    get_url = 'https://plogin.m.jd.com/cgi-bin/mm/new_login_entrance?lang=chs&appid=300&returnurl=https://wq.jd.com/passport/LoginRedirect?state=%s&returnurl=https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action&source=wq_passport' % time_stamp
    get_header = {
        'Connection': 'Keep-Alive',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-cn',
        'Referer': 'https://plogin.m.jd.com/login/login?appid=300&returnurl=https://wq.jd.com/passport/LoginRedirect?state=%s&returnurl=https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action&source=wq_passport' % time_stamp,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
        'Host': 'plogin.m.jd.com'
    }
    try:
        resp = requests.get(url=get_url, headers=get_header)
        parseGetRespCookie(resp.headers, resp.json())
        logger.info(resp.headers)
        logger.info(resp.json())
    except Exception as error:
        logger.exception("Get网络请求异常", error)


def parseGetRespCookie(headers, get_resp):
    global s_token
    global cookies
    s_token = get_resp.get('s_token')
    set_cookies = headers.get('set-cookie')
    logger.info(set_cookies)
    guid = re.findall(r"guid=(.+?);", set_cookies)[0]
    lsid = re.findall(r"lsid=(.+?);", set_cookies)[0]
    lstoken = re.findall(r"lstoken=(.+?);", set_cookies)[0]
    cookies = f"guid={guid}; lang=chs; lsid={lsid}; lstoken={lstoken}; "
    logger.info(cookies)


def getOKLToken():
    post_time_stamp = int(time.time() * 1000)
    post_url = 'https://plogin.m.jd.com/cgi-bin/m/tmauthreflogurl?s_token=%s&v=%s&remember=true' % (
        s_token, post_time_stamp)
    post_data = {
        'lang': 'chs',
        'appid': 300,
        'returnurl': 'https://wqlogin2.jd.com/passport/LoginRedirect?state=%s&returnurl=//home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action' % post_time_stamp,
        'source': 'wq_passport'
    }
    post_header = {
        'Connection': 'Keep-Alive',
        'Content-Type': 'application/x-www-form-urlencoded; Charset=UTF-8',
        'Accept': 'application/json, text/plain, */*',
        'Cookie': cookies,
        'Referer': 'https://plogin.m.jd.com/login/login?appid=300&returnurl=https://wqlogin2.jd.com/passport/LoginRedirect?state=%s&returnurl=//home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action&source=wq_passport' % post_time_stamp,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
        'Host': 'plogin.m.jd.com',
    }
    try:
        global okl_token
        resp = requests.post(
            url=post_url, headers=post_header, data=post_data, timeout=20)
        parsePostRespCookie(resp.headers, resp.json())
        logger.info(resp.headers)
    except Exception as error:
        logger.exception("Post网络请求错误", error)


def parsePostRespCookie(headers, data):
    global token
    global okl_token
    token = data.get('token')
    okl_token = re.findall(r"okl_token=(.+?);", headers.get('set-cookie'))[0]
    logger.info("token:" + token)
    logger.info("okl_token:" + okl_token)


def parseJDCookies(headers):
    global jd_cookie
    logger.info("扫码登录成功，下面为获取到的用户Cookie。")
    set_cookie = headers.get('Set-Cookie')
    pt_key = re.findall(r"pt_key=(.+?);", set_cookie)[0]
    pt_pin = re.findall(r"pt_pin=(.+?);", set_cookie)[0]
    logger.info(pt_key)
    logger.info(pt_pin)
    jd_cookie = f'pt_key={pt_key};pt_pin={pt_pin};'


def creatqr(text):
    '''实例化QRCode生成qr对象'''
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4
    )
    qr.clear()
    # 传入数据
    qr.add_data(text)
    qr.make(fit=True)
    # 生成二维码
    img = qr.make_image()
    # 保存二维码
    img.save(img_file)


def split_list(datas, n, row: bool = True):
    """一维列表转二维列表，根据N不同，生成不同级别的列表"""
    length = len(datas)
    size = length / n + 1 if length % n else length/n
    _datas = []
    if not row:
        size, n = n, size
    for i in range(int(size)):
        start = int(i * n)
        end = int((i + 1) * n)
        _datas.append(datas[start:end])
    return _datas


async def backfile(file):
    if os.path.exists(file):
        try:
            os.rename(file, file+'.bak')
        except WindowsError:
            os.remove(file+'.bak')
            os.rename(file, file+'.bak')


async def cmd(cmdtext):
    '''定义执行cmd命令'''
    try:
        msg = await client.send_message(chat_id, '开始执行程序，如程序复杂，建议稍等')
        res_bytes = subprocess.check_output(
            cmdtext, shell=True, stderr=subprocess.STDOUT)
        res = res_bytes.decode('utf-8')
        if len(res) == 0:
            await client.edit_message(msg, '已执行，但返回值为空')
        elif len(res) <= 4000:
            await client.edit_message(msg, res)
        elif len(res) > 4000:
            with open(_LogDir+'/botres.log', 'w+', encoding='utf-8') as f:
                f.write(res)
            await client.send_message(chat_id, '执行结果较长，请查看日志', file=_LogDir+'/botres.log')
    except Exception as e:
        await client.send_message(chat_id, 'something wrong,I\'m sorry\n'+str(e))
        logger.error('something wrong,I\'m sorry'+str(e))


async def logbtn(conv, SENDER, path, msg, page, filelist):
    '''定义log日志按钮'''
    mybtn = [Button.inline('上一页', data='up'), Button.inline(
        '下一页', data='next'), Button.inline('上级', data='updir'), Button.inline('取消', data='cancel')]
    try:
        if filelist:
            markup = filelist
            newmarkup = markup[page]
            if mybtn not in newmarkup:
                newmarkup.append(mybtn)
        else:
            dir = os.listdir(path)
            dir.sort()
            markup = [Button.inline(file, data=str(file))
                      for file in dir]
            markup = split_list(markup, 3)
            if len(markup) > 30:
                markup = split_list(markup, 30)
                newmarkup = markup[page]
                newmarkup.append(mybtn)
            else:
                newmarkup = markup
                if path == _JdDir:
                    newmarkup.append([Button.inline('取消', data='cancel')])
                else:
                    newmarkup.append(
                        [Button.inline('上级', data='updir'), Button.inline('取消', data='cancel')])
        msg = await client.edit_message(msg, '请做出您的选择：', buttons=newmarkup)
        convdata = await conv.wait_event(press_event(SENDER))
        res = bytes.decode(convdata.data)
        if res == 'cancel':
            msg = await client.edit_message(msg, '对话已取消')
            conv.cancel()
            return None, None, None, None
        elif res == 'next':
            page = page + 1
            if page > len(markup) - 1:
                page = 0
            return path, msg, page, markup
        elif res == 'up':
            page = page - 1
            if page < 0:
                page = len(markup) - 1
            return path, msg, page, markup
        elif res == 'updir':
            path = '/'.join(path.split('/')[:-1])
            logger.info(path)
            if path == '':
                path = _JdDir
            return path, msg, page, None
        elif os.path.isfile(path+'/'+res):
            msg = await client.edit_message(msg, '文件发送中，请注意查收')
            await conv.send_file(path+'/'+res)
            msg = await client.edit_message(msg, res+'发送成功，请查收')
            conv.cancel()
            return None, None, None, None
        else:
            return path+'/'+res, msg, page, None
    except exceptions.TimeoutError:
        msg = await client.edit_message(msg, '选择已超时，本次对话已停止')
        return None, None, None, None
    except Exception as e:
        msg = await client.edit_message(msg, 'something wrong,I\'m sorry\n'+str(e))
        logger.error('something wrong,I\'m sorry\n'+str(e))
        return None, None, None, None


async def getname(path, dir):
    names = []
    reg = r'new Env\(\'[\S]+?\'\)'
    cname = False
    for file in dir:
        if os.path.isdir(path+'/'+file):
            names.append(file)
        elif file.endswith('.js') and file != 'jdCookie.js' and file != 'getJDCookie.js' and file != 'JD_extra_cookie.js':
            with open(path+'/'+file, 'r', encoding='utf-8') as f:
                resdatas = f.readlines()
            for data in resdatas:
                if 'new Env' in data:
                    data = data.replace('\"', '\'')
                    res = re.findall(reg, data)
                    if len(res) != 0:
                        res = res[0].split('\'')[-2]
                        names.append(res+'--->'+file)
                        cname = True
                    break
            if not cname:
                names.append(file+'--->'+file)
                cname = False
        else:
            continue
    return names


async def nodebtn(conv, SENDER, path, msg, page, filelist):
    '''定义scripts脚本按钮'''
    mybtn = [Button.inline('上一页', data='up'), Button.inline(
        '下一页', data='next'), Button.inline('上级', data='updir'), Button.inline('取消', data='cancel')]
    try:
        if filelist:
            markup = filelist
            newmarkup = markup[page]
            if mybtn not in newmarkup:
                newmarkup.append(mybtn)
        else:
            if path == _JdDir:
                dir = ['scripts', 'own']
            else:
                dir = os.listdir(path)
                dir = await getname(path, dir)
            dir.sort()
            markup = [Button.inline(file.split('--->')[0], data=str(file.split('--->')[-1]))
                      for file in dir if os.path.isdir(path+'/'+file) or file.endswith('.js')]
            markup = split_list(markup, 3)
            if len(markup) > 30:
                markup = split_list(markup, 30)
                newmarkup = markup[page]
                newmarkup.append(mybtn)
            else:
                newmarkup = markup
                if path == _JdDir:
                    newmarkup.append([Button.inline('取消', data='cancel')])
                else:
                    newmarkup.append(
                        [Button.inline('上级', data='updir'), Button.inline('取消', data='cancel')])
        msg = await client.edit_message(msg, '请做出您的选择：', buttons=newmarkup)
        convdata = await conv.wait_event(press_event(SENDER))
        res = bytes.decode(convdata.data)
        if res == 'cancel':
            msg = await client.edit_message(msg, '对话已取消')
            conv.cancel()
            return None, None, None
        elif res == 'next':
            page = page + 1
            if page > len(markup) - 1:
                page = 0
            return path, msg, page, markup
        elif res == 'up':
            page = page - 1
            if page < 0:
                page = len(markup) - 1
            return path, msg, page, markup
        elif res == 'updir':
            path = '/'.join(path.split('/')[:-1])
            if path == '':
                path = _JdDir
            return path, msg, page, None
        elif os.path.isfile(path+'/'+res):
            msg = await client.edit_message(msg, '脚本即将在后台运行')
            logger.info(path+'/'+res+'脚本即将在后台运行')
            cmdtext = 'jtask {}/{} now'.format(path, res)
            subprocess.Popen(cmdtext, shell=True,
                             stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
            msg = await client.edit_message(msg, res + '在后台运行成功，请自行在程序结束后查看日志')
            conv.cancel()
            return None, None, None, None
        else:
            return path+'/'+res, msg, page, None
    except exceptions.TimeoutError:
        msg = await client.edit_message(msg, '选择已超时，对话已停止')
        return None, None, None, None
    except Exception as e:
        msg = await client.edit_message(msg, 'something wrong,I\'m sorry\n'+str(e))
        logger.error('something wrong,I\'m sorry\n'+str(e))
        return None, None, None, None


@client.on(events.NewMessage(from_users=chat_id, pattern=r'^/log'))
async def mylog(event):
    '''定义日志文件操作'''
    SENDER = event.sender_id
    path = _LogDir
    page = 0
    filelist = None
    async with client.conversation(SENDER, timeout=60) as conv:
        msg = await conv.send_message('正在查询，请稍后')
        while path:
            path, msg, page, filelist = await logbtn(conv, SENDER, path, msg, page, filelist)


@client.on(events.NewMessage(from_users=chat_id, pattern=r'^/snode'))
async def mysnode(event):
    '''定义supernode文件命令'''
    SENDER = event.sender_id
    path = _JdDir
    page = 0
    filelist = None
    async with client.conversation(SENDER, timeout=60) as conv:
        msg = await conv.send_message('正在查询，请稍后')
        while path:
            path, msg, page, filelist = await nodebtn(conv, SENDER, path, msg, page, filelist)


@client.on(events.NewMessage(from_users=chat_id, pattern=r'^/getfile'))
async def mygetfile(event):
    '''定义获取文件命令'''
    SENDER = event.sender_id
    path = _JdDir
    page = 0
    filelist = None
    async with client.conversation(SENDER, timeout=60) as conv:
        msg = await conv.send_message('正在查询，请稍后')
        while path:
            path, msg, page, filelist = await logbtn(conv, SENDER, path, msg, page, filelist)


@client.on(events.NewMessage(from_users=chat_id))
async def myfile(event):
    '''定义文件操作'''
    try:
        SENDER = event.sender_id
        if event.message.file:
            markup = []
            filename = event.message.file.name
            async with client.conversation(SENDER, timeout=30) as conv:
                msg = await conv.send_message('请选择您要放入的文件夹或操作：\n')
                markup.append([Button.inline('放入config', data=_ConfigDir), Button.inline(
                    '放入scripts', data=_ScriptsDir), Button.inline('放入own', data=_OwnDir)])
                markup.append(
                    [Button.inline('放入own并运行', data='node'), Button.inline('取消', data='cancel')])
                msg = await client.edit_message(msg, '请做出您的选择：', buttons=markup)
                convdata = await conv.wait_event(press_event(SENDER))
                res = bytes.decode(convdata.data)
                if res == 'cancel':
                    msg = await client.edit_message(msg, '对话已取消')
                    conv.cancel()
                elif res == 'node':
                    await backfile(_OwnDir+'/'+filename)
                    await client.download_media(event.message, _OwnDir)
                    cmdtext = 'jtask {}/{} now'.format(_OwnDir, filename)
                    subprocess.Popen(
                        cmdtext, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
                    await client.edit_message(msg, '脚本已保存到own文件夹，并成功在后台运行，请稍后自行查看日志')
                    conv.cancel()
                else:
                    await backfile(res+'/'+filename)
                    await client.download_media(event.message, res)
                    await client.edit_message(msg, filename+'已保存到'+res+'文件夹')
            if filename == 'crontab.list':
                cmdtext = 'crontab '+res+'/'+filename
                subprocess.Popen(
                    cmdtext, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
                await client.edit_message(msg, '定时文件已保存，并更新')
                conv.cancel()
    except exceptions.TimeoutError:
        msg = await client.send_message(chat_id, '选择已超时，对话已停止')
    except Exception as e:
        await client.send_message(chat_id, 'something wrong,I\'m sorry\n'+str(e))
        logger.error('something wrong,I\'m sorry\n'+str(e))


@client.on(events.NewMessage(from_users=chat_id, pattern='/edit'))
async def myfileup(event):
    '''定义编辑文件操作'''
    SENDER = event.sender_id
    path = _JdDir
    page = 0
    filelist = None
    async with client.conversation(SENDER, timeout=60) as conv:
        msg = await conv.send_message('正在查询，请稍后')
        while path:
            path, msg, page, filelist = await myedit(conv, SENDER, path, msg, page, filelist)


async def myedit(conv, SENDER, path, msg, page, filelist):
    mybtn = [Button.inline('上一页', data='up'), Button.inline('下一页', data='next'), Button.inline(
        '上级', data='updir'), Button.inline('取消', data='cancel')]
    mybtn2 = [[Button.inline('上一页', data='up'), Button.inline(
        '下一页', data='next'), Button.inline('取消', data='cancel')], [Button.inline('上十页', data='up10'), Button.inline(
            '下十页', data='next10'), Button.inline('编辑', data='edit')]]
    try:
        if filelist and type(filelist[0][0]) == str:
            markup = filelist
            newmarkup = markup[page]
            msg = await client.edit_message(msg, "".join(newmarkup), buttons=mybtn2)
        else:
            if filelist:
                markup = filelist
                newmarkup = markup[page]
                if mybtn not in newmarkup:
                    newmarkup.append(mybtn)
            else:
                dir = os.listdir(path)
                dir.sort()
                markup = [Button.inline(file, data=str(
                    file)) for file in dir]
                markup = split_list(markup, 3)
                if len(markup) > 30:
                    markup = split_list(markup, 30)
                    newmarkup = markup[page]
                    newmarkup.append(mybtn)
                else:
                    newmarkup = markup
                    if path == _JdDir:
                        newmarkup.append([Button.inline('取消', data='cancel')])
                    else:
                        newmarkup.append(
                            [Button.inline('上级', data='updir'), Button.inline('取消', data='cancel')])
            msg = await client.edit_message(msg, '请做出您的选择：', buttons=newmarkup)
        convdata = await conv.wait_event(press_event(SENDER))
        res = bytes.decode(convdata.data)
        if res == 'cancel':
            msg = await client.edit_message(msg, '对话已取消')
            conv.cancel()
            return None, None, None, None, None
        elif res == 'next':
            page = page + 1
            if page > len(markup) - 1:
                page = 0
            return path, msg, page,  markup
        elif res == 'up':
            page = page - 1
            if page < 0:
                page = len(markup) - 1
            return path, msg, page,  markup
        elif res == 'next10':
            page = page + 10
            if page > len(markup) - 1:
                page = 0
            return path, msg, page,  markup
        elif res == 'up10':
            page = page - 10
            if page < 0:
                page = len(markup) - 1
            return path, msg, page,  markup
        elif res == 'updir':
            path = '/'.join(path.split('/')[:-1])
            if path == '':
                path = _JdDir
            return path, msg, page,  None
        elif res == 'edit':
            await client.send_message(chat_id, '请复制并修改以下内容，修改完成后发回机器人，2分钟内有效')
            await client.delete_messages(chat_id, msg)
            msg = await conv.send_message("".join(newmarkup))
            resp = await conv.get_response()
            markup[page] = resp.raw_text.split('\n')
            for a in range(len(markup[page])):
                markup[page][a] = markup[page][a]+'\n'
            shutil.copy(path, path+'.bak')
            with open(path, 'w+', encoding='utf-8') as f:
                markup = ["".join(a) for a in markup]
                f.writelines(markup)
            await client.send_message(chat_id, '文件已修改成功，原文件备份为'+path+'.bak')
            conv.cancel()
            return None, None, None, None
        elif os.path.isfile(path+'/'+res):
            msg = await client.edit_message(msg, '文件读取中...请稍候')
            with open(path+'/'+res, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            lines = split_list(lines, 15)
            page = 0
            return path+'/'+res, msg, page, lines
        else:
            return path+'/'+res, msg, page, None
    except exceptions.TimeoutError:
        msg = await client.edit_message(msg, '选择已超时，本次对话已停止')
        return None, None, None, None
    except Exception as e:
        msg = await client.edit_message(msg, 'something wrong,I\'m sorry\n'+str(e))
        logger.error('something wrong,I\'m sorry\n'+str(e))
        return None, None, None, None


@client.on(events.NewMessage(from_users=chat_id, pattern='/node'))
async def mynode(event):
    '''接收/node命令后执行程序'''
    nodereg = re.compile(r'^/node [\S]+')
    text = re.findall(nodereg, event.raw_text)
    if len(text) == 0:
        res = '''请正确使用/node命令，如
        /node /abc/123.js 运行abc/123.js脚本
        /node /own/abc.js 运行own/abc.js脚本
        '''
        await client.send_message(chat_id, res)
    else:
        await cmd('jtask '+text[0].replace('/node ', '')+' now')


@client.on(events.NewMessage(from_users=chat_id, pattern='/cmd'))
async def mycmd(event):
    '''接收/cmd命令后执行程序'''
    if StartCMD:
        cmdreg = re.compile(r'^/cmd [\s\S]+')
        text = re.findall(cmdreg, event.raw_text)
        if len(text) == 0:
            msg = '''请正确使用/cmd命令，如
            /cmd jlog    # 删除旧日志
            /cmd jup     # 更新所有脚本
            /cmd jcode   # 导出所有互助码
            /cmd jcsv    # 记录豆豆变化情况
            不建议直接使用cmd命令执行脚本，请使用/node或/snode
            '''
            await client.send_message(chat_id, msg)
        else:
            logger.info(text)
            await cmd(text[0].replace('/cmd ', ''))
    else:
        await client.send_message(chat_id, '未开启CMD命令，如需使用请修改配置文件')


@client.on(events.NewMessage(from_users=chat_id, pattern=r'^/getcookie'))
async def mycookie(event):
    '''接收/getcookie后执行程序'''
    login = True
    msg = await client.send_message(chat_id, '正在获取二维码，请稍后')
    global cookiemsg
    try:
        SENDER = event.sender_id
        async with client.conversation(SENDER, timeout=30) as conv:
            getSToken()
            getOKLToken()
            url = 'https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token='+token
            creatqr(url)
            markup = [Button.inline("已扫码", data='confirm'),
                      Button.inline("取消", data='cancel')]
            await client.delete_messages(chat_id, msg)
            cookiemsg = await client.send_message(chat_id, '30s内点击取消将取消本次操作\n如不取消，扫码结果将于30s后显示\n扫码后不想等待点击已扫码', file=img_file, buttons=markup)
            convdata = await conv.wait_event(press_event(SENDER))
            res = bytes.decode(convdata.data)
            if res == 'cancel':
                login = False
                await client.delete_messages(chat_id, cookiemsg)
                msg = await conv.send_message('对话已取消')
                conv.cancel()
            else:
                raise exceptions.TimeoutError()
    except exceptions.TimeoutError:
        expired_time = time.time() + 60 * 2
        while login:
            check_time_stamp = int(time.time() * 1000)
            check_url = 'https://plogin.m.jd.com/cgi-bin/m/tmauthchecktoken?&token=%s&ou_state=0&okl_token=%s' % (
                token, okl_token)
            check_data = {
                'lang': 'chs',
                'appid': 300,
                'returnurl': 'https://wqlogin2.jd.com/passport/LoginRedirect?state=%s&returnurl=//home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action' % check_time_stamp,
                'source': 'wq_passport'
            }
            check_header = {
                'Referer': f'https://plogin.m.jd.com/login/login?appid=300&returnurl=https://wqlogin2.jd.com/passport/LoginRedirect?state=%s&returnurl=//home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&/myJd/home.action&source=wq_passport' % check_time_stamp,
                'Cookie': cookies,
                'Connection': 'Keep-Alive',
                'Content-Type': 'application/x-www-form-urlencoded; Charset=UTF-8',
                'Accept': 'application/json, text/plain, */*',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
            }
            resp = requests.post(
                url=check_url, headers=check_header, data=check_data, timeout=30)
            data = resp.json()
            if data.get("errcode") == 0:
                parseJDCookies(resp.headers)
                await client.delete_messages(chat_id, cookiemsg)
                await client.send_message(chat_id, '以下为获取到的cookie')
                await client.send_message(chat_id, jd_cookie)
                return
            if data.get("errcode") == 21:
                await client.delete_messages(chat_id, cookiemsg)
                await client.send_message(chat_id, '发生了某些错误\n'+data.get("errcode"))
                return
            if time.time() > expired_time:
                await client.delete_messages(chat_id, cookiemsg)
                await client.send_message(chat_id, '超过3分钟未扫码，二维码已过期')
                return
    except Exception as e:
        await client.send_message(chat_id, 'something wrong,I\'m sorry\n'+str(e))
        logger.error('something wrong,I\'m sorry\n'+str(e))


@client.on(events.NewMessage(from_users=chat_id, pattern=r'^/setshort$'))
async def setshortcut(event):
    SENDER = event.sender_id
    async with client.conversation(SENDER, timeout=60) as conv:
        await conv.send_message(
            '60s内回复有效\n请按格式输入您的快捷命令。例如：\n京豆通知-->jtask jd_bean_change\n更新脚本-->jup\n获取互助码-->jcode\nnode运行XX脚本-->node /XX/XX.js\nbash运行abc/123.sh脚本-->bash /abc/123.sh\n-->前边为要显示的名字，-->后边为要运行的命令\n 如添加运行脚本立即执行命令记得在后边添加now\n如不等待运行结果请添加nohup，如京豆通知-->nohup jtask jd_bean_change now\n如不添加nohup 会等待程序执行完，期间不能交互\n建议运行时间短命令不添加nohup ')
        shortcut = await conv.get_response()
        with open(_shortcut, 'w+', encoding='utf-8') as f:
            f.write(shortcut.raw_text)
        await conv.send_message('已设置成功可通过"/a"使用')
        conv.cancel()


@client.on(events.NewMessage(from_users=chat_id, pattern=r'^/a$'))
async def shortcut(event):
    markup = []
    SENDER = event.sender_id
    msg = await client.send_message(chat_id, '正在查询您的常用命令，请稍后')
    with open(_shortcut, 'r', encoding='utf-8') as f:
        shortcuts = f.readlines()
    try:
        async with client.conversation(SENDER, timeout=60) as conv:
            markup = [Button.inline(shortcut.split(
                '-->')[0], data=str(shortcut.split('-->')[-1])) for shortcut in shortcuts]
            markup = split_list(markup, 3)
            markup.append([Button.inline('取消', data='cancel')])
            msg = await client.edit_message(msg, '请做出您的选择：', buttons=markup)
            convdata = await conv.wait_event(press_event(SENDER))
            res = bytes.decode(convdata.data)
            if res == 'cancel':
                msg = await client.edit_message(msg, '对话已取消')
                conv.cancel()
            elif 'nohup ' in res:
                msg = await client.edit_message(msg, '即将执行您的操作'+res)
                cmdtext = res.replace('nohup ', '')
                subprocess.Popen(
                    cmdtext, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
                msg = await client.edit_message(msg, '已在后台执行您的操作'+res.replace('nohup ', ''))
                conv.cancel()
            else:
                await client.delete_messages(chat_id, msg)
                await cmd(res)
                conv.cancel()
    except exceptions.TimeoutError:
        msg = await client.edit_message(msg, '选择已超时，对话已停止')
    except Exception as e:
        await client.edit_message(msg, 'something wrong,I\'m sorry\n'+str(e))
        logger.error('something wrong,I\'m sorry\n'+str(e))


@client.on(events.NewMessage(from_users=chat_id, pattern='/help'))
async def myhelp(event):
    '''接收/help命令后执行程序'''
    msg = '''
    a-我的自定义快捷按钮
    edit-编辑文件
    start-开始使用本程序
    node-执行js脚本文件，绝对路径。
    cmd-执行cmd命令
    snode-选择脚本后台运行
    log-选择日志
    getfile-获取jd目录下文件
    setshort-设置自定义按钮
    getcookie-扫码获取cookie'''
    await client.send_message(chat_id, msg)


@client.on(events.NewMessage(from_users=chat_id, pattern='/start'))
async def mystart(event):
    '''接收/start命令后执行程序'''
    msg = '''使用方法如下：
    /help 获取命令，可直接发送至botfather
    /a 使用你的自定义快捷按钮
    /start 开始使用本程序
    /node 执行js脚本文件，直接输入/node jd_bean_change 如执行其他自己js，需输入绝对路径。即可进行执行。该命令会等待脚本执行完，期间不能使用机器人，建议使用snode命令。
    /cmd 执行cmd命令,例如/cmd python3 /python/bot.py 则将执行python目录下的bot.py 不建议使用机器人使用并发，可能产生不明原因的崩溃
    /snode 命令可以选择脚本执行，只能选择/scripts 和/own目录下的脚本，选择完后直接后台运行，不影响机器人响应其他命令
    /log 选择查看执行日志
    /getfile 获取jd目录下文件
    /setshort 设置自定义按钮，每次设置会覆盖原设置
    /getcookie 扫码获取cookie 增加30s内取消按钮，30s后不能进行其他交互直到2分钟或获取到cookie
    /edit 从jd目录下选择文件编辑，需要将编辑好信息全部发给机器人，机器人会根据你发的信息进行替换。建议用来编辑config或crontab.list 其他文件慎用！！！
    此外直接发送文件，会让您选择保存到哪个文件夹，如果选择运行，将保存至own目录下，并立即运行脚本，crontab.list文件会自动更新时间'''
    await client.send_message(chat_id, msg)

with client:
    # task = client.loop.create_task(hello())
    client.loop.run_forever()