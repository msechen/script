#!/bin/bash
set -e

dir_config="$JD_DIR/config"
dir_sample="$JD_DIR/sample"
dir_own="$JD_DIR/own"
dir_log="$JD_DIR/log"
dir_panel="$JD_DIR/panel"

file_crontab_sample="$dir_sample/crontab.sample.list"
file_crontab_user="$dir_config/crontab.list"
file_config_sample="$dir_sample/config.sample.sh"
file_config_user="$dir_config/config.sh"
file_cookie="$dir_config/cookie.sh"
file_auth_sample="$dir_sample/auth.sample.json"
file_auth_user="$dir_config/auth.json"
file_bot_sample="$JD_DIR/bot/bot.py"
file_bot_user="$dir_config/bot.py"
file_bot_setting_sample="$dir_sample/bot.sample.json"
file_bot_setting_user="$dir_config/bot.json"

echo -e "\n======================== 1. 检测文件夹 ========================\n"
if [ ! -d $dir_config ]; then
    echo -e "没有映射config配置目录给本容器，在容器内创建该文件夹\n"
    mkdir -p $dir_config
fi
if [ ! -d $dir_log ]; then
    echo -e "没有映射log日志目录给本容器，在容器内创建该文件夹\n"
    mkdir -p $dir_log
fi
if [ ! -d $dir_own ]; then
    echo -e "没有映射own脚本目录给本容器，在容器内创建该文件夹\n"
    mkdir -p $dir_own
fi

echo -e "\n======================== 2. 更新源代码 ========================\n"
jup shell
jup scripts
echo

echo -e "======================== 3. 检测配置文件 ========================\n"
if [ -s $file_crontab_user ]; then
    echo -e "检测到 $file_crontab_user 存在，自动导入定时任务...\n"
    perl -i -pe "{s|CMD_UPDATE|jup|g; s|ROOT_DIR|/jd|g; s|CMD_RMLOG|jlog|g; s|CMD_CODE|jcode|g; s|CMD_MTASK|mtask|g; s|CMD_JTASK|jtask|g}" $file_crontab_user
else
    echo -e "检测到 $file_crontab_user 不存在，从示例文件复制一份用于初始化...\n"
    cp -fv $file_crontab_sample $file_crontab_user
    perl -i -pe "{s|CMD_UPDATE|jup|g; s|ROOT_DIR|/jd|g; s|CMD_RMLOG|jlog|g; s|CMD_CODE|jcode|g; s|CMD_MTASK|mtask|g; s|CMD_JTASK|jtask|g}" $file_crontab_user
    echo
fi
crontab $file_crontab_user

if [ ! -s $file_config_user ]; then
    echo -e "检测到 $file_config_user 不存在，从示例文件复制一份用于初始化...\n"
    cp -fv $file_config_sample $file_config_user
    echo
fi

if [ ! -s $file_auth_user ]; then
    echo -e "检测到 $file_auth_user 不存在，从示例文件复制一份用于初始化...\n"
    cp -fv $file_auth_sample $file_auth_user 
    echo
fi

if [[ $ENABLE_TG_BOT == true ]] && [ ! -s $file_bot_setting_user ] && type python3 &>/dev/null; then
    echo -e "检测到 $file_bot_setting_user 不存在，从示例文件复制一份用于初始化...\n"
    cp -fv $file_bot_setting_sample $file_bot_setting_user
    echo
fi

echo -e "======================== 4. 启动挂机程序 ========================\n"
rm -rf /root/.pm2/logs/* >/dev/null 2>&1
if [[ $ENABLE_HANGUP == true ]]; then
    if [ -f $file_cookie ]; then
        . $file_cookie
    fi
    . $file_config_user
    if [[ $Cookie1 ]]; then
        jtask hangup 2>/dev/null
        echo -e "挂机程序启动成功...\n"
    else
        echo -e "$file_config_user 中还未填入有效的Cookie，可能是首次部署容器，因此不启动挂机程序...\n"
    fi
elif [[ ${ENABLE_HANGUP} == false ]]; then
    echo -e "已设置为不自动启动挂机程序，跳过...\n"
fi

echo -e "======================== 5. 启动网页终端 ========================\n"
rm -rf /root/.pm2/logs/* 2>/dev/null  # 清空pm2日志
if [[ $ENABLE_WEB_PANEL == true ]]; then
    if [[ $ENABLE_TTYD == true ]]; then
        ## 增加环境变量
        export PS1="\u@\h:\w $ "
		## 复制ttyd
        if [[ $is_termux -eq 1 ]] && type ! ttyd >/dev/null 2>&1; then
          npm update
          npm install ttyd
        elif [ ! -f /usr/local/bin/ttyd ]; then
          cp -f "$dir_panel/ttyd/ttyd.$(uname -m)" /usr/local/bin/ttyd
          ttyd_status=$?
          [ ! -x /usr/local/bin/ttyd ] && chmod +x /usr/local/bin/ttyd
          [[ $ttyd_status -ne 0 ]] && echo -e "CPU架构暂不支持，无法正常使用网页终端！\n"
        fi
        cd ${JD_DIR}/panel
        if type pm2 >/dev/null 2>&1; then
           [[ $ttyd_status -eq 0 ]] && pm2 start /usr/local/bin/ttyd --name="ttyd" -- -t fontSize=14 -t disableLeaveAlert=true -t rendererType=webgl bash
           
        else
           [[ $ttyd_status -eq 0 ]] && nohup /usr/local/bin/ttyd -t fontSize=14 -t disableLeaveAlert=true -t rendererType=webgl bash >/dev/null 2>&1 &
           nohup node server.js >/dev/null 2>&1 &
        fi
        if [[ $? -eq 0 ]]; then
            echo -e "网页终端启动成功...\n"
        else
            echo -e "网页终端启动失败，但容器将继续启动...\n"
        fi
    elif [[ $ENABLE_TTYD == false ]]; then
        echo -e "已设置为不自动启动网页终端，跳过...\n"
    fi
else
    echo -e "已设置为不自动启动控制面板，因此也不启动网页终端...\n"
fi

echo -e "======================== 6. 启动控制面板 ========================\n"
if [[ $ENABLE_WEB_PANEL == true ]]; then
    cd ${JD_DIR}/panel
    pm2 start ecosystem.config.js
    cd ${JD_DIR}/app
    pm2 start index.js
    if [[ $? -eq 0 ]]; then
        echo -e "控制面板启动成功...\n"
        echo -e "如未修改用户名密码，则初始用户名为：admin，初始密码为：adminadmin\n"
        echo -e "请访问 http://<ip>:5678 登陆并修改配置...\n"
    else
        echo -e "控制面板启动失败，但容器将继续启动...\n"
    fi
elif [[ $ENABLE_WEB_PANEL == false ]]; then
    echo -e "已设置为不自动启动控制面板，跳过...\n"
fi

if type python3 &>/dev/null; then
    echo -e "======================== 7. 启动Telegram Bot ========================\n"
    if [[ $ENABLE_TG_BOT == true ]]; then
        cp -f $file_bot_sample $file_bot_user
        if [[ -z $(grep -E "你的USERID" $file_bot_setting_user) ]]; then
            cd $dir_config
            pm2 start bot.py --watch "$file_bot_user" --watch-delay 10 --name=bot
        else
            echo -e "似乎 $file_bot_setting_user 还未修改为你自己的信息，可能是首次部署容器，因此不启动Telegram Bot...\n"
        fi
    else
        echo -e "已设置为不自动启动Telegram Bot，跳过...\n"
    fi
fi

echo -e "容器启动成功...\n"

###########################

echo -e "容器启动成功...\n"
crond -f
exec "$@"
