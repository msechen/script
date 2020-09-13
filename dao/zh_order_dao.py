import logging

import component.mysql_api as mysql_api
from modal import *

logger = logging.getLogger('wx')


# 新增订单
def add_order(order_no, sku_id, sku_name, price, fee, fee_rate, order_time, union_tag):
    # 创建Session对象:
    session = mysql_api.get_session()
    entity = ZhOrder(order_no, sku_id, sku_name, price, fee, fee_rate, order_time, union_tag)
    session.add(entity)
    session.commit()
    session.close()
    return


# 查询今天总佣金
def query_today_order_amt():
    # 创建Session对象:
    session = mysql_api.get_session()
    # 创建Query查询，filter是where条件，最后调用one()返回唯一行，如果调用all()则返回所有行:
    amt = 0
    # 关闭Session:
    session.close()
    return amt


if __name__ == "__main__":
    add_order('111','111','111',111,111,11.11,'2020-10-10 10:10:10')
