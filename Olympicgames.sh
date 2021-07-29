#!/bin/bash
# cron 服务器定时执行脚本

# ------------ eg ------------
# 0 */1 11 * * cron.sh
# mac 环境需要加上 /bin/bash, 如:
# 0 */1 11 * * /bin/bash cron.sh
# ------------ eg ------------

name="Olympicgames"

script_dir=$(cd "$(dirname "$0")";pwd)

function dateFormat() {
    date=`/bin/date`
    echo $(date '+%F %T')
}

# 加载本地变量
source /etc/profile

echo "`dateFormat` [$name] 开始执行定时任务" >> "$script_dir/logs/cron.log"

cd "$script_dir" && node ./src/jd/olympicgames/index.js start && node ./src/jd/olympicgames/applet.js start

echo "`dateFormat` [$name] 完成一次定时任务" >> "$script_dir/logs/cron.log"
