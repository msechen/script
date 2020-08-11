# 导入模块
import json
import logging
import hashlib
import time
import datetime


import requests
from bs4 import BeautifulSoup

logger = logging.getLogger('wx')

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/67.0.3396.87 Safari/537.36"
}

appkey = '1a449d84b554735f7fe3a9037099bddc'
appsecret = '7f69d2fcca5c443386017f9a97d14c83'


# 查询深圳今天的天气
def get_order():
    last_min = datetime.datetime.now() - datetime.timedelta(minutes=1)
    # print(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time())))
    # timestamp = '2020-08-12 01:58:02'
    timestamp = last_min.strftime('%Y-%m-%d %H:%M:%S')
    # order_time = '202008120019'
    order_time = last_min.strftime('%Y%m%d%H%M')

    strToSign = appsecret + 'app_key' + appkey +'formatjsonmethodjd.union.open.order.queryparam_json{"orderReq":{"time":"' + order_time + '","pageNo":1,"pageSize":20,"type":1}}sign_methodmd5timestamp' + timestamp + 'v1.0' + appsecret
    # print(strToSign)

    hl = hashlib.md5()
    hl.update(strToSign.encode(encoding='utf-8'))
    sign = hl.hexdigest().upper()
    # print(sign)

    url = 'https://router.jd.com/api?v=1.0&method=jd.union.open.order.query&access_token=&app_key=1a449d84b554735f7fe3a9037099bddc&sign_method=md5&format=json&timestamp=' + timestamp + '&sign=' + sign + '&param_json={"orderReq":{"time":"' + order_time + '","pageNo":1,"pageSize":20,"type":1}}'

    # print(url)

    response = requests.get(url, headers=headers)
    if response.text == '':
        logger.info("request https://free-api.heweather.net response empty")
        return "request https://free-api.heweather.net response empty"

    json_data = json.loads(response.text)
    # print(json_data)
    # print(json_data.get('jd_union_open_order_query_response'))
    result = json_data.get('jd_union_open_order_query_response').get('result')
    # print(result)
    data = json.loads(result)
    order_list = data.get('data')
    if order_list is None:
        print("GG")
        return 0
    else:
        goods_num = 0
        for order in order_list:
            if order.get('validCode') >= 16:
                goods_num += len(order.get('skuList'))
        print("新增订单：", goods_num)
    return goods_num


if __name__ == "__main__":
    get_order()
