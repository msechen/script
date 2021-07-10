#!/usr/bin/env bash

## 判断环境
dir_shell=$(dirname $(readlink -f "$0"))
dir_root=$dir_shell

## 导入通用变量与函数
. $dir_shell/jshare.sh

## 导入配置文件，检测平台
import_config_no_check jlog
detect_termux
detect_macos

## 删除运行js脚本的旧日志
remove_js_log () {
    local log_full_path_list=$(ls -l $dir_log/*/*.log | awk '{print $9}')
    local diff_time
    for log in $log_full_path_list; do
        local log_date=$(echo $log | awk -F "/" '{print $NF}' | cut -c1-10)   #文件名比文件属性获得的日期要可靠
        if [[ $is_macos -eq 1 ]]; then
            diff_time=$(($(date +%s) - $(date -j -f "%Y-%m-%d" "$log_date" +%s)))
        else
            diff_time=$(($(date +%s) - $(date +%s -d "$log_date")))
        fi
        [[ $diff_time -gt $((${RmLogDaysAgo} * 86400)) ]] && rm -vf $log
    done
}

## 删除jup的运行日志
remove_jup_log () {
    local date_remove_log date_tmp
    if [[ $is_macos -eq 1 ]]; then
        date_remove_log=$(date -v-${RmLogDaysAgo}d "+%Y-%m-%d")
    else
        date_tmp=$(($(date "+%s") - 86400 * ${RmLogDaysAgo}))
        date_remove_log=$(date -d "@$date_tmp" "+%Y-%m-%d")
    fi
    line_end_jup_log=$[$(cat $dir_log/jup.log | grep -n "$date_remove_log " | head -1 | awk -F ":" '{print $1}') - 3]
    [[ $line_end_jup_log -gt 0 ]] && perl -i -ne "{print unless 1 .. $line_end_jup_log}" $dir_log/jup.log
}

## 删除空文件夹
remove_empty_dir () {
    cd $dir_log
    for dir in $(ls); do
        if [ -d $dir ] && [[ -z $(ls $dir) ]]; then
            rm -rf $dir
        fi
    done
}

## 运行
if [[ ${RmLogDaysAgo} ]]; then
    echo -e "查找旧日志文件中...\n"
    remove_js_log
    remove_jup_log
    remove_empty_dir
    echo -e "删除旧日志执行完毕\n"
fi
