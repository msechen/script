import time

from notion.client import NotionClient

from common import zhihu_spider

# Obtain the `token_v2` value by inspecting your browser cookies on a logged-in session on Notion.so
client = NotionClient(
    token_v2="4d0934f95c2626f4ab7b957a09d3f84aa1d45d8cee6211628125bcc7edc84d8aa03807b1115aef8565903"
             "c5878162742253f9929f19f49713b71626da01f84a22c525b1ad17d4a2537d8653e09b2")


def test():
    cv = client.get_collection_view(
        "https://www.notion.so/0743b15fa95044ac896a5ed3a9b69df3?v=bc78b82e32254959a846b01e8b9de49f")

    print(cv.parent.title)


# 更新知乎问题的阅读量
def update_zhihu_question_view():
    cv = client.get_collection_view(
        "https://www.notion.so/495fff7199b64e4eb9dbc9bc8ac14d77?v=73d1f75fdcf44d62be0f3c2c14716cd0")

    for row in cv.collection.get_rows():
        # print(row.name, row.stat, row.qurl, row.tag, row.view, row.answer, row.qid)
        if row.stat:
            # 爬取知乎问题的答案排名
            name, view, answer = zhihu_spider.get_view_and_answer_num(row.qid)
            row.name = str(name)
            if row.view is None:
                row.view = view
                row.view_add = 0
            else:
                row.view_add = view - row.view
            if row.answer is None:
                row.answer = answer
                row.answer_add = 0
            else:
                row.answer_add = answer - row.answer

    cv.parent.title = "问题管理 " + time.strftime("%Y-%m-%d %H:%M", time.localtime())


# 更新知乎回答的排名和点赞数
def update_zhihu_answer_rank():
    cv = client.get_collection_view(
        "https://www.notion.so/0743b15fa95044ac896a5ed3a9b69df3?v=bc78b82e32254959a846b01e8b9de49f")

    for row in cv.collection.get_rows():
        # print(row.name, row.stat, row.qurl, row.aurl, row.tag, row.rank, row.like, row.qid, row.aid)
        if row.stat:
            # 爬取知乎问题的答案排名
            rank, like = zhihu_spider.get_rank_and_like(row.qid, row.aid)
            row.rank = str(rank)
            row.like = str(like)
            # print(rank, like)

    cv.parent.title = "回答管理 " + time.strftime("%Y-%m-%d %H:%M", time.localtime())


if __name__ == "__main__":
    update_zhihu_question_view()
    update_zhihu_answer_rank()
    # test()
