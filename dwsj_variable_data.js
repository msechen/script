//别问我为什么抓包网络,那就是没有根证书(就是需要root移动证书到/etc/security/cacerts/目录下)
//不要问我安卓11能不能抓包,安卓11需要手动安装证书
//注意抓包有可能是 https://sdsj.shandw.com 链接 也有可能是 49.233.246.33:18081 ip带端口形式
//这是3个账户的模板,没那么多的账号就删掉
//单账号信息板块 {"user_ID":""*******"UA":""} 多账号用 逗号 连接 ,删板块也要删对应逗号,自己对比着修改

module.exports = {"code":200,"dwsj_variable_data":{
    "config":[{
        "url":"https://gitee.com/soy-tool/app-script/raw/master/app_dwsj.js",
        "update":true或false(true表示自动更新脚本,反之),
        "notice":true或false(true表示发送通知,反之)
    }],
    "user_data":[{
        "user_ID":"填用户ID(或推荐码)",
        "build":true或false(true表示建造建筑,反之),
        "UPbuild":true或false(true表示升级建筑,反之),
        "signtime":0~23(签到时间段,填0到23任意一个),
        "transfer":false或true(true表示转增给第一个账号,反之,
        "reward_video":'观看视频的请求体,链接为:https://api-access.pangolin-sdk-toutiao.com/api/ad/union/sdk/reward_video/reward/',
        "Authorization":"抓包找带有 https://sdsj.shandw.com 链接 或 49.233.246.33:18081 的请求头(headers)上的 Authorization 值",
        "UA":"抓包找带有 https://sdsj.shandw.com 链接 或 49.233.246.33:18081 的请求头(headers)上的 User-Agent(user-agent) 值 次变量为选填"
    },{
        "user_ID":"",
        "build":false,
        "UPbuild":false,
        "signtime":6,
        "transfer":false,
        "reward_video":'',
        "Authorization":"",
        "UA":""
    },{
        "user_ID":"",
        "build":false,
        "UPbuild":false,
        "signtime":6,
        "transfer":false,
        "reward_video":'',
        "Authorization":"8",
        "UA":""
    }
    
]}}