# -*- coding: utf-8 -*-
"""
数据库操作
"""
from jd.entity import Item

from lib.db import db_helper

import logging

log = logging.getLogger('refusea.jd.dao')


class ItemDao(object):

    # 查出全部商品
    @staticmethod
    def list():
        sql = ('select skuid, name, channel, image, price, floor_price, '
               'shop, coupons, together_buy, sec_kill, popularize_url, '
               'jd_delivery, jd_operate, update_time '
               'from jd_item order by create_time desc, id asc')
        result = db_helper.select(sql)
        return [Item.of(row) for row in result] if result else None

    # 插入商品
    @staticmethod
    def insert(item: Item) -> int:
        sql = ('insert into jd_item '
               '(skuid, name, channel, shop, image, price, floor_price, '
               'coupons, together_buy, sec_kill, popularize_url, '
               'jd_delivery, jd_operate, create_time, update_time) values ('
               '%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s'
               ')')
        args = (item.skuid, item.name, item.channel, item.shop, item.image,
                item.price, item.floor_price, item.coupons_str,
                item.together_buy_str, item.sec_kill_str,
                item.popularize_url, item.jd_delivery, item.jd_operate,
                item.update_time, item.update_time)
        return db_helper.execute(sql, args)

    @staticmethod
    def update(item: Item) -> int:
        sql = ('update jd_item set name=%s, channel=%s, '
               'shop= %s, image=%s, price=%s, '
               'floor_price=%s, coupons=%s, together_buy=%s, sec_kill=%s, '
               'popularize_url=%s, jd_delivery=%s, jd_operate=%s, '
               'update_time=%s where skuid=%s')
        args = (item.name, item.channel, item.shop, item.image,
                item.price, item.floor_price, item.coupons_str,
                item.together_buy_str, item.sec_kill_str,
                item.popularize_url, item.jd_delivery, item.jd_operate,
                item.update_time,  item.skuid)
        return db_helper.execute(sql, args)

    # 批量删除商品
    @staticmethod
    def delete(skuids) -> int:
        if not skuids:
            return 0

        ids = [str(i) for i in skuids]
        sql = 'delete from jd_item where skuid in ('
        sql += ','.join(ids)
        sql += ')'
        return db_helper.execute(sql)
