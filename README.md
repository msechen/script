# 一个基于`itchat`接口,通过Telegram Bot互通微信和Telegram的工具.

> 注意：你的微信账号需要拥有Web登录权限，一般新注册用户没有，滥用用户会被撤销！！

## 使用

首先你需要拥有一个bot:

通过 https://t.me/BotFather 即可创建.

clone此仓库:

```
git clone https://github.com/wzk0/tg-wc.git && cd tg-wc
```

随后安装所需依赖:

```
pip3 install -r requirements.txt
```

接着运行`set.py`配置信息(个人ID,机器人token):

```
python3 set.py
```

> 如果你是Linux桌面系统,在选择`是否终端显示二维码的时候`不需要选择,服务器端则需要.

最后运行两个文件:

```
python3 send.py

python3 get.py
```

> 这两个文件都是循环文件,我也不知道怎么同时在同一个终端运行...

* 如果你只想接受微信消息,只运行`get.py`即可;

* 同理,发送消息运行`send.py`,格式是`/send [消息内容] [ID]`.

> 这个ID是如下图所示很复杂的那串,有机会研究一下通过昵称回复.

![效果](https://raw.githubusercontent.com/wzk0/photo/main/20228181.jpg)

![效果](https://raw.githubusercontent.com/wzk0/photo/main/20228182.jpg)

![效果](https://raw.githubusercontent.com/wzk0/photo/main/20228183.jpg)

## 依赖

```
itchat==1.3.10
itchat_uos==1.5.0.dev0
requests==2.25.1
```

> 没有用到现在主流的Telegram Bot框架.

## 流程

`微信消息转发到tg`(即`get.py`):

通过强大的`itchat`接口获取微信消息,通过`requests`的post方法转发到tg.

`tg回复消息到微信`(即`send.py`):

通过`Telegram API`实时获取更新消息,再通过强大的`itchat`接口转发到微信.

> 使用热登录.

## 问题

* 除了文本消息外,不支持其他形式(图片,视频...)

* 微信可向tg发送表情(emoji),但是tg不能向微信发送(一发送就编码错误)

* ...

## 相关

https://github.com/littlecodersh/itchat

https://github.com/why2lyj/ItChat-UOS

https://itchat.readthedocs.io/zh/latest/
