# 导入模块
import random
from time import sleep

from wxpy import *

from auto_reply import reminder
from common import web_spider
from jobs import *
from service import user_service

logger = logging.getLogger('wx')
logger.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
fh = logging.FileHandler('wx-robot.log')  # 输出日志到文件
fh.setLevel(logging.DEBUG)
fh.setFormatter(formatter)
logger.addHandler(fh)
sh = logging.StreamHandler()  # 输出日志到终端
sh.setLevel(logging.DEBUG)
sh.setFormatter(formatter)
logger.addHandler(sh)


def login_callback():
    logger.info("robot login!")


def logout_callback():
    logger.info("robot logout!")
    user_kolly.send("robot logout!")


# 初始化机器人，扫码登陆
# bot = Bot(cache_path=True, qr_path="./qrcode.jpg", login_callback="login_callback", logout_callback="logout_callback")
bot = Bot(cache_path=True, console_qr=2, login_callback="login_callback", logout_callback="logout_callback")
# 启用 puid 属性，并指定 puid 所需的映射数据保存/载入路径
bot.enable_puid('wxpy_puid.pkl')

user_kolly = ensure_one(bot.friends().search('kolly'))


# 打印所有收到的消息
@bot.register()
def print_messages(msg):
    logger.info('收到消息：' + msg.text)


# 注册好友请求类消息
@bot.register(msg_types=FRIENDS)
def auto_accept_friends(msg):
    # 自动接受验证信息中包含 'wxpy' 的好友请求
    # 判断好友请求中的验证文本
    # if 'wxpy' in msg.text.lower():
    # 接受好友 (msg.card 为该请求的用户对象)
    new_friend = msg.card.accept()

    # 数据库增加新用户
    user_id = user_service.add_new_user(new_friend.puid, new_friend.nick_name, '', new_friend.sex, new_friend.city)
    logger.info('数据库成功增加新用户：{} {} {} {}'.format(user_id, new_friend.puid, new_friend.nick_name, new_friend.sex,
                                                new_friend.city))

    # 设置好友备注
    remark = new_friend.nick_name + '-' + str(user_id)
    new_friend.set_remark_name(remark)
    logger.info('成功设置好友备注：{}'.format(remark))

    # 向新的好友发送消息
    new_friend.send('哈喽~我是你的专属机器人助理小糖 😘\n'
                    '你可以回复 help 查看小糖的使用指南噢~')

    user_kolly.send("小糖增加一位新的好友：{}".format(new_friend.nick_name))


# 转发所有收到的好友消息或者群聊@消息给kolly
@bot.register(chats=[User, Group])
def forward_to_kolly(msg):
    # 随机等几秒，避免被风控
    sleep(random.randint(1, 3))
    # 如果是群聊，但没有被@，则不回复
    if isinstance(msg.chat, Group) and not msg.is_at:
        return
    else:
        logger.info('收到群聊「{}」「{}」的消息：'.format(msg.sender.name, msg.member.name, msg.text))
        msg.forward(user_kolly, prefix='群聊「' + msg.sender.name + '」的「' + msg.member.name + '」发送内容:')


# 自动回复
@bot.register(chats=User)
def auto_reply(msg):
    logger.info('收到好友「{}」消息：{}'.format(msg.sender.name, msg.text))
    # 随机等几秒，避免被风控
    sleep(random.randint(1, 2))
    if '你已添加了' in msg.text and '现在可以开始聊天了' in msg.text:
        return
    if 'help' == msg.text.lower():
        return "输入「天气」即可查询设置天气\n" \
               "输入「提醒」即可查询未来的提醒\n" \
               "输入「热榜」即可查询今日热榜消息\n" \
               "输入「股票」即可查询你关注的股票涨跌\n" \
               "输入「篮球」即可查询 NBA 今日赛事\n" \
               "输入「定制」即可定制你的专属功能\n" \
               "输入「赞赏」即可为小糖充电唷"
    if '天气' == msg.text:
        return web_spider.get_weather_today()
    elif '股票' == msg.text:
        return web_spider.get_szzs_today()
    elif '周刊' == msg.text:
        return web_spider.get_ryf_weekly()
    elif '篮球' == msg.text:
        return "https://sports.qq.com/kbsweb/kbsshare/gamelist.htm#nav-nba"
    elif '热榜' == msg.text:
        return "https://tophub.today/"
    elif '提醒' in msg.text:
        return reminder.invoke_remind()
    elif '赞赏' == msg.text:
        image = './image/donate.png'
        msg.reply_image(image)
        return "如果帮到你，请帮小糖充下电吧"
    elif '定制' == msg.text:
        image = './image/author.jpg'
        msg.reply_image(image)
        return "请联系作者添加你想要的定制功能吧"
    elif 'test' == msg.text:
        # msg.sender.set_remark_name('test remark')
        return
    else:
        return "小糖无法识别这个指定喔，回复 help 了解详情~"


# 通知 kolly 程序已启动
user_kolly.send("小糖已启动！")

logger.info('====== Server Start ======')

# 启动定时任务
init_scheduler(bot)

# 打印信息
logger.info(bot)
logger.info(bot.friends())
logger.info(bot.registered)

# 进入 Python 命令行、让程序保持运行
# embed()
bot.join()

logger.info("程序意外中断！")
user_kolly.send("小糖掉线了！")

sys.exit()
