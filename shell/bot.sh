#!/usr/bin/env bash

if [ ! -d "/ql" ];then
  root=/jd
else
  root=/ql
fi

dir_jbot=$root/jbot
dir_repo=$root/repo
file_bot=$root/config/bot.json
file_botset=$root/config/botset.json
file_diybotset=$root/config/diybotset.json
url="https://gitee.com/chiupam/JD_Diy.git"
repo_path=$dir_repo/diybot

git_pull() {
    local dir_current=$(pwd)
    local dir_work="$1"
    local branch="$2"
    [[ $branch ]] && local cmd="origin/${branch}"
    cd $dir_work
    echo -e "开始更新仓库：$dir_work\n"
    git fetch --all
    exit_status=$?
    git reset --hard $cmd
    git pull
    cd $dir_current
}

git_clone() {
    local url=$1
    local dir=$2
    local branch=$3
    [[ $branch ]] && local cmd="-b $branch "
    echo -e "开始克隆仓库 $url 到 $dir\n"
    git clone $cmd $url $dir
    exit_status=$?
}

notify () {
    local message="$(echo -e $1)"
    local bot_token=$(cat $file_bot | jq -r .bot_token)
    local user_id=$(cat $file_bot | jq .user_id)
    local proxy=$(cat $file_bot | jq .proxy)
    local proxy_type=$(cat $file_bot | jq -r .proxy_type)
    local proxy_add=$(cat $file_bot | jq -r .proxy_add)
    local proxy_port=$(cat $file_bot | jq .proxy_port)
    local proxy_user=$(cat $file_bot | jq -r .proxy_user)
    local proxy_password=$(cat $file_bot | jq -r .proxy_password)
    local api_url="https://api.telegram.org/bot${bot_token}/sendMessage"
    local cmd_proxy_user cmd_proxy
    if [[ $proxy_user != *无则不用* ]] && [[ $proxy_password != *无则不用* ]]; then
        cmd_proxy_user="--proxy-user $proxy_user:$proxy_password"
    else
        cmd_proxy_user=""
    fi
    if [[ $proxy == true ]]; then
        cmd_proxy="--proxy $proxy_type://$proxy_add:$proxy_port $cmd_proxy_user"
    else
        cmd_proxy=""
    fi
    curl -Ss $cmd_proxy -H "Content-Type:application/x-www-form-urlencoded" -X POST -d "chat_id=${user_id}&text=${message}&disable_web_page_preview=true" "$api_url" &>/dev/null
}

env() {
  echo -e "\n1、安装bot依赖...\n"
  apk --no-cache add -f zlib-dev gcc jpeg-dev python3-dev musl-dev freetype-dev
  echo -e "\nbot依赖安装成功...\n"
}

bot() {
  echo -e "2、下载bot所需文件...\n"
  if [ -d ${repo_path}/.git ]; then
    jbot_md5sum_old=$(cd $dir_jbot; find . -type f \( -name "*.py" -o -name "*.ttf" \) | xargs md5sum)
    git_pull ${repo_path}
    cp -rf $repo_path/jbot/* $dir_jbot
    jbot_md5sum_new=$(cd $dir_jbot; find . -type f \( -name "*.py" -o -name "*.ttf" \) | xargs md5sum)
    if [[ "$jbot_md5sum_new" != "$jbot_md5sum_old" ]]; then
      notify "检测到BOT程序有更新，BOT将重启。\n为安全起见，关闭user监控，请使用 /user 手动开启！"
    fi
  else
    git_clone ${url} ${repo_path} "main"
    cp -rf $repo_path/jbot/* $dir_jbot
  fi
  echo -e "\nbot文件下载成功...\n"
}

init() {
  if [[ ! -f $file_bot ]]; then
    cp -f $repo_path/config/bot.json $root/config
  fi
  if [[ ! -f $file_botset ]]; then
    cp -f $repo_path/config/botset.json $root/config
  else
    sed -i 's/user": "True"/user": "False"/' $file_botset
    echo "为安全起见，关闭user监控，请使用 /user 手动开启！"
  fi
  if [[ ! -f $file_diybotset ]]; then
    cp -f $repo_path/config/diybotset.json $root/config
  else
    sed -i 's/key_1/listenerId/' $file_diybotset
    sed -i 's/value_1/-1001630980165/' $file_diybotset
  fi
}

env_bot() {
  echo -e "3、安装python3依赖...\n"
  cd $dir_jbot
  /usr/bin/python3 -m pip install --upgrade pip
  pip3 config set global.index-url https://mirrors.aliyun.com/pypi/simple/
  pip3 --default-timeout=100 install -r requirements.txt --no-cache-dir
  echo -e "\npython3依赖安装成功...\n"
}

start() {
  echo -e "4、启动bot程序...\n"
  cd $root
  if [ ! -d $root/log/bot ]; then
    mkdir $root/log/bot
  fi
  if [[ -z $(grep -E "123456789" $root/config/bot.json) ]]; then
    if [ -d "/ql" ]; then
      ps -ef | grep "python3 -m jbot" | grep -v grep | awk '{print $1}' | xargs kill -9 2>/dev/null
      nohup python3 -m jbot > $root/log/bot/bot.log 2>&1 &
    else
      cd $root/jbot || exit; pm2 start ecosystem.config.js
      cd $root || exit; pm2 restart jbot
    fi
    echo -e "bot启动成功...\n"
  else
    echo -e "配置 $root/config/bot.json 后再次运行本程序即可启动机器人"
  fi
}

main() {
  env
  bot
  init
  env_bot
  start
}

main
exit 0
