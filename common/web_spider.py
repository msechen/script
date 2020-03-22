# 导入模块
from bs4 import BeautifulSoup
import requests


# 查询深圳今天的天气
def get_weather_today():
    html = requests.get('http://tianqi.eastday.com/shenzhen/59493.html').content
    soup = BeautifulSoup(html, 'lxml', from_encoding='utf-8')
    today = soup.find('div', id='weatherBox')

    one_date = soup.find(id="one_date").get_text()
    one_week = soup.find(id="one_week").get_text()
    one_nongli = soup.find(id="one_nongli").get_text()
    one_tianqi = today.find(id="one_tianqi").get_text()
    one_daynight = today.find(id="one_daynight").get_text()
    one_went = today.find(id="one_went").get_text()
    one_ziwaixian = today.find(id="one_ziwaixian").get_text()

    print(one_date, one_week, one_nongli, one_tianqi, one_daynight + '℃', one_went, "紫外线:" + one_ziwaixian)
    return '今天是' + one_date + '(' + one_week + ') ' + one_nongli + '\n今天的天气是：' + one_tianqi + '(' + \
           one_daynight + '℃) ' + one_went + ' 紫外线:' + one_ziwaixian


# 查询今天上证指数
def get_szzs_today():
    html = requests.get('http://finance.ifeng.com/app/hq/stock/sh000001/').content
    print(html)
    soup = BeautifulSoup(html, 'lxml', from_encoding='utf-8')
    info = soup.find('span', id='hst_close')
    print(info)

    # s1 = info.find('li')
    # print(s1)
    # print(s1.get_text())


if __name__ == "__main__":
    get_szzs_today()
