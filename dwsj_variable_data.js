//别问我为什么抓包网络,那就是没有根证书(就是需要root移动证书到/etc/security/cacerts/目录下)
//不要问我安卓11能不能抓包,安卓11需要手动安装证书
//请注意填写变量格式,reward_video这个值是使用 单引号 , dwsj_build、dwsj_UPbuild、dwsj_signtime这三是没有引号,其他的都是 双引号

module.exports ={"code":200,"dwsj_variable_data":{
    "dwsj_data":[{
        "user_ID":"这里填用户ID(推荐码都可以),在我的账户里面查看",
        "dwsj_build":这个是否建造建筑的,填 true 或者 false (true表示建造,反之),
        "dwsj_UPbuild":这个是否升级建筑的,填 true 或者 false (true表示升级,反之),
        "dwsj_signtime":这个是签到时间段,填0到23任意时间段,
        "dwsj_token":"抓包找任意一个带有 https://sdsj.shandw.com 链接的请求头(编程上称headers,俗话称提交数据头或协议头)上的 Authorization 值",
        "dwsj_body":"抓包没有行动次数(没骰子)时观看增加行动次数(骰子)的广告视频,观看完成后链接是 https://sdsj.shandw.com/getAdReward 然后复制他的全部请求体(编程字面称body,俗话称提交数据或提交信息之类)",
        "dwsj_sign":"抓包签到时观看的广告视频,观看完成后链接是 https://sdsj.shandw.com/getAdReward 然后复制他的全部请求体(编程字面称body,俗话称提交数据或提交信息之类)",
        "dwsj_view":"抓包加速建筑(触发条件:行动一次后行动图标左上边会有建造按钮,点一下会提示建造或者升级,选一个,操作完成后在左边有个建设列表,点进去,点免费加速,观看一次广告视频),观看完成后链接是 https://sdsj.shandw.com/getAdReward 然后复制他的全部请求体(编程字面称body,俗话称提交数据或提交信息之类)",
        "dwsj_UA":"找任意一个带有 https://sdsj.shandw.com 链接的请求头(编程上称headers,俗话称提交数据头或协议头)上的 User-Agent 值,这个可以留空不填",
        "reward_video":'这个填观看广告视频数据,抓包找 https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward 这个条链接(不一定每次广告视频都出现),然后复制他的全部请求体(编程字面称body,俗话说提交数据),粘贴,一般是这的{"message":"xxx","cypher":3}'
        },{
        "user_ID":"这里是第二个账号,按照上面填法,还有更多的自行模仿添加",
        "dwsj_build":这里是第二个账号,按照上面填法,还有更多的自行模仿添加,
        "dwsj_UPbuild":这里是第二个账号,按照上面填法,还有更多的自行模仿添加,
        "dwsj_signtime":这里是第二个账号,按照上面填法,还有更多的自行模仿添加,
        "dwsj_token":"这里是第二个账号,按照上面填法,还有更多的自行模仿添加",
        "dwsj_body":"这里是第二个账号,按照上面填法,还有更多的自行模仿添加",
        "dwsj_sign":"这里是第二个账号,按照上面填法,还有更多的自行模仿添加",
        "dwsj_view":"抓包加速建筑(触发条件:行动一次后行动图标左上边会有建造按钮,点一下会提示建造或者升级,选一个,操作完成后在左边有个建设列表,点进去,点免费加速,观看一次广告视频),观看完成后链接是 https://sdsj.shandw.com/getAdReward 然后复制他的全部请求体(编程字面称body,俗话称提交数据或提交信息之类)",
        "dwsj_UA":"这里是第二个账号,按照上面填法,还有更多的自行模仿添加",
        "reward_video":'这个填观看广告视频数据,抓包找 https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward 这个条链接(不一定每次广告视频都出现),然后复制他的全部请求体(编程字面称body,俗话说提交数据),粘贴,一般是这的{"message":"xxx","cypher":3}'
        }
]}}