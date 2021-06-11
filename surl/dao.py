# -*- coding: utf-8 -*-

from lib.db import db_helper
from surl.entity import Surl

from typing import List


class SurlDao(object):

    @staticmethod
    def list() -> List[Surl]:
        sql = 'select id, original_url, create_time from surl'
        result = db_helper.select(sql)
        return result and [Surl.of(row) for row in result]

    @staticmethod
    def insert(surl: Surl) -> int:
        sql = 'insert into surl (id, original_url, create_time) values (%s, %s, %s)'
        return db_helper.execute(sql, (surl.id, surl.original_url, surl.create_time))

    @staticmethod
    def update(surl: Surl) -> int:
        sql = 'update surl set create_time=%s where id=%s'
        return db_helper.execute(sql, (surl.create_time, surl.id))

    @staticmethod
    def clean(expire_time: int) -> int:
        """删除某个时间以前创建的短链"""

        sql = 'delete from surl where create_time<%s'
        return db_helper.execute(sql, (expire_time,))
