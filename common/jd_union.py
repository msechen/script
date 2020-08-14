# 导入模块
import datetime
import hashlib
import json
import logging

import requests

logger = logging.getLogger('wx')

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/67.0.3396.87 Safari/537.36"
}

appkey = '1a449d84b554735f7fe3a9037099bddc'
appsecret = '7f69d2fcca5c443386017f9a97d14c83'

order_api = 'jd.union.open.order.query'
order_row_api = 'jd.union.open.order.row.query'
sku_info_api = 'jd.union.open.goods.promotiongoodsinfo.query'


# 查询京东联盟的订单
def get_order(order_time):
    last_min = datetime.datetime.now() - datetime.timedelta(minutes=1)
    # print(last_min)
    # timestamp = '2020-08-12 01:58:02'
    timestamp = last_min.strftime('%Y-%m-%d %H:%M:%S')
    if order_time is None:
        order_time = last_min.strftime('%Y%m%d%H%M')

    str_to_sign = appsecret + 'app_key' + appkey + 'formatjsonmethod' + order_api + 'param_json{"orderReq":{"time":"' + order_time + '","pageNo":1,"pageSize":20,"type":1}}sign_methodmd5timestamp' + timestamp + 'v1.0' + appsecret
    # print(strToSign)

    hl = hashlib.md5()
    hl.update(str_to_sign.encode(encoding='utf-8'))
    sign = hl.hexdigest().upper()
    # print(sign)

    url = 'https://router.jd.com/api?v=1.0&method=' + order_api + '&access_token=&app_key=1a449d84b554735f7fe3a9037099bddc&sign_method=md5&format=json&timestamp=' + timestamp + '&sign=' + sign + '&param_json={"orderReq":{"time":"' + order_time + '","pageNo":1,"pageSize":20,"type":1}}'
    # print(url)

    response = requests.get(url, headers=headers)
    if response.text == '':
        logger.info(order_api + " response empty")
        return order_api + " response empty"

    json_data = json.loads(response.text)
    # print(json_data)
    # print(json_data.get('jd_union_open_order_query_response'))
    result = json_data.get('jd_union_open_order_query_response').get('result')
    # print(result)
    data = json.loads(result)
    order_list = data.get('data')
    if order_list is None:
        # print("GG")
        return ''
    else:
        goods_num = 0
        sku_desc = ''
        for order in order_list:
            # print(order)
            if order.get('validCode') >= 16:
                goods_num += len(order.get('skuList'))
                skuList = order.get('skuList')
                for sku in skuList:
                    estimateCosPrice = sku.get('estimateCosPrice')
                    estimateFee = sku.get('estimateFee')
                    skuName = sku.get('skuName')
                    # print(skuName)
                    # print(estimateCosPrice, estimateFee)
                    sku_desc += '\n\n' + skuName + '\n订单价格：' + str(estimateCosPrice) + '\n预计佣金：' + str(estimateFee)
        # print("新增订单：", goods_num)
        # print(sku_desc)
        if goods_num > 0:
            return '恭喜, 新增订单数量：' + str(goods_num) + sku_desc
        else:
            return ''


# 根据 sku 查询商品佣金
def get_sku_info(sku_ids):
    last_min = datetime.datetime.now() - datetime.timedelta(minutes=1)
    timestamp = last_min.strftime('%Y-%m-%d %H:%M:%S')

    strToSign = appsecret + 'app_key' + appkey + 'formatjsonmethod' + sku_info_api + 'param_json{"skuIds":"' + sku_ids + '"}sign_methodmd5timestamp' + timestamp + 'v1.0' + appsecret
    # print(strToSign)

    hl = hashlib.md5()
    hl.update(strToSign.encode(encoding='utf-8'))
    sign = hl.hexdigest().upper()
    # print(sign)

    url = 'https://router.jd.com/api?v=1.0&method=' + sku_info_api + '&access_token=&app_key=1a449d84b554735f7fe3a9037099bddc&sign_method=md5&format=json&timestamp=' + timestamp + '&sign=' + sign + '&param_json={"skuIds":"' + sku_ids + '"}'
    # print(url)

    response = requests.get(url, headers=headers)
    if response.text == '':
        logger.info(sku_info_api + " response empty")
        return sku_info_api + " response empty"

    json_data = json.loads(response.text)
    # print(json_data)
    # print(json_data.get('jd_union_open_goods_promotiongoodsinfo_query_response'))
    result = json_data.get('jd_union_open_goods_promotiongoodsinfo_query_response').get('result')
    # print(result)
    data = json.loads(result)
    sku_list = data.get('data')
    if sku_list is None:
        return "没有此 sku 数据"
    else:
        info = '[查询结果]'
        for sku in sku_list:
            goods_name = sku.get('goodsName')
            unit_price = sku.get('unitPrice')
            commision_ratio_pc = sku.get('commisionRatioPc')
            commision = float(unit_price) * float(commision_ratio_pc) / 100
            is_jd_sale = sku.get('isJdSale')
            material_url = sku.get('materialUrl')
            info += "\n\n商品名称：" + goods_name + "\n商品价格：" + str(unit_price) + "\n佣金比例：" + str(
                commision_ratio_pc) + "\n佣金：" + str(commision) + "\n是否自营：" + str(is_jd_sale) + "\n商品地址：" + material_url
        return info


if __name__ == "__main__":
    # get_order(None)
    print(get_order('202008131702'))
    # print(get_sku_info('65379713262,65386799109'))
