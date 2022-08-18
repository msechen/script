import itchat
import itchat.content
import requests
import json

with open('data.json','r')as f:
    dt=f.read()
data=json.loads(dt)
token=data['token']
my_id=data['my_id']
qr=data['qr']

def replay_tg(my_id,token,msg):
    try:
        text='来自用户: '+msg['FromUserName']+' - 备注: '+msg['User']['RemarkName']+'\n发送给用户: '+msg['ToUserName']+'\n的内容: '+msg['Text']
    except KeyError:
        text='来自: 你自己\n发送给用户: '+msg['ToUserName']+'\n的内容: '+msg['Text']
    params={'chat_id':my_id,'text':text}
    requests.post("https://api.telegram.org/bot"+token+"/sendMessage",params=params)

@itchat.msg_register(itchat.content.TEXT)
def get_msg(msg):
    global my_id
    global token
    replay_tg(my_id,token,msg)

if qr=='y':
    itchat.auto_login(hotReload=True,enableCmdQR=2)
else:
    itchat.auto_login(hotReload=True)
itchat.run()