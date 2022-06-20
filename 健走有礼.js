/*
健走有礼
扫码注册：https://raw.githubusercontent.com/leafTheFish/DeathNote/main/jzyl_invite.png

存步数换现金提现的微信小程序，10W金币=1元
一天一两次即可，理论上跑一次就能完成任务

青龙：
捉bwa.feierlaiedu.com的任意包，把header里的token值填到jzylCookie里，多账号换行或者@隔开

重写：
先注册，再打开重写重新进入小程序即可获取
注意捉完CK后记得关闭重写，否则可能会捉到重复的账号
[task_local]
#健走有礼
47 8,20 * * * https://raw.githubusercontent.com/leafTheFish/DeathNote/main/jzyl.js, tag=健走有礼, enabled=true
[rewrite_local]
https://bwa.feierlaiedu.com/api/v1/bbg/taskRecord/queryUserInfo url script-request-header https://raw.githubusercontent.com/leafTheFish/DeathNote/main/jzyl.js
[MITM]
hostname = bwa.feierlaiedu.com

const $ = new Env("健走有礼")
*/
const $ = new Env("健走有礼");

//var CryptoJS = require("crypto-js");
//var fs = require("fs");
//fs.unlinkSync(__filename);

let envSplitor = ['\n','@']
let httpResult, httpReq, httpResp

let userCookie = ($.isNode() ? process.env.jzylCookie : $.getdata('jzylCookie')) || '';
let userList = []

let userIdx = 0
let userCount = 0

let extraTask = [
    //{taskType:0,name:"领取昨日步数"},
    {taskType:1,name:"添加小程序"},
    //{taskType:2,name:"完成微信授权"},
    //{taskType:3,name:"完成登录(绑定手机)"},
    
    //今天奖励：3次
    {taskType:10,name:"领取今日奖励"},
    {taskType:10,name:"领取今日奖励"},
    {taskType:10,name:"领取今日奖励"},
    
    //分享：3次
    {taskType:14,name:"分享视频"},
    {taskType:14,name:"分享视频"},
    {taskType:14,name:"分享视频"},
]
let extraStepTask = [
    //{taskType:4,name:"步数任务4"},
    //{taskType:5,name:"步数任务5"},
    {taskType:6,name:"邀请好友"},
    //{taskType:13,name:"步数任务13"},
]

let salt = 'nx351xq5cmy6lclm3gg0zoowhfd9uf5eo6is'
let UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001435) NetType/WIFI Language/zh_CN'
let miniAppVer = 'v2.4.5'
let fromType = '402'
///////////////////////////////////////////////////////////////////
class UserInfo {
    constructor(str) {
        this.index = ++userIdx
        this.name = this.index
        this.valid = false
        
        this.token = str
        this.hasFinishVideo = false
    }
    
    async getUserName() {
        try {
            let url = `https://bwa.feierlaiedu.com/api/v1/bbg/customer/get`
            let body = ``
            let urlObject = populateUrlObject(url,this.token,body)
            urlObject = genSign(urlObject)
            await httpRequest('post',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.code==0) {
                this.name = result.data.wechatName
                this.phone = result.data.phone
                this.valid = true
                console.log(`登录成功`)
                console.log(`昵称：${this.name}`)
            } else {
                console.log(`登录失败: ${result.message}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async queryUserInfo(isNotify=false) {
        try {
            let url = `https://bwa.feierlaiedu.com/api/v1/bbg/taskRecord/queryUserInfo`
            let body = ``
            let urlObject = populateUrlObject(url,this.token,body)
            urlObject = genSign(urlObject)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
            if(result.code==0) {
                this.step = result.data.myStep
                if(isNotify) {
                    $.logAndNotify(`--------------- 账号[${this.index}] ---------------`)
                    $.logAndNotify(`昵称：${this.name}`)
                    $.logAndNotify(`步数：${this.step}`)
                } else {
                    console.log(`步数：${this.step}`)
                    if(!result.data.hasPhoneAuth) {
                        let task = {taskType:3,name:"完成登录(绑定手机)"}
                        await this.triggerTask(task)
                    }
                    if(result.data.yesterdayStatus==1) {
                        await this.getRewardKey()
                    }
                    /*
                    for(let item of result.data.unTriggerTaskList) {
                        if(item.status==0 || item.status) {
                            let task = {taskType:item.taskType, name:item.taskTypeName}
                            await this.triggerTask(task)
                        }
                    }
                    */
                }
            } else {
                console.log(`查询步数失败: ${result.message}`)
            }
        } catch(e) {
            console.log(e)
        } finally {}
    }
    
    async queryNowVideoInfo() {
        try {
            let url = `https://bwa.feierlaiedu.com/api/v1/bbg/videoInfo/queryNowVideoInfo`
            let body = ``
            let urlObject = populateUrlObject(url,this.token,body)
            urlObject = genSign(urlObject)
            await httpRequest('get',urlObject)
            let result = httpResult;
            if(!result) return
            //console.log(result)
           
