软件名称:微信_金银手指 \
项目注册地址(微信扫码):\
<img src="https://raw.githubusercontent.com/msechen/script/master/photo_2021-09-26_22-41-18.jpg"></img>

变量抓取: \
打开小黄鸟抓包,微信进金银手指界面 找有 http://apponlie.sahaj.cn 的连接 \
点进去他的请求头中token 和 User-Agent \
必要变量: \
soy_wx_jysz_token \
可选变量 \
soy_wx_jysz_User_Agent \
多个token用 @ 或 # 或 换行 隔开 \
v2p配置如下： \
【REWRITE】 \
匹配链接（正则表达式） http://apponlie.sahaj.cn/user/myInfo \
对应重写目标   wx_jysz.js \
【MITM】   \
apponlie.sahaj.cn \
cron 0 8-22/1 * * * 
