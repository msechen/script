from common import jd_union
from common import zhihu_spider
from dao import zh_answer_dao
from dao import zh_goods_dao
from dao import zh_question_dao
from dao import zh_search_dao
from dao import zh_log_dao
from utils import *

new_day_hour = "00"

daxiong_cookie = '_zap=e57707b8-7a03-4462-a346-bd5da5d02539; d_c0="APCh2_BT2Q-PTigVkv897aqeNSJEQvYc18w=|1565062665"; _xsrf=SrmxfUWg8IEOJrRXM1DcwQQD0iXNzsnN; _ga=GA1.2.1478516503.1565065195; __snaker__id=nk5RnIvDHfQhp4OA; _9755xjdesxxd_=32; __utmz=51854390.1613287518.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); tshl=; __utmc=51854390; __utmv=51854390.100-1|2=registration_date=20150224=1^3=entry_date=20150224=1; oauth_from="/settings/account"; ff_supports_webp=1; q_c1=cf37d6a5119f4336bae212034c8ffa6c|1625147574000|1565065193000; __utma=51854390.1478516503.1565065195.1621049374.1625647467.4; captcha_session_v2="2|1:0|10:1625880570|18:captcha_session_v2|88:aGR5NDFqMEg2TDdIWjZhaXFkd3ZtTkt6KzdSWkREQWN0N2NRQjlGQm9XcmZudWtTMTNxR3V4Tjg0NE1LMU0zcA==|6a630b9a403a645aa1df2ed120893f60f2bd938ba9c9b17c143692db8ada91bc"; gdxidpyhxdE=A4i35N4JADR7P1udbtX7HoovaLIm1%2BDe5tin5%2BZPnd4a5Vp%2BvcKep0ytUc%5CeetneS8NL9aRVgdMpvrlbBe5AvoqKWhCbXHkBX%5CbPpMJWyORspNAqWAlEBSA%5CMJrUBZfGjKIo%5C9EH%2BfVigwqqUet8rnrIxrE0c7m83WR3naEksPD4qkkY%3A1625881471836; YD00517437729195%3AWM_NI=37%2FibvT6PNxetv7eztvFu5WdUTwUIjETZM5ooTRdPk2KpJHjCMH7OG%2FkgvuBVP07yFSThRxeF9qezz99ORd1Yvcr1qeft8l4mO2X8IwUPbL3zcAUV4H0DV8k0l%2FwLt85YWs%3D; YD00517437729195%3AWM_NIKE=9ca17ae2e6ffcda170e2e6eea9ae5eaeefe182f3649b928ab2d55a838e8ebbb5398b8dfcb7e750898bf984d32af0fea7c3b92af1e9e18ae17e98eaa0affb6fb8aaf986f980b69abbd6d670978cb9b6cc62878c96aeb865ad8c9e85d361f295c0abcb62819388d8ce4dedb5a997f84a969000d8fc4e918ca8b3fb6f86e7bf86f972fbe781b3e73b9baaad93b47ba7babcd9ef40af91feb9bb43b58ba083cf39babd8fb6d5408cf08cb7bb61f4b4e198cf80fceb97b8f237e2a3; YD00517437729195%3AWM_TID=8I5LEaWazqtEUQAUAFIqicS4RMWaUuMO; z_c0="2|1:0|10:1625880593|4:z_c0|92:Mi4xLWVEOUFBQUFBQUFBOEtIYjhGUFpEeWNBQUFDRUFsVk5FSVVRWVFDeEk3SUp3QWRIaUt2NElNRmhSVndmdXJvMVBn|6a008e2ee3a62d3de37b8bc3ce7e001708e221e08514b1f723d3cf0c5f08ac0a"; SESSIONID=9BWviT1JQgdFt6qvvnpYstXqXxsEQCnsYtHDLyBkAiO; JOID=VFoQB0njog9o4fGTa-EiUCiFbx553udZGIyhpSC2wWwvk8PmGgZ4-Arh8pVsASvMnT1TUk4qEVpeYD5MZSEF9gA=; osd=VVkXCk_ioQhl5_CQbOwkUSuCYhh43eBUHo2ioi2wwG8onsXnGQF1_gvi9ZhqACjLkDtSUUknF1tdZzNKZCIC-wY=; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1626673041,1626678003,1626678025,1626678030; tst=h; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1626933959; KLBRSID=fe0fceb358d671fa6cc33898c8c48b48|1626968851|1626960877'

jingfen_cookie = 'shshshfpb=019dc0d06aa2e462834054205b0053bdbb00131f318b8bdef5afaa682d; shshshfpa=41bbaa1a-71b5-6408-2c40-ad1318c0e795-1565864063; __jdu=1565864058574699943438; pinId=GqwhOm1N07hG5udUB8Wie7V9-x-f3wj7; unick=kollyQAQ; _tp=AQ6didbygWCNpmcGsFqIKpdh2mG1KS6tV74cmIuYV7M%3D; _pst=489058829-519366; ceshi3.com=201; user-key=f0040998-c81e-42fa-88e4-9194f809d817; TrackID=1ADqy8WrxbVD1h-F2iMyBkFjA-UGzxfIoiAFoHEk5KVXIMQ9yz4VlTiKJB94HRcV6c6wI4NqYLLNKjaDWJ3l-oY-SUORoZbEjTm5NOwI2VCBvlT_asgE3vjAiamBU-52d; pin=489058829-519366; areaId=19; PCSYCityID=CN_440000_440300_440306; shshshfp=f53ecdb8548b3790cd0dfec546d4d778; mba_muid=1565864058574699943438; __jd_ref_cls=MJDAlliance_CheckDetail; CCC_SE=ADC_1ZrHM2%2fBLCMEINCnvxqx71MG1L3bTgHR1g4%2f38y1WrJwbjsBeW28P%2few0uRCqYDHqYOQVUhjT1%2fKTBKUTXJhjFJNSd5CbBijH%2fU2Tb648%2fp2HTUfAEsJ0%2bF2ApTRsqGp5cAV5g7KKpZp4V%2bH3zG0h0fnh05kSSnXsv6aBuTWdZB3CVLwdp2OxF6WrtN1aT4Kev0xa4VSb2mfS3u29K7lgG5Iz6m%2fwh16V2Icg7Msdh87IF22R343BhT76zfehNKWH2R8fv9jMoj%2fhmN%2fUUPBZTz2gdI6mQoAIqBbFoAFhze4y7CfzeZLG3qd7PJ2GC6PfyfDahFL0aIzmh%2fJ%2fFbWzQZ6tbGyBTN89q%2bWpFMZQh%2benymvlZj%2bzYlwbSwGcd9go8YPhSQY0E9BpKWGmOkqXzLgMdgbNG3YHAhoxBkTdAEEH8VlVnIyJyubDAckX7mQoSFT3deceMrYWINWUkP6kc1%2bM9nrmzcIcoyrOasV8DoCqMbbqJ0XwWQungly48Fo5OyD7ljmBPTYur9Kl3o6XgaXwcPyk%2bIXJGNpR5vaJQxK%2fQTdtToWwKceATxE0%2fLQy2Ihh7%2ftOnTmOzdoXuG2FqoDx3XERS0d%2f9G%2fGgd5d22QyBOgbbld89CWtvHb4Z2O%2feI8ct%2bXx7VU%2bkaMhf5QGd3VsLdCuPPgStZFyxWSk5io4Kjn3mUJbFsRf5byPCNK; unpl=V2_ZzNtbUZeFBAlDRYDLE4MVWIAGlkRXkNHcApEAXxJW1FlVBZYclRCFnUUR1JnGl4UZAIZXUVcQhJFCENkexhdBWMGEV5EVnMlMEsWBi8FXABmAxpVS15DEHQOQFN%2bEFUNYB8RXUNSQBB2CEdSeBtsBmczE21CU0QRfA9DVX8QWANiBBpVSlJBEHcBdmR7EVg1ZwITXEFURhBzDE5TS8%2fykbKLrYTy8pW%2f293L5K6Q99HZhSJdS1dBHXQJRlN4KV01ZjNEM0JWQhR0CUdcehwRBWMEFlRFUkIRfAxAUXwRVA1iARdfS2dCJXY%3d; __jdv=122270672|zhuanlan.zhihu.com|t_1001542270_1001912782_4000257517_3003554953|tuiguang|58f4a4afffaa4295b81c433d6a6e3f54|1627042568698; thor=9CD13908DD2A5491E4A853574FC9D62EEC551CD256DCBF32B52B954DFC3B95503D64AC2105298F5008FB9B0DCB53108FCBC3E41306DB239374C7A53DA715655331304DF44C1A8AA47638840947F73B2BDB3BF35D15323A87211961F513D872258D5A48A2BE1CFECB9426AEBA979F2A0E01AA644258AEFC61AD612015A71B28C88224ADC12692CADF155B09CEBA669E0F5F9B70E06D0F80BD0F13C1002D165CE4; ipLoc-djd=19-1607-40152-47420.5321791210; ipLocation=%u5e7f%u4e1c; 3AB9D23F7A4B3C9B=HUAHHHF7EDUFB2DZIFXSBIIX7OZERNLQ22BO3RWTUYURSC25OHJPYJKGCY3BL5B6IR7O7ISIU27TA2UTZSUS4KHHAQ; cn=0; _distM=214275160240; qd_ad=-%7C-%7C-%7C-%7C0; qd_uid=KRGF2SV6-Q667LU4KA5N4Q3JDWIUG; qd_fs=1627049188767; qd_ls=1627049188767; qd_ts=1627049188767; qd_sq=1; __jda=209449046.1565864058574699943438.1565864059.1627047438.1627053080.603; __jdc=209449046; __jdb=209449046.6.1565864058574699943438|603.1627053080; RT="z=1&dm=jd.com&si=yak405w74y&ss=krghe6qh&sl=6&tt=3lz&ld=a6d&nu=ae7dfa04a80c828c4c130c946f608a8e&cl=8xi"'

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
    top = "[通知-dx]\n"
    mid = "订单量："
    end = "\n佣金："

    today = datetime.datetime.now().strftime('%Y-%m-%d')
    count, sum = zhihu_spider.get_zhihu_earnings(today, today, daxiong_cookie)

    return top + mid + str(count) + end + str(sum / 100)


# 查询京粉今日佣金
def query_jingfen_earnings():
    top = "[通知-jf]\n"
    mid = "订单量："
    end = "\n佣金："

    today = datetime.datetime.now().strftime('%Y-%m-%d')
    count, sum = zhihu_spider.get_jingfen_earnings(today, today, jingfen_cookie)

    return top + mid + str(count) + end + str(sum)


# 查询京粉今日总佣金
def query_today_earnings():
    zhihu_earnings = query_zhihu_earnings()
    jingfen_earnings = query_jingfen_earnings()

    return zhihu_earnings + "\n\n" + jingfen_earnings


if __name__ == '__main__':
    print(query_today_earnings())
