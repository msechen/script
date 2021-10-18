助力池（脚本自动提交互助码）

1.下载jdshare.py  
服务器运行 wget https://raw.githubusercontent.com/kuilei0926/JDSHARE/main/jdshare.py  
打开文件修改最后一行，把80改成自己想要的端口  

2.安装依赖  
pip3 install flask  

3.运行  
nohup python3 jdshare.py &  

4.青龙拉库  
ql repo https://ghproxy.com/https://github.com/kuilei0926/JDSHARE.git "" "jdshare.py"  

5.设置环境变量  
export JDSHAREURL="服务器地址（端口）"  
例如：  
export JDSHAREURL="http://127.0.0.1:8000"  


可以自己fork把代码里的的助力池链接写死而不用添加环境变量  
js里面搜索(process.env.JDSHAREURL+\`) 复制括号里面的替换成 (\`http://127.0.0.1:8000)
然后拉自己的库
