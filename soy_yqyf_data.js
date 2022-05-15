module.exports = {
    "config":[{
        "notice":false//推送信息,true为发生,false反之,只有jwt过期才发送通知
    }],
    "user_data":[
        {//第一个号,默认只开第一个号,多号自己把 (/星  星/) 删除,更多号自己模仿复制粘贴
        "jwt":"xxxxxxxxxxx",//抓带有 https://api.aiqingyinghang.com 的链接,链接上 jwt 值
        "ID":123456,//用户id,在我的界面,ID
        "rouletted":false,//true为转转盘,false为不转
        "withdraw":true,//true为提现,false为不提现,有次数情况0.3开始(群红包的)
        "money":20,//提现金额(20元/50元/100元/200元/500元填对应数字)(这个只针对钱包的,会检测withdraw变量)
        "profit":false,//true为领取下级收益,false为不领取
        "page":1,//红包页数,默认是第一页,如果没有红包或一直抢红包失败可尝试改
        "UA":""//抓包的请求头user-agent值
        },/*{//第二个号
        "jwt":"xxxxxxxxxxx",//抓带有 https://api.aiqingyinghang.com 的链接,链接上 jwt 值
        "ID":123456,//用户id,在我的界面,ID
        "rouletted":false,//true为转转盘,false为不转
        "withdraw":true,//true为提现,false为不提现,有次数情况0.3开始(群红包的)
        "money":20,//提现金额(20元/50元/100元/200元/500元填对应数字)(这个只针对钱包的,会检测withdraw变量)
        "profit":false,//true为领取下级收益,false为不领取
        "page":1,//红包页数,默认是第一页,如果没有红包或一直抢红包失败可尝试改
        "UA":""//抓包的请求头user-agent值
        },{//第三个号
        "jwt":"xxxxxxxxxxx",//抓带有 https://api.aiqingyinghang.com 的链接,链接上 jwt 值
        "ID":123456,//用户id,在我的界面,ID
        "rouletted":false,//true为转转盘,false为不转
        "withdraw":true,//true为提现,false为不提现,有次数情况0.3开始(群红包的)
        "money":20,//提现金额(20元/50元/100元/200元/500元填对应数字)(这个只针对钱包的,会检测withdraw变量)
        "profit":false,//true为领取下级收益,false为不领取
        "page":1,//红包页数,默认是第一页,如果没有红包或一直抢红包失败可尝试改
        "UA":""//抓包的请求头user-agent值
        },*/

        
]}