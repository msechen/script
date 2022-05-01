from common import jd_union
from common import zhihu_spider, web_spider
from dao import zh_answer_dao
from dao import zh_goods_dao
from dao import zh_question_dao
from dao import zh_search_dao
from dao import zh_log_dao
from dao import zh_config_dao
from utils import *


# 查询京粉点击数
def query_article_draft():
    today_pop = zhihu_spider.get_article_draft_list(zh_config_dao.query_config('dxck').value)
    today_gmv = 0
    today_order = 0
    for order in today_pop:
        if order['validCodeMsg'] == '已付款' or order['validCodeMsg'] == '已完成':
            if 'skuShopName' in order and order['estimateCosPrice'] > 500:
                if order['skuShopName'] == 'realme真我官方旗舰店' or order['skuShopName'] == 'iQOO官方旗舰店' or order[
                    'skuShopName'] == '小米手机官方旗舰店' or order['skuShopName'] == 'OPPO官方直营旗舰店' or order[
                    'skuShopName'] == 'vivo官方旗舰店' or order['skuShopName'] == '一加官方旗舰店':
                    today_gmv += order['estimateCosPrice']
                    today_order += 1
                    # print(order)

    yestoday_pop = zhihu_spider.get_pop_order(yestoday, yestoday, zh_config_dao.query_config('jfck2').value)
    yestoday_gmv = 0
    yestoday_order = 0
    for order in yestoday_pop:
        if order['validCodeMsg'] == '已付款' or order['validCodeMsg'] == '已完成':
            if 'skuShopName' in order and order['estimateCosPrice'] > 500:
                if order['skuShopName'] == 'realme真我官方旗舰店' or order['skuShopName'] == 'iQOO官方旗舰店' or order[
                    'skuShopName'] == '小米手机官方旗舰店' or order['skuShopName'] == 'OPPO官方直营旗舰店' or order[
                    'skuShopName'] == 'vivo官方旗舰店' or order['skuShopName'] == '一加官方旗舰店':
                    yestoday_gmv += order['estimateCosPrice']
                    yestoday_order += 1
                    # print(order)

    total_pop = zhihu_spider.get_pop_order(begin, today, zh_config_dao.query_config('jfck2').value)
    total_gmv = 0
    total_order = 0
    for order in total_pop:
        if order['validCodeMsg'] == '已付款' or order['validCodeMsg'] == '已完成':
            if 'skuShopName' in order and order['estimateCosPrice'] > 500:
                if order['skuShopName'] == 'realme真我官方旗舰店' or order['skuShopName'] == 'iQOO官方旗舰店' or order[
                    'skuShopName'] == '小米手机官方旗舰店' or order['skuShopName'] == 'OPPO官方直营旗舰店' or order[
                    'skuShopName'] == 'vivo官方旗舰店' or order['skuShopName'] == '一加官方旗舰店':
                    total_gmv += order['estimateCosPrice']
                    total_order += 1
                    # print(order)

    return "[pop今] GMV:" + str(int(today_gmv)) + " 订单数:" + str(today_order) + " 佣金:" + str(
        int(today_gmv * 0.08)) + "\n[pop昨] GMV:" + str(int(yestoday_gmv)) + " 订单数:" + str(
        yestoday_order) + " 佣金:" + str(int(yestoday_gmv * 0.08)) + "\n[pop总] GMV:" + str(
        int(total_gmv)) + " 订单数:" + str(total_order) + " 佣金:" + str(int(total_gmv * 0.08))
