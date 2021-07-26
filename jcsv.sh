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

## 将被屏蔽的Cookie留空，只针对最近一天（一般是前一天）的京豆变化情况，历史的不管
for num in $(echo $TempBlockCookie | perl -pe "s| |\n|g" | sort -nu); do
    if [[ $num -gt 1 ]]; then
        perl -i -pe "s|^($bean_date(,\d*){$(($num - 1))})(.*)|\1,0\2|" $bean_income $bean_outlay $bean_total
    elif [[ $num -ge 1 ]]; then
        perl -i -pe "s|^($bean_date)(,.*)|\1,0\2|" $bean_income $bean_outlay $bean_total
    fi
done
