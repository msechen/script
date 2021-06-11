# -*- coding: utf-8 -*-

import logging
import json
import time

log = logging.getLogger('refusea.jd.entity')


# 商品
# |----优惠券
# |----拼购
# |----秒杀
class Item(object):

    def __init__(self,
                 skuid=0, name=None, channel=0, shop=None, image=None,
                 price=0, floor_price=0,
                 coupons=None, together_buy=None, sec_kill=None,
                 jd_delivery=0, jd_operate=0,
                 url=None, popularize_url=None,
                 update_time=None):

        # 对应数据库字段
        self.skuid = skuid
        self.name = name
        self.channel = channel
        self.shop = shop
        self.image = image
        self.price = price
        self.floor_price = floor_price
        self.coupons_str = coupons
        self.together_buy_str = together_buy
        self.sec_kill_str = sec_kill
        self.url = url
        self.popularize_url = popularize_url
        self.jd_delivery = jd_delivery
        self.jd_operate = jd_operate
        self.update_time = update_time

        # 最优优惠券领取地址，用于生成商品、券二合一推广地址
        self.best_coupon_url = None

        if coupons:
            self.coupons = json.loads(coupons)
            self.coupons_str = None
        else:
            self.coupons = None

        if together_buy:
            self.together_buy = json.loads(together_buy)
            self.together_buy_str = None
        else:
            self.together_buy = None

        if sec_kill:
            self.sec_kill = json.loads(sec_kill)
            self.sec_kill_str = None
        else:
            self.sec_kill = None

    def __repr__(self):
        return json.dumps(self.__dict__, ensure_ascii=False)

    def best_coupon(self):
        if self.coupons:
            for coupon in self.coupons:
                if coupon['best']:
                    return coupon['url']
        return None

    # 从数据库记录构造商品
    @classmethod
    def of(cls, row):
        return cls(
            skuid=row[0], name=row[1],
            channel=row[2], image=row[3],
            price=row[4], floor_price=row[5], shop=row[6],
            coupons=row[7], together_buy=row[8], sec_kill=row[9],
            popularize_url=row[10], jd_delivery=row[11], jd_operate=row[12], update_time=row[13]
        )

    # jf_goods: json(dict), 是 api 返回结果的 result.data 列表里的元素 jfGoodsResp
    @classmethod
    def parse(cls, jf_goods, channel):

        now = int(time.time())

        item = cls()
        item.channel = channel
        item.update_time = now
        item.skuid = jf_goods['skuId']
        item.name = jf_goods['skuName']
        item.url = jf_goods['materialUrl']
        item.shop = jf_goods['shopInfo']['shopName']
        # 图片
        item.image = jf_goods['imageInfo']['imageList'][0]['url']
        # 价格
        price_info = jf_goods['priceInfo']
        item.price = price_info['price']
        item.floor_price = min(price_info['lowestPrice'],
                               price_info['lowestCouponPrice'])
        # g=自营 p=pop
        item.jd_operate = 1 if 'g' == jf_goods['owner'] else 0
        item.jd_delivery = jf_goods['deliveryType']
        # 优惠券，支持多个优惠券
        cls.parse_coupons(item, jf_goods, now)
        # 拼购, 开始结束时间可能为空
        cls.parse_together_buy(item, jf_goods)
        # 秒杀
        cls.parse_sec_kill(item, jf_goods)

        return item

    @staticmethod
    def parse_coupons(item, jf_goods, now):
        # 优惠券，支持多个优惠券
        coupon_info = jf_goods.get('couponInfo')
        if coupon_info:
            coupon_list = coupon_info.get('couponList')
            if coupon_list:
                item.coupons = []
                for coupon in coupon_list:
                    item.coupons.append({
                        # 优惠券领取地址
                        'url': coupon['link'],
                        # 标题，示例：199-100
                        'title':  Item.coupon_title(coupon['quota'],
                                                    coupon['discount']),
                        'start': int(coupon['getStartTime'] / 1000),
                        'end': int(coupon['getEndTime'] / 1000),
                        'best': coupon.get('isBest') or 0
                    })
                    if coupon.get('isBest'):
                        item.best_coupon_url = coupon['link']
                item.coupons = Item.clean_coupons(item.coupons, now)
                if item.coupons:
                    item.coupons_str = json.dumps(item.coupons)

    @staticmethod
    def parse_together_buy(item, jf_goods):
        # 拼购, 开始结束时间可能为空
        pingou_info = jf_goods.get('pinGouInfo')
        if pingou_info:
            item.together_buy = {}
            # 拼购人数
            item.together_buy['count'] = pingou_info['pingouTmCount']
            # 拼购价
            item.together_buy['price'] = pingou_info['pingouPrice']
            # 拼购开始时间
            pingou_start = pingou_info.get('pingouStartTime')
            if pingou_start:
                item.together_buy['start'] = int(
                    pingou_start / 1000)
            # 拼购结束时间
            pingou_end = pingou_info.get('pingouEndTime')
            if pingou_end:
                item.together_buy['end'] = int(pingou_end / 1000)

            item.together_buy_str = json.dumps(item.together_buy)

    @staticmethod
    def parse_sec_kill(item, jf_goods):
        # 秒杀
        seckill_info = jf_goods.get('seckillInfo')
        if seckill_info:
            item.sec_kill = {}
            item.sec_kill['price'] = seckill_info['seckillPrice']
            item.sec_kill['start'] = int(
                seckill_info['seckillStartTime'] / 1000)
            item.sec_kill['end'] = int(
                seckill_info['seckillEndTime'] / 1000)
            item.sec_kill_str = json.dumps(item.sec_kill)

    # 构造优惠券标题，如果是整数价格去掉小数部分，否则保留 2 位小数
    # 示例: 100-50
    @staticmethod
    def coupon_title(quota, discount):
        title = ''
        price = int(quota)
        # 是否整数
        if price == quota:
            title += str(price)
        else:
            title += '{:.2f}'.format(quota)
        title += '-'
        price = int(discount)
        # 是否整数
        if price == discount:
            title += str(price)
        else:
            title += '{:.2f}'.format(discount)
        return title

    # 商品存在金额一致，起止时间不同的优惠券，本方法进行去重
    # now: 当前 unix 时间戳
    @staticmethod
    def clean_coupons(coupons, now):

        # 按标题分组
        coupon_group = {}
        for coupon in coupons:
            coupon_group.setdefault(coupon['title'], []).append(coupon)

        result = []
        for coupons in coupon_group.values():
            if len(coupons) == 1:
                result += coupons
            else:
                # 只留下最优的 or 有效期最长的
                last = None
                for coupon in coupons:
                    if coupon['best']:
                        last = coupon
                        break
                    if coupon['start'] <= now and coupon['end'] > now:
                        if last is None:
                            last = coupon
                        elif coupon['end'] > last['end']:
                            last = coupon
                if last:
                    result.append(last)
        return result

    # 返回一个视图对象 view object
    def vo(self, now):
        vo = {
            'name': self.name,
            'price': self.price,
            'floor_price': self.floor_price,
            'image': self.image,
            'popularize_url': self.popularize_url,
            'shop': self.shop,
            'jd_delivery': self.jd_delivery,
            'jd_operate': self.jd_operate
        }
        if self.coupons:
            coupons = Item.clean_coupons(self.coupons, now)
            if coupons:
                vo['coupons'] = coupons
        if self.sec_kill:
            vo['sec_kill'] = self.sec_kill
        if self.together_buy:
            vo['together_buy'] = self.together_buy
        return vo
