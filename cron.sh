#!/bin/bash
# cron 服务器定时执行脚本

# ------------ eg ------------
# 0 */1 11 * * cron.sh
# mac 环境需要加上 /bin/bash, 如:
# 0 */1 11 * * /bin/bash cron.sh
# ------------ eg ------------

script_dir=$(cd "$(dirname "$0")";pwd)

# 加载本地变量
source /etc/profile

echo "`/bin/date` 开始执行定时任务" >> "$script_dir/logs/cron.log"

cd "$script_dir" && npm run dev

echo "`/bin/date` 完成一次定时任务" >> "$script_dir/logs/cron.log"
