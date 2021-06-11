# -*- coding: utf-8 -*-

from flask import Blueprint, redirect,  request, render_template
from surl.cache import cache


surl = Blueprint('surl', __name__, url_prefix='/surl')

# True: 使用 302 重定向；False：使用 meta refresh 重定向。区别在于目标页的 Referer 头
REDIRECT_302 = False


@surl.route('')
def redirect_():

    id = request.args.get('id')

    if not id:
        return '', 400

    surl = cache.id_cache.get(id)
    if not surl:
        return 'unknown url or expired url'

    if REDIRECT_302:
        return redirect(surl.original_url, code=302)
    else:
        return render_template('surl/redirect.jinja2', original_url=surl.original_url)
