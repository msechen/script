#!/usr/bin/env bash
# 从 whyour 大佬的 bot.sh 与 E大 的 jup.sh 与 SuMaiKaDe 大佬的 bot.sh 拼凑出来
## 导入通用变量与函数
if [ ! -d "/ql" ];then
  dir_root=/jd
else
  dir_root=/ql
fi

dir_bot=$dir_root/jbot
dir_diy=$dir_bot/diy
dir_repo=$dir_root/repo
dir_config=$dir_root/config
url_1="https://github.com/SuMaiKaDe/bot.git"
url_2="https://github.com/chiupam/JD_Diy.git"
repo_1="${dir_repo}/dockerbot"
repo_2="${dir_repo}/diybot"
set_1="${dir_root}/config/botset.json"
set_2="${dir_root}/config/diybotset.json"
user_file="${dir_diy}/user.py"
diy_file="${dir_diy}/diy.py"

git_pull_scripts() {
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

git_clone_scripts() {
  local url=$1
  local dir=$2
  local branch=$3
  [[ $branch ]] && local cmd="-b $branch "
  echo -e "开始克隆仓库 $url 到 $dir\n"
  git clone $cmd $url $dir
  exit_status=$?
}

# 安装依赖
echo -e "\n1、安装bot依赖...\n"
apk --no-cache add -f zlib-dev gcc jpeg-dev python3-dev musl-dev freetype-dev
echo -e "\nbot依赖安装成功...\n"

# 拉取原机器人仓库文件
echo -e "\n2、下载bot所需文件...\n"
if [ -d ${repo_1}/.git ]; then
  git_pull_scripts ${repo_1} "main"
else
  git_clone_scripts ${url_1} ${repo_1} "main"
fi
# 拉取自定义机器人仓库文件
echo -e "\n3、下载diybot仓库文件...\n"
if [ -d ${repo_2}/.git ]; then
  git_pull_scripts ${repo_2} "master"
else
  git_clone_scripts ${url_2} ${repo_2} "master"
fi

cp -rf $repo_2/jbot/* $repo_1/jbot/diy
rm -rf $repo_1/jbot/diy/user.py

echo -e "\n4、开始执行其余操作..."
# user.py的抉择
#if [ ! -f "$user_file" ]; then
#  echo "没有部署 user.py ，拉取"
#  rm -rf $repo_1/jbot/diy/user.py
#else
#  echo "已部署 user.py ，更新"
#  cp -rf $repo_2/beta/* $repo_1/jbot/diy
#fi

# diy.py的抉择
if [ ! -f "$diy_file" ]; then
  echo "未存在 diy.py ， 拉取"
  cp -rf $repo_2/pys/diy.py $repo_1/jbot/diy
else
  echo "已存在 diy.py ，取消操作"
fi

# 修改启动语文件
echo "修改启动语文件"
cp -rf -f $repo_2/backup/__main__.py $repo_1/jbot/

# botset.json的抉择
if [[ ! -f "$set_1" ]]; then
  echo "未存在 botset.json ，拉取"
  cp -f $set_1 $dir_config
else
  echo "已存在 botset.json ，取消操作"
fi

# diybotset.json的抉择
if [ ! -f "$set_2" ]; then
  echo "未存在 diybotset.json ，拉取"
  cp $repo_2/config/diybotset.json $dir_config
else
  echo "已存在 diybotset.json ，取消操作"
fi
echo -e "完成其余操作...\n"

# 把 repo/dockerbot/jbot 目录的文件复制到根目录
echo -e "\n5、把 $repo_1/jbot 目录的文件复制到 $dir_root 根目录...\n"
cp -rf $repo_1/jbot $dir_root

cd $dir_root
if [ ! -d "/ql/log/bot" ]; then
  mkdir $dir_root/log/bot
fi
if [[ -z $(grep -E "123456789" $dir_root/config/bot.json) ]]; then
  if [ -d "/ql" ]; then
    ps -ef | grep "python3 -m jbot" | grep -v grep | awk '{print $1}' | xargs kill -9 2>/dev/null
    nohup python3 -m jbot >$dir_root/log/bot/bot.log 2>&1 &
  else
    cd $dir_bot
    pm2 start ecosystem.config.js
    cd $dir_root
    pm2 restart jbot
  fi
  echo -e "bot启动成功...\n"
else
  echo -e  "似乎 $dir_root/config/bot.json 还未修改为你自己的信息，可能是首次部署容器，因此不启动Telegram Bot...\n配置好bot.json后再次运行本程序即可启动"
fi
exit 0
