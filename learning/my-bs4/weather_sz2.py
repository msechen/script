from bs4 import BeautifulSoup
import requests

html = requests.get('http://tianqi.eastday.com/shenzhen/59493.html').content
print(html)
soup = BeautifulSoup(html,'lxml', from_encoding='utf-8')

today = soup.find('div', id='weatherBox')
print(today)

one_date = soup.find(id="one_date").get_text()
# print(one_date)
one_week = soup.find(id="one_week").get_text()
# print(one_week)
one_nongli = soup.find(id="one_nongli").get_text()
# print(one_nongli)
one_tianqi = today.find(id="one_tianqi").get_text()
# print(one_tianqi)
one_daynight = today.find(id="one_daynight").get_text()
# print(one_daynight,'℃')
one_went = today.find(id="one_went").get_text()
# print(one_went)
one_ziwaixian = today.find(id="one_ziwaixian").get_text()
# print(one_ziwaixian)


print(one_date,one_week,one_nongli,one_tianqi,one_daynight+'℃',one_went,"紫外线:"+one_ziwaixian)
