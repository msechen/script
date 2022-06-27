from common import jd_union
from common import zhihu_spider, web_spider
from dao import zh_answer_dao
from dao import zh_goods_dao
from dao import zh_question_dao
from dao import zh_search_dao
from dao import zh_log_dao
from dao import zh_config_dao
from utils import *
from wxpy import *

logger = logging.getLogger('wx')

new_day_hour = "00"
g_like1 = 0
g_like2 = 0
g_like3 = 0
g_like4 = 0

g_like1_yestoday = 43738
g_like2_yestoday = 31992
g_like3_yestoday = 24761
g_like4_yestoday = 0

# 更新知乎问题的阅读量
def update_zhihu_question():
    yestoday_date = get_yestoday_date()  # 昨天的日期
    is_new_day = get_current_hour() == new_day_hour  # 判断今天是不是全新的一天

    success_num = 0

    question_list = zh_question_dao.query_question_list()
    for question in question_list:
        # 更新问题的数据（浏览量、点赞数、新增浏览数）
        title, view_num, answer_num = zhihu_spider.get_view_and_answer_num(question.qid)
        if title is None:
            continue

        # 如果是新的一天，更新问题数据到历史记录，更新问题的截止昨日阅读数和回答数
        if is_new_day:
            zh_question_dao.add_question_history(question.qid, yestoday_date, view_num, answer_num)
            zh_question_dao.update_question_yestoday(question.qid, view_num, answer_num)

        # 更新浏览量、点赞数
        zh_question_dao.update_question(question.qid, title, view_num, answer_num)

        success_num += 1

    zh_log_dao.add_log(1, "sync_question", "success_question_num:{}".format(success_num))


# 更新知乎回答的排名和点赞数
def update_zhihu_answer():
    yestoday_date = get_yestoday_date()  # 昨天的日期
    is_new_day = get_current_hour() == new_day_hour  # 判断今天是不是全新的一天

    success_num = 0

    answer_list = zh_answer_dao.query_answer_list()
    for answer in answer_list:
        # 爬取知乎问题的答案排名
        rank, like = zhihu_spider.get_rank_and_like(answer.qid, answer.aid)

        # 如果是新的一天，更新回答数据到历史记录，更新回答昨日点赞数和排名
        if is_new_day:
            zh_answer_dao.add_answer_history(answer.qid, answer.aid, yestoday_date, like, rank)
            zh_answer_dao.update_answer_yestoday(answer.aid, like, rank)

        # 更新点赞数、排名
        zh_answer_dao.update_answer(answer.aid, like, rank)

        success_num += 1

    zh_log_dao.add_log(1, "sync_answer", "success_answer_num:{}".format(success_num))


def update_qa(qid, aid):
    # 更新问题的数据（浏览量、点赞数、新增浏览数）
    title, view_num, answer_num = zhihu_spider.get_view_and_answer_num(qid)

    # 更新浏览量、点赞数
    zh_question_dao.update_question(qid, title, view_num, answer_num)

    # 爬取知乎问题的答案排名
    rank, like = zhihu_spider.get_rank_and_like(qid, aid)

    # 更新点赞数、排名
    zh_answer_dao.update_answer(aid, like, rank)


# 更新 JD 商品数据
def update_jd_goods(sku_ids):
    if sku_ids is not None:
        goods_name, price, fee_rate, fee, jd_sale, order_num, cid1, cid1_name, cid2, cid2_name, cid3, cid3_name = jd_union.get_sku_info_single(
            sku_ids)
        if goods_name is not None:
            zh_goods_dao.update_goods(sku_ids, '无效商品', 0, 0, 0, 0, 0, 0, '', 0, '', 0, '')
        else:
            zh_goods_dao.update_goods(sku_ids, goods_name, price, fee_rate, fee, jd_sale, order_num, cid1,
                                      cid1_name, cid2, cid2_name, cid3, cid3_name)
        return

    success_num = 0

    goods_list = zh_goods_dao.query_goods_list()
    for goods in goods_list:
        goods_name, price, fee_rate, fee, jd_sale, order_num, cid1, cid1_name, cid2, cid2_name, cid3, cid3_name = jd_union.get_sku_info_single(goods.sku_id)

        if goods_name is None:
            zh_goods_dao.update_goods(goods.sku_id, '无效商品', 0, 0, 0, 0, 0, 0, '', 0, '', 0, '')
        else:
            zh_goods_dao.update_goods(goods.sku_id, goods_name, price, fee_rate, fee, jd_sale, order_num, cid1,
                                      cid1_name, cid2, cid2_name, cid3, cid3_name)

        success_num += 1

    zh_log_dao.add_log(1, "sync_goods", "success_goods_num:{}".format(success_num))


# 查询知乎文章排名
def query_article_rank(user_id):
    top = "【排名统计】"
    mid = ""
    end = ""

    article_list = zh_search_dao.query_search_list(user_id)
    for article in article_list:
        mid = str(article.update_time)
        end = end + "\n[" + str(article.rank) + "] " + article.keyword
        if article.remark is not None and article.remark != "":
            end = end + "(" + article.remark + ")"

    return top + mid + end


# 查询知乎今日佣金
def query_zhihu_earnings():
    today = datetime.datetime.now().strftime('%Y-%m-%d')

    top1 = "[知乎-1] "
    mid1 = "订单量："
    end1 = " 佣金："
    end11 = " 比例："

    count1, sum1, gmv1 = zhihu_spider.get_zhihu_earnings(today, today, zh_config_dao.query_config('dxck').value)

    top2 = "[知乎-2] "
    mid2 = "订单量："
    end2 = " 佣金："

    count2, sum2, gmv2 = 0, 0, 0
    # count2, sum2, gmv2 = zhihu_spider.get_zhihu_earnings(today, today, zh_config_dao.query_config('lsck').value)

    rate = ''
    if gmv1 > 0:
        rate = str(round(sum1 / gmv1 * 100, 2))

    return top1 + mid1 + str(count1) + end1 + str(sum1 / 100) + end11 + rate, sum1 / 100, top2 + mid2 + str(
        count2) + end2 + str(sum2 / 100), sum2 / 100


# 查询知乎今日佣金
def query_zhihu_earnings_2():
    today = datetime.datetime.now().strftime('%Y-%m-%d')

    top1 = "[知乎猫叔] "
    mid1 = "订单量："
    end1 = " 佣金："

    count1, sum1, gmv = zhihu_spider.get_zhihu_earnings(today, today, zh_config_dao.query_config('maoshu-ck').value)

    return top1 + mid1 + str(count1) + end1 + str(sum1/100), sum1/100


# 查询京粉今日佣金
def query_jingfen_earnings():
    today = datetime.datetime.now().strftime('%Y-%m-%d')

    top1 = "[京粉-1] "
    mid1 = "订单量："
    end1 = " 佣金："

    count1, sum1 = zhihu_spider.get_jingfen_earnings(today, today, zh_config_dao.query_config('jfck1').value)

    top2 = "[京粉-2] "
    mid2 = "订单量："
    end2 = " 佣金："

    count2, sum2 = zhihu_spider.get_jingfen_earnings(today, today, zh_config_dao.query_config('jfck2').value)

    return top1 + mid1 + str(count1) + end1 + str(sum1), sum1, top2 + mid2 + str(count2) + end2 + str(sum2), sum2


# 查询京粉点击数
def query_jingfen_click():
    today = datetime.datetime.now().strftime('%Y-%m-%d')
    yestoday = (datetime.datetime.today() + datetime.timedelta(-1)).strftime('%Y-%m-%d')

    today_click = zhihu_spider.get_jingfen_click(today, today, zh_config_dao.query_config('jfck2').value)

    yestoday_click = zhihu_spider.get_jingfen_click(yestoday, yestoday, zh_config_dao.query_config('jfck2').value)

    return "[京粉点击数]" + str(today_click) + "/(" + str(yestoday_click) + ")"


# 查询京粉点击数
def query_pop_income():
    today = datetime.datetime.now().strftime('%Y-%m-%d')
    yestoday = (datetime.datetime.today() + datetime.timedelta(-1)).strftime('%Y-%m-%d')

    today_pop = zhihu_spider.get_jd_order(today, today, zh_config_dao.query_config('jfck2').value)
    today_gmv = 0
    today_order = 0
    for order in today_pop:
        if order['validCodeMsg'] == '已付款' or order['validCodeMsg'] == '已完成' or order['validCodeMsg'] == '已付定金':
            if 'skuShopName' in order and order['estimateCosPrice'] > 500 and order['pid']== '1003111258_4000348996_3004398015':
                if 'Redmi Note 11 Pro' not in order['skuName']:
                    if order['skuShopName'] == 'realme真我官方旗舰店' or order['skuShopName'] == 'iQOO官方旗舰店' or order[
                    'skuShopName'] == '小米手机官方旗舰店' or order['skuShopName'] == 'OPPO官方直营旗舰店' or order[
                    'skuShopName'] == 'vivo官方旗舰店' or order['skuShopName'] == '一加官方旗舰店':
                        today_gmv += order['estimateCosPrice']
                        today_order += 1

    yestoday_pop = zhihu_spider.get_jd_order(yestoday, yestoday, zh_config_dao.query_config('jfck2').value)
    yestoday_gmv = 0
    yestoday_order = 0
    for order in yestoday_pop:
        if order['validCodeMsg'] == '已付款' or order['validCodeMsg'] == '已完成' or order['validCodeMsg'] == '已付定金':
            if 'skuShopName' in order and order['estimateCosPrice'] > 500 and order['pid']== '1003111258_4000348996_3004398015':
                if 'Redmi Note 11 Pro' not in order['skuName']:
                    if order['skuShopName'] == 'realme真我官方旗舰店' or order['skuShopName'] == 'iQOO官方旗舰店' or order[
                    'skuShopName'] == '小米手机官方旗舰店' or order['skuShopName'] == 'OPPO官方直营旗舰店' or order[
                    'skuShopName'] == 'vivo官方旗舰店' or order['skuShopName'] == '一加官方旗舰店':
                        yestoday_gmv += order['estimateCosPrice']
                        yestoday_order += 1

    return "[pop今] GMV:" + str(int(today_gmv)) + " 订单数:" + str(today_order) + " 佣金:" + str(
        int(today_gmv * 0.08)) + "\n[pop昨] GMV:" + str(int(yestoday_gmv)) + " 订单数:" + str(
        yestoday_order) + " 佣金:" + str(int(yestoday_gmv * 0.08))


# 查询京粉点击数
def query_pop_income_all():
    begin = '2022-04-21'
    end = '2022-05-30'

    total_pop = zhihu_spider.get_jd_order(begin, end, zh_config_dao.query_config('jfck2').value)
    total_gmv = 0
    total_order = 0
    for order in total_pop:
        if order['validCodeMsg'] == '已付款' or order['validCodeMsg'] == '已完成':
            if 'skuShopName' in order and order['estimateCosPrice'] > 500 and order['pid']== '1003111258_4000348996_3004398015':
                if 'Redmi Note 11 Pro' not in order['skuName']:
                    if order['skuShopName'] == 'realme真我官方旗舰店' or order['skuShopName'] == 'iQOO官方旗舰店' or order[
                        'skuShopName'] == '小米手机官方旗舰店' or order['skuShopName'] == 'OPPO官方直营旗舰店' or order[
                        'skuShopName'] == 'vivo官方旗舰店' or order['skuShopName'] == '一加官方旗舰店':
                        total_gmv += order['estimateCosPrice']
                        total_order += 1

    return "[pop总] GMV:" + str(int(total_gmv)) + " 订单数:" + str(total_order) + " 佣金:" + str(int(total_gmv * 0.08))


# 查询京粉点击数
def query_brand_order(brand):
    today = datetime.datetime.now().strftime('%Y-%m-%d')
    yestoday = (datetime.datetime.today() + datetime.timedelta(-1)).strftime('%Y-%m-%d')

    brandName = 'xxx'
    if brand == 'oppo':
        brandName = 'OPPO京东自营官方旗舰店'
    elif brand == 'vivo':
        brandName = 'vivo京东自营官方旗舰店'

    today_orders = zhihu_spider.get_jd_order(today, today, zh_config_dao.query_config('jfck2').value)

    today_gmv = 0
    today_order = 0
    today_order_detail = ''
    for order in today_orders:

        if order['validCodeMsg'] == '已付款' or order['validCodeMsg'] == '已完成' or order['validCodeMsg'] == '已付定金':

            if 'skuShopName' in order and order['estimateCosPrice'] > 500:
                if order['skuShopName'] == brandName:

                    logger.info(order)

                    today_gmv += order['estimateCosPrice']
                    today_order += 1
                    today_order_detail += order['skuName'] + '\n'

    yestoday_orders = zhihu_spider.get_jd_order(yestoday, yestoday, zh_config_dao.query_config('jfck2').value)
    yestoday_gmv = 0
    yestoday_order = 0
    yestoday_order_detail = ''
    for order in yestoday_orders:
        if order['validCodeMsg'] == '已付款' or order['validCodeMsg'] == '已完成' or order['validCodeMsg'] == '已付定金':
            if 'skuShopName' in order and order['estimateCosPrice'] > 500:
                if order['skuShopName'] == brandName:
                    yestoday_gmv += order['estimateCosPrice']
                    yestoday_order += 1
                    yestoday_order_detail += order['skuName'] + '\n'

    return "[今日数据]\nGMV:" + str(int(today_gmv)) + "\n订单数:" + str(today_order) + "\n订单明细:" + str(today_order_detail) + "\n\n[昨日数据]\nGMV:" + str(int(yestoday_gmv)) + "\n订单数:" + str(yestoday_order) + "\n订单明细:" + str(yestoday_order_detail)

# 查询红包发放数
def query_jingfen_redpacket():
    today = datetime.datetime.now().strftime('%Y-%m-%d')

    top2 = "[京粉-2] "
    mid2 = "红包点击："
    end2 = " 红包发放："

    show, give = zhihu_spider.get_jingfen_redpacket(today, today, zh_config_dao.query_config('jfck2').value)

    return top2 + mid2 + str(show) + end2 + str(give)


# 查询知+今日消耗
def query_zhijia_pay():
    top = "[知+消耗] "

    today = datetime.datetime.now().strftime('%Y-%m-%d')
    pay = zhihu_spider.get_zhijia_pay(today, today, zh_config_dao.query_config('zjck').value)

    return top + str(round(pay/100,2)), pay/100


# 查询知+今日消耗
def query_zhijia_pay_2():
    top = "[知+] "

    today = datetime.datetime.now().strftime('%Y-%m-%d')
    result, pay = zhihu_spider.get_zhijia_pay_2(today, today, zh_config_dao.query_config('lanmao-zjck').value)

    return top + result, pay/100


# 查询今日总收入
def query_today_earnings():
    zhihu_earnings1, num1, zhihu_earnings2, num2 = query_zhihu_earnings()
    jingfen_earnings1, num3, jingfen_earnings2, num4 = query_jingfen_earnings()
    # redpacket = query_jingfen_redpacket()
    zhijia_pay, num5 = query_zhijia_pay()

    total = int(num1 + num2 + num3 + num4 - num5)

    # return '佣金总计：' + str(total) + "\n\n" + zhihu_earnings1 + "\n" + zhihu_earnings2 + "\n" + zhijia_pay
    return '佣金总计：' + str(
        total) + "\n\n" + zhihu_earnings1 + "\n" + jingfen_earnings1 + "\n" + jingfen_earnings2 + "\n" + zhijia_pay

# 查询今日总收入
def query_today_earnings_2():
    zhihu_earnings1, num1 = query_zhihu_earnings_2()
    zhijia_pay, num4 = query_zhijia_pay_2()

    total = int(num1 - num4)

    return '佣金总计：' + str(total) + "\n\n" + zhihu_earnings1 + "\n" + zhijia_pay    

# 查询今日阅读和点赞
def query_today_data():
    return zhihu_spider.get_zhihu_card_data(zh_config_dao.query_config('dxck').value)

# 查询今日阅读和点赞
def query_today_data_2():
    return zhihu_spider.get_zhihu_card_data(zh_config_dao.query_config('maoshu-ck').value)

# 查询文章点赞数
def get_zhihu_like(total):
    global g_like1, g_like2, g_like3, g_like4, g_like1_yestoday, g_like2_yestoday, g_like3_yestoday, g_like4_yestoday
    txt1 = web_spider.get_zhihu_like('https://zhuanlan.zhihu.com/p/354168117').replace(" 人赞同了该文章","")
    like1 = int(txt1.replace(",", ""))
    inc1 = like1 - g_like1
    inc1_today = like1 - g_like1_yestoday
    g_like1 = like1

    txt2 = web_spider.get_zhihu_like('https://zhuanlan.zhihu.com/p/340848190').replace(" 人赞同了该文章","")
    like2 = int(txt2.replace(",", ""))
    inc2 = like2 - g_like2
    inc2_today = like2 - g_like2_yestoday
    g_like2 = like2

    txt3 = web_spider.get_zhihu_like('https://zhuanlan.zhihu.com/p/367100764').replace(" 人赞同了该文章","")
    like3 = int(txt3.replace(",", ""))
    inc3 = like3 - g_like3
    inc3_today = like3 - g_like3_yestoday
    g_like3 = like3

    if total:
        g_like1_yestoday = like1
        g_like2_yestoday = like2
        g_like3_yestoday = like3

    return txt1 + "(+" + str(inc1) + ")"  + "(+" + str(inc1_today) + ")" + '\n' + txt2 + "(+" + str(inc2) + ")"  + "(+" + str(inc2_today) + ")" + '\n' + txt3 + "(+" + str(inc3) + ")"  + "(+" + str(inc3_today) + ")"


# 查询文章点赞数
def get_zhihu_like_2():
    txt1 = web_spider.get_zhihu_like('https://zhuanlan.zhihu.com/p/420158303')

    return txt1


if __name__ == '__main__':
    print(query_today_earnings())
    print(query_pop_income())
