#!/usr/bin/env bash

if [ -d "/jd" ]; then
  root=/jd
else
  root=/ql
fi

fix() {
  sed -i 's/\/log/\/log$/' $root/jbot/bot/sendfile.py
}

install() {
  echo "安装user监控！"
  echo ""
  cp -f $root/repo/diybot/beta/user/* $root/jbot/user
}

uninstall() {
  echo "卸载user监控！"
  echo ""
  rm -f $root/jbot/user/utils.py
  rm -f $root/jbot/user/activityID.py
  rm -f $root/jbot/user/follow.py
  rm -f $root/jbot/user/redrain.py
  rm -f $root/jbot/user/shoptoken.py
  rm -f $root/jbot/user/user.py
}

update() {
  echo "更新user监控！"
  echo ""
  raw=https://raw.githubusercontent.com/chiupam/JD_Diy/main/beta/user
  wget $raw/utils.py -O $root/jbot/user/utils.py
  wget $raw/activityID.py -O $root/jbot/user/activityID.py
  wget $raw/follow.py -O $root/jbot/user/follow.py
  wget $raw/redrain.py -O $root/jbot/user/redrain.py
  wget $raw/shoptoken.py -O $root/jbot/user/shoptoken.py
  wget $raw/user.py -O $root/jbot/user/user.py
}

main() {
    echo "请选择您需要进行的操作:"
    echo "  1) 安装 user"
    echo "  2) 卸载 user"
    echo "  3) 更新 user"
    echo "  4) 退出脚本"
    echo ""
    echo -n "请输入编号: "
    read N
    case $N in
    1) install ;;
    2) uninstall ;;
    3) update ;;
    4) exit ;;
    *) echo "输入错误！请重新 bash user.sh 启动脚本" ;;
    esac
}

fix
main
cd $root
if [ -d "/jd" ]
  then pm2 restart jbot
else
  nohup python3 -m jbot > /ql/log/bot/bot.log 2>&1 &
fi
