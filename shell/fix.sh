#!/usr/bin/env bash

if [ ! -d "/ql" ];then root=/jd; else root=/ql;fi

restart() {
  if [ -d "/ql" ]; then
    ps -ef | grep "python3 -m jbot" | grep -v grep | awk '{print $1}' | xargs kill -9 2>/dev/null
    nohup python3 -m jbot > $root/log/bot/bot.log 2>&1 &
  else
    cd $root/jbot || exit; pm2 start ecosystem.config.js
    cd $root || exit; pm2 restart jbot
  fi
}

fix1() {
  rm -f $root/bot.session
  rm -f $root/bot.session-journal
  rm -f $root/user.session
  rm -f $root/user.session-journal
  rm -f $root/config/user.session
  rm -f $root/config/user.session-journal
  sed -i 's/user": "True"/user": "False"/' $root/config/botset.json
  restart
}

fix2() {
  if [ -d "/jd" ]; then root=/jd; else root=/ql; fi
  rm -f $root/user.session
  rm -f $root/user.session-journal
  rm -f $root/config/user.session
  rm -f $root/config/user.session-journal
  sed -i 's/user": "True"/user": "False"/' $root/config/botset.json
  restart
}

fix3() {
  if [ -d "/jd" ]; then root=/jd; else root=/ql; fi
  python3 $root/repo/diybot/other/upgrade_all_packages.py
  rm -rf $root/jbot/__pycache__
  rm -rf $root/jbot/bot/__pycache__
  rm -rf $root/jbot/diy/__pycache__
  rm -rf $root/jbot/user/__pycache__
  restart
}

back() {
  if [ -d $root/repo/backup ]; then
    echo "无法恢复user的正常监控！请悉知！"
    cd $root/repo/backup || exit
    dir=$(ls -t | head -1 | awk '{print $1}')
    rm -rf $root/jbot/*
    cp -rf "${root}/repo/backup/${dir}/*" $root/jbot
    cd $root/jbot || exit; pm2 start ecosystem.config.js
    cd $root; pm2 restart jbot
  else
    echo "你没有做备份！无法回滚！"
  fi
}

main() {
  echo "请选择您需要进行的操作:"
  echo "  1) 重装机器人后 /start 没有反应"
  echo "  2) /user 点击 开启user 按钮后连 /start 都没有反应"
  echo "  3) 日志提示：AttributeError: module 'xxxxxx' has no attribute 'xxxxxx'"
  echo "  4) 想用回之前自己最后一次备份好的机器人文件（可能无法使用user监控）"
  echo "  5) 退出修复脚本"
  echo ""
  echo -n "请输入编号: "
  read N
  case $N in
    1) fix1 ;;
    2) fix2 ;;
    3) fix3 ;;
    4) back ;;
    5) exit 0 ;;
    *) echo "输入错误！"; sleep 1s; main;;
  esac
}

main
exit 0
