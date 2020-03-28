[TOC]

## 安装 python3 和 pip3

#### yum 安装
```
yum install python3
```

#### **下载 & 解压**

- cd /usr/local 
- wget https://www.python.org/ftp/python/3.6.3/Python-3.6.3.tgz 下载安装包 
- tar zxvf Python-3.6.3.tgz 解压安装包 

#### **编译 & 安装**

- cd Python-3.6.3 转到该安装包目录下 
- ./configure --prefix=/usr/local/python3.6 这一步极其重要，对安装进行配置，并指定安装路径，安装路径不指定的话不利于后面的系统管理 
- make 编译 
- make install 安装（可以合并为 make & make install） 

#### **建立软连接**

- ln -s /usr/local/python3.6/bin/python3.6 /usr/bin/python3 
- ln -s /usr/local/python3.6/bin/pip3 /usr/bin/pip3

#### **将 python3 加入 PATH 环境变量**

```
vim ~/.bash_profile 
```

在 export PATH 前增加一行 PATH=$PATH:/usr/local/python3.6/bin 

:wq 保存 

#### **pip3 安装**

https://www.cnblogs.com/wenchengxiaopenyou/p/5709218.html

#### **测试是否安装成功**

```shell
[root@localhost bin]# python3 -V 
Python 3.6.3 

[root@localhost bin]# pip3 -V 
pip 9.0.1 from /usr/local/python3.6/lib/python3.6/site-packages (python 3.6) 
```

#### **安装 itchat 相关依赖**

```
pip3 install wxpy  
pip3 install apscheduler 
pip3 install bs4 
pip3 install lxml 
pip3 install mysql-connector-python 
pip3 install sqlalchemy 
```



## 部署服务

### ssh 登录服务器

> ssh root@xxx

### 新建 tmux 会话

> tmux -s new wxpy

wxpy 是自定义的名称，可以随便取

### 启动程序

> python3 main.py

### 分离会话

按下 `Ctrl+b d` 

此时，ssh 即使断开了程序也会继续运行，下次只需要重新登录服务器接入会话即可

### 接入会话

> tmux attach -t wxpy

wxpy 是上面创建的会话的名字

### 其他 tmux 命令

`tmux kill-session -t <session-name> `  命令用于杀死某个会话

`tmux switch -t <session-name>` 命令用于切换会话

`tmux rename-session -t 0 <new-name>` 命令用于重命名会话