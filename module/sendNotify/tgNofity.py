import requests, os, json

def tgNofity(user_id, bot_token, text):
    TG_API_HOST = 'api.telegram.org'
    url = f'https://{TG_API_HOST}/bot{bot_token}/sendMessage'
    body = {
        "chat_id": user_id,
        "text": text,
        "disable_web_page_preview": True
    }
    headers = {
        "ontent-Type": "application/x-www-form-urlencoded"
    }
    try:
        r = requests.post(url, data=body, headers=headers)
        if r.ok:
            print("Telegram发送通知消息成功🎉。\n")
        elif r.status_code == '400':
            print("请主动给bot发送一条消息并检查接收用户ID是否正确。\n")
        elif r.status_code == '401':
            print("Telegram bot token 填写错误。\n")
    except Exception as error:
        print(f"telegram发送通知消息失败！！\n{error}")


# 开始执行主程序
if __name__ == '__main__':
    path_list = os.path.realpath(__file__).split('/')[1:]
    env = '/' + '/'.join(path_list[:-2])
    if not os.path.isfile(env + '/config/bot.json'): # 容器执行
        env = '/jd'
    bot = f'{env}/config/bot.json'
    with open(bot, 'r', encoding='utf-8') as botSet:
        bot = json.load(botSet)
    chat_id = bot['user_id']
    bot_token = bot['bot_token']
    text = 'test'
    tgNofity(chat_id, bot_token, text)
