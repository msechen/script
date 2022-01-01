#!/usr/bin/env bash

if [ -d "/jd" ]; then
  root=/jd
else
  root=/ql
fi

dir_jbot=$root/jbot
dir_diy=$dir_jbot/diy
dir_repo=$root/repo
dir_config=$root/config
dir_repo_bot=$dir_repo/dockerbot
dir_repo_diybot=$dir_repo/diybot
url_bot="https://github.com/SuMaiKaDe/bot.git"
url_diybot="https://github.com/chiupam/JD_Diy.git"
file_jbot_user=$dir_diy/user.py
file_repo_user=$dir_repo_diybot/jbot/user.py
file_jbot_diy=$dir_diy/diy.py
file_repo_diy=$dir_repo_diybot/pys/diy.py
file_jbot_botset=$root/config/botset.json
file_repo_botset=$dir_repo_bot/config/botset.json
file_jbot_diybotset=$root/config/diybotset.json
file_repo_diybotset=$dir_repo_diybot/config/diybotset.json
up=$1

git_pull() {
  local dir_current=$(pwd)
  local url=$1
  local dir=$2
  local branch=$3
  [[ $branch ]] && local cmd=origin/${branch}
  cd $dir
  echo "开始更新仓库 $url 到 $dir"
  git fetch --all
  git reset --hard $cmd
  git pull
  cd $dir_current
}

git_clone() {
  local url=$1
  local dir=$2
  local branch=$3
  [[ $branch ]] && local cmd="-b $branch"
  echo "开始克隆仓库 $url 到 $dir"
  git clone $cmd $url $dir
}

bot() {
  if [ -d $dir_repo_bot ]; then
    echo "更新 bot 所需文件"
    git_pull $url_bot $dir_repo_bot "main"
  else
    echo "下载 bot 所需文件"
    git_clone $url_bot $dir_repo_bot "main"
  fi
}

diybot() {
  if [ -d $dir_repo_diybot ]; then
    echo "更新 diybot 所需文件"
    git_pull $url_diybot $dir_repo_diybot "master"
  else
    echo "下载 diybot 所需文件"
    git_clone $url_diybot $dir_repo_diybot "master"
  fi
}

dir_log() {
  dir_log=$root/log/bot
  echo "检测 $dir_log 目录"
  if [ ! -d $dir_log ]
    then echo "  └—结果：不存在，新建"
    mkdir $dir_log
  else
    echo "  └—结果：存在，跳过"
  fi
}

env() {
  echo "检测 bot 依赖"
  APK=$(apk --no-cache add -f zlib-dev gcc jpeg-dev python3-dev musl-dev freetype-dev | grep "OK")
  if [[ -z $APK ]]
    then echo "  └—结果：未安装，开始安装..."
    apk --no-cache add -f zlib-dev gcc jpeg-dev python3-dev musl-dev freetype-dev
  else
    echo "  └—结果：已安装"
  fi
}

bug() {
  if [ -f $dir_repo_bot/jbot/diy/utils.py ]
    then rm -rf $dir_repo
  fi
  zoo_opencard=$(cat $file_jbot_diybotset | grep "zoo_opencard")
  if [ -z "$zoo_opencard" ]
    then echo "请先修改 $file_jbot_diybotset 的内容，再重新启动！参考链接如下"
    echo ""
    echo "https://github.com/chiupam/JD_Diy/blob/master/config/diybotset.json"
    echo ""
    exit
  fi
  shoptokenId=$(cat $file_jbot_diybotset | grep "shoptokenId")
  if [ -z "$shoptokenId" ]
    then echo "请先修改 $file_jbot_diybotset 的内容，再重新启动！参考链接如下"
    echo ""
    echo "https://github.com/chiupam/JD_Diy/blob/master/config/diybotset.json"
    echo ""
    exit
  fi
}

hello() {
  echo "修改启动语文件"
  cp -f ${dir_repo_diybot}/backup/__main__.py $dir_jbot
  echo "  └—结果：修改成功"
}

file_botset() {
  echo "检测 botset.json 文件 "
  if [ -f $file_jbot_botset ]; then
    echo "  └—结果：存在，不拉取"
  else
    echo "  └—结果：不存在，拉取"
    cp -f $file_repo_botset $file_jbot_botset
  fi
}

file_diybotset() {
  echo "检测 diybotset.json 文件 "
  if [ -f $file_jbot_diybotset ]; then
    echo "  └—结果：存在，不拉取"
  else
    echo "  └—结果：不存在，拉取"
    cp -f $file_repo_diybotset $file_jbot_diybotset
  fi
}

file_user() {
  echo "检测 user.py 文件 "
  if [ -f $file_jbot_user ]; then
    if [[ $up = user ]]
      then echo "  └—结果：存在，已选择更新"
      cp -f $file_repo_user $file_jbot_user
    elif [ $# -eq 0 ]
      then echo "  └—结果：存在，默认不更新"
      rm -f $file_repo_user
    fi
  else
    echo "  └—结果：不存在，删除"
    rm -f $file_repo_user
  fi
}

file_diy() {
  echo "检测 diy.py 文件 "
  if [ -f $file_jbot_diy ]; then
    echo "  └—结果：存在，不拉取"
  else
    echo "  └—结果：不存在，拉取"
    cp -f $file_repo_diy $file_jbot_diy
  fi
}

copy() {
  echo "拉取原机器人文件进入 $root 目录"
  cp -rf $dir_repo_bot/ $root
  echo "拉取diy机器人文件进入 $dir_diy 目录"
  cp -rf $dir_repo_diybot/jbot/* $dir_diy
}

start() {
  if [ -z $(grep -E "123456789" $file_jbot_botset) ]
    then if [ -d "/jd" ]
      then cd $dir_jbot
        pm2 start ecosystem.config.js
        cd $root
        pm2 restart jbot
      else
        ps -ef | grep "python3 -m jbot" | grep -v grep | awk '{print $1}' | xargs kill -9 2>/dev/null
        nohup python3 -m jbot >$root/log/bot/bot.log 2>&1 &
      fi
  else
    echo "请修改${file_jbot_botset}的信息后再次手动启动"
  fi
}

main() {
  bug
  bot
  diybot
  dir_log
  env
  hello
  file_botset
  file_diybotset
  file_user
  file_diy
  copy
  start
}

main