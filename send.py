import itchat
import itchat.content
import requests
import json
import os

with open('data.json','r')as f:
    dt=f.read()
data=json.loads(dt)
token=data['token']
my_id=data['my_id']
qr=data['qr']

def roll(token):
    r=requests.post("https://api.telegram.org/bot"+token+"/getUpdates")
    t=r.text.replace("true","True")
    t=t.replace("false","False")
    return eval(t)["result"][-1]["message"]["text"]

def send_tg():
    global token
    while True:
        text=roll(token)
        if '/send' in text:
            ls=text.split(' ')
            if not os.path.exists('.temp'):
                itchat.send(ls[1],toUserName=ls[2])
                with open('.temp','w')as f:
                    qqq={}
                    qqq[ls[1]]=ls[2]
                    f.write(str(qqq))
            else:
                with open('.temp','r')as f:
                    dt=f.read()
                    qq={}
                    qq[ls[1]]=ls[2]
                    if str(qq)==str(dt):
                        pass
                    else:
                        itchat.send(ls[1],toUserName=ls[2])
                        with open('.temp','w')as ff:
                            ff.write(str(qq))

if qr=='y':
    itchat.auto_login(hotReload=True,enableCmdQR=2,loginCallback=send_tg)
else:
    itchat.auto_login(hotReload=True,loginCallback=send_tg)
itchat.run()