# 导入模块
import json
import logging

import requests
from bs4 import BeautifulSoup

logger = logging.getLogger('wx')

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"
}


# 查询深圳今天的天气
def get_weather_today():
    html = requests.get('http://tianqi.eastday.com/shenzhen/59493.html', headers=headers).content
    soup = BeautifulSoup(html, 'lxml', from_encoding='utf-8')
    today = soup.find('div', id='weatherBox')

    one_date = soup.find(id="one_date").get_text()
    one_week = soup.find(id="one_week").get_text()
    one_nongli = soup.find(id="one_nongli").get_text()
    one_tianqi = today.find(id="one_tianqi").get_text()
    one_daynight = today.find(id="one_daynight").get_text()
    one_went = today.find(id="one_went").get_text()
    one_ziwaixian = today.find(id="one_ziwaixian").get_text()

    logger.info("{} {} {} {} {} {}".format(one_date, one_week, one_tianqi, one_daynight, one_went, one_ziwaixian))
    return '今天是' + one_date + '，' + one_week + '\n今天的天气：' + one_tianqi + '(' + \
           one_daynight + '℃) ' + one_went + ' 紫外线:' + one_ziwaixian


# 查询今天上证指数
def get_szzs_today():
    # response = requests.get('http://d.10jqka.com.cn/v2/realhead/16_1A0001/last.js')
    response = requests.get('http://stockpage.10jqka.com.cn/1A0001/quote/header/', headers=headers)
    if response.text == '':
        logger.info("request http://stockpage.10jqka.com.cn/1A0001/quote/header response empty")
        return "request http://stockpage.10jqka.com.cn/1A0001/quote/header response empty"

    json_data = json.loads(response.text)
    code = json_data.get("errorcode")
    msg = json_data.get("errormsg")
    if code != 0:
        logger.info("request error, msg:{}".format(msg))
        return "request http://stockpage.10jqka.com.cn/1A0001/quote/header error,msg:" + msg
    else:
        yesterday = json_data.get("data").get("1A0001").get("6")
        today = json_data.get("data").get("1A0001").get("7")
        current = json_data.get("data").get("1A0001").get("10")
        change = json_data.get("data").get("1A0001").get("199112")
        logger.info("上证指数（1A0001）当前：{} 涨跌：{}%".format(str(current), str(round(float(change), 2))))
        return 'A股上证指数（1A0001）\n昨收：' + yesterday + '\n今开：' + today + '\n当前：' + str(current) + ' 涨跌：' + str(
            round(float(change), 2)) + '%'


# 阮一峰周刊
def get_ryf_weekly():
    html = requests.get('http://www.ruanyifeng.com/blog/weekly/', headers=headers).content
    soup = BeautifulSoup(html, 'lxml', from_encoding='utf-8')
    item = soup.find('div', class_='module-content').find('li', class_='module-list-item').find('a')
    text = item.get_text()
    href = item.get('href')
    # print(item)
    return '阮一峰'+text+' '+href


if __name__ == "__main__":
    print(get_weather_today())
    # print(get_szzs_today())
    # print(get_ryf_weekly())
