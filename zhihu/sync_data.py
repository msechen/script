from common import jd_union
from common import zhihu_spider
from dao import zh_answer_dao
from dao import zh_goods_dao
from dao import zh_question_dao
from dao import zh_search_dao
from dao import zh_log_dao
from utils import *

new_day_hour = "00"


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


# 更新知乎文章排名
def update_article_rank():
    success_num = 0

    article_list = zh_search_dao.query_search_list()
    for article in article_list:
        rank = zhihu_spider.get_article_rank(article.keyword, article.x_zse_86, article.cookie, article.article_id)
        if rank is not None:
            zh_search_dao.update_search(article.article_id, rank)
            success_num += 1

    zh_log_dao.add_log(1, "sync_article_rank", "success_article_num:{}".format(success_num))


if __name__ == '__main__':
    # update_zhihu_question()
    # update_zhihu_answer()
    # update_jd_goods(None)
    update_article_rank()
