import json
from urllib.parse import quote

import flask

import jdsign

server = flask.Flask(__name__)


# 食用方法
# 0. 进入ql容器
# 1. 下载 https://t.me/Wall_E_Group/2356文件,放到signapi.py同录下
# 2. pm2 start signapi.py -x --interpreter python3
# 3. export M_API_SCAN_SIGN_URL="http://ip:17840/sign"
@server.route('/sign', methods=['post'])
def sign():
    try:
        data = flask.request.data
        data = json.loads(data.decode('utf-8'))
        body = data['body']
        fn = data['fn']
        data = jdsign.get_sign(fn, data['body'])
        data = data['url'].split("&clientVersion=")[1]
        rep = {"fn": fn, "body": "body=" + quote(json.dumps(body)) + "&clientVersion=" + data}
        return rep
    except:
        return 'sign error'


if __name__ == '__main__':
    server.run(host='0.0.0.0', port=17840)
