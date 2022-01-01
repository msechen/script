from .. import chat_id, jdbot, logger, chname, mybot
from ..bot.utils import  V4, QL
from telethon import events
import os


@jdbot.on(events.NewMessage(from_users=chat_id, pattern=r'^/restart$'))
async def myrestart(event):
    try:
        if V4:
            await jdbot.send_message(chat_id, "重启程序")
            os.system("pm2 restart jbot")
        elif QL:
            await jdbot.send_message(chat_id, "重启程序")
            bash_file_1 = "ps -ef | grep 'python3 -m jbot' | grep -v grep | awk '{print $1}' | xargs kill -9 2>/dev/null"
            bash_file_2 = "nohup python3 -m jbot > /ql/log/bot/bot.log 2>&1 &"
            bash_file_3 = "rm -f restart.sh"
            bash_file = f"{bash_file_1}\n{bash_file_2}\n{bash_file_3}"
            with open('/ql/restart.sh', 'w', encoding='utf-8') as f:
                f.write(bash_file)
            os.system("bash restart.sh")
    except Exception as e:
        await jdbot.send_message(chat_id, 'something wrong,I\'m sorry\n' + str(e))
        logger.error('something wrong,I\'m sorry\n' + str(e))


if chname:
    jdbot.add_event_handler(myrestart, events.NewMessage(from_users=chat_id, pattern=mybot['命令别名']['cron']))

