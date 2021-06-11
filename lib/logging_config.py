# -*- coding: utf-8 -*-

import logging
import logging.config
import sys


# 日志过滤器，过滤指定级别以外的日志
class LevelFilter(object):
    def __init__(self, *level):
        self.level = level

    def filter(self, record):
        return record.levelno in self.level


# 只打印 DEBUG 级别日志
class ConsoleFilter(LevelFilter):
    def __init__(self):
        LevelFilter.__init__(self, logging.DEBUG)


# 日志配置
logging_config = {
    'version': 1,
    'formatters': {
        'console_formatter': {
            'format': '[%(name)s] [%(levelname)s] %(message)s'
        },
        'file_formatter': {
            'format': '%(asctime)s [%(name)s] [%(levelname)s] %(message)s',
        }
    },
    'filters': {
        'console_filter': {
            '()': ConsoleFilter
        }
    },
    'handlers': {
        'console_handler': {
            'class': 'logging.StreamHandler',
            'stream': sys.stdout,
            'formatter': 'console_formatter',
            'level': 'DEBUG',
            'filters': ['console_filter']
        },
        'file_handler': {
            'class': 'logging.FileHandler',
            'filename': '/data/logs/flask/rebate.log',
            'encoding': 'utf-8',
            'mode': 'a',
            'level': 'INFO',
            'formatter': 'file_formatter'
        }
    },
    'loggers': {
        'refusea': {
            'level': 'DEBUG',
            'handlers': ['console_handler', 'file_handler'],
            'propagate': False
        },
        # 调整 flask 日志级别
        'werkzeug': {
            'level': 'WARNING',
            'handlers': ['file_handler'],
            'propagate': False
        }
    },
    'root': {
        'level': 'WARNING',
        'handlers': ['file_handler']
    },
    'incremental': False,
    'disable_existing_loggers': True
}


# 加载日志配置
logging.config.dictConfig(logging_config)
