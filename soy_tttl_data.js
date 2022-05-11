module.exports = {
    "config":[{
        "notice":false//推送信息,true为发生,false反之
    }],
    "user_data":[
        {//第一个账号配置
        "App_Model":"",//抓带有 http://pic.anngudao.com 的请求头上 App-Model 值
        "session_id":"",//抓带有 http://pic.anngudao.com 的链接上的 session_id 值
        "award_num":false,//true为答100题,false为不答,最多答对60题
        },/*{//第二个账号配置,多号如此类推,需要把/星 星/删除
        "App_Model":"",//抓带有 http://pic.anngudao.com 的请求头上 App-Model 值
        "session_id":"",//抓带有 http://pic.anngudao.com 的链接上的 session_id 值
        "award_num":false,//true为答100题,false为不答,最多答对60题
        },*/

]}