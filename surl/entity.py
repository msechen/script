# -*- coding: utf-8 -*-

from lib.id import next
import time


SHORT_URL_PREFIX = 'https://refusea.com/surl?id='


class Surl(object):
    """短链"""

    def __init__(self, id: str, original_url: str, create_time: int) -> None:
        # id 是 16 进制格式
        self.id = id
        self.original_url = original_url
        self.create_time = create_time

    def refresh(self):
        self.create_time = int(time.time() * 1000)

    def short_url(self) -> str:
        """返回短链地址，不缓存而是随用随生成有利于 gc 回收，减少内存消耗"""
        return SHORT_URL_PREFIX + self.id

    @classmethod
    def of(cls, row: tuple) -> "Surl":
        """从数据库生成"""
        return cls(row[0], row[1], row[2])

    @classmethod
    def value_of(cls, original_url: str) -> "Surl":
        """从原始 url 生成"""
        now = int(time.time() * 1000)
        id = hex(next(now))[2:]
        return cls(id, original_url, now)
