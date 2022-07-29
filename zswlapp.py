import hashlib
import json
import os
import pprint
import random
import urllib.parse
import requests
import time

salt = 'FR*r!isE5W'


def user_info(X_SESSION_ID, X_REQUEST_ID):
    ts = str(int(time.time() * 1000))
    value = f'/api/user_mumber/account_detail&&{X_SESSION_ID}&&{X_REQUEST_ID}&&{ts}&&{salt}&&3'
    hsobj = hashlib.sha256()
    hsobj.update(value.encode("utf-8"))
    sign = hsobj.hexdigest()
    url = "https://vapp.tmuyun.com/api/user_mumber/account_detail"
    headers = {
        'X-SESSION-ID': X_SESSION_ID,
        'X-REQUEST-ID': X_REQUEST_ID,
        'X-TIMESTAMP': ts,
        'X-SIGNATURE': sign,
        'X-TENANT-ID': '3',
        'Cache-Control': 'no-cache',
        'Host': 'vapp.tmuyun.com'
    }
    response = requests.get(url=url, headers=headers).json()
    if response['code'] == 0:
        nick_name = response['data']['rst']['nick_name']
        phone_number = response['data']['rst']['phone_number']
        total_integral = response['data']['rst']['total_integral']
        return nick_name, phone_number, total_integral


def task_list(X_SESSION_ID, X_REQUEST_ID):
    ts = str(int(time.time() * 1000))
    value = f'/api/user_mumber/numberCenter&&{X_SESSION_ID}&&{X_REQUEST_ID}&&{ts}&&{salt}&&3'
    hsobj = hashlib.sha256()
    hsobj.update(value.encode("utf-8"))
    sign = hsobj.hexdigest()
    url = "https://vapp.tmuyun.com/api/user_mumber/numberCenter"
    headers = {
        'X-SESSION-ID': X_SESSION_ID,
        'X-REQUEST-ID': X_REQUEST_ID,
        'X-TIMESTAMP': ts,
        'X-SIGNATURE': sign,
        'X-TENANT-ID': '3',
        'Cache-Control': 'no-cache',
        'Host': 'vapp.tmuyun.com'
    }
    response = requests.get(url=url, headers=headers).json()
    if response['code'] == 0:
        for i in response['data']['rst']['user_task_list']:

            completed = i['completed']
            member_task_type = i['member_task_type']
            task_name = i['name']
            if completed == 0:
                if task_name == '每日签到':
                    print(f'开始做{task_name}任务')
                    signin(X_SESSION_ID, X_REQUEST_ID)
                elif task_name == '使用本地服务':
                    print(f'开始做{task_name}任务')
                    do_task(X_SESSION_ID, X_REQUEST_ID, member_task_type)
                elif task_name == '新闻资讯阅读':
                    print(f'开始做{task_name}任务')
                    read_list(task_name, X_SESSION_ID, X_REQUEST_ID, member_task_type)
                elif task_name == '新闻资讯评论':
                    print(f'开始做{task_name}任务')
                    read_list(task_name, X_SESSION_ID, X_REQUEST_ID, member_task_type)
                elif task_name == '新闻资讯点赞':
                    print(f'开始做{task_name}任务')
                    read_list(task_name, X_SESSION_ID, X_REQUEST_ID, member_task_type)
                elif task_name == '分享资讯给好友':
                    print(f'开始做{task_name}任务')
                    read_list(task_name, X_SESSION_ID, X_REQUEST_ID, member_task_type)
                elif task_name == '邀请好友':
                    pass


            else:
                print(f'{task_name}任务已做完')

            # print(completed, member_task_type, task_name)


def signin(X_SESSION_ID, X_REQUEST_ID):
    ts = str(int(time.time() * 1000))
    value = f'/api/user_mumber/sign&&{X_SESSION_ID}&&{X_REQUEST_ID}&&{ts}&&{salt}&&3'
    hsobj = hashlib.sha256()
    hsobj.update(value.encode("utf-8"))
    sign = hsobj.hexdigest()
    url = "https://vapp.tmuyun.com/api/user_mumber/sign"
    headers = {
        'X-SESSION-ID': X_SESSION_ID,
        'X-REQUEST-ID': X_REQUEST_ID,
        'X-TIMESTAMP': ts,
        'X-SIGNATURE': sign,
        'X-TENANT-ID': '3',
        'Cache-Control': 'no-cache',
        'Host': 'vapp.tmuyun.com'
    }
    response = requests.get(url=url, headers=headers).json()
    if response['code'] == 0:
        print(f'签到:{response["data"]["reason"]}')


def do_task(X_SESSION_ID, X_REQUEST_ID, task_type):
    ts = str(int(time.time() * 1000))
    value = f'/api/user_mumber/doTask&&{X_SESSION_ID}&&{X_REQUEST_ID}&&{ts}&&{salt}&&3'
    hsobj = hashlib.sha256()
    hsobj.update(value.encode("utf-8"))
    sign = hsobj.hexdigest()
    url = f"https://vapp.tmuyun.com/api/user_mumber/doTask?memberType={task_type}&member_type={task_type}"
    headers = {
        'X-SESSION-ID': X_SESSION_ID,
        'X-REQUEST-ID': X_REQUEST_ID,
        'X-TIMESTAMP': ts,
        'X-SIGNATURE': sign,
        'X-TENANT-ID': '3',
        'Cache-Control': 'no-cache',
        'Host': 'vapp.tmuyun.com'
    }
    response = requests.post(url=url, headers=headers).json()
    if response['code'] == 0:
        print(f'获得:{response["data"]["score_notify"]["integral"]}积分')


def read_list(task_name, X_SESSION_ID, X_REQUEST_ID, task_type):
    list_count = ['10', '20', '30', '40', '50', '60']
    ts = str(int(time.time() * 1000))
    value = f'/api/article/channel_list&&{X_SESSION_ID}&&{X_REQUEST_ID}&&{ts}&&{salt}&&3'
    hsobj = hashlib.sha256()
    hsobj.update(value.encode("utf-8"))
    sign = hsobj.hexdigest()
    url = f"https://vapp.tmuyun.com/api/article/channel_list?channel_id=5bd2bef6b1985042e7691870&isDiFangHao=false&is_new=true&list_count={random.choice(list_count)}&size=10&start={ts}"
    headers = {
        'X-SESSION-ID': X_SESSION_ID,
        'X-REQUEST-ID': X_REQUEST_ID,
        'X-TIMESTAMP': ts,
        'X-SIGNATURE': sign,
        'X-TENANT-ID': '3',
        'Cache-Control': 'no-cache',
        'Host': 'vapp.tmuyun.com'
    }
    response = requests.get(url=url, headers=headers).json()
    if response['code'] == 0:
        art_list = response['data']['article_list']
        for i in range(len(art_list)):
            doc_title = art_list[i]['doc_title']
            article_id = art_list[i]['id']
            if task_name == '新闻资讯阅读':
                read(X_SESSION_ID, X_REQUEST_ID, doc_title, article_id, i)
                if i == 5:
                    return
            elif task_name == '新闻资讯评论':
                recomment(X_SESSION_ID, X_REQUEST_ID, doc_title, article_id, i)
                if i == 5:
                    return
            elif task_name == '新闻资讯点赞':
                like(X_SESSION_ID, X_REQUEST_ID, doc_title, article_id, i)
                if i == 5:
                    return
            elif task_name == '分享资讯给好友':
                share(X_SESSION_ID, X_REQUEST_ID, doc_title, article_id, i, task_type)
                if i == 5:
                    return


def read(X_SESSION_ID, X_REQUEST_ID, doc_title, article_id, i):
    ts = str(int(time.time() * 1000))
    value = f'/api/article/detail&&{X_SESSION_ID}&&{X_REQUEST_ID}&&{ts}&&{salt}&&3'
    hsobj = hashlib.sha256()
    hsobj.update(value.encode("utf-8"))
    sign = hsobj.hexdigest()
    url = f"https://vapp.tmuyun.com/api/article/detail?from_channel=5bd2bef6b1985042e7691870&id={article_id}"
    headers = {
        'X-SESSION-ID': X_SESSION_ID,
        'X-REQUEST-ID': X_REQUEST_ID,
        'X-TIMESTAMP': ts,
        'X-SIGNATURE': sign,
        'X-TENANT-ID': '3',
        'Cache-Control': 'no-cache',
        'Host': 'vapp.tmuyun.com'
    }
    response = requests.get(url=url, headers=headers).json()
    if response['code'] == 0:
        print(f"正在第{i}次阅读,阅读文章{doc_title}成功")


def recomment(X_SESSION_ID, X_REQUEST_ID, doc_title, article_id, i):
    comment = ['好的', '不错', '知道了', '了解', '打卡', '1', '。']
    comment = urllib.parse.quote(random.choice(comment), 'utf-8')
    ts = str(int(time.time() * 1000))
    value = f'/api/comment/create&&{X_SESSION_ID}&&{X_REQUEST_ID}&&{ts}&&{salt}&&3'
    hsobj = hashlib.sha256()
    hsobj.update(value.encode("utf-8"))
    sign = hsobj.hexdigest()
    url = f"https://vapp.tmuyun.com/api/comment/create?channel_article_id={article_id}&content={comment}"
    headers = {
        'X-SESSION-ID': X_SESSION_ID,
        'X-REQUEST-ID': X_REQUEST_ID,
        'X-TIMESTAMP': ts,
        'X-SIGNATURE': sign,
        'X-TENANT-ID': '3',
        'Cache-Control': 'no-cache',
        'Host': 'vapp.tmuyun.com'
    }
    response = requests.post(url=url, headers=headers).json()
    if response['code'] == 0:
        print(f"正在第{i}次评论,评论文章{doc_title}成功")


def like(X_SESSION_ID, X_REQUEST_ID, doc_title, article_id, i):
    ts = str(int(time.time() * 1000))
    value = f'/api/favorite/like&&{X_SESSION_ID}&&{X_REQUEST_ID}&&{ts}&&{salt}&&3'
    hsobj = hashlib.sha256()
    hsobj.update(value.encode("utf-8"))
    sign = hsobj.hexdigest()
    url = f"https://vapp.tmuyun.com/api/favorite/like?action=true&id={article_id}"
    headers = {
        'X-SESSION-ID': X_SESSION_ID,
        'X-REQUEST-ID': X_REQUEST_ID,
        'X-TIMESTAMP': ts,
        'X-SIGNATURE': sign,
        'X-TENANT-ID': '3',
        'Cache-Control': 'no-cache',
        'Host': 'vapp.tmuyun.com'
    }
    response = requests.post(url=url, headers=headers).json()
    if response['code'] == 0:
        print(f"正在第{i}次点赞,点赞文章{doc_title}成功")


def share(X_SESSION_ID, X_REQUEST_ID, doc_title, article_id, i, task_type):
    ts = str(int(time.time() * 1000))
    value = f'/api/user_mumber/doTask&&{X_SESSION_ID}&&{X_REQUEST_ID}&&{ts}&&{salt}&&3'
    hsobj = hashlib.sha256()
    hsobj.update(value.encode("utf-8"))
    sign = hsobj.hexdigest()
    url = f"https://vapp.tmuyun.com/api/user_mumber/doTask?memberType={task_type}&member_type={task_type}&target_id={article_id}"
    headers = {
        'X-SESSION-ID': X_SESSION_ID,
        'X-REQUEST-ID': X_REQUEST_ID,
        'X-TIMESTAMP': ts,
        'X-SIGNATURE': sign,
        'X-TENANT-ID': '3',
        'Cache-Control': 'no-cache',
        'Host': 'vapp.tmuyun.com'
    }
    response = requests.post(url=url, headers=headers).json()
    if response['code'] == 0:
        print(f"正在第{i}次分享,分享文章{doc_title}成功")


if __name__ == '__main__':
    cks = os.environ['zhwl_data']
    cks = cks.split('@')
    for i in cks:
        ck = i.split('&')
        nick_name, phone_number, total_integral = user_info(ck[0], ck[1])
        print(f"欢迎{nick_name}电话号码为{phone_number},目前积分为{total_integral}")
        task_list(ck[0], ck[1])
        nick_name, phone_number, total_integral = user_info(ck[0], ck[1])
        print(f"{nick_name}任务已做完,目前积分为{total_integral}")
        print('\n')
