from json import load
from os.path import exists

from telethon.sessions import StringSession
from telethon.sync import TelegramClient


def main(_username, _message):
    if exists("./session.txt"):
        with open("./session.txt", "r") as session:
            with TelegramClient(StringSession(session.read()), int(api_id), api_hash) as client:
                client.send_message("@" + _username, _message)
    else:
        with TelegramClient(StringSession(), int(api_id), api_hash) as client:
            with open("./session.txt", "w") as f:
                f.write(client.session.save())


if __name__ == '__main__':
    root = "/jd" if exists("/jd") else "/ql"
    with open(f"{root}/config/bot.json", "r") as f1:
        bot = load(f1)
    api_id, api_hash = bot['api_id'], bot['api_hash']
    username = ""  # 用户名（不带@）
    message = ""  # 发送的消息
    main(username, message)
    