#!/usr/bin/env bash

if [ ! -d "/ql" ];then
  root=/jd
else
  root=/ql
fi

dir_jbot=$root/jbot
dir_diybot=$root/repo/diybot
file_bot=$root/config/bot.json
file_botset=$root/config/botset.json
file_diybotset=$root/config/diybotset.json
url="https://github.com/chiupam/JD_Diy.git"

git_clone() {
    local url=$1
    local dir=$2
    local branch=$3
    [[ $branch ]] && local cmd="-b $branch "
    echo "开始克隆仓库 $url 到 $dir"
    git clone $cmd $url $dir
    exit_status=$?
}

backup() {
  if [ ! -d $root/repo/backup ]; then 
    mkdir $root/repo/backup
  fi
  mkdir $root/repo/backup/$(date +\%m\%d\%H\%M)
  cp -rf $root/jbot/* $root/repo/backup/$(date +\%m\%d\%H\%M)
  rm -rf $root/jbot/*
  rm -rf $root/repo/diybot
}

env() {
  echo "1、安装bot依赖..."
  apk --no-cache add -f zlib-dev gcc jpeg-dev python3-dev musl-dev freetype-dev
  echo "bot依赖安装成功..."
}

bot() {
  echo "2、下载bot所需文件..."
  if [ -d ${dir_diybot} ]; then
    rm -rf $dir_diybot
  fi
  if [ -d ${dir_jbot} ]; then
    backup
  fi
  git_clone ${url} ${dir_diybot} "main"
  if [ -f $dir_jbot/diy/diy.py ]; then
    rm -f $dir_diybot/beta/diy/diy.py
  fi
  cp -rf $dir_diybot/beta/* $dir_jbot
  echo "bot文件下载成功..."
  if [[ ! -f $file_bot ]]; then
    cp -f $dir_diybot/config/bot.json $root/config
  fi
  if [[ ! -f $file_botset ]]; then
    cp -f $dir_diybot/jbot/set.json $root/config
    mv -f $root/config/set.json $root/config/botset.json
  else
    sed -i 's/user": "True"/user": "False"/' $file_botset
    echo "为安全起见，关闭user监控，请使用 /user 手动开启！"
  fi
  if [[ ! -f $file_diybotset ]]; then
    cp -f $dir_diybot/config/diybotset.json $root/config
  else
    sed -i 's/key_1/listenerId/' $file_diybotset
    sed -i 's/value_1/-1001630980165/' $file_diybotset
  fi
}

packages() {
  echo "3、安装python3依赖..."
  cd $dir_jbot
  /usr/bin/python3 -m pip install --upgrade pip
  pip3 config set global.index-url https://mirrors.aliyun.com/pypi/simple/
  pip3 --default-timeout=100 install -r requirements.txt --no-cache-dir
  echo "python3依赖安装成功..."
}

start() {
  echo "4、启动bot程序..."
  cd $root
  if [ ! -d $root/log/bot ]; then
    mkdir $root/log/bot
  fi
  if [[ -z $(grep -E "123456789" $root/config/bot.json) ]]; then
    cd $root/jbot || exit; pm2 start ecosystem.config.js
    cd $root || exit; pm2 restart jbot
    echo "bot启动成功..."
  else
    echo "配置 $root/config/bot.json 后再次运行本程序即可启动机器人"
  fi
}

main() {
  env
  bot
  packages
  start
}

main
exit 0
