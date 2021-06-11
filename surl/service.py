# -*- coding: utf-8 -*-

from surl.cache import cache
from surl.dao import SurlDao
from surl.entity import Surl

import time

# surl 过期时间 3H
EXPIRE_TIME = 1000 * 60 * 60 * 3


def generate(url: str) -> Surl:
    """用指定的链接生成短链"""

    surl = cache.url_cache.get(url)
    if surl:
        surl.refresh()
        SurlDao.update(surl)
    else:
        surl = Surl.value_of(url)
        if SurlDao.insert(surl):
            cache.cache(surl)

    return surl


def clean_expired() -> int:
    """删除过期短链"""

    now = int(time.time() * 1000)
    result = SurlDao.clean(now - EXPIRE_TIME)
    if result:
        cache.load()
    return result
