import plotly.express as px
import pandas as pd
import pymysql


def show(qid):
    sql = '''
        SELECT 
            h1.date as 日期,
            h1.qid as 问题ID,
            q.title as 问题名称,
            h1.view_num - h2.view_num as 新增浏览量
        FROM t_zhihu_question_history h1 
        INNER JOIN t_zhihu_question q ON h1.qid = q.qid
        INNER JOIN t_zhihu_question_history h2 on h1.qid = h2.qid and date_sub(h1.`date`,interval 1 day) = h2.`date`
        WHERE h1.qid in({})
        ORDER BY h1.qid, h1.date desc;
    '''.format(qid)

    mysql_cn = pymysql.connect(host='120.24.109.181', port=3306, user='kolly', passwd='Kolly@123456', db='wx-robot')
    df = pd.read_sql(sql, con=mysql_cn)
    mysql_cn.close()

    fig = px.line(df, x="日期", y="新增浏览量", color='问题名称')
    fig.show()


if __name__ == "__main__":
    qid = '24676987,63278054,64289109'
    show(qid)
