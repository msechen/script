import os
import sys
from asyncio import exceptions

import requests
from telethon import events

from .update import version, botlog
from .. import chat_id, jdbot, logger, JD_DIR, BOT_SET


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/upbot$'))
async def myupbot(event):
    msg = await jdbot.send_message(chat_id, "【diy正式版】\n\n准备更新程序")
    try:
        furl = "https://raw.githubusercontent.com/chiupam/JD_Diy/master/shell/bot_beta.sh"
        if '下载代理' in BOT_SET.keys() and str(BOT_SET['下载代理']).lower() != 'false' and 'github' in furl:
            furl = f'{str(BOT_SET["下载代理"])}/{furl}'
        resp = requests.get(furl).text
        if not resp:
            await jdbot.edit_message(msg, "【diy正式版】\n\n下载shell文件失败\n请稍后重试，或尝试关闭代理重启")
            return
        cmdtext = f"bash {JD_DIR}/bot_beta.sh"
        fpath = f"{JD_DIR}/bot_beta.sh"
        with open(fpath, 'w+', encoding='utf-8') as f:
            f.write(resp)
        await jdbot.edit_message(msg, "更新过程中程序会重启，请耐心等待")
        os.system(cmdtext)
    except exceptions.TimeoutError:
        await jdbot.edit_message(msg, '选择已超时，对话已停止，感谢你的使用')
    except Exception as e:
        title = "【💥错误💥】"
        name = "文件名：" + os.path.split(__file__)[-1].split(".")[0]
        function = "函数名：" + sys._getframe().f_code.co_name
        tip = '建议百度/谷歌进行查询'
        await jdbot.send_message(chat_id, f"{title}\n\n{name}\n{function}\n错误原因：{str(e)}\n\n{tip}")
        logger.error(f"错误--->{str(e)}")


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/ver$', incoming=True))
async def bot_ver(event):
    await jdbot.send_message(chat_id, f'当前版本\n{version}\n{botlog}')
