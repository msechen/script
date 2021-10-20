助力池（脚本自动提交互助码）  
适合少数用户自用，不适合高并发场景

1.  
docker run -dit \
-p 5702:5702 \
--name jdshare \
--hostname jdshare \
--restart always \
kuilei/jdshare:latest

2.青龙拉库  
ql repo https://ghproxy.com/https://github.com/kuilei0926/JDSHARE.git "" "jdshare.py"  

3.设置环境变量  
export JDSHAREURL="服务器地址（端口）"  
例如：  
export JDSHAREURL="127.0.0.1:5702"  


可以自己fork把代码里的的助力池链接写死而不用添加环境变量  
js里面搜索(process.env.JDSHAREURL+\`) 复制括号里面的替换成 (\`http://127.0.0.1:8000)
然后拉自己的库
