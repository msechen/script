/*
  OPPO<积分>任务

  已知问题：
  Q：欢太商城签到有验证码签到不成功
  A：遇到验证码只能手动

  Q：游戏中心无法完成执行积分任务
  A：先手动完成新手任务，再跑脚本

  20220413 V1.0
  支持OPPO系APP的签到任务（已测试软件商店、钱包、游戏中心、欢太商城（OPPO商城），其他有签到任务的APP自行测试）
  支持游戏中心积分任务（需手动完成新手任务）
  20220415 V1.1
  修改游戏中心阅帖任务流程
  APP启动页弹窗处理
*/
Start();
console.info("开始任务");
let Task_Log = "重要日志汇总："

RunOPPOAPPSign("商店");
RunOPPOAPPSign("钱包");
RunOPPOAPPSign("游戏中心");
RunOPPOAPPSign("欢太商城");

console.clear();
console.log(Task_Log);
threads.shutDownAll();
engines.myEngine().forceStop()

function Start() {
    auto.waitFor();//获取无障碍服务权限
    home();
    sleep(5000);
    console.clear();
    console.show();//开启悬浮窗
    console.info("OPPO<积分>任务");
}

function RunOPPOAPPSign(APPName) {
    if(APPName == null){
        Task_Log = Task_Log + "\n" + "参数不能为空，退出当前任务"
        console.error("参数不能为空，退出当前任务");
        return;
    }
    Task_Log = Task_Log + "\n" + "==========" + "\n" + APPName + "\n" + "———————"
    console.info("打开" + APPName);
    var launchResult = app.launchApp(APPName);
    sleep(500);
    if(!launchResult){
        Task_Log = Task_Log + "\n" + "没有安装<" + APPName + ">，退出当前任务"
        console.error("没有安装<" + APPName + ">，退出当前任务");
        return;
    }
    //判断是否存在升级弹窗
    threads.start(function () {
        var beginBtn1;
        if (beginBtn1 = className("android.widget.TextView").text("取消")) {
            sleep(1000);
            beginBtn1.click();
        }
    });
    sleep(4500);
    //关闭进入app时的弹窗
    if(id("dialog_delete").exists()){
        id("dialog_delete").findOne().click();
    }
    else if(desc("关闭").exists()){
        desc("关闭").findOne().click();
    }
    sleep(500);
    console.log("寻找我的主页");
    //切换我的界面
    if(className("android.widget.TextView").text("我的").exists() && (text("签到").exists() |text("已签").exists())){
        sleep(500);
        console.log("我的");
    }
    else{
        sleep(500);
        for(var i = 0; !className("android.widget.TextView").text("首页").exists(); i++){
            console.info("返回首页");
            back();
            sleep(1000);
            if(i > 5){
                Task_Log = Task_Log + "\n" + "未识别到首页，准备退出任务"
                console.error("未识别到首页，准备退出任务");
                return;
            }
        }
        if(className("android.widget.TextView").text("首页").exists()){
            console.info("首页");
            sleep(500);
            if(APPName != "欢太商城"){
                className("android.widget.TextView").text("首页").findOne().parent().parent().parent().click();
            }
            else{
                className("android.widget.TextView").text("首页").findOne().parent().parent().click();
            }
            sleep(1000);
            console.info("我的");
        }
    }
    sleep(500);
    if(APPName != "欢太商城"){
        className("android.widget.TextView").text("我的").findOne().parent().parent().parent().click();
    }
    else{
        className("android.widget.TextView").text("我的").findOne().parent().parent().click();
    }
    if(text("已签").findOne(3000) != null){
        Task_Log = Task_Log + "\n" + "今日已签到"
        console.log("今日已签到");
    }
    else{
        console.log("打开签到页面");
        if(className("android.widget.Button").text("签到").exists()){
            className("android.widget.Button").text("签到").findOne().click();
        }
        else if(text("签到").exists()){
            text("签到").findOne().parent().click();
        }
        sleep(2000);
        if(text("每日签到").findOne(3000) != null){
            if(text("签到").exists()){
                text("签到").findOne().click();
                Task_Log = Task_Log + "\n" + "今日签到完成"
                console.log("今日签到完成");
            }
            else{
                Task_Log = Task_Log + "\n" + "未识别到签到按钮，准备退出任务"
                console.error("未识别到签到按钮，准备退出任务");
                if(APPName != "游戏中心"){
                    return;
                }
            }
        }
        else if(className("android.widget.Button").text("立即签到").findOne(3000) != null){
            className("android.widget.Button").text("立即签到").findOne().click();
            Task_Log = Task_Log + "\n" + "今日签到完成"
            console.log("今日签到完成");
        }
        else{
            Task_Log = Task_Log + "\n" + "未识别到签到按钮，准备退出任务"
            console.error("未识别到签到按钮，准备退出任务");
            if(APPName != "游戏中心"){
                return;
            }
        }
    }
    if(APPName == "游戏中心"){
        for(var i = 0; text("积分任务").findOne(3000) == null; i++){
            back();
            sleep(1000);
            if(i > 3){
                Task_Log = Task_Log + "\n" + "未识别到积分任务，准备退出任务"
                console.error("未识别到积分任务，准备退出任务");
                return;
            }
        }
        if(text("积分任务").findOne(3000) != null){
            console.log("积分任务");
            text("积分任务").findOne().parent().click();
            sleep(2000);
            if(text("去完成").exists()){
                if(text("去完成").findOne().parent().child(1).child(0).text() == "每日点赞奖励"){
                    console.log("每日点赞任务");
                    text("每日点赞奖励").findOne().parent().parent().child(2).click();
                }
                else if(text("去完成").findOne().parent().child(1).child(0).text() == "每日阅帖奖励"){
                    console.log("每日阅贴任务");
                    text("每日阅帖奖励").findOne().parent().parent().child(2).click();
                }
                sleep(2000);
                let t = 0  //阅帖任务
                t0 = 0 //点赞任务
                i = 1  //循环次数
                LastTimeQty = 0
                while(true){
                    //点赞任务只要一次
                    if(desc("点赞").exists() && t0 == 0){
                        console.log("点赞");
                        desc("点赞").findOne().click();
                        sleep(1000);
                        t0++;
                    }
                    i++;
                    let taskButtons = descEndsWith("次浏览").find()
                    if (LastTimeQty == taskButtons.length) {
                        console.log("未找到合适的帖子，向下滑动");
                        swipe((device.width/3)*2, (device.height/6)*3, (device.width/3)*2, (device.height/6), 500);  //向下滑动
                        sleep(1000);
                    }
                    else{
                        let taskButton
                        for (let ii = 0; ii < taskButtons.length; ii++) {
                            taskButton = taskButtons[ii]
                            if (!taskButton) {
                                console.log("未找到合适的帖子，继续向下");
                                swipe((device.width/3)*2, (device.height/6)*3, (device.width/3)*2, (device.height/6), 500);  //向下滑动
                                break;
                            }
                            if(taskButton.parent()){
                                if(taskButton.parent().clickable() == true){
                                    console.log("浏览");
                                    taskButton.parent().click();
                                    sleep(2500);
                                    if(!text("帖子详情").exists()){
                                        console.log("非任务页面");
                                    }
                                    else{
                                        t = t + 1
                                        console.log("成功浏览第" + t + "个帖子");
                                    }
                                    back();
                                    sleep(1000);
                                }
                            }
                        }
                    }
                    sleep(2000);
                    LastTimeQty = taskButtons.length
                    if(i > 20){
                        Task_Log = Task_Log + "\n" + "查找次数过多，退出任务"
                        console.error("查找次数过多，退出任务");
                        return;
                    }
                    if(t < 3){
                        //连续滑动，避免重复进同一个帖子
                        swipe((device.width/3)*2, (device.height/6)*3, (device.width/3)*2, (device.height/6), 500);  //向下滑动
                        sleep(500);
                        swipe((device.width/3)*2, (device.height/6)*3, (device.width/3)*2, (device.height/6), 500);  //向下滑动
                    }
                    else{
                        //任务完成，退出
                        break;
                    }
                }
                sleep(1000);
                sleep(1000);
                for (var i = 0; !className("android.widget.TextView").text("我的").exists(); i++) {
                    back();
                    sleep(2000);
                    if(i > 3){
                        Task_Log = Task_Log + "\n" + "无法返回<我的>界面，退出任务"
                        console.error("无法返回<我的>界面，退出任务");
                        return;
                    }
                }
                console.log("我的");
                className("android.widget.TextView").text("我的").findOne().parent().parent().parent().click();
                sleep(1000);
                console.log("积分任务");
                text("积分任务").findOne().parent().click();
                sleep(2000);
            }
            if(text("领奖").exists()){
                while(text("领奖").exists()){
                    console.log("领奖");
                    text("领奖").findOne().click();
                    sleep(1000);
                    text("取消").findOne().click();
                    sleep(1000);
                }
                Task_Log = Task_Log + "\n" + "今日积分任务完成"
                console.log("今日积分任务完成");
            }
            else{
                Task_Log = Task_Log + "\n" + "今日积分任务完成"
                console.log("今日积分任务完成");
            }
        }
    }
    sleep(1000);
    back();
    sleep(1000);
    home();
    sleep(500);
}

