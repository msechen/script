# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, jsonify, request

from jd.api import transform_url
from jd.cache import cache
from jd.channel import ALL_CHANNEL
from jd.service import choice, import_and_clean, search
from surl.service import generate

import logging
import json

log = logging.getLogger('refusea.jd.web')

jdt = Blueprint('jdt', __name__, url_prefix='/jd')
jda = Blueprint('jda', __name__, url_prefix='/ajax/jd')


# 转链
@jda.route('/transform_url')
def transform_url_():
    surl = request.args.get('surl') or "0"
    original_url = request.args.get('url')
    if original_url:
        url = transform_url(original_url, sub_uid=request.args.get('sub_uid'))
        if url:
            return url if surl == '0' else generate(url).short_url()
    return original_url


# 精选
@jda.route('/choice')
def choice_():
    channel = request.args.get('channel')
    if channel:
        page = int(request.args.get('page') or 1)
        result = choice(int(channel), page)
        if result:
            return jsonify(result)
    return jsonify({'code': 404})


# 数据库里有商品的频道
@ jda.route('/channel')
def channel():
    channels = list(cache.channel_skuids.keys())
    channels.sort()
    channels = [{'id': id, 'name': ALL_CHANNEL[id]}
                for id in channels]
    return jsonify(channels)


@ jda.route('/import')
def import_and_clean_():
    result = import_and_clean()

    ret = {'code': 200, 'value': result} if result else {'code': 500}
    return json.dumps(ret, ensure_ascii=False), 200, (('Content-Type', 'application/json'),)


@jda.route('/search')
def search_():
    name = request.args.get('name')
    name_type = int(request.args.get('name_type') or 0)
    coupon = int(request.args.get('coupon') or 0)
    jd_operate = int(request.args.get('jd_operate') or 0)
    discount = int(request.args.get('discount') or 0)

    result = search(name, name_type=name_type,
                    coupon=coupon, jd_operate=jd_operate,
                    discount=discount)
    if result:
        return jsonify({'code': 200, 'value': result})
    else:
        return jsonify({'code': 404})


# 导入商品并清理
@jdt.route('/import')
def template_import():
    return render_template('jd/import.jinja2')


# 转链
@jdt.route('/transform')
def template_transfor_url():
    return render_template('jd/transform_url.jinja2')


# 精选
@jdt.route('/choice')
def template_choice():
    return render_template('jd/choice.jinja2')


# 搜索
@jdt.route('/search')
def template_search():
    return render_template('jd/search.jinja2')
