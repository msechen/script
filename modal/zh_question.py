from sqlalchemy import Column, String, Integer
from sqlalchemy.ext.declarative import declarative_base

# 创建对象的基类:
Base = declarative_base()


# 定义 Service 对象:
class ZhQuestion(Base):
    # 表的名字:
    __tablename__ = 't_zhihu_question'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    qid = Column(Integer)
    type = Column(Integer)
    title = Column(String(256))
    view_total = Column(Integer)
    watch_total = Column(Integer)
    answer_total = Column(Integer)
    view_before_today = Column(Integer)
    answer_before_today = Column(Integer)
    flag = Column(Integer)


class ZhQuestionHistory(Base):
    # 表的名字:
    __tablename__ = 't_zhihu_question_history'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    qid = Column(Integer)
    date = Column(String(256))
    view_num = Column(Integer)
    answer_num = Column(Integer)

    def __init__(self, qid, date, view_num, answer_num):
        self.qid = qid
        self.date = date
        self.view_num = view_num
        self.answer_num = answer_num
