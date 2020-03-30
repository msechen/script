[TOC]


# 如何调试程序
只需将 embed() 放在代码中的任何位置。运行后，就可以从那儿开始探索和调试。

例如，初始化一个机器人，然后看看它能做些什么:
```
from wxpy import *
bot = Bot()
embed() # 进入 Python 命令行

# 输入对象名称并回车
>>> bot
# Out[1]: <Bot: 游否>
>>> bot.friends()
# Out[2]: [<Friend: 路人甲>, <Friend: 路人乙>, <Friend: 路人丙>]
```

# 机器人对象

机器人 [`Bot`](https://wxpy.readthedocs.io/zh/latest/bot.html#wxpy.Bot) 对象可被理解为一个 Web 微信客户端。

## 初始化 / 登陆 

```python
# 初始化机器人，扫码登陆
bot = Bot(cache_path=True, console_qr=2, login_callback="login_callback", logout_callback="logout_callback")

# 启用 puid 属性，并指定 puid 所需的映射数据保存/载入路径
bot.enable_puid('wxpy_puid.pkl')

# 机器人账号自身
myself = bot.self

# 向文件传输助手发送消息
bot.file_helper.send('Hello from wxpy!')
```

## 获取聊天对象 

### 机器人自身 (作为一个聊天对象)

Bot.self 

### 文件传输助手

Bot.file_helper

### 获取所有好友

Bot.friends(update=False)

### 获取所有群聊对象

Bot.groups(update=False, contact_only=False)

### 获取所有公众号

Bot.mps(update=False)

## 搜索聊天对象 

## 加好友和建群 



# 聊天对象 
## 各类型的继承关系

### 基础类 

所有聊天对象，均继承于以下两种基础类，并拥有相应的属性和方法。

#### 基本聊天对象 [`Chat`](https://wxpy.readthedocs.io/zh/latest/chats.html#wxpy.Chat)

- 所有的聊天对象均继承于此类型
- 拥有 微信 ID、昵称 等属性
- 拥有 发送消息 [`Chat.send()`](https://wxpy.readthedocs.io/zh/latest/chats.html#wxpy.Chat.send), 获取头像 [`Chat.get_avatar()`](https://wxpy.readthedocs.io/zh/latest/chats.html#wxpy.Chat.get_avatar) 等方法

#### 单个聊天对象 [`User`](https://wxpy.readthedocs.io/zh/latest/chats.html#wxpy.User)

- 继承于 [`Chat`](https://wxpy.readthedocs.io/zh/latest/chats.html#wxpy.Chat)，表示个体聊天对象 (而非群聊)。
- **被以下聊天对象所继承**
  - 好友对象 [`Friend`](https://wxpy.readthedocs.io/zh/latest/chats.html#wxpy.Friend)
  - 群成员对象 [`Member`](https://wxpy.readthedocs.io/zh/latest/chats.html#wxpy.Member)
  - 公众号对象 [`MP`](https://wxpy.readthedocs.io/zh/latest/chats.html#wxpy.MP)

### 实际类 

在实际使用过程中，我们会更多的用到以下实际聊天对象类型。

- 好友 [`Friend`](https://wxpy.readthedocs.io/zh/latest/chats.html#wxpy.Friend)
- 群聊 [`Group`](https://wxpy.readthedocs.io/zh/latest/chats.html#wxpy.Group)
- 群成员 [`Member`](https://wxpy.readthedocs.io/zh/latest/chats.html#wxpy.Member)
- 公众号 [`MP`](https://wxpy.readthedocs.io/zh/latest/chats.html#wxpy.MP)

 

通过机器人对象 Bot 的 chats(), friends()，groups(), mps() 方法， 可分别获取到当前机器人的 所有聊天对象、好友、群聊，以及公众号列表。

# 注册消息
优先匹配 后注册 的函数，且仅匹配 一个 注册函数。

# BeautifulSoup 使用
https://beautifulsoup.readthedocs.io/zh_CN/v4.4.0

# sqlalchemy 使用

https://www.osgeo.cn/sqlalchemy/orm/index.html

# apscheduler 使用



## 参考资料

- python学习：https://funhacks.gitbooks.io/explore-python/
- 开源项目：https://github.com/youfou/wxpy
- https://docs.python.org/zh-cn/3/howto/logging.html