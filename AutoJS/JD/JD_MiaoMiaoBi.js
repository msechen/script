/*
  京东<秒秒币>任务

  已知问题：
  Q：活动界面识别错、脚本执行中断、脚本卡在某个界面无法继续等情况
  A：上述情况，在页面加载缓慢的情况下，可能出现，更换良好的网络环境再执行脚本

  20220320 V1.4
  缩短任务间隙等待时间
 */
Start();
console.info("开始任务");
let Task_Log = "重要日志汇总："
Task_Log = Task_Log + "\n" + "========== " + "\n" + "京东秒秒币" + "\n" + "———————"

/*
Run参数说明：
参数1：启动的APP名称，如需手动，则填手动
参数2：对应参数1的APP名称，是否是分身应用，0：正常应用，1：分身有术Pro内部分身，暂不支持其他分身应用（如是小X分身（原多开分身），可在参数1中直接填入分身应用APP名称即可）、
 */

//京东例子
//Run("京东",0);home();
//Run("京东",1);home();
//Run("京东-2",1);home();
//手动例子
Run("手动",0);home();
//分身有术缓存清理
//CleanCache("分身有术Pro",1);

console.log("已退出脚本");
console.clear();
console.log(Task_Log);
engines.myEngine().forceStop()

function Start() {
    auto.waitFor();//获取无障碍服务权限
    console.show();//开启悬浮窗
    console.info("京东<秒秒币>任务");
}

function Run(LauchAPPName,IsSeparation){
    if(IsSeparation == null){
        IsSeparation = 0 //0：正常应用 1：分身有术内部应用
    }
    var IsSeparation_info = ""
    if(IsSeparation == 0){
        IsSeparation_info = "正常应用"
    } else if(IsSeparation == 1){
        IsSeparation_info = "分身有术Pro"
    } else{
        IsSeparation_info = "无效参数，改为默认值“非分身应用”"
        IsSeparation = 0
    }
    Task_Log = Task_Log + "\n" + LauchAPPName + "-" + IsSeparation_info
    console.info(
        "当前设置"+"\n"+
        "启动APP："+LauchAPPName+"\n"+
        "是否分身："+IsSeparation_info
    )
    console.log("复制活动京口令");
    Code=new Array("(I22boFYMgX)");//通过分享链接进入活动界面
    setClip(Code);
    if(LauchAPPName == "手动"){
        console.log("请手动打开APP，以便进行下一步");
        while(text("领京豆").findOnce() == null){
            if(text("立即查看").exists() |text("天天领红包").exists() |
                app.getAppName(currentPackage()) == "京东" |currentActivity() == "com.jingdong.app.mall.WebActivity"){
                break;
            }
            console.log("当前应用名:  " + app.getAppName(currentPackage()) + "\n"
                +"当前活动:  " + currentActivity() + "\n"
                +"未识别到京东相关界面，继续等待……");
            sleep(3000);
        }
        console.log("已检测到京东APP，等待下一步");
    }
    else{
        if(IsSeparation == 1){
            console.info("打开分身有术Pro，准备调用分身");
            app.launchApp("分身有术Pro");
            for(var t = 0;!id("tv_app_name").className("android.widget.TextView").text(LauchAPPName).exists(); t++){
                console.log("等待识别分身……");
                console.log("当前应用名:  " + app.getAppName(currentPackage()) + "\n"
                    +"未识别到<" + LauchAPPName + ">，继续等待……");
                sleep(3000);
                if(id("im_close_clear").exists()){
                    console.log("发现加速弹窗");
                    id("im_close_clear").findOne().click();
                    console.log("关闭加速弹窗");
                }
                if(t > 10){
                    Task_Log = Task_Log + "\n" +"识别超时，退出当前任务"
                    console.log("识别超时，退出当前任务");
                    return;
                }
            }
            if(id("tv_app_name").className("android.widget.TextView").text(LauchAPPName).exists()){
                console.log("找到分身<" + LauchAPPName + ">");
                text(LauchAPPName).findOne().parent().click();
                console.log("分身已启动，等待活动检测……");
            }
        }
        else{
            console.info("打开" + LauchAPPName + "");
            app.launchApp(LauchAPPName);
            console.log("等待任务检测……");
        }
    }
    //活动界面判断
    if(text("立即查看").findOnce() == null){
        console.log("等待APP识别京口令");
        for(var i = 1; text("立即查看").findOnce() == null; i++){
            sleep(1000);
            if(text("立即查看").exists() | text("天天领红包").exists()){
                break;
            }
            console.log(i);
            if(i == 10){
                console.error("超时未检测到京口令，跳过京口令");
                console.info("请手动进入活动");
                sleep(1000);
                break;
            }
        }
    }
    if(text("立即查看").exists()){
        console.log("立即查看");
        text("立即查看").findOnce().click();
        sleep(1000);
        console.log("等待跳转活动界面");
    }
    for(var i = 0; !text("天天领红包").exists(); i++){
        sleep(1000);
        if(text("天天领红包").exists()){
            break;
        }
        sleep(1000);
        console.log("等待识别<秒秒币>活动界面");
        if(i > 30){
            Task_Log = Task_Log + "\n" +"识别超时，退出当前任务"
            console.error("识别超时，退出当前任务");
            return;
        }
    }
    if(text("天天领红包").exists()) {
        console.info("进入活动界面");
        //签到判断
        if(textContains("，可瓜分百万秒秒币").findOne(5000) != null){
            let Button = textContains("，可瓜分百万秒秒币").findOne().parent()
            let ButtonText = ""
            for(var i = 0; i < 7; i++){
                ButtonText = Button.child(i).child(1).text()
                if(ButtonText == "已领"){
                    console.log("第"+(i+1)+"天已签到");
                    continue;
                }else if(ButtonText == "第"+(i+1)+"天"){
                    Task_Log = Task_Log + "\n" + "今日已完成签到"
                    console.log("今日已完成签到");
                    sleep(1000);
                    break;
                }else{
                    Button.child(i).child(1).click();
                    sleep(1000);
                    Task_Log = Task_Log + "\n" + "今日签到完成"
                    console.log("今日签到完成");
                    if(textContains("恭喜获得").findOne(3000) != null){
                        console.log("签到奖励已获取");
                        textContains("恭喜获得").findOne().parent().parent().child(1).click();
                        sleep(1500);
                    }
                    break;
                }
            }
        }
        sleep(1000);
        //任务列表检测
        TaskListCheck();
        while(text("去完成").exists()){
            text("去完成").findOne().click();
            sleep(1500);
            if(text("分享到").exists()){
                console.log("开始分享任务");
                text("微信好友").findOne().parent().click();
                for(var i = 0; !text("去微信粘贴给好友").exists(); i++){
                    if(i == 1){
                        console.log("等待去微信粘贴");
                    }
                    sleep(1000);
                    if(i > 10){
                        Task_Log = Task_Log + "\n" +"任务超时，退出当前任务"
                        console.error("任务超时，退出当前任务");
                        return;
                    }
                }
                if(text("去微信粘贴给好友").exists()){
                    console.log("去微信粘贴给好友");
                    click(text("去微信粘贴给好友").findOne().bounds().centerX(),text("去微信粘贴给好友").findOne().bounds().centerY());
                    sleep(1000);
                }
                console.log("任务完成");
            }
            else if(text("浏览").exists()){
                console.log("开始时长浏览任务");
                for(var i = 0; !text("任务完成").exists(); i++){
                    if(i == 1){
                        console.log("等待任务完成");
                    }
                    sleep(1000);
                    if(text("0").exists() && i > 1){
                        console.log("任务未开始计时，返回");
                        break;
                    }
                    if(i > 20){
                        console.log("任务超时，准备返回");
                        break;
                    }
                }
                if(!text("秒秒币可兑换更多红包哦").exists()){
                    console.log("任务完成");
                    back();
                }
            }
            else{
                console.log("开始普通任务");
                sleep(1000);
                if(!text("秒秒币可兑换更多红包哦").exists()){
                    console.log("任务完成");
                    back();
                }
                else{
                    console.log("任务异常，准备返回");
                }
            }
            for(var i = 0; text("秒秒币可兑换更多红包哦").findOne(2000) == null; i++){
                console.log("准备返回任务界面");
                sleep(1000);
                TaskListCheck();
                if(!text("秒秒币可兑换更多红包哦").exists()){
                    back();
                }
                if(i == 5){
                    Task_Log = Task_Log + "\n" +"无法返回任务界面，退出当前任务"
                    console.log("无法返回任务界面，退出当前任务");
                    return;
                }
            }
            if(!text("去完成").exists()){
                console.log("所有任务已完成");
                break;
            }
        }
    }
    Task_Log = Task_Log + "\n" +"当前账号所有任务已完成"
    console.info("当前账号所有任务已完成");
    back();
    sleep(1000);
    back();
    sleep(1000);
    home();
    sleep(500);

    function TaskListCheck(){
        if(text("秒秒币可兑换更多红包哦").exists()){
            console.info("任务列表已打开")
        }
        else if(textContains("活动太火爆，逛逛商品吧").exists()){
            Task_Log = Task_Log + "\n" +"当前账号活动火爆，退出当前任务"
            console.error("当前账号活动火爆，退出当前任务");
            return;
        }
        else if(text("天天领红包").exists() && !text("秒秒币可兑换更多红包哦").exists()){
            console.log("检测任务列表");
            if(text("更多任务").exists()){
                text("更多任务").findOne().click();
                console.info("已打开任务列表");
                sleep(1000);
            }
            else{
                Task_Log = Task_Log + "\n" +"未找到任务列表，退出当前任务"
                console.error("未找到任务列表，退出当前任务");
                return;
            }
        }
    }
}

function CleanCache(LauchAPPName,Isclean) {
    if(LauchAPPName == "分身有术Pro" && Isclean == 1){
        console.info("打开分身有术Pro，准备清理缓存");
        app.launchApp("分身有术Pro");
        console.log("等待清理");
        for(var i = 0; !id("iv_home_clean").exists() && i < 15; i++){
            sleep(1000);
            if(i == 5 | i == 10 ){
                console.log("已等待" + i + "秒");
            }
            if(id("iv_home_clean").exists()){
                id("iv_home_clean").findOne().click();
                console.log("加速完毕");
                sleep(3000);
                break;
            }
        }
        if(i >= 15){
            console.error("识别超时，未能完成加速");
        }
        if(id("im_close_clear").exists()){
            sleep(2000);
            id("im_close_clear").findOne().click();
            console.log("关闭加速弹窗");
        }
    }
    else{
        console.error("参数不符，退出清理任务");
    }
}