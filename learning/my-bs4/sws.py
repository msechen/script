from bs4 import BeautifulSoup
import requests

# def get_weather_today():
# html = requests.get('http://tianqi.cncn.com/shenzhen').content
# print(html)
# soup = BeautifulSoup(html,'lxml', from_encoding='utf-8')
# result = soup.find('div', class_='txt_share').find('li').get_text()
# print(result)

html = requests.get('http://tianqi.hao123.com/shenzhen.html').content
print(html)
soup = BeautifulSoup(html,'lxml', from_encoding='utf-8')
result = soup.find('div', class_='slide-item')
print(result)
temp = soup.find('div', class_='slide-item').find('div', class_='temp').get_text()
weather = soup.find('div', class_='slide-item').find('div', class_='weather').get_text()
wind = soup.find('div', class_='slide-item').find('div', class_='wind').get_text()
print(temp,weather,wind)