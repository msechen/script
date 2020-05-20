# 导入模块
import random
from time import sleep

from apscheduler.schedulers.background import BackgroundScheduler
from wxpy import *

import common.web_spider as spider
from dao import service_dao
from dao import subscribe_dao
from dao import user_dao
from dao import holiday_dao

bot = None
logger = logging.getLogger('wx')


def debug():
    bot.file_helper.send('scheduler init!')


# 定时任务初始化
def init_scheduler(bot_var):
    global bot
    bot = bot_var

    # 后台非阻塞定时任务
    scheduler = BackgroundScheduler()
    # 调试
    # scheduler.add_job(debug, 'interval', seconds=30)  # 间隔执行
    # 天气预报
    service = service_dao.query_service_by_id(1)
    logger.info('服务:{} 定时启动时间 hour:{} min:{}'.format(service.name, service.hour, service.minute))
    scheduler.add_job(send_weather_info, 'cron', year=service.year, month=service.month, day=service.day,
                      day_of_week=service.day_of_week, hour=service.hour, minute=service.minute, second=service.second)
    # 股票信息
    service = service_dao.query_service_by_id(2)
    logger.info('服务:{} 定时启动时间 hour:{} min:{}'.format(service.name, service.hour, service.minute))
    scheduler.add_job(send_stock_info, 'cron', year=service.year, month=service.month, day=service.day,
                      day_of_week=service.day_of_week, hour=service.hour, minute=service.minute, second=service.second)
    # 鸡汤
    service = service_dao.query_service_by_id(3)
    logger.info('服务:{} 定时启动时间 hour:{} min:{}'.format(service.name, service.hour, service.minute))
    scheduler.add_job(send_chicken_soup, 'cron', year=service.year, month=service.month, day=service.day,
                      day_of_week=service.day_of_week, hour=service.hour, minute=service.minute, second=service.second)
    # 晚安
    service = service_dao.query_service_by_id(4)
    logger.info('服务:{} 定时启动时间 hour:{} min:{}'.format(service.name, service.hour, service.minute))
    scheduler.add_job(send_goodnight, 'cron', year=service.year, month=service.month, day=service.day,
                      day_of_week=service.day_of_week, hour=service.hour, minute=service.minute, second=service.second)
    # 阮一峰开发手册
    service = service_dao.query_service_by_id(5)
    logger.info('服务:{} 定时启动时间 hour:{} min:{}'.format(service.name, service.hour, service.minute))
    scheduler.add_job(send_ryf_blob, 'cron', year=service.year, month=service.month, day=service.day,
                      day_of_week=service.day_of_week, hour=service.hour, minute=service.minute, second=service.second)
    # 阮一峰周刊
    service = service_dao.query_service_by_id(6)
    logger.info('服务:{} 定时启动时间 hour:{} min:{}'.format(service.name, service.hour, service.minute))
    scheduler.add_job(send_ryf_weekly, 'cron', year=service.year, month=service.month, day=service.day,
                      day_of_week=service.day_of_week, hour=service.hour, minute=service.minute, second=service.second)
    # health check
    service = service_dao.query_service_by_id(7)
    logger.info('服务:{} 定时启动时间 hour:{} min:{}'.format(service.name, service.hour, service.minute))
    scheduler.add_job(check, 'cron', year=service.year, month=service.month, day=service.day,
                      day_of_week=service.day_of_week, hour=service.hour, minute=service.minute, second=service.second)
    # 信用卡还款
    service = service_dao.query_service_by_id(8)
    logger.info('服务:{} 定时启动时间 hour:{} min:{}'.format(service.name, service.hour, service.minute))
    scheduler.add_job(check, 'cron', year=service.year, month=service.month, day=service.day,
                      day_of_week=service.day_of_week, hour=service.hour, minute=service.minute, second=service.second)
    # 月初提醒
    service = service_dao.query_service_by_id(9)
    logger.info('服务:{} 定时启动时间 hour:{} min:{}'.format(service.name, service.hour, service.minute))
    scheduler.add_job(new_month, 'cron', year=service.year, month=service.month, day=service.day,
                      day_of_week=service.day_of_week, hour=service.hour, minute=service.minute, second=service.second)
    # 年初提醒
    service = service_dao.query_service_by_id(10)
    logger.info('服务:{} 定时启动时间 hour:{} min:{}'.format(service.name, service.hour, service.minute))
    scheduler.add_job(new_year, 'cron', year=service.year, month=service.month, day=service.day,
                      day_of_week=service.day_of_week, hour=service.hour, minute=service.minute, second=service.second)
    # 节日祝福
    service = service_dao.query_service_by_id(11)
    logger.info('服务:{} 定时启动时间 hour:{} min:{}'.format(service.name, service.hour, service.minute))
    scheduler.add_job(send_holiday_blessing, 'cron', year=service.year, month=service.month, day=service.day,
                      day_of_week=service.day_of_week, hour=service.hour, minute=service.minute, second=service.second)
    scheduler.start()


# 发送天气信息
def send_weather_info():
    weather_info = '美好的一天又开始了，小糖温馨提醒你：\n' + spider.get_weather_today()
    send_service_info(1, weather_info)


# 发送股票信息
def send_stock_info():
    stock_info = spider.get_szzs_today()
    send_service_info(2, stock_info)


# 早起
def send_chicken_soup():
    info = '1.打扫房间、清理垃圾\n2.跑步、下蹲\n3.规划待办事项\n4.阅读半小时'
    send_service_info(3, info)


# 睡觉
def send_goodnight():
    info = '1.检查记账\n2.清理相册\n3.十个俯卧撑和下蹲\n4.清空各个inbox\n5.反思、总结、冥想'
    send_service_info(4, info)


# 发送阮一峰博客
def send_ryf_blob():
    send_service_info(5, '阮一峰开发手册 http://www.ruanyifeng.com/blog/developer/, 每天看一篇，提升自己')


# 发送阮一峰周刊
def send_ryf_weekly():
    ryf_weekly_info = spider.get_ryf_weekly()
    send_service_info(6, ryf_weekly_info)


# health check
def check():
    send_service_info(7, 'robot still alive')


# 信用卡还款
def credit_card_repay():
    send_service_info(8, '招行、广银信用卡还款')


# 月初提醒
def new_month():
    send_service_info(9, '新的一个月开始啦')


# 年初提醒
def new_year():
    send_service_info(10, '新的一年开始啦')


# 节日祝福
def send_holiday_blessing():
    blessing_info = holiday_dao.query_today_holiday()
    if blessing_info != '':
        send_service_info(11, blessing_info)


def send_service_info(service_id, info):
    service = service_dao.query_service_by_id(service_id)
    for sub in subscribe_dao.query_subscribe_by_service_id(service_id):
        logger.info("用户{}订阅「{}」".format(sub.user_id, service.name))
        user = user_dao.query_user_by_id(sub.user_id)
        logger.info("用户{}昵称：{}".format(user.id, user.nickname))
        chat = ensure_one(bot.friends(update=True).search(user.nickname + '-' + str(user.id)))
        logger.info("chat info：{}".format(chat))
        chat.send(info)
        sleep(random.randint(3, 5))
