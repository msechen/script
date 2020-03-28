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
