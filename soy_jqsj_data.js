module.exports = {
    "config":[{
        "notice":false//发生推送信息,true为发生,false反之//暂时无效
    }],
    "user_data":[
        
        {//第一个账号配置
        "DEVICEID":"",//抓包带有 https://android-api.lucklyworld.com 链接的请求头找,找不到随便输入32位数字和小写字母组合
        "ANDROIDID":"",//同上,找不到随便输入16位
        "oaid":"",//同上,找不到随便输入16位数字和小写字母组合
        "uid":"",//同上,找不到就在链接找或者游戏中我的界面自己的ID
        "token":"",//同上,注意极速版token不通用
        "User-Agent":"com.caike.ticket/2.7.0 (Linux; U; Android 10; zh-cn) (yyb; 20700)",//勿动
        //
        },/*{//第二个账号配置,如此类推,需要把/星 星/删除
        "DEVICEID":"",//抓包带有 https://android-api.lucklyworld.com 链接的请求头找
        "ANDROIDID":"",//同上
        "oaid":"",//同上
        "uid":"",//同上
        "token":"",//同上
        "User-Agent":"com.caike.ticket/2.7.0 (Linux; U; Android 10; zh-cn) (yyb; 20700)",
        },{
        "DEVICEID":"",//抓包带有 https://android-api.lucklyworld.com 链接的请求头找
        "ANDROIDID":"",//同上
        "oaid":"",//同上
        "uid":"",//同上
        "token":"",//同上
        "User-Agent":"com.caike.ticket/2.7.0 (Linux; U; Android 10; zh-cn) (yyb; 20700)",
        }*/

]}