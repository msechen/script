/*
  京东<集魔方>任务

  已知问题：
  Q：活动界面识别错、脚本执行中断、脚本卡在某个界面无法继续等情况
  A：上述情况，在页面加载缓慢的情况下，可能出现，更换良好的网络环境再执行脚本

  Q：魔方碎片攒够时，会自动结束任务
  A：任务等待间隔不稳定，待修复

  20220405 V1.7
  修复不入会时无限循环问题
  探索新品并浏览任务间隔增加等待时间
 */
Start();
console.info("开始任务");
let Task_Log = "重要日志汇总："
Task_Log = Task_Log + "\n" + "========== " + "\n" + "京东集魔方" + "\n" + "———————"

/*
Run参数说明：
参数1：启动的APP名称，如需手动，则填手动
参数2：对应参数1的APP名称，是否是分身应用，0：正常应用，1：分身有术Pro内部分身，暂不支持其他分身应用（如是小X分身（原多开分身），可在参数1中直接填入分身应用APP名称即可）
参数3：是否入会，0：不执行入会任务 1：执行入会任务，遇到新入会店铺则退出任务 3:执行入会任务，遇到需入会店铺，等待手动入会
参数4：是否参与兑换京豆（目前仅支持3/10京豆一种兑换，消耗1魔方），0：不兑换 1：兑换
 */

//京东例子
//Run("京东",0,3,1);//home();
//Run("京东",1,3,1);//home();
//Run("京东-2",1,3,1);//home();
//手动例子
Run("手动",0,3,1);//home();
//分身有术缓存清理
//CleanCache("分身有术Pro",1);

console.log("已退出脚本");
console.clear();
console.log(Task_Log);
engines.myEngine().forceStop()

function Start() {
    auto.waitFor();//获取无障碍服务权限
    console.show();//开启悬浮窗
    console.info("京东<集魔方>任务");
}

function Run(LauchAPPName,IsSeparation,IsJoinMember,IsExchange){
    if(IsSeparation == null){
        IsSeparation = 0 //0：正常应用 1：分身有术内部应用
    }
    if(IsJoinMember == null){
        IsJoinMember = 0 //0：不执行入会任务 1：执行入会任务，遇到新入会店铺则退出脚本 3:执行入会任务，遇到需入会店铺，等待手动入会
    }
    if(IsExchange == null){
        IsExchange = 0 //0：不兑换 1：兑换
    }
    var IsSeparation_info = ""
    var IsJoinMember_info = ""
    var IsExchange_info = ""
    if(IsSeparation == 0){
        IsSeparation_info = "正常应用"
    } else if(IsSeparation == 1){
        IsSeparation_info = "分身有术Pro"
    } else{
        IsSeparation_info = "无效参数，改为默认值“非分身应用”"
        IsSeparation = 0
    }
    if(IsJoinMember == 0){
        IsJoinMember_info = "不执行入会"
    } else if(IsJoinMember == 1){
        IsJoinMember_info = "有新入会店铺则退出脚本"
    } else if(IsJoinMember == 3){
        IsJoinMember_info = "有新入会店铺，等待手动入会"
    } else{
        IsJoinMember_info = "无效参数，改为默认值“不执行入会”"
        IsJoinMember = 0
    }
    if(IsExchange == 0){
        IsExchange_info = "不兑换"
    } else if(IsExchange == 1){
        IsExchange_info = "兑换"
    } else{
        IsExchange_info = "无效参数，改为默认值“不兑换”"
        IsExchange = 0
    }
    Task_Log = Task_Log + "\n" + LauchAPPName + "-" + IsSeparation_info
    console.info(
        "当前设置"+"\n"+
        "启动APP："+LauchAPPName+"\n"+
        "是否分身："+IsSeparation_info+"\n"+
        "是否入会："+IsJoinMember_info+"\n"+
        "是否兑换京豆："+IsExchange_info
    )
    console.log("复制活动京口令");
    Code=new Array("￥Z31iI8QQkF%");//通过分享链接进入活动界面
    setClip(Code);
    if(LauchAPPName == "手动"){
        console.log("请手动打开APP，以便进行下一步");
        while(text("领京豆").findOnce() == null){
            if(text("立即查看").exists() |text("集魔方 赢大奖").exists() |
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
            if(text("立即查看").exists() | text("集魔方 赢大奖").exists()){
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
    for(var i = 0; !text("集魔方 赢大奖").exists(); i++){
        sleep(1000);
        if(text("集魔方 赢大奖").exists()){
            break;
        }
        sleep(1000);
        if(i == 1){
            console.log("等待识别<集魔方>活动界面");
        }
        if(i > 30){
            Task_Log = Task_Log + "\n" +"识别超时，退出当前任务"
            console.error("识别超时，退出当前任务");
            return;
        }
    }
    if(text("集魔方 赢大奖").exists()) {
        console.info("进入活动界面");
        sleep(2000);
        if(text("开心收下").findOne(2000) != null){
            console.info("发现签到弹窗");
            text("开心收下").findOne().click();
            sleep(1000);
            console.log("开心收下");
        }
        //任务列表检测
        TaskListCheck();
        sleep(2000);
        var Status = 0
        while(text("去完成").exists()){
            if(text("每日签到").exists() && text("每日签到").findOne().parent().parent().child(2).text() == "去完成"){
                console.info("开始<每日签到>任务");
                text("每日签到").findOne().parent().parent().child(2).click();
                sleep(1500);
                if(text("开心收下").exists()){
                    console.info("发现签到弹窗");
                    text("开心收下").findOne().click();
                    sleep(500);
                    console.log("开心收下");
                }
                console.log("任务完成");
                MoFangFragmentCheck();
                TaskListCheck();
            }else if(text("逛逛会场并浏览6s").exists() && text("逛逛会场并浏览6s").findOne().parent().parent().child(2).text() == "去完成"){
                console.info("开始<逛逛会场>任务");
                var CompleteTimes = text("逛逛会场并浏览6s").findOne().parent().parent().child(4).text()//已完成次数
                SumTimes = text("逛逛会场并浏览6s").findOnce().parent().parent().child(6).text()//总次数
                console.log("任务进度："+ CompleteTimes +"/"+SumTimes);
                for(var i = 1; i <= (SumTimes - CompleteTimes); i++){
                    console.log("第" + i + "次浏览");
                    text("逛逛会场并浏览6s").findOne().parent().parent().child(2).click();
                    for(var ii = 0; !text("任务完成").exists() && ii < 10; ii++){
                        if(ii == 1){
                            console.log("等待<任务完成>标志");
                        }
                        sleep(1000);
                    }
                    console.log("返回");
                    back();
                    MoFangFragmentCheck();
                }
                console.log("任务完成");
            }else if(textStartsWith("日日追").exists() && textStartsWith("日日追").findOne().parent().parent().child(2).text() == "去完成"){
                console.info("开始<日日追新>任务");
                var CompleteTimes = textStartsWith("日日追").findOne().parent().parent().child(4).text()//已完成次数
                SumTimes = textStartsWith("日日追").findOnce().parent().parent().child(6).text()//总次数
                console.log("任务进度："+ CompleteTimes +"/"+SumTimes);
                for(var i = 1; i <= (SumTimes - CompleteTimes); i++){
                    console.log("第" + i + "次浏览");
                    textStartsWith("日日追").findOne().parent().parent().child(2).click();
                    for(var ii = 0; !text("任务完成").exists() && ii < 10; ii++){
                        if(ii == 1){
                            console.log("等待<任务完成>标志");
                        }
                        sleep(1000);
                    }
                    console.log("返回");
                    back();
                    MoFangFragmentCheck();
                }
                console.log("任务完成");
            }else if(text("浏览店铺并停留6s").exists() && text("浏览店铺并停留6s").findOne().parent().parent().child(2).text() == "去完成"){
                console.info("开始<浏览店铺>任务");
                var CompleteTimes = text("浏览店铺并停留6s").findOne().parent().parent().child(4).text()//已完成次数
                SumTimes = text("浏览店铺并停留6s").findOnce().parent().parent().child(6).text()//总次数
                console.log("任务进度："+ CompleteTimes +"/"+SumTimes);
                for(var i = 1; i <= (SumTimes - CompleteTimes); i++){
                    console.log("第" + i + "次浏览");
                    text("浏览店铺并停留6s").findOne().parent().parent().child(2).click();
                    for(var ii = 0; !text("任务完成").exists() && ii < 10; ii++){
                        if(ii == 1){
                            console.log("等待<任务完成>标志");
                        }
                        sleep(1000);
                    }
                    console.log("返回");
                    back();
                    MoFangFragmentCheck();
                }
                console.log("任务完成");
            }else if(text("探索新品并浏览").exists() && text("探索新品并浏览").findOne().parent().parent().child(2).text() == "去完成"){
                console.info("开始<探索新品并浏览>任务");
                var CompleteTimes = text("探索新品并浏览").findOne().parent().parent().child(4).text()//已完成次数
                SumTimes = text("探索新品并浏览").findOnce().parent().parent().child(6).text()//总次数
                console.log("任务进度："+ CompleteTimes +"/"+SumTimes);
                for(var i = 1; i <= (SumTimes - CompleteTimes); i++){
                    console.log("第" + i + "次浏览");
                    text("探索新品并浏览").findOne().parent().parent().child(2).click();
                    sleep(1500);
                    console.log("返回");
                    back();
                    sleep(500);
                    MoFangFragmentCheck();
                }
                console.log("任务完成");
            }else if(text("加购并浏览商品").exists() && text("加购并浏览商品").findOne().parent().parent().child(2).text() == "去完成"){
                console.info("开始<加购商品>任务");
                var CompleteTimes = text("加购并浏览商品").findOne().parent().parent().child(4).text()//已完成次数
                SumTimes = text("加购并浏览商品").findOnce().parent().parent().child(6).text()//总次数
                console.log("任务进度："+ CompleteTimes +"/"+SumTimes);
                text("加购并浏览商品").findOne().parent().parent().child(2).click();
                sleep(2000);
                for(var i = 1; i <= (SumTimes - CompleteTimes) && text("选择ta并加购").exists(); i++){
                    console.log("第" + i+ "次加购");
                    text("选择ta并加购").findOne().click();
                    sleep(1500);
                    console.log("返回");
                    back();
                    sleep(1500);
                }
                console.log("任务完成");
            }else if(text("去新品频道逛逛").exists() && text("去新品频道逛逛").findOne().parent().parent().child(2).text() == "去完成"){
                console.info("开始<去新品频道逛逛>任务");
                text("去新品频道逛逛").findOne().parent().parent().child(2).click();
                sleep(2000);
                //连续滑动
                for(var i = 1; i <= 30; i++){
                    console.log("第" + i + "次滑动");
                    swipe((device.width/3)*2, (device.height/6)*3, (device.width/3)*2, (device.height/6), 500);  //向下滑动(从纵坐标6分之5处拖到纵坐标6分之1处)
                    sleep(1000);
                    if(text("恭喜完成").exists()){
                        break;
                    }
                }
                for(var ii = 0; !text("恭喜完成").exists() && ii < 10; ii++){
                    if(ii == 1){
                        console.log("等待<恭喜完成>标志");
                    }
                    sleep(1000);
                }
                if(text("恭喜完成").exists()){
                    console.log("恭喜完成");
                    sleep(1000);
                }else{
                    console.log("任务超时");
                }
                console.log("返回");
                back();
                console.log("任务完成");
            }else if(text("成为店铺会员").exists() && text("成为店铺会员").findOne().parent().parent().child(2).text() == "去完成" && Status == 0){
                if(IsJoinMember == 0){
                    console.info("当前设置不做入会任务，跳过");
                    Status = 1
                }
                else{
                    console.info("开始<加入会员>任务");
                    var CompleteTimes = text("成为店铺会员").findOne().parent().parent().child(4).text()//已完成次数
                    SumTimes = text("成为店铺会员").findOne().parent().parent().child(6).text()//总次数
                    console.log("任务进度："+ CompleteTimes +"/"+SumTimes);
                    for(var i = 1; i <= (SumTimes - CompleteTimes); i++){
                        text("成为店铺会员").findOne().parent().parent().child(2).click();
                        sleep(2000);
                        if(textContains("确认授权并加入店铺会员").exists()){
                            if(IsJoinMember == 1){
                                console.log("涉及个人隐私，请手动加入店铺会员或者忽略加入会员任务");
                                Status = 1
                                break;
                            }
                            else if(IsJoinMember == 3){
                                console.log("当前店铺未入会，等待手动");
                                Status = 1
                                sleep(8000);
                                console.log("超时自动返回");
                            }
                        }
                        else{
                            console.info("已是当前店铺会员");
                            console.log("任务完成");
                        }
                    }
                }
            }else{
                console.log("所有任务已完成");
                break;
            }
            //魔方碎片检测
            for(var i = 0; text("做任务得魔方碎片").findOne(1500) == null; i++){
                if(i == 0){
                    console.log("准备返回任务界面");
                }
                else{
                    console.log("再次返回");
                }
                back();
                sleep(1000);
                TaskListCheck();
                if(i == 5){
                    Task_Log = Task_Log + "\n" +"无法返回任务界面，退出当前任务"
                    console.log("无法返回任务界面，退出当前任务");
                    return;
                }
            }
            MoFangFragmentCheck();
        }
        if(IsExchange == 1){
            if(text("做任务得魔方碎片").exists()){
                console.log("关闭任务列表，准备兑换");
                text("做任务得魔方碎片").findOne().parent().child(1).click();
                sleep(1000);
            }
            console.log("进入礼品仓库");
            if(textStartsWith("魔方碎片进度").exists()){
                if(textStartsWith("魔方碎片进度").findOne().parent().child(6).clickable() == true){
                    textStartsWith("魔方碎片进度").findOne().parent().child(6).click();
                }
                else{
                    textStartsWith("魔方碎片进度").findOne().parent().child(5).click();
                }
                sleep(1000);
                if(text("3/10京豆").findOne(3000) != null){
                    sleep(1500);
                    text("3/10京豆").findOne().parent().parent().child(2).child(0).click();
                    if(text("兑换将消耗1魔方哦").findOne(3000) != null){
                        console.log("确定");
                        text("确认").findOne().click()
                        sleep(1000);
                        if(text("查看我的兑换 >").findOne(3000) != null){
                            var LotteryResults = text("查看我的兑换 >").findOne().parent().parent().child(0).text()
                            if(LotteryResults == "很遗憾没有抽中"){
                                LotteryResults = "未中奖"
                            }
                            else if(LotteryResults == "兑换成功,获得"){
                                LotteryResults = "兑换成功，获得" + text("兑换成功,获得").findOne().parent().child(1).child(1).text()
                            }
                            Task_Log = Task_Log + "\n" + "兑换结果：" + LotteryResults
                            console.log("兑换结果：" + LotteryResults);
                            sleep(1000);
                            text("查看我的兑换 >").findOne().parent().child(0).click();
                            sleep(500);
                        }
                    }
                    else{
                        Task_Log = Task_Log + "\n" + "魔方不足，未成功兑换"
                        console.log("魔方不足，未成功兑换");
                    }
                }
                back();
                sleep(1000);
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
        if(text("做任务得魔方碎片").exists()){
            console.info("任务列表已打开")
        }
        else if(text("集魔方 赢大奖").exists() && !text("做任务得魔方碎片").exists()){
            console.log("检测任务列表");
            if(text("浏览会场").exists()){
                text("浏览会场").findOne().parent().parent().parent().child(1).click();
            }else if(text("加购商品").exists()){
                text("加购商品").findOne().parent().parent().parent().child(1).click();
            }else if(text("浏览商品").exists()){
                text("浏览商品").findOne().parent().parent().parent().child(1).click();
            }else if(text("加入会员").exists()){
                text("加入会员").findOne().parent().parent().parent().child(1).click();
            }else if(text("逛逛频道").exists()){
                text("逛逛频道").findOne().parent().parent().parent().child(1).click();
            }
            console.info("已打开任务列表")
        }
        else{
            console.info("当前界面未发现任务列表")
        }
    }
    function MoFangFragmentCheck(){
        if(textStartsWith("魔方碎片进度").exists()){
            let KeyText = textStartsWith("魔方碎片进度").findOne().text()
            var MoFangFragment = KeyText.substring(6,7)
            if((MoFangFragment <= 3  && text("收下魔方").findOne(2500) != null) |text("收下魔方").exists()){
                text("收下魔方").findOne().click();
                console.log("收下魔方");
                sleep(1000);
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