#!/bin/sh

if [[ -f /usr/bin/jd_bot && -z "$DISABLE_SPNODE" ]]; then
  CMD="spnode"
else
  CMD="node"
fi

echo "处理jd_cfd_loop任务。。。"
if [ ! $CRZAY_CFD_LOOP_ENABLE ]; then
   echo "默认启用jd_cfd_loop杀掉jd_cfd_loop任务，并重启"
   eval $(ps -ef | grep "jd_cfd_loop" | grep -v "grep" | awk '{print "kill "$1}')
   echo '' >/scripts/logs/jd_cfd_loop.log
   cd /scripts && npx tsc /scripts/jd_cfd_loop.ts && node /scripts/jd_cfd_loop.js | ts >>/scripts/logs/jd_cfd_loop.log 2>&1 &
   echo "默认jd_cfd_loop重启完成"
else
   if [ $CRZAY_CFD_LOOP_ENABLE = "Y" ]; then
      echo "配置启用jd_cfd_loop，杀掉jd_cfd_loop任务，并重启"
      eval $(ps -ef | grep "jd_cfd_loop" | grep -v "grep" | awk '{print "kill "$1}')
      echo '' >/scripts/logs/jd_cfd_loop.log
      cd /scripts && npx tsc /scripts/jd_cfd_loop.ts && node /scripts/jd_cfd_loop.js | ts >>/scripts/logs/jd_cfd_loop.log 2>&1 &
      echo "配置jd_cfd_loop重启完成"
   else
      eval $(ps -ef | grep "jd_cfd_loop" | grep -v "grep" | awk '{print "kill "$1}')
      echo "已配置不启用jd_cfd_loop任务，仅杀掉"
   fi
fi
