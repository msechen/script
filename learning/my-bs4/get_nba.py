from bs4 import BeautifulSoup
import requests

html = requests.get('https://kbs.sports.qq.com/#nba').content
print(html)
# soup = BeautifulSoup(html, 'lxml', from_encoding='utf-8')
# result = soup.find_all("div",class_='match-list')
# print(result)