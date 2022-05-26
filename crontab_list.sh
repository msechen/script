# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf

# wskey 更新cookie
20 8-23/3 * * *  cd /scripts/docker/cookie && node gen_open_token.js >> /scripts/logs/gen_open_token.log 2>&1

# 收集助力码
30 * * * * sh +x /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1

# 早上领京豆
0 8 * * * cd /scripts && ts-node /scripts/jd_getUp.ts >> /scripts/logs/jd_getUp.log 2>&1

# 京东双签
1 0,9,12 * * * cd /scripts && ts-node /scripts/jd_bean_box.ts >> /scripts/logs/jd_bean_box.log 2>&1

# 健康社区
35 0,6,18 * * * cd /scripts && ts-node /scripts/jd_health.ts >> /scripts/logs/jd_health.log 2>&1

# 东东健康社区收集能量收集能量
5-45/20 * * * * cd /scripts && ts-node /scripts/jd_health_collect.ts >> /scripts/logs/jd_health_collect.log 2>&1

# 口袋书店
1 8,12,18 * * * node /scripts/jd_bookshop.js >> /scripts/logs/jd_bookshop.log 2>&1

# 京东汽车兑换
0 0 * * * node /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1

# 签到领现金
2 0-23/4 * * * cd /scripts && ts-node /scripts/jd_cash.ts >> /scripts/logs/jd_cash.log 2>&1

# 京喜财富岛
10 * * * * cd /scripts && ts-node /scripts/jd_cfd.ts >> /scripts/logs/jd_cfd.log 2>&1

# 京喜财富岛捡贝壳
10 * * * * cd /scripts && node /scripts/jd_cfd_shell.ts >> /scripts/logs/jd_cfd_shell.log 2>&1

# 京喜财富岛-合成游戏
 10 0 * * * cd /scripts && node /scripts/jd_cfd_game.ts >> /scripts/logs/jd_cfd_game.log 2>&1

# 摇京豆
5 0,23 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1

# 京喜工厂
10 * * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1

# 京喜工厂ts
30 * * * * cd /scripts && ts-node /scripts/jd_jxgc.ts >> /scripts/logs/jd_jxgc.log 2>&1

# 京喜工厂：肯德基、沃尔玛
#0 * * * * cd /scripts && ts-node /scripts/jd_jxgc_stock.ts >> /scripts/logs/jd_jxgc_stock.log 2>&1

# 京喜工厂互助ts
50 * * * * node /scripts/jd_dreamFactory_help.js >> /scripts/logs/jd_dreamFactory_help.log 2>&1

# 京东家庭号
1 12,23 * * * node /scripts/jd_family.js >> /scripts/logs/jd_family.log 2>&1

# 东东农场
5 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1

# 东东农场更多任务
0 11,12 * * * cd /scripts && ts-node /scripts/jd_fruit_moreTask.ts >> /scripts/logs/jd_fruit_moreTask.log 2>&1

# 金榜创造营
13 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1

# 东东工厂
10 * * * * node /scripts/jd_jdfactory.js >> /scripts/logs/jd_jdfactory.log 2>&1

# 领金贴
10 0 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1

# 汪汪乐园
45 0-23/3 * * * cd /scripts && ts-node /scripts/jd_joy_park.ts >> /scripts/logs/jd_joy_park.log 2>&1

# 京东预存验证码
58 7,15,23 * * * cd /scripts && node /scripts/jd_validate_Worker.js >> /scripts/logs/jd_validate_Worker.log 2>&1

# QQ牧场
30 0-23/3 * * * cd /scripts && ts-node /scripts/jd_qq_pasture.ts >> /scripts/logs/jd_qq_pasture.log 2>&1

# 惊喜牧场
5 0,6,12,18 * * * cd /scripts && ts-node /scripts/jd_jxmc.ts >> /scripts/logs/jd_jxmc.log 2>&1

# 京喜牧场兑换新品通知
#0 * * * * cd /scripts && ts-node /scripts/jd_jxmc_stock.ts >> /scripts/logs/jd_jxmc_stock.log 2>&1

# 京喜牧场单独收牛牛
0,30 * * * * cd /scripts && ts-node /scripts/jd_jxmc_getCoin.ts >> /scripts/logs/jd_jxmc_getCoin.log 2>&1

# 京东快递签到
10 0 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1

# 京东直播
10-20/5 12 * * * node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1

# 幸运大转盘
4 10 * * * node /scripts/jd_market_lottery.js >> /scripts/logs/jd_market_lottery.log 2>&1

# 京东摇钱树
3 0-23/2 * * * cd /scripts && ts-node /scripts/jd_moneyTree.ts >> /scripts/logs/jd_moneyTree.log 2>&1

# 京东秒秒币
10 7 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1

# 东东萌宠
15 6-18/6 * * * node /scripts/jd_pet.js >> /scripts/logs/jd_pet.log 2>&1

# 金融养猪
#12 0-23/6 * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1

# 京东种豆得豆
1 7-21/2 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1

# 闪购盲盒
20 8 * * * cd /scripts && ts-node /scripts/jd_sgmh.ts >> /scripts/logs/jd_sgmh.log 2>&1

# 京东极速版红包
20 0,22 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1

# 伊利牛
8 0-23/3 * * * node /scripts/jd_yili_cow.ts  >> /scripts/logs/jd_yili_cow.log 2>&1

# 东东超市
# 11 * * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1

# 取关京东店铺和商品
#55 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1

# 环境测试
0 12 * * * node /scripts/jd_api_test.js >> /scripts/logs/jd_api_test.log 2>&1

# 省钱大赢家之翻翻乐
20 * * * * node /scripts/jd_big_winner.js >> /scripts/logs/jd_big_winner.log 2>&1

# 京东种豆得豆
1 7-21/2 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1

# 京喜-88红包-宝箱
5 0,6,12 * * * cd /scripts && ts-node /scripts/jx_box.ts >> /scripts/logs/jx_box.log 2>&1

#女装盲盒
35 1,23 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1

#京东试用
16 2 * * * node /scripts/jd_try.js >> /scripts/logs/jd_try.log 2>&1

# 京东魔方
0 0,17 * * * cd /scripts && ts-node /scripts/jd_mofang.ts >> /scripts/logs/jd_mofang.log 2>&1

# 极速版-发财大赢家
1 0,8,18 * * * cd /scripts && ts-node /scripts/jd_speed_redEnvelope.ts >> /scripts/logs/jd_speed_redEnvelope.log 2>&1

# 京东饭粒
5 0,12,22 * * * cd /scripts && ts-node /scripts/jd_ifanli.ts >> /scripts/logs/jd_ifanli.log 2>&1

# 牛牛福利
1 0,9,19,23 * * * cd /scripts && ts-node /scripts/jx_nnfls.ts >> /scripts/logs/jx_nnfls.log 2>&1

# 每周质量报告
0 0 * * 1 cd /scripts && ts-node /scripts/jd_Last_Week_income.ts >> /scripts/logs/jd_Last_Week_income.log 2>&1

# 天天压岁钱
5 0,9,18 * * * cd /scripts && ts-node /scripts/jd_ysq.ts >> /scripts/logs/jd_ysq.log 2>&1

# 京东下拉
15 1,22 * * * cd /scripts && ts-node /scripts/jd_tewu.ts >> /scripts/logs/jd_tewu.log 2>&1

# 小程序-赚京豆
15,30,45 0 * * * cd /scripts && ts-node /scripts/jd_zjd.ts >> /scripts/logs/jd_zjd.log 2>&1

# 领88元红包
5 0,6,16 * * * cd /scripts && ts-node /scripts/jd_88hb.ts >> /scripts/logs/jd_88hb.log 2>&1

# 锦鲤红包
5 0,1,6 * * * cd /scripts && ts-node /scripts/jd_jinli_hongbao.ts >> /scripts/logs/jd_jinli_hongbao.log 2>&1

# 锦鲤红包
#5 0,1,6 * * * cd /scripts && ts-node /scripts/jd_jinli.ts >> /scripts/logs/jd_jinli.log 2>&1

# 微信小程序签到红包
8 0 * * * cd /scripts && ts-node /scripts/jd_wechat_sign.ts >> /scripts/logs/jd_wechat_sign.log 2>&1

# 内部 -> 助力池
35 0,1,2 * * * cd /scripts && ts-node /scripts/jd_fruit_help_1.ts >> /scripts/logs/jd_fruit_help_1.log 2>&1

# 汪汪乐园-跑步
20,50 * * * * cd /scripts && ts-node /scripts/jd_joy_park_run.ts >> /scripts/logs/jd_joy_park_run.log 2>&1

# 手机狂欢城
15 0,6 * * * cd /scripts && ts-node /scripts/jd_carnivalcity_card.ts >> /scripts/logs/jd_carnivalcity_card.log 2>&1

# 极速版-挖宝
# 2 0,1,18 * * * cd /scripts && ts-node /scripts/jd_speed_happy_dig.ts >> /scripts/logs/jd_speed_happy_dig.log 2>&1

# 赚赚
30 9 * * * cd /scripts && ts-node /scripts/jd_jdzz.ts >> /scripts/logs/jd_jdzz.log 2>&1

# 515券民空间站
30 9 * * * cd /scripts && ts-node /scripts/jd_planet_space.ts >> /scripts/logs/jd_planet_space.log 2>&1

# 微信小程序签到红包
8 0 * * * cd /scripts && ts-node /scripts/jd_wechat_sign.ts >> /scripts/logs/jd_wechat_sign.log 2>&1

# https://appliances-activity.jd.com/
0 20 * * * cd /scripts && ts-node /scripts/jd_strategy.ts >> /scripts/logs/jd_strategy.log 2>&1

# 生活积分
8 0 * * * cd /scripts && ts-node /scripts/jd_dwapp.ts >> /scripts/logs/jd_dwapp.log 2>&1

# 极速版-挖宝
2 0,1,6 * * * cd /scripts && ts-node /scripts/jd_speed_wabao.ts >> /scripts/logs/jd_speed_wabao.log 2>&1

##################################################### 自定 ########################################################

# xxxx
# 58 9,23 * * * sh +x /scripts/logs/jxmc.sh
0 0 * * * node /scripts/logs/cfd_code.js >> /scripts/logs/cfd_code.log 2>&1
19 0 * * * node /scripts/logs/jxmc_code.js >> /scripts/logs/jxmc_code.log 2>&1

##################################################### yyds #####################################################

# 财富大陆
# 18 0-23/2 * * * node /scripts/logs/other_scripts/yyds/gua_wealth_island.js >> /scripts/logs/other_logs/yyds/gua_wealth_island.log 2>&1

# 财富大陆-互助
18 0,1,9,14,18 * * * node /scripts/logs/other_scripts/yyds/gua_wealth_island_help.js >> /scripts/logs/other_logs/yyds/gua_wealth_island_help.log 2>&1

# 愤怒的锦鲤
5 0 * * * node /scripts/logs/other_scripts/yyds/jd_angryKoi.js >> /scripts/logs/other_logs/yyds/jd_angryKoi.log 2>&1

# 美丽研究院--兑换
20 12 * * * node /scripts/logs/other_scripts/yyds/jd_beauty_ex.js >> /scripts/logs/other_logs/yyds/jd_beauty_ex.log 2>&1

# 白条抽奖
10 9 13-31,1-7 1,2 * node /scripts/logs/other_scripts/yyds/jd_bt_sign.js >> /scripts/logs/other_logs/yyds/jd_bt_sign.log 2>&1

# 积分换话费
33 7,19 * * * node /scripts/logs/other_scripts/yyds/jd_dwapp.js >> /scripts/logs/other_logs/yyds/jd_dwapp.log 2>&1

# 过期京豆兑换为喜豆
33 7,19 * * * export exjxbeans=true && node /scripts/logs/other_scripts/yyds/jd_exchangejxbeans.js >> /scripts/logs/other_logs/yyds/jd_exchangejxbeans.log 2>&1

# 京东特价翻翻乐
20 0-23/3 * * * node /scripts/logs/other_scripts/yyds/jd_jdtj_winner.js >> /scripts/logs/other_logs/yyds/jd_jdtj_winner.log 2>&1

# 京东蒙牛
# 18 1,16 * * * node /scripts/logs/other_scripts/yyds/jd_mengniu.js >> /scripts/logs/other_logs/yyds/jd_mengniu.log 2>&1

# 搞鸡玩家-秒秒币
20 7 * * * node /scripts/logs/other_scripts/yyds/jd_ms.js >> /scripts/logs/other_logs/yyds/jd_ms.log 2>&1

# 组队分豆-美泰
18 2,14 * * * node /scripts/logs/other_scripts/yyds/jd_mt.js >> /scripts/logs/other_logs/yyds/jd_mt.log 2>&1

# 玩一玩成就
0 8 * * * node /scripts/logs/other_scripts/yyds/jd_wyw.js >> /scripts/logs/other_logs/yyds/jd_wyw.log 2>&1

# 送豆得豆
45 1,12 * * * node /scripts/logs/other_scripts/yyds/jd_sendBeans.js >> /scripts/logs/other_logs/yyds/jd_sendBeans.log 2>&1

# 京喜-首页-牛牛福利
1 0,19,23 * * * node /scripts/logs/other_scripts/yyds/jd_nnfls.js >> /scripts/logs/other_logs/yyds/jd_nnfls.log 2>&1

# 京喜财富岛
# 1 0,6-23 * * * node /scripts/logs/other_scripts/yyds/jd_cfd.js >> /scripts/logs/other_logs/yyds/jd_cfd.log 2>&1

# 财富岛兑换红包
50 * * * * node /scripts/logs/other_scripts/yyds/jd_cfd_hb.js >> /scripts/logs/other_logs/yyds/jd_cfd_hb.log 2>&1

# 京喜财富岛合成生鲜
# 45 * * * * node /scripts/logs/other_scripts/yyds/jd_cfd_fresh.js >> /scripts/logs/other_logs/yyds/jd_cfd_fresh.log 2>&1

# 京喜财富岛热气球
30 * * * * node /scripts/logs/other_scripts/yyds/jd_cfd_loop.js >> /scripts/logs/other_logs/yyds/jd_cfd_loop.log 2>&1

# 京喜财富岛合成珍珠
# 30 0-23/2 * * * node /scripts/logs/other_scripts/yyds/jd_cfd_pearl.js >> /scripts/logs/other_logs/yyds/jd_cfd_pearl.log 2>&1

# 财富岛珍珠兑换
# 59 0-23/1 * * * node /scripts/logs/other_scripts/yyds/jd_cfd_pearl_ex.js >> /scripts/logs/other_logs/yyds/jd_cfd_pearl_ex.log 2>&1

# 众筹许愿池
40 0,2 * * * node /scripts/logs/other_scripts/yyds/jd_wish.js >> /scripts/logs/other_logs/yyds/jd_wish.log 2>&1

# 京东通天塔--签到
3 0 * * * node /scripts/logs/other_scripts/yyds/jd_m_sign.js >> /scripts/logs/other_logs/yyds/jd_m_sign.log 2>&1

# 见缝插针
27 0-23/6 * * *  node /scripts/logs/other_scripts/yyds/jd_jfcz.js >> /scripts/logs/other_logs/yyds/jd_jfcz.log 2>&1

# 京东汽车
# 10 8 * * *  node /scripts/logs/other_scripts/yyds/jd_mpdzcar.js >> /scripts/logs/other_logs/yyds/jd_mpdzcar.log 2>&1

# 京东汽车-游戏
# 10 6,10,12 * * *  node /scripts/logs/other_scripts/yyds/jd_mpdzcar_game.js >> /scripts/logs/other_logs/yyds/jd_mpdzcar_game.log 2>&1

# 京东汽车-助力
# 10 6,10,12 * * *  node /scripts/logs/other_scripts/yyds/jd_mpdzcar_help.js >> /scripts/logs/other_logs/yyds/jd_mpdzcar_help.log 2>&1

# 半点京豆雨
30 21,22 * * * node /scripts/logs/other_scripts/yyds/jd_redrain_half.js >> /scripts/logs/other_logs/yyds/jd_redrain_half.log 2>&1

# 京东签到图形验证
14 10 * * * node /scripts/logs/other_scripts/yyds/jd_sign_graphics.js >> /scripts/logs/other_logs/yyds/jd_sign_graphics.log 2>&1

# 京东极速版签到+赚现金任务
0 7 * * * node /scripts/logs/other_scripts/yyds/jd_speed_sign.js >> /scripts/logs/other_logs/yyds/jd_speed_sign.log 2>&1

# 特务Z，默认选择左边战队
23 8,9 * * * node /scripts/logs/other_scripts/yyds/jd_productZ4Brand.js >> /scripts/logs/other_logs/yyds/jd_productZ4Brand.log 2>&1

# 京东生鲜每日抽奖，可抽奖获得京豆
10 7 * * * node /scripts/logs/other_scripts/yyds/jd_sxLottery.js >> /scripts/logs/other_logs/yyds/jd_sxLottery.log 2>&1

# 炸年兽
#33 0,6-23/2 * * * node /scripts/logs/other_scripts/zero205/jd_travel.js >> /scripts/logs/other_logs/zero205/jd_travel.log 2>&1

# 美丽研究院
20 7,12,19 * * * node /scripts/logs/other_scripts/yyds/jd_beauty.js >> /scripts/logs/other_logs/yyds/jd_beauty.log 2>&1

# 美丽研究院--兑换
20 12 * * * node /scripts/logs/other_scripts/yyds/jd_beauty_ex.js >> /scripts/logs/other_logs/yyds/jd_beauty_ex.log 2>&1

# 东东农场->东东乐园
30 7 * * * node /scripts/logs/other_scripts/yyds/jd_ddly.js >> /scripts/logs/other_logs/yyds/jd_ddly.log 2>&1

# 京东饭粒
# 30 7 * * * node /scripts/logs/other_scripts/yyds/jd_fanli.js >> /scripts/logs/other_logs/yyds/jd_fanli.log 2>&1

# 东东健康社区
13 0,6,22 * * * node /scripts/logs/other_scripts/yyds/jd_health.js >> /scripts/logs/other_logs/yyds/jd_health.log 2>&1

# 京东特价--翻翻乐
13 0,6,22 * * * node /scripts/logs/other_scripts/yyds/jd_jdtj_winner.js >> /scripts/logs/other_logs/yyds/jd_jdtj_winner.log 2>&1

# 宠汪汪喂食
15 0-23/1 * * * node /scripts/logs/other_scripts/yyds/jd_joy_feedPets.js >> /scripts/logs/other_logs/yyds/jd_joy_feedPets.log 2>&1

# 京喜牧场
# 20 * * * * node /scripts/logs/other_scripts/yyds/jd_jxmc.js >> /scripts/logs/other_logs/yyds/jd_jxmc.log 2>&1

# 东东萌宠
# 15 6-18/6 * * * node /scripts/logs/other_scripts/yyds/jd_pet.js >> /scripts/logs/other_logs/yyds/jd_pet.log 2>&1

# 京东金融养猪猪
12 0-23/6 * * * node /scripts/logs/other_scripts/yyds/jd_pigPet.js >> /scripts/logs/other_logs/yyds/jd_pigPet.log 2>&1

# 种豆得豆
# 12 0-23/6 * * * node /scripts/logs/other_scripts/yyds/jd_plantBean.js >> /scripts/logs/other_logs/yyds/jd_plantBean.log 2>&1

# 京东极速版红包
20 0,22 * * * node /scripts/logs/other_scripts/yyds/jd_speed_redpocke.js >> /scripts/logs/other_logs/yyds/jd_speed_redpocke.log 2>&1

# 取关京东店铺和商品
35 23 * * * node /scripts/logs/other_scripts/yyds/jd_unsubscribe_xh.js >> /scripts/logs/other_logs/yyds/jd_unsubscribe_xh.log 2>&1

# 京喜签到
20 1,8 * * * node /scripts/logs/other_scripts/yyds/jx_sign.js >> /scripts/logs/other_logs/yyds/jx_sign.log 2>&1

# 京喜签到-喜豆
20 1,8 * * * node /scripts/logs/other_scripts/yyds/jx_sign_xd.js >> /scripts/logs/other_logs/yyds/jx_sign_xd.log 2>&1

# 资产变化强化版
# 30 21 * * * node /scripts/logs/other_scripts/yyds/jd_bean_change_new.js >> /scripts/logs/other_logs/yyds/jd_bean_change_new.log 2>&1

# 京东金榜
13 6 * * * node /scripts/logs/other_scripts/yyds/jd_gold_sign.js >> /scripts/logs/other_logs/yyds/jd_gold_sign.log 2>&1

# 天天压岁钱
# 33 0,14,20 * * * node /scripts/logs/other_scripts/yyds/jx_ttysq.js >> /scripts/logs/other_logs/yyds/jx_ttysq.log 2>&1

# 秒杀-狂撒三亿京豆
0 0,20 * * * node /scripts/logs/other_scripts/yyds/jd_babel_sign.js >> /scripts/logs/other_logs/yyds/jd_babel_sign.log 2>&1

# 京东小魔方
# 20 4,19 * * * node /scripts/logs/other_scripts/yyds/jd_xmf.js >> /scripts/logs/other_logs/yyds/jd_xmf.log 2>&1

# 搞鸡玩家-秒秒币
# 20 7 * * * node /scripts/logs/other_scripts/yyds/jd_ms.js >> /scripts/logs/other_logs/yyds/jd_ms.log 2>&1

# 多合一签到
0 10 * * * node /scripts/logs/other_scripts/yyds/jd_bean_sign.js >> /scripts/logs/other_logs/yyds/jd_bean_sign.log 2>&1

# 财富岛兑换红包
50 * * * * export cfd_rp=true && node /scripts/logs/other_scripts/yyds/jd_cfd_hb.js >> /scripts/logs/other_logs/yyds/jd_cfd_hb.log 2>&1

# 搞鸡玩家
12 0,1,2 5-7 2 *  export FS_LEVEL=car && node /scripts/logs/other_scripts/zero205/jd_freshgoods.js >> /scripts/logs/other_logs/zero205/jd_freshgoods.log 2>&1

# 京东汽车
# 43 7,21 * * * node /scripts/logs/other_scripts/yyds/jd_car.js >> /scripts/logs/other_logs/yyds/jd_car.log 2>&1

# 领券中心签到
15 0 * * * node /scripts/logs/other_scripts/yyds/jd_ccSign.js >> /scripts/logs/other_logs/yyds/jd_ccSign.log 2>&1

# 微信签到领红包
15 0 * * * node /scripts/logs/other_scripts/yyds/jd_wq_wxsign.js >> /scripts/logs/other_logs/yyds/jd_wq_wxsign.log 2>&1

# 极速版抢卷
58 59 6,9,14,17,20 * * * node /scripts/logs/other_scripts/yyds/jd_speedcoupon.js >> /scripts/logs/other_logs/yyds/jd_speedcoupon.log 2>&1

# 宠爱有礼
# 30 6,18 21-28 2 * node /scripts/logs/other_scripts/yyds/jd_dapai_chongai.js >> /scripts/logs/other_logs/yyds/jd_dapai_chongai.log 2>&1

# 京喜财富岛合成月饼
# 5 * * * * node /scripts/logs/other_scripts/yyds/jd_cfd_mooncake.js >> /scripts/logs/other_logs/yyds/jd_cfd_mooncake.log 2>&1

# 京喜领88元红包
4 2,10 * * * node /scripts/logs/other_scripts/yyds/jd_jxlhb.js >> /scripts/logs/other_logs/yyds/jd_jxlhb.log 2>&1

# 赚京豆-瓜分京豆
10 0,7,23 * * * export JD_SYJ=true && node /scripts/logs/other_scripts/yyds/jd_syj.js >> /scripts/logs/other_logs/yyds/jd_syj.log 2>&1

# 逛plus，抽京豆
10 10 * * * node /scripts/logs/other_scripts/yyds/jd_plusReward.js >> /scripts/logs/other_logs/yyds/jd_plusReward.log 2>&1

# 京东汽车-积分
10 8 * * * node /scripts/logs/other_scripts/yyds/jd_mpdzcar.js >> /scripts/logs/other_logs/yyds/jd_mpdzcar.log 2>&1

# 京东汽车-游戏
10 6,10,12 * * * node /scripts/logs/other_scripts/yyds/jd_mpdzcar_game.js >> /scripts/logs/other_logs/yyds/jd_mpdzcar_game.log 2>&1

# 京东汽车-助力
10 6,10,12 * * * node /scripts/logs/other_scripts/yyds/jd_mpdzcar_help.js >> /scripts/logs/other_logs/yyds/jd_mpdzcar_help.log 2>&1

# 极速版抢卷
58 59 7,10,13,15,19 * * * node /scripts/logs/other_scripts/yyds/jd_speed_10_4.js >> /scripts/logs/other_logs/yyds/jd_speed_10_4.log 2>&1
