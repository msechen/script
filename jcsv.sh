#!/usr/bin/env bash

## 判断环境
dir_shell=$(dirname $(readlink -f "$0"))
dir_root=$dir_shell

## 导入通用变量与函数
. $dir_shell/jshare.sh

## 豆子变化记录文件
bean_income=$dir_log/bean_income.csv
bean_outlay=$dir_log/bean_outlay.csv
bean_total=$dir_log/bean_total.csv

## 执行
cd $dir_log/jd_bean_change
for log in $(ls); do
    log_date=$(echo $log | cut -c1-10)
    bean_date=$(date "+%Y-%m-%d" -d "1 day ago $log_date")

    if [[ -z $(grep "$bean_date" $bean_income) ]]; then
        echo -n "$bean_date," >> $bean_income
        grep -E "昨日收入" $log | grep -oE "\d+" | perl -0777 -pe "s|\n(\d+)|,\1|g" >> $bean_income
    fi

    if [[ -z $(grep "$bean_date" $bean_outlay) ]]; then
        echo -n "$bean_date," >> $bean_outlay
        grep -E "昨日支出" $log | grep -oE "\d+" | perl -0777 -pe "s|\n(\d+)|,\1|g" >> $bean_outlay
    fi

    if [[ -z $(grep "$bean_date" $bean_total) ]]; then
        echo -n "$bean_date," >> $bean_total
        grep -E "当前京豆" $log | perl -pe "s|\D+(\d+).*|\1|g" | perl -0777 -pe "s|\n(\d+)|,\1|g" >> $bean_total
    fi
done