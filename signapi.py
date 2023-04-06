import json
import jdsign
import flask


server = flask.Flask(__name__)
# 食用方法
# 1. 下载 https://t.me/Wall_E_Channel/2129文件,放到signapi.py同录下
# 2. pm2 start signapi.py -x --interpreter python3
# 3. export M_API_SIGN_URL="http://ip:17840/sign"
@server.route('/sign',methods=['post'])
def jdsign():
    try:
        # print("sign")
        data=flask.request.data
        data=json.loads(data.decode('utf-8'))
        data=jdsign.get_sign(data['fn'],json.dumps(data['body']))
        return data
    except:
        return 'sign error'

if __name__ == '__main__':
    server.run(host='0.0.0.0',port=17840)
