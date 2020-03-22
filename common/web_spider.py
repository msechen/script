# 导入模块
from bs4 import BeautifulSoup
import requests
import json

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
    return '今天是' + one_date + '(' + one_week + ')' + '\n今天的天气是：' + one_tianqi + '(' + \
           one_daynight + '℃) ' + one_went + ' 紫外线:' + one_ziwaixian


# 查询今天上证指数
def get_szzs_today():
    response = requests.get('http://stockpage.10jqka.com.cn/1A0001/quote/header/')
    json_data = json.loads(response.text)
    code = json_data.get("errorcode")
    msg = json_data.get("errormsg")
    if code != 0:
        print("request error, msg:" + msg)
        return "request http://stockpage.10jqka.com.cn/1A0001/quote/header error,msg:" + msg
    else:
        yesterday = json_data.get("data").get("1A0001").get("6")
        print("昨收："+yesterday)
        today = json_data.get("data").get("1A0001").get("7")
        print("今开："+today)
        current = json_data.get("data").get("1A0001").get("10")
        change = json_data.get("data").get("1A0001").get("199112")
        print("当前："+str(current)+" 涨跌："+str(round(float(change),2),)+'%')
        return '昨收：' + yesterday + '\n今开：' + today + '\n当前：'+str(current)+' 涨跌：'+str(round(float(change),2))+'%'


if __name__ == "__main__":
    get_szzs_today()
    # get_weather_today()
