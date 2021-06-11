# -*- coding: utf-8 -*-
'''
数据库助手
'''

import logging
import pymysql

from dbutils.pooled_db import PooledDB


# 数据库
DB_HOST = 'localhost'
DB_PORT = 3306
DB_NAME = 'rebate'
DB_USER = 'root'
DB_PASSWORD = 'mysql-password'

log = logging.getLogger('refusea.db')


# 单例使用
class DbHelper(object):

    def __init__(self):
        self.pool = PooledDB(
            creator=pymysql,
            mincached=1,
            host=DB_HOST,
            port=DB_PORT,
            user=DB_USER,
            password=DB_PASSWORD,
            database=DB_NAME
        )

    # 执行查询语句， 返回一个记录集
    def select(self, sql, params=None):
        conn = self.pool.connection()
        cursor = conn.cursor()
        try:
            count = cursor.execute(
                sql, params) if params else cursor.execute(sql)
            return cursor.fetchall() if count else None
        except Exception as ex:
            log.error('db error: sql=%s, ex=%s', sql, ex, stack_info=True)
            return None
        finally:
            cursor.close()
            conn.close()

    # 执行更新操作， 返回影响的行数
    def execute(self, sql, args=None) -> int:
        conn = self.pool.connection()
        cursor = conn.cursor()
        try:
            result = cursor.execute(sql, args)
            if result:
                conn.commit()
            return result
        except Exception as ex:
            log.error('db error: sql=%s, ex=%s', sql, ex, stack_info=True)
            return 0
        finally:
            cursor.close()
            conn.close()


db_helper = DbHelper()
