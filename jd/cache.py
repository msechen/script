# -*- coding: utf-8 -*-
"""
商品缓存
"""
from jd.dao import ItemDao


class Cache(object):

    def __init__(self):
        # item.skuid: item
        self.items = {}
        # 按频道分组
        self.channel_skuids = {}

    # 加载缓存
    def load(self):
        _items = {}
        _channel_skuids = {}

        items = ItemDao.list()
        if items:
            for item in items:
                _items[item.skuid] = item
                _channel_skuids.setdefault(item.channel, []).append(item.skuid)

        self.items = _items
        self.channel_skuids = _channel_skuids


cache = Cache()
cache.load()
