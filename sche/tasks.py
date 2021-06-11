# -*- coding: utf-8 -*-

import logging

from flask import Flask
from flask_apscheduler import APScheduler

from jd.service import import_and_clean
from surl.service import clean_expired

# surl 过期时间 3H
SURL_EXPIRE_TIME = 1000 * 60 * 60 * 3


log = logging.getLogger('refusea.sche.tasks')


def start_sche(app: Flask) -> None:

    sche_config = {
        "SCHEDULER_API_ENABLED": True,
        "JOBS": [
            {
                "id": "jd_import_and_clean",
                "func": "sche.tasks:jd_import_and_clean",
                "trigger": "interval",
                "minutes": 5
            },
            {
                "id": "clean_expire_surl",
                "func": "sche.tasks:clean_expire_surl",
                "trigger": "interval",
                "minutes": 30
            }
        ]
    }
    app.config.update(sche_config)

    scheduler = APScheduler()
    scheduler.init_app(app)
    scheduler.start()


def jd_import_and_clean() -> None:
    """京东商品导入和清理"""
    result = import_and_clean()
    log.info('jd import and clean: %s', result)


def clean_expire_surl() -> None:
    """删除过期短链"""
    result = clean_expired()
    log.info('clean expired surl: %s', result)
