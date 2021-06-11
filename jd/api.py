# -*- coding: utf-8 -*-
"""
京东联盟 api
"""

import hashlib
import logging
import json
import time

from typing import List

from lib.http_helper import HttpHelper
from jd.entity import Item
from jd.config import APP_KEY, SECRET_KEY, WEBSITE_ID, POSITION_ID


API_URL = 'https://api.jd.com/routerjson'

TIME_FORMATE = r'%Y-%m-%d %H:%M:%S'


http = HttpHelper(headers={'Content-Type': 'application/json'})
log = logging.getLogger('refusea.jd.api')


def elite_item_query(channel: int, page: int = 1) -> List[Item]:
    """京粉精选商品查询接口 https://union.jd.com/openplatform/api/10417"""

    # 业务参数
    biz_params = {
        'goodsReq': {
            'eliteId': channel,
            'pageIndex': page
        }
    }

    # 调用接口获得响应
    result = _call_api(
        'jd.union.open.goods.jingfen.query',
        biz_params,
        'jd_union_open_goods_jingfen_query_responce',
        'queryResult')

    # 解析响应
    return [Item.parse(item, channel) for item in result] if result else None


def transform_url(url: str, coupon_url: str = None, sub_uid: str = None) -> str:
    """转链接口 https://union.jd.com/openplatform/api/10421"""

    req = {
        'materialId': url,
        'siteId': WEBSITE_ID,
        'positionId': POSITION_ID,
    }
    if coupon_url:
        req['couponUrl'] = coupon_url
    if sub_uid:
        req['subUnionId'] = sub_uid
    biz_params = {'promotionCodeReq': req}

    # 调用接口获得响应
    result = _call_api(
        'jd.union.open.promotion.common.get',
        biz_params,
        'jd_union_open_promotion_common_get_responce',
        'getResult')

    # 转链失败: 可能是商品不在推广中，或商品链接无法识别
    return result['clickURL'] if result else None


def order_query(start: str, end: str, page: int = 1) -> dict:
    """订单查询"""

    req = {
        'pageIndex': page,
        'pageSize': 20,
        # 更新时间
        'type': 3,
        'startTime': start,
        'endTime': end
    }
    biz_params = {'orderReq': req}

    # 调用接口获得响应
    result = _call_api(
        'jd.union.open.order.row.query',
        biz_params,
        'jd_union_open_order_row_query_responce',
        "queryResult")

    return result


def _call_api(method_name: str, biz_params: dict, response_name: str, result_key: str) -> dict:
    """调用开放平台接口获取返回值"""

    # 系统参数
    params = {
        'method': method_name,
        'app_key': APP_KEY,
        'timestamp': time.strftime(TIME_FORMATE, time.localtime(time.time())),
        'format': 'json',
        'v': '1.0',
        'sign_method': 'md5',
        # 业务参数
        '360buy_param_json': json.dumps(biz_params)
    }

    # 生成签名
    params['sign'] = _generate_sign(params)

    # 调用接口获得响应
    text = http.get(API_URL, params=params)

    # 解析返回结果
    rsp = json.loads(text).get(response_name)
    if rsp:
        # 注意：这里的 result 是个 json 格式字符串
        result = rsp.get(result_key)
        if result:
            nest_result = json.loads(result)
            if nest_result.get('code') == 200:
                return nest_result.get('data')

    log.warning('call api fail: method=%s, params=%s, result=%s',
                method_name, params['360buy_param_json'], text)
    return None


def _generate_sign(params: dict) -> str:
    """构造签名 https://union.jd.com/helpcenter/13246-13247-46301"""

    # 排序
    keys = list(params.keys())
    keys.sort()

    src = SECRET_KEY
    for key in keys:
        src += key
        src += params[key]
    src += SECRET_KEY

    md5 = hashlib.md5()
    md5.update(src.encode(encoding='utf-8'))
    return md5.hexdigest().upper()
