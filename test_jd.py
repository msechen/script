# -*- coding: utf-8 -*-

import logging
import json

from lib import logging_config

from jd.api import transform_url, elite_item_query, order_query
from jd.service import import_and_clean
from jd.cache import cache

log = logging.getLogger('refusea.test.jd')


def test_transform_url():
    """转链"""
    url = 'https://item.jd.com/3639922.html'
    purl = transform_url(url, sub_uid='1001')
    log.debug('%s >>> %s', url, purl)


def test_elite_item_query():
    """精选商品查询"""
    eid = 25
    result = elite_item_query(eid, page=1)
    if result:
        for item in result:
            log.debug(item)


def test_order_query():
    """订单查询"""
    result = order_query('2021-06-05 10:30:00', '2021-06-05 11:30:00')
    log.debug(json.dumps(result, ensure_ascii=False, sort_keys=True, indent=2))


def test_import_and_clean():
    """商品入库和过期清理"""
    result = import_and_clean()
    log.debug(result)


if __name__ == "__main__":

    log.debug('--------------------- test ---------------------')

    # test_transform_url()
    # test_elite_item_query()
    # test_order_query()

    test_import_and_clean()

    log.debug('--------------------- done ---------------------')
