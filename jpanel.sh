#!/usr/bin/env bash

## 判断环境
dir_shell=$(dirname $(readlink -f "$0"))
dir_root=$dir_shell
dir_panel=$dir_root/panel

## 增加环境变量
export PS1="\u@\h:\w $ "

## 导入通用变量与函数
. $dir_shell/jshare.sh

## 检测平台，创建软连接，识别命令，修复配置文件
detect_termux
detect_macos
link_shell
define_cmd
fix_config

## 预处理
[ ! -s $file_auth_user ] && cp -f $file_auth_sample $file_auth_user

## 复制ttyd
if [[ $is_termux -eq 1 ]] && type ! ttyd >/dev/null 2>&1; then
    pkg update
    pkg install ttyd
elif [ ! -f /usr/local/bin/ttyd ]; then
    cp -f "$dir_panel/ttyd/ttyd.$(uname -m)" /usr/local/bin/ttyd
    ttyd_status=$?
    [ ! -x /usr/local/bin/ttyd ] && chmod +x /usr/local/bin/ttyd
    [[ $ttyd_status -ne 0 ]] && echo -e "CPU架构暂不支持，无法正常使用网页终端！\n"
fi

## 运行ttyd和控制面板
cd $dir_panel
if type pm2 >/dev/null 2>&1; then
    [[ $ttyd_status -eq 0 ]] && pm2 start /usr/local/bin/ttyd --name="ttyd" -- -t fontSize=14 -t disableLeaveAlert=true -t rendererType=webgl bash
    pm2 start ecosystem.config.js
else
    [[ $ttyd_status -eq 0 ]] && nohup /usr/local/bin/ttyd -t fontSize=14 -t disableLeaveAlert=true -t rendererType=webgl bash >/dev/null 2>&1 &
    nohup node server.js >/dev/null 2>&1 &
fi

if [[ $? -eq 0 ]]; then
    echo -e "控制面板启动成功，如未修改，则初始用户名和密码为：admin/adminadmin...\n"
else
    echo -e "控制面板启动失败...\n"
fi