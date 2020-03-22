# 导入模块
from wxpy import *
from apscheduler.schedulers.background import BackgroundScheduler
import common.web_spider as spider

bot, user_kolly = None, None


def debug():
    bot.file_helper.send('scheduler init!')


# 定时任务初始化
def init_scheduler(bot_var):
    global bot, user_kolly
    bot = bot_var
    user_kolly = ensure_one(bot.friends().search('kolly'))
    # 通知 kolly 定时任务已启动
    user_kolly.send("定时任务已启动！")

    # 后台非阻塞定时任务
    scheduler = BackgroundScheduler()
    # 调试
    # scheduler.add_job(debug, 'interval', seconds=30)  # 间隔执行
    # 早上发送天气预报
    scheduler.add_job(send_chicken_soup, 'cron', day_of_week='mon-sun', hour=7, minute=0)  # corn表达式
    scheduler.add_job(send_weather_info, 'cron', day_of_week='mon-sun', hour=8, minute=0)  # corn表达式
    scheduler.add_job(send_stock_info, 'cron', day_of_week='mon-sun', hour=9, minute=0)  # corn表达式
    scheduler.add_job(send_stock_info, 'cron', day_of_week='mon-sun', hour=13, minute=0)  # corn表达式
    scheduler.add_job(send_stock_info, 'cron', day_of_week='mon-sun', hour=19, minute=0)  # corn表达式
    scheduler.add_job(send_goodnight, 'cron', day_of_week='mon-sun', hour=22, minute=0)  # corn表达式
    scheduler.start()


# 发送天气信息
def send_weather_info():
    info = '美好的一天又开始了，小糖温馨提醒你：\n' + spider.get_weather_today()
    user_kolly.send(info)


# 发送天气信息
def send_stock_info():
    user_kolly.send(spider.get_szzs_today())


# 发送鸡汤
def send_chicken_soup():
    info = '不要让十年后的自己悔不当初~\n' \
           '找到自己的目标，创造自己的价值\n' \
           '精进专业技能、阅读、写作、运动\n' \
           '少即是多、慢即是快'
    user_kolly.send(info)


# 发送睡前提醒
def send_goodnight():
    info = '请完成今天的总结\n' \
           '请写下明天的计划\n' \
           '早起、阅读、锻炼~不虚度光阴'
    user_kolly.send(info)
