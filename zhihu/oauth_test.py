# coding=utf-8
# https://pypi.org/project/zhihu-oauth

from __future__ import unicode_literals, print_function

import os

from zhihu_oauth import ZhihuClient
from zhihu_oauth import SearchType


TOKEN_FILE = 'token.pkl'


client = ZhihuClient()

if os.path.isfile(TOKEN_FILE):
    client.load_token(TOKEN_FILE)
else:
    client.login_in_terminal()
    client.save_token(TOKEN_FILE)

me = client.me()

print('name', me.name)
print('headline', me.headline)
print('description', me.description)

print('following topic count', me.following_topic_count)
print('following people count', me.following_topic_count)
print('followers count', me.follower_count)

print('voteup count', me.voteup_count)
print('get thanks count', me.thanked_count)

print('answered question', me.answer_count)
print('question asked', me.question_count)
print('collection count', me.collection_count)
print('article count', me.articles_count)
print('following column count', me.following_column_count)

for result in client.search('程序', SearchType.TOPIC):
    column = result.obj
    print(column.title, column.author.name)