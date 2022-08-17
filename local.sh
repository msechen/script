#!/bin/bash
# local 服务器定时执行脚本

# ------------ eg ------------
# 0 */1 * * * /bin/bash local.sh > local.log 2>&1 &
# mac 环境需要加上 /bin/bash, 如:
# 0 */1 11 * * /bin/bash local.sh
# ------------ eg ------------

name="local"

script_dir=$(cd "$(dirname "$0")";pwd)

cd "$script_dir"
echo "当前路径为: $script_dir"

function dateFormat() {
    date=`/bin/date`
    echo $(date '+%F %T')
}

# 加载本地变量
source /etc/profile

echo "开始自动更新代码"
git fetch --all && git reset --hard origin/HEAD && git pull

echo "`dateFormat` [$name] 开始执行定时任务" >> "$script_dir/logs/local.log"

/usr/local/bin/node "$script_dir/src/local.js"

echo "`dateFormat` [$name] 完成一次定时任务" >> "$script_dir/logs/local.log"
