from sqlalchemy import Column, String, Integer, Float
from sqlalchemy.ext.declarative import declarative_base

# 创建对象的基类:
Base = declarative_base()


# 定义 Service 对象:
class ZhOrder(Base):
    # 表的名字:
    __tablename__ = 't_zhihu_order'

    # 表的结构:
    id = Column(Integer, primary_key=True, autoincrement=True)
    order_no = Column(String(256))
    sku_id = Column(String(256))
    sku_name = Column(String(256))
    price = Column(Float)
    fee = Column(Float)
    fee_rate = Column(Float)
    order_time = Column(String(256))
    union_tag = Column(String(256))

    def __init__(self, order_no, sku_id, sku_name, price, fee, fee_rate, order_time, union_tag):
        self.order_no = order_no
        self.sku_id = sku_id
        self.sku_name = sku_name
        self.price = price
        self.fee = fee
        self.fee_rate = fee_rate
        self.order_time = order_time
        self.union_tag = union_tag
