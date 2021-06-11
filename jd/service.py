# -*- coding: utf-8 -*-

from jd.api import elite_item_query, transform_url
from jd.cache import cache
from jd.channel import ALL_CHANNEL, channels
from jd.dao import ItemDao

import logging
import time


# 商品有效期
VALID_SECONDS = 8 * 60 * 60
# 每页返回几个商品
PAGE_SIZE = 5
# 搜索最多返回几条记录
SEARCH_SIZE = 20

log = logging.getLogger('refusea.jd.service')


# 从接口导入商品信息，清理过期商品信息
def import_and_clean():

    # 用于去重
    skuids = set()
    result = {}
    transform_count = 0

    for channel in channels:
        items = elite_item_query(channel)
        if not items:
            continue

        count = 0
        for item in items:
            if item.skuid in skuids:
                continue

            cached_item = cache.items.get(item.skuid)
            if cached_item and item.best_coupon() == cached_item.best_coupon():
                # 如果商品已存在且最佳优惠券不变，可以不用重新生成推广链接
                item.popularize_url = cached_item.popularize_url
            else:
                item.popularize_url = transform_url(
                    item.url, coupon_url=item.best_coupon_url)
                if item.popularize_url:
                    transform_count += 1
            if item.popularize_url:
                skuids.add(item.skuid)
                count += save(item)

        if count:
            result[ALL_CHANNEL[channel]] = count

    result['transform_count'] = transform_count

    # 清理商品
    result['clean'] = clean()

    # 刷新缓存
    cache.load()

    return result


# 将商品保存到数据库并刷新缓存
def save(item):
    if item.skuid in cache.items:
        result = ItemDao.update(item)
    else:
        result = ItemDao.insert(item)
    return result


# 商品清理
# 创建时间为 8 小时前
# 拼购已过期
# 秒杀已过期
def clean():
    now = int(time.time())
    skuids = []
    for skuid, item in cache.items.items():
        if now - item.update_time >= VALID_SECONDS:
            skuids.append(skuid)
        elif item.sec_kill and item.sec_kill['end'] <= now:
            skuids.append(skuid)
        elif item.together_buy:
            end = item.together_buy.get('end')
            if end and end <= now:
                skuids.append(skuid)
    if skuids:
        ItemDao.delete(skuids)

    return skuids


# 获取精选频道商品
def choice(channel, page) -> dict:
    skuids = cache.channel_skuids.get(channel)
    if skuids:
        count = len(skuids)
        pages = count / PAGE_SIZE
        total = int(pages)
        if pages > total:
            total += 1
        start = (page - 1) * PAGE_SIZE
        skuids = skuids[start:start+PAGE_SIZE]
        if skuids:
            now = int(time.time())
            result = {}
            result['code'] = 200
            result['channel'] = channel
            result['channel_name'] = ALL_CHANNEL[channel]
            result['page'] = page
            result['total'] = total
            result['count'] = count
            result['value'] = [
                cache.items[skuid].vo(now) for skuid in skuids]
            return result
    return None


# 搜索
# name：名称
# name_type：0=不限 1=商品名 2=店铺名
# coupon：0=不限 1=有券
# jd_operate：0=不限，1=京东自营
# discount: 3 折起
def search(name=None, name_type=0, coupon=0, jd_operate=0, discount=0) -> list:
    result = []
    now = int(time.time())
    for item in cache.items.values():

        if len(result) == SEARCH_SIZE:
            break

        # 自营
        if jd_operate == 1 and item.jd_operate != 1:
            continue
        # 有券
        if coupon == 1 and not item.coupons:
            continue

        # 3 折起
        if discount:
            if item.floor_price / item.price > 0.3:
                continue

        candidate = None
        if name:
            # 按名称搜索
            nl = name.lower()
            if name_type == 0:
                if nl in item.name.lower() or nl in item.shop.lower():
                    candidate = item
            elif name_type == 1:
                if nl in item.name.lower():
                    candidate = item
            else:
                if nl in item.shop.lower():
                    candidate = item
        else:
            candidate = item

        if candidate:
            vo = candidate.vo(now)
            if coupon == 1 and not vo.get('coupons'):
                continue
            result.append(vo)

    return result


def generate_popularize_url(url: str, skuid: int, user: str) -> str:
    """返回券+商品二合一推广链接, 包含用户识别信息"""
    item = cache.items.get(skuid)
    best_coupon = item.best_coupon() if item else None
    return transform_url(url, best_coupon, user)
