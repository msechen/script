[TOC]

# 机器人对象

机器人 [`Bot`](https://wxpy.readthedocs.io/zh/latest/bot.html#wxpy.Bot) 对象可被理解为一个 Web 微信客户端。

## 初始化 / 登陆 

`class wxpy.Bot(cache_path=None, console_qr=False, qr_path=None, qr_callback=None, login_callback=None, logout_callback=None)`

机器人对象，用于登陆和操作微信账号，涵盖大部分 Web 微信的功能:

```python
from wxpy import *
bot = Bot()

# 机器人账号自身
myself = bot.self

# 向文件传输助手发送消息
bot.file_helper.send('Hello from wxpy!')
```

`Bot.enable_puid(path='wxpy_puid.pkl')`

**可选操作:** 启用聊天对象的 [`puid`](https://wxpy.readthedocs.io/zh/latest/chats.html#wxpy.Chat.puid) 属性:

```python
# 启用 puid 属性，并指定 puid 所需的映射数据保存/载入路径
bot.enable_puid('wxpy_puid.pkl')

# 指定一个好友
my_friend = bot.friends().search('游否')[0]

# 查看他的 puid
print(my_friend.puid)
# 'edfe8468'
```

# 聊天对象 
通过机器人对象 Bot 的 chats(), friends()，groups(), mps() 方法， 可分别获取到当前机器人的 所有聊天对象、好友、群聊，以及公众号列表。

# 注册消息
优先匹配 后注册 的函数，且仅匹配 一个 注册函数。

# BeautifulSoup 使用
https://beautifulsoup.readthedocs.io/zh_CN/v4.4.0