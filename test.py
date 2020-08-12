import logging
import time

from apscheduler.schedulers.background import BackgroundScheduler

logger = logging.getLogger('test')
logger.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
fh = logging.FileHandler('test.log')  # 输出日志到文件
fh.setLevel(logging.DEBUG)
fh.setFormatter(formatter)
logger.addHandler(fh)
sh = logging.StreamHandler()  # 输出日志到终端
sh.setLevel(logging.DEBUG)
sh.setFormatter(formatter)
logger.addHandler(sh)


def job_function():
    logger.info("Hello World")


print("""输入「天气」即可查询设置天气
输入「热榜」即可查询今日热榜消息
       输入「股票」即可查询你关注的股票涨跌
       输入「篮球」即可查询 NBA 今日赛事
       输入「定制」即可定制你的专属功能
       输入「提醒」即可查询未来的提醒
       输入「赞赏」即可为小糖充电唷""")

schedule = BackgroundScheduler()
year = '*'
month = '*'
day = '*'
day_of_week = '*'
hour = '*'
minute = '*'
second = '0,10,20,30,40,50'
schedule.add_job(job_function, 'cron', year=year, month=month, day=day, day_of_week=day_of_week, hour=hour,
                 minute=minute, second=second)
schedule.start()
time.sleep(300)

