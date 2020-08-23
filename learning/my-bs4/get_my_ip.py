from bs4 import BeautifulSoup
import requests

html = requests.get('https://ip.cn/').content
print(html)
soup = BeautifulSoup(html,'lxml', from_encoding='utf-8')
result = soup.div(id='result')[0].p.code.get_text()
print(result)