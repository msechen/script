from common import jd_union
from common import zhihu_spider
from dao import zh_answer_dao
from dao import zh_goods_dao
from dao import zh_question_dao
from dao import zh_search_dao
from dao import zh_log_dao
from utils import *

new_day_hour = "00"

heiqi_cookie = '_zap=e57707b8-7a03-4462-a346-bd5da5d02539; d_c0="APCh2_BT2Q-PTigVkv897aqeNSJEQvYc18w=|1565062665"; _xsrf=SrmxfUWg8IEOJrRXM1DcwQQD0iXNzsnN; _ga=GA1.2.1478516503.1565065195; __snaker__id=nk5RnIvDHfQhp4OA; _9755xjdesxxd_=32; __utmz=51854390.1613287518.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); tshl=; __utmc=51854390; __utmv=51854390.100-1|2=registration_date=20150224=1^3=entry_date=20150224=1; oauth_from="/settings/account"; ff_supports_webp=1; q_c1=cf37d6a5119f4336bae212034c8ffa6c|1625147574000|1565065193000; __utma=51854390.1478516503.1565065195.1621049374.1625647467.4; captcha_session_v2="2|1:0|10:1625880570|18:captcha_session_v2|88:aGR5NDFqMEg2TDdIWjZhaXFkd3ZtTkt6KzdSWkREQWN0N2NRQjlGQm9XcmZudWtTMTNxR3V4Tjg0NE1LMU0zcA==|6a630b9a403a645aa1df2ed120893f60f2bd938ba9c9b17c143692db8ada91bc"; gdxidpyhxdE=A4i35N4JADR7P1udbtX7HoovaLIm1%2BDe5tin5%2BZPnd4a5Vp%2BvcKep0ytUc%5CeetneS8NL9aRVgdMpvrlbBe5AvoqKWhCbXHkBX%5CbPpMJWyORspNAqWAlEBSA%5CMJrUBZfGjKIo%5C9EH%2BfVigwqqUet8rnrIxrE0c7m83WR3naEksPD4qkkY%3A1625881471836; YD00517437729195%3AWM_NI=37%2FibvT6PNxetv7eztvFu5WdUTwUIjETZM5ooTRdPk2KpJHjCMH7OG%2FkgvuBVP07yFSThRxeF9qezz99ORd1Yvcr1qeft8l4mO2X8IwUPbL3zcAUV4H0DV8k0l%2FwLt85YWs%3D; YD00517437729195%3AWM_NIKE=9ca17ae2e6ffcda170e2e6eea9ae5eaeefe182f3649b928ab2d55a838e8ebbb5398b8dfcb7e750898bf984d32af0fea7c3b92af1e9e18ae17e98eaa0affb6fb8aaf986f980b69abbd6d670978cb9b6cc62878c96aeb865ad8c9e85d361f295c0abcb62819388d8ce4dedb5a997f84a969000d8fc4e918ca8b3fb6f86e7bf86f972fbe781b3e73b9baaad93b47ba7babcd9ef40af91feb9bb43b58ba083cf39babd8fb6d5408cf08cb7bb61f4b4e198cf80fceb97b8f237e2a3; YD00517437729195%3AWM_TID=8I5LEaWazqtEUQAUAFIqicS4RMWaUuMO; z_c0="2|1:0|10:1625880593|4:z_c0|92:Mi4xLWVEOUFBQUFBQUFBOEtIYjhGUFpEeWNBQUFDRUFsVk5FSVVRWVFDeEk3SUp3QWRIaUt2NElNRmhSVndmdXJvMVBn|6a008e2ee3a62d3de37b8bc3ce7e001708e221e08514b1f723d3cf0c5f08ac0a"; SESSIONID=9BWviT1JQgdFt6qvvnpYstXqXxsEQCnsYtHDLyBkAiO; JOID=VFoQB0njog9o4fGTa-EiUCiFbx553udZGIyhpSC2wWwvk8PmGgZ4-Arh8pVsASvMnT1TUk4qEVpeYD5MZSEF9gA=; osd=VVkXCk_ioQhl5_CQbOwkUSuCYhh43eBUHo2ioi2wwG8onsXnGQF1_gvi9ZhqACjLkDtSUUknF1tdZzNKZCIC-wY=; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1626673041,1626678003,1626678025,1626678030; tst=h; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1626933959; KLBRSID=fe0fceb358d671fa6cc33898c8c48b48|1626968851|1626960877'


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
    top = "[通知-hq]\n"
    mid = "订单量："
    end = "\n佣金："

    today = datetime.datetime.now().strftime('%Y-%m-%d')
    count, sum = zhihu_spider.get_zhihu_earnings(today, today, heiqi_cookie)

    return top + mid + str(count) + end + str(sum)


if __name__ == '__main__':
    print(query_zhihu_earnings())
