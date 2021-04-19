# 导入模块
import datetime
import random
from time import sleep

from apscheduler.schedulers.background import BackgroundScheduler
from wxpy import *

import common.jd_union as jd
import common.web_spider as spider
import zhihu.sync_data as sync_data
from dao import holiday_dao
from dao import service_dao
from dao import service_subscribe_dao
from dao import user_dao
from dao import zh_log_dao

bot = None
user_kolly = None
logger = logging.getLogger('wx')


def debug():
    bot.file_helper.send('scheduler init!')


# 定时任务初始化
def init_scheduler(bot_var):
    global bot, user_kolly, user_xy, user_dd, user_lanmao
    bot = bot_var
    user_kolly = ensure_one(bot.friends().search('kolly'))
    user_lanmao = ensure_one(bot.groups().search('蓝猫数据监控'))
    user_xy = ensure_one(bot.friends().search('一棵萌图-2'))
    user_dd = ensure_one(bot.friends().search('东东哥'))

    # 后台非阻塞定时任务
    scheduler = BackgroundScheduler()
    # 调试
    # scheduler.add_job(debug, 'interval', seconds=30)  # 间隔执行
    # scheduler.add_job(get_lanmao_log, 'interval', seconds=10)  # 间隔执行

    # 天气预报
    service = service_dao.query_service_by_id(1)
    logger.info('服务:{} 定时启动时间 hour:{} min:{}'.format(service.name, service.hour, service.minute))
    scheduler.add_job(send_weather_info, 'cron', year=service.year, month=service.month, day=service.day,
                      day_of_week=service.day_of_week, hour=service.hour, minute=service.minute, second=service.second)
    # 股票信息
    service = service_dao.query_service_by_id(2)
    logger.info('服务:{} 定时启动时间 day_of_week:{} hour:{} min:{}'.format(service.name, service.day_of_week, service.hour,
                                                                    service.minute))
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
    scheduler.add_job(credit_card_repay, 'cron', year=service.year, month=service.month, day=service.day,
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
    # 考试倒计时
    service = service_dao.query_service_by_id(12)
    logger.info('服务:{} 定时启动时间 hour:{} min:{}'.format(service.name, service.hour, service.minute))
    scheduler.add_job(send_exam_countdown, 'cron', year=service.year, month=service.month, day=service.day,
                      day_of_week=service.day_of_week, hour=service.hour, minute=service.minute, second=service.second)

    # 知乎文章排名
    scheduler.add_job(get_article_rank, 'cron', year='*', month='*', day='*', day_of_week='*',
                      hour='*', minute='40', second='30')

    # jd 订单轮训
    # scheduler.add_job(get_order, 'cron', year='*', month='*', day='*', day_of_week='*',
    #                   hour='*', minute='0/5', second='30')

    # 蓝猫日志告警
    # scheduler.add_job(get_lanmao_log, 'cron', year='*', month='*', day='*', day_of_week='*',
    #                   hour='*', minute='0/10', second='30')

    scheduler.start()


# 查询京东订单
def get_order():
    appkey1 = '1a449d84b554735f7fe3a9037099bddc' # 大号
    appsecret1 = '7f69d2fcca5c443386017f9a97d14c83'
    appkey2 = '2d2ea015479ddc93f30a2c7366ba4c84' # 小号
    appsecret2 = 'ae911e53de6c4853a5c89a815347c90f'
    appkey3 = '1ab5eda3a89081fdcc445fc05bc963fe' # 熙雅
    appsecret3 = 'f94167788ce842a9b2bbbee5d1b569e9'
    appkey4 = '3181401a489ee5fdaff002a00a8f8b33'  # KD
    appsecret4 = 'f52bf0f5e2d74386b167d5a56c816bcf'

    result = jd.get_order(appkey1, appsecret1)
    if len(result) > 0:
        user_kolly.send('[大号]' + result)

    result = jd.get_order(appkey2, appsecret2)
    if len(result) > 0:
        user_kolly.send('[小号]' + result)

    result = jd.get_order(appkey3, appsecret3)
    if len(result) > 0:
        user_kolly.send('[图图]' + result)
        user_xy.send('[图图]' + result)

    result = jd.get_order(appkey4, appsecret4)
    if len(result) > 0:
        # user_kolly.send('[KD]' + result)
        # user_dd.send('[KD]' + result)
        user_lanmao.send(result)


# 查询文章排名
def get_article_rank():
    result1 = sync_data.query_article_rank(11)
    user_kolly.send(result1)
    # result2 = sync_data.query_article_rank(16)
    # user_xy.send(result2)


# 查询错误日志
def get_lanmao_log():
    result = '[后台日志]'
    logs = zh_log_dao.query_error_log()
    if len(logs) > 0:
        for log in logs:
            result += '\n\n' + '时间：' + str(log.create_time)
            result += '\n' + '消息：' + log.msg
        if len(result) > 1000:
            result += '\n\n' + result[0:500]
        user_lanmao.send(result)



# 发送天气信息
def send_weather_info():
    info = '美好的一天从小糖早报开始 😝\n'
    send_service_info(1, info)


# 发送股票信息
def send_stock_info():
    zs_info = spider.get_zs_today()
    if zs_info != '':
        send_service_info(2, zs_info)


# 早起
def send_chicken_soup():
    info = '小糖晨间提醒:\n\n1.打扫房间、清理垃圾\n2.跑步\n3.规划今日待办\n4.阅读半小时'
    send_service_info(3, info)


# 睡觉
def send_goodnight():
    info = '小糖睡前提醒:\n\n1.检查记账\n2.清理相册\n3.俯卧撑、下蹲\n4.清空所有inbox\n5.反思、总结、冥想'
    send_service_info(4, info)


# 发送阮一峰博客
def send_ryf_blob():
    send_service_info(5, '阮一峰开发手册 http://www.ruanyifeng.com/blog/developer/, 每天看一篇，提升自己')


# 发送阮一峰周刊
def send_ryf_weekly():
    ryf_weekly_info = spider.get_ryf_weekly()
    if ryf_weekly_info != '':
        send_service_info(6, ryf_weekly_info)


# health check
def check():
    send_service_info(7, 'robot still alive')


# 信用卡还款
def credit_card_repay():
    send_service_info(8, '小糖温馨提示：今天是招行、广银信用卡还款日唷 🤪')


# 月初提醒
def new_month():
    send_service_info(9, '小糖温馨提示：新的一个月开始啦，冲鸭 😊')


# 年初提醒
def new_year():
    send_service_info(10, '小糖温馨提示：新的一年开始啦，冲鸭 😊')


# 节日祝福
def send_holiday_blessing():
    blessing_info = holiday_dao.query_today_holiday()
    if blessing_info != '':
        send_service_info(11, blessing_info)


# 考试倒计时
def send_exam_countdown():
    d0 = datetime.datetime.now()
    d1 = datetime.datetime(2020, 9, 5)
    d2 = datetime.datetime(2020, 10, 11)
    interval1 = (d1 - d0).days + 1
    interval2 = (d2 - d0).days + 1
    if interval1 > 0 and interval1 % 10 == 0:
        info = '小糖温馨提示：距离中级考试还有 ' + str(interval1) + ' 天，熙雅冲鸭 🦆'
        send_service_info(12, info, './fight.jpeg')
    if interval2 > 0 and interval2 % 10 == 0:
        info = '小糖温馨提示：距离 CPA 考试还有 ' + str(interval2) + ' 天，熙雅冲鸭 🦆'
        send_service_info(12, info, './fight.jpeg')


def send_service_info(service_id, info, *images):
    service = service_dao.query_service_by_id(service_id)
    for sub in service_subscribe_dao.query_service_subscribe_by_service_id(service_id):
        logger.info('用户{}订阅「{}」'.format(sub.user_id, service.name))
        user = user_dao.query_user_by_id(sub.user_id)
        logger.info('用户{}昵称：{}'.format(user.id, user.nickname))
        chat = ensure_one(bot.friends(update=True).search(user.nickname + '-' + str(user.id)))
        logger.info('chat info：{}'.format(chat))
        if service_id == 1:
            weather_info = spider.get_weather_today(sub.param)
            info = info + '\n' + weather_info
        if service_id == 2:
            jj_info = spider.get_jj_today(sub.param)  # 基金代码
            info = info + '\n' + jj_info
        chat.send(info)
        # for img in images:
        #     logger.info(img)
        #     chat.send_image(img)
        sleep(random.randint(3, 5))
