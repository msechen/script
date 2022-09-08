import datetime
import json
import re

import requests

headers = {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 "
}


def get_video_url(share_text):
    video_id = re.search(r"(https?.*?)(?=http|$|<|>|\s|,)", share_text)
    # logger.info(f"获得分享url：{video_id.group(1)}")
    return video_id.group(1)


def get_video_id(share_url):
    resp = requests.get(share_url, headers=headers)
    # print(resp)
    video_id = re.search(r"video/(\d+)/", resp.url)
    # logger.info(f"获得视频id：{video_id.group(1)}")
    return video_id.group(1)


def get_video_info(video_id):
    url = f"https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids={video_id}"
    resp = requests.get(url, headers=headers).text
    # print(resp)
    resp = json.loads(resp)
    print(resp)
    # 作者
    author = resp['item_list'][0]['author']['nickname']
    # print(author)
    # 视频描述，标题
    desc = resp['item_list'][0]['desc']
    # 发布时间
    create_time = resp['item_list'][0]['create_time']
    date = datetime.datetime.utcfromtimestamp(create_time)
    date = date.strftime("%Y-%m-%d %H:%M:%S")
    # 视频封面url
    cover_url = resp['item_list'][0]['video']['origin_cover']['url_list'][0]
    # 视频地址url
    video_url = resp['item_list'][0]['video']['play_addr']['url_list'][0]
    video_url = video_url.replace('wm', '')
    # logger.info(video_url)
    re_url = requests.get(video_url, headers=headers).url
    # logger.info(re_url)
    # 评论数
    comment_count = resp['item_list'][0]['statistics']['comment_count']
    # 赞
    digg_count = resp['item_list'][0]['statistics']['digg_count']
    video_info = f"评论：{comment_count}\n点赞：{digg_count}\n抖主：{author}\n发布时间：{date}\n视频标题：{desc}\n视频链接：{video_url}"
    # logger.info(f"视频信息：{video_info}")
    return cover_url, re_url, video_info
