#!/usr/bin/env bash

if [ -d "/jd" ]; then
  root=/jd
else
  root=/ql
fi

dir_jbot=$root/jbot
dir_diy=$dir_jbot/diy
dir_repo=$root/repo
url="https://raw.githubusercontent.com/chiupam/JD_Diy/master/jbot/diy/user.py"
file_user=$dir_diy/user.py
bot_set=$root/config/diybotset.json

fix() {
  if [ -z "$(grep -E "shoptokenId" $bot_set)" ]
    then echo "没有找到shoptokenId键，自动填写对应值！"
      key_1="shoptokenId"
      sed -i "s/key_1/$key_1/" $bot_set
      value_1="-100123456789"
      sed -i "s/value_1/$value_1/" $bot_set
  fi
}

start() {
  echo "稍等片刻后，输入手机号（带国家代码）和 Telegram 验证码以完成登录"
  echo "登陆完成后使用 Ctrl + C 退出脚本，并使用以下命令启动 user 监控"
  echo ""
  if [ -d "/jd" ]
    then echo "cd $root;pm2 restart jbot"
  else
    echo "cd $root;nohup python3 -m jbot > /ql/log/bot/bot.log 2>&1 &"
  fi
  echo ""
  cd $root
  python3 -m jbot
}

stop() {
  cd $root
  if [ -d "/jd" ]
    then pm2 stop jbot
  else
    ps -ef | grep "python3 -m jbot" | grep -v grep | awk '{print $1}' | xargs kill -9 2>/dev/null
  fi
}

restart() {
  if [ -f $file_user ]
    then cd $root
    if [ -d "/jd" ]
      then pm2 restart jbot
    else
      nohup python3 -m jbot > /ql/log/bot/bot.log 2>&1 &
    fi
  else
    echo "你没有安装 user.py 无法重启！"
  fi
}

install() {
  if [ -f $file_user ]
    then echo "你已经安装 user.py 请不要重复安装！"
  else
    stop
    cd $root/jbot/diy
    wget $url
    start
  fi
}

uninstall() {
  if [ -f $file_user ]
    then cd $root/jbot/diy
    rm -f "user.py"
    cd $root
    rm -f "user.session"
    rm -f "user.session-journal"
    echo "卸载 user.py 及相关 session 文件"
  else
    echo "你没有使用 user.py 无法卸载！"
  fi
}

update() {
  if [ -f $file_user ]
    then stop
    cd $root/jbot/diy
    rm -f "user.py"
    wget $url
    echo "升级完成，正在重启程序"
    restart
  else
    echo "你没有使用 user.py 无法升级！"
  fi
}

reinstall() {
  if [ -f $file_user ]
    then stop
    cd $root/jbot/diy
    rm -f "user.py"
    wget $url
    start
  else
    echo "你没有使用 user.py 无法重新安装！"
  fi
}

relogin() {
  if [ -f $file_user ]
    then stop
    cd $root
    rm -f "user.session"
    rm -f "user.session-journal"
    start
  else
    echo "你没有使用 user.py 无法重新登录！"
  fi
}

main() {
    echo "请选择您需要进行的操作:"
    echo "  1) 安装 user"
    echo "  2) 卸载 user"
    echo "  3) 更新 user"
    echo "  4) 重新安装 user"
    echo "  5) 重新登陆 user"
    echo "  6) 退出脚本"
    echo ""
    echo -n "请输入编号: "
    read N
    case $N in
    1) install ;;
    2) uninstall ;;
    3) update ;;
    4) reinstall ;;
    5) relogin ;;
    6) exit ;;
    *) echo "输入错误！请重新 bash user.sh 启动脚本" ;;
    esac
}

fix
main