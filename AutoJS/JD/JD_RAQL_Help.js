/*
  京东<热爱奇旅-签到助力>任务

  已知问题：
  Q：明明有任务，但是识别不出来就退出了
  A：目前发现分身的应用有这种问题，可重启应用和脚本重进，一般即可解决

  V2.4
  @LingFeng
  https://t.me/LingFeng0918
*/
let TaskName = "热爱奇旅-签到助力"
Start(TaskName);
console.info("开始任务");

/*
  账号明细.txt文件说明
  账号文件需和脚本在同一目录
  文件编码为utf-8
  每行一个账号，参数以逗号隔开（中英不限）
  每行第一个参数为任务名称，后续的参数参考对应Run参数说明填写
 */
/*
  参数说明：
  参数1：启动的APP名称，如需手动，则填手动
  参数2：对应参数1的APP名称，是否是分身应用，0：正常应用，1：分身有术Pro内部分身，暂不支持其他分身应用（如是多开分身，可在参数1中直接填入分身应用APP名称即可）
  参数3：助力邀请，0：跳过助力邀请 1：助力邀请  关于<邀请码>：搜索关键字"邀请码"，按规则填入即可互相助力
  参数4：是否做任务，0：不做任务 1：做任务
 */
if(files.exists("./账号明细.txt")){
    console.info("发现账号文件");
    var file = open("./账号明细.txt")
    let AccountIDs = file.readlines()
    let t = 0
    for(var i = 0; i < AccountIDs.length; i++){
        var str = AccountIDs[i];
        //处理格式
        var str = str.replace(/，/g,",")
        var str = str.replace(/"/g,"")
        var AccountID = str.split(",");
        if(AccountID[0] == TaskName){
            console.info("第" + ( i + 1 ) + "行账号符合当前任务，开始执行")
            Run(AccountID[1], AccountID[2], AccountID[3], AccountID[4]);home();
            console.info("第" + ( i + 1 ) + "行账号任务执行完毕")
            //每5个账号清除一次分身有术的缓存
            if(t > 5 && (t / 5) % 1 === 0){
                CleanCache("分身有术Pro",1);
            }
            t++;
        }else{
            console.info("第" + ( i + 1 ) + "行账号不属于当前任务，跳过")
        }
    }
    file.close();
}
else{
    //京东例子
    //Run("京东",0,0,1);home();
    //Run("京东",1,1,1);home();
    //Run("京东-2",1,0,1);home();
    //手动例子
    Run("手动",0,0,1);home();
    //分身有术缓存清理
    //CleanCache("分身有术Pro",1);
}
console.info("结束任务");

console.log("已退出脚本");
engines.myEngine().forceStop()

function Start(TaskName) {
    auto.waitFor();//获取无障碍服务权限
    console.show();//开启悬浮窗
    console.info("京东<" + TaskName + ">任务");
}

function Run(LauchAPPName,IsSeparation,IsInvite,ToDoTask) {
    var PageStatus = 0//页面状态，用于记录当前页面状态，避免点击错位置
    if(IsSeparation == null){
        IsSeparation = 0 //0：正常应用 1：分身有术内部应用
    }
    if(ToDoTask == null){
        ToDoTask = 0 //0：不做任务 1：做任务
    }
    var IsSeparation_info=""
    var IsInvite_info=""
    var ToDoTask_info=""
    if(IsSeparation == 0){
        IsSeparation_info = "正常应用"
    } else if(IsSeparation == 1){
        IsSeparation_info = "分身有术Pro"
    } else{
        IsSeparation_info = "无效参数，改为默认值“非分身应用”"
        IsSeparation = 0
    }
    if(IsInvite == 0){
        IsInvite_info = "跳过助力邀请"
    } else if(IsInvite == 1){
        IsInvite_info = "助力邀请"
    } else{
        IsInvite_info = "无效参数，改为默认值“跳过助力邀请”"
        IsInvite = 0
    }
    if(ToDoTask == 0){
        ToDoTask_info = "不做任务"
    } else if(ToDoTask == 1){
        ToDoTask_info = "做任务"
    } else{
        ToDoTask_info = "无效参数，改为默认值“不做任务”"
        IsSeparation = 0
    }
    console.info(
        "当前设置"+"\n"+
        "启动APP："+LauchAPPName+"\n"+
        "是否分身："+IsSeparation_info+"\n"+
        "是否助力："+IsInvite_info+"\n"+
        "是否做任务："+ToDoTask_info
    )
    sleep(2000);
    if(IsInvite == 1){
        //将京口令分段填入，只要里面的特征码即可，分不清什么是特征码的也可以整段放进来，注意用双引号和逗号隔开
        Code=new Array("(F1DHo7x4QA)");//邀请码第一个是助力作者，第二个纯属举例，使用时建议删除
        RunTime=Code.length;
        console.info("共识别到"+RunTime+"个助力码");
        for(var i = 0; i < RunTime; i++){
            console.log("第" + ( i + 1 ) + "个助力码");
            setClip(Code[i]);
            console.log("助力码写入剪切板");
            if(LauchAPPName == "手动"){
                console.log("请手动打开APP，以便进行下一步");
                while(text("领京豆").findOnce() == null){
                    if((text("消耗").exists() && text("金币").exists())| text("立即查看").exists()| textContains("等待抽宝箱大奖").exists()| text("累计任务奖励").exists()|
                        app.getAppName(currentPackage()) == "京东"|currentActivity() =="com.jingdong.app.mall.MainFrameActivity"){
                        break;
                    }
                    console.log("当前应用名:  " + app.getAppName(currentPackage())+ "\n"
                        +"当前活动:  " + currentActivity()+ "\n"
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
            if(text("立即查看").findOne(2000) == null){
                console.log("等待APP识别助力码");
                var j = 0;
                while(j < 15 | text("立即查看").findOnce() == null){
                    if(text("立即查看").exists()){
                        break;
                    }
                    console.log( j + 1 );
                    j++;
                    sleep(1000);
                    if(j == 10){
                        console.log("未检测到新助力码，尝试再次复制");
                        OutAPP(1000);
                        setClip(Code[i]);
                        console.log("助力码重新写入剪切板");
                        sleep(1000);
                        if(LauchAPPName == "手动"){
                            console.log("请手动打开APP，以便进行下一步");
                            while(text("领京豆").findOnce() == null){
                                if((text("消耗").exists() && text("金币").exists())| textContains("等待抽宝箱大奖").exists()| text("累计任务奖励").exists()|
                                    app.getAppName(currentPackage()) == "京东"|currentActivity() =="com.jingdong.app.mall.MainFrameActivity"){
                                    break;
                                }
                                console.log("当前应用名:  " + app.getAppName(currentPackage())+ "\n"
                                    +"当前活动:  " + currentActivity()+ "\n"
                                    +"未识别到京东相关界面，继续等待……");
                                sleep(3000);
                            }
                            console.log("检测到京东APP，等待再次检测");
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
                            }
                            console.log("重启APP成功，等待再次检测");
                            sleep(1000);
                        }
                    }
                    if(j > 15){
                        console.error("超时未检测到新助力码，跳过助力任务");
                        sleep(1000);
                        if(i < RunTime-1){
                            console.log("退出当前APP，准备第" + ( i + 2 ) + "个助力码");
                            OutAPP(2000);
                        }
                        break;
                    }
                }
                if(j > 15){
                    //超时则跳出当前助力任务
                    console.info("跳过当前助力");
                    continue;
                }
            }
            setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
            if (text("立即查看").exists()){
                console.log("立即查看");
                text("立即查看").findOnce().click();
                while(!textContains("的助力邀请").exists()){
                    sleep(2000);
                    console.log("等待加载……");
                    if(textContains("活动太火爆了").exists()){
                        console.error("当前账号火爆，退出任务");
                        return;
                    }
                }
                sleep(1000);
                click(720,1845);
                console.log("为TA助力");
                sleep(2000);
                console.log("助力完成");
                if(text("开心收下").exists()){
                    text("开心收下").findOne().parent().click();
                    sleep(1000);
                }
            }
            setScreenMetrics(device.width, device.height);//恢复本机分辨率
            //最后一次助力不返回首页，以便进行下一个任务
            if(i < RunTime - 1){
                home();sleep(1000);home();//多返回一次，避免未退出app界面
                console.log("准备第" + ( i + 2 ) + "个助力码");
            }
            else{
                console.log("当前账户已助力完成");
                if(ToDoTask == 0){
                    console.log("不做任务");
                    OutAPP();
                    return;
                }
            }
        }
    }
    if(IsInvite == 0){
        console.info("跳过活动助力");
        if(LauchAPPName == "手动"){
            console.log("请手动打开APP，以便进行下一步");
            while(text("领京豆").findOnce() == null){
                if((text("消耗").exists() && text("金币").exists())| textContains("等待抽宝箱大奖").exists()| text("累计任务奖励").exists()|
                    app.getAppName(currentPackage()) == "京东"|currentActivity() == "com.jingdong.app.mall.MainFrameActivity"){
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
                for(var i = 0;!text(LauchAPPName).exists(); i++){
                    console.log("等待识别分身……");
                    sleep(3000);
                    if(i>10){
                        console.log("识别超时，退出当前任务");
                        return;
                    }
                }
                if(text(LauchAPPName).exists()){
                    text(LauchAPPName).findOne().parent().click();
                    console.log("分身已启动，等待活动检测……");
                }
            }
            else{
                console.info("打开" + LauchAPPName + "");
                app.launchApp(LauchAPPName);
                console.log("等待活动检测……");
            }
        }
        if(!text("累计任务奖励").exists()){
            if(!text("消耗").exists() && !text("金币").exists()){
                //进入活动
                console.log("寻找活动入口……");
                if(LauchAPPName == "手动"){
                    for(;;){
                        if((text("消耗").exists() && text("金币").exists())){
                            break;
                        }
                        if(textContains("等待抽宝箱大奖").exists()){
                            break;
                        }
                        if(textContains("活动太火爆了").exists()){
                            console.error("当前账号火爆，退出任务");
                            return;
                        }
                        console.log("手动进入活动界面后，脚本将继续");
                        sleep(5000);
                    }
                }
                else {
                    if(!text("累计任务奖励").exists()){
                        if(!text("消耗").exists() && !text("金币").exists()){
                            for(var i = 0;!text("消耗").exists() && !text("金币").exists(); i++){
                                console.log("未识别到活动页面，尝试通过首页浮层进入");
                                if(text("首页").exists()){
                                    let into = descContains("浮层活动").findOne(20000);
                                    sleep(2000);
                                    if (into == null) {
                                        console.log("无法找到京东活动入口，退出当前任务");
                                        return;
                                    }
                                    click(into.bounds().centerX(), into.bounds().centerY());
                                    click(into.bounds().centerX(), into.bounds().centerY());
                                    sleep(3000);
                                }
                                if((text("消耗").exists() && text("金币").exists())| textContains("等待抽宝箱大奖").exists()){
                                    break;
                                }
                                if(textContains("活动太火爆了").exists()){
                                    console.error("当前账号火爆，退出任务");
                                    return;
                                }
                                if(i>10){
                                    console.log("识别超时，退出当前任务");
                                    return;
                                }
                                sleep(3000);
                            }
                            if((text("消耗").exists() && text("金币").exists())| textContains("等待抽宝箱大奖").exists()){
                                console.log("已检测到活动页面");
                                PageStatus=1//进入活动页面，未打开任务列表
                            }
                        }
                        else{
                            console.log("检测到活动页面");
                            PageStatus=1//进入活动页面，未打开任务列表
                        }
                    }
                    else{
                        console.log("检测到任务列表");
                        PageStatus=2//已打开任务列表
                    }
                }
                console.info("进入活动页面");
            }
        }
    }
    //确保退出活动界面及当前账号
    function OutAPP(SleepTime) {
        if(SleepTime == null){
            SleepTime=100
        }
        back();
        sleep(500);
        back();
        sleep(500);
        back();
        sleep(SleepTime);
    }

    sleep(2000);
    if(!text("累计任务奖励").exists()){
        if(!text("消耗").exists() && !text("金币").exists()){
            for(var i = 0; !text("消耗").exists() && !text("金币").exists(); i++){
                console.log("未识别到活动页面，尝试通过首页浮层进入");
                if(text("首页").exists()){
                    let into = descContains("浮层活动").findOne(20000);
                    sleep(2000);
                    if (into == null) {
                        console.log("无法找到京东活动入口，退出当前任务");
                        return;
                    }
                    click(into.bounds().centerX(), into.bounds().centerY());
                    click(into.bounds().centerX(), into.bounds().centerY());
                    sleep(3000);
                }
                if((text("消耗").exists() && text("金币").exists())| textContains("等待抽宝箱大奖").exists()){
                    break;
                }
                if(i > 10){
                    console.log("识别超时，退出当前任务");
                    return;
                }
                sleep(3000);
            }
            if((text("消耗").exists() && text("金币").exists())| textContains("等待抽宝箱大奖").exists()){
                console.log("已检测到活动页面");
                PageStatus=1//进入活动页面，未打开任务列表
            }
        }
        else{
            console.log("检测到活动页面");
            PageStatus=1//进入活动页面，未打开任务列表
        }
    }
    else{
        console.log("检测到任务列表");
        PageStatus=2//已打开任务列表
    }
    if(PageStatus != 2){
        sleep(2000);
        console.log("成功进入活动界面");
        signTask();
        console.log("等待加载弹窗……");
        while(textContains("继续环游").exists() |textContains("立即抽奖").exists() |textContains("开启今日抽奖").exists() |textContains("点我签到").exists() |textContains("开心收下").exists()){
            sleep(1000);
            if(textContains("继续环游").exists()){
                console.log("继续环游");
                //textContains("继续环游").findOne().parent().click();
                click(textContains("继续环游").findOne().bounds().centerX(),textContains("继续环游").findOne().bounds().centerY())
                sleep(500);
            }
            if(textContains("立即抽奖").exists()){
                console.log("关闭立即抽奖");
                setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
                click(1336,808);
                sleep(1000);
                setScreenMetrics(device.width, device.height);//恢复本机分辨率
                //textContains("立即抽奖").findOne().parent().parent().parent().child(0).click();
                //sleep(500);
            }
            if(textContains("开启今日抽奖").exists()){
                console.log("开启今日抽奖");
                //textContains("开启今日抽奖").findOne().parent().click();
                click(textContains("开启今日抽奖").findOne().bounds().centerX(),textContains("开启今日抽奖").findOne().bounds().centerY())
                sleep(1000);
            }
            if(textContains("点我签到").exists()){
                console.log("点我签到");
                //textContains("点我签到").findOne().parent().click();
                click(textContains("点我签到").findOne().bounds().centerX(),textContains("点我签到").findOne().bounds().centerY())
                sleep(1000);
                textContains("开心收下").waitFor();
                //textContains("开心收下").findOne().parent().click();
                click(textContains("开心收下").findOne().bounds().centerX(),textContains("开心收下").findOne().bounds().centerY())
                sleep(1000);
                if(text("每天签到领大额红包").exists()){
                    text("每天签到领大额红包").findOne().parent().child(0).click();
                    console.log("关闭签到页面");
                }
            }
            if(textContains("开心收下").exists()){
                console.log("开心收下");
                click(textContains("开心收下").findOne().bounds().centerX(),textContains("开心收下").findOne().bounds().centerY())
                sleep(1000);
            }
            sleep(1000);
            console.log("如还有弹窗，请手动处理");
            sleep(3000);
        }

        if(text("立即前往").exists()){
            console.log("前往签到");
            //textContains("立即前往").findOne().parent().click();
            click(textContains("立即前往").findOne().bounds().centerX(),textContains("立即前往").findOne().bounds().centerY())
            sleep(500);
            console.log("点我签到");
            //textContains("点我签到").findOne().parent().click();
            click(textContains("点我签到").findOne().bounds().centerX(),textContains("点我签到").findOne().bounds().centerY())
            sleep(1000);
            textContains("开心收下").waitFor();
            //textContains("开心收下").findOne().parent().click();
            click(textContains("开心收下").findOne().bounds().centerX(),textContains("开心收下").findOne().bounds().centerY())
            sleep(1000);
        }
        if(text("领取金币").exists()){
            console.log("金币已存满");
            text("领取金币").findOne().parent().click();
            console.log("金币领取成功");
            sleep(2000);
        }
        else if(textContains("后满").exists()){
            textContains("后满").findOne().parent().click();
            console.log("金币领取成功");
            sleep(2000);
        }
        if(textContains("等待抽宝箱大奖").exists()){
            console.info("已满级，跳过任务");
            return;
        }
        else{
            console.info("准备打开任务列表");
            let taskListButton = text("分红：").findOne(10000)
            if (!taskListButton) {
                console.log("未能识别到关键节点，退出当前任务");
                return;
            }
            if(textContains("放入我的＞我的优惠券").exists()){
                console.log("关闭优惠券弹窗");
                textContains("放入我的＞我的优惠券").findOne().parent().child(5).click();
                sleep(1000);
            }
            if(taskListButton.parent().parent().childCount() == 7){
                taskListButton.parent().parent().child(4).click();
            }
            else{
                taskListButton.parent().parent().child(5).click();
            }
            sleep(1000);
            /*
            setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
            click(1242,2436);
            click(1242,2436);
            sleep(2000);
            setScreenMetrics(device.width, device.height);//恢复本机分辨率
            */

            for(var i = 0; !text("累计任务奖励").exists(); i++){
                console.log("未识别到任务列表，请手动打开")
                sleep(3000);
                if(i == 1){
                    console.log("尝试坐标打开")
                    setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
                    click(1242,2436);
                    click(1242,2436);
                    sleep(2000);
                    setScreenMetrics(device.width, device.height);//恢复本机分辨率
                }
                if(i >= 10){
                    console.log("超时未打开任务列表，退出当前任务");
                    return;
                }
            }
        }
    }
    if(textContains("等待抽宝箱大奖").exists()){
        return;
    }
    if(ToDoTask == 1){
        console.log("寻找未完成任务……");
        while (true) {
            if(textContains("去组队可得").exists()){
                let task1 = textMatches(/.*去组队可得.*/).find()
                if (task1.empty()) {
                    sleep(100);
                }
                else{
                    let task1Button,task1Text
                    let task1img = captureScreen();
                    for (let i = 0; i < task1.length; i++) {
                        let task1item = task1[i]
                        task1Text = task1item.text();
                        task1Button = task1item.parent().child(3);
                        let task1b = task1item.bounds()
                        let task1color = images.pixel(task1img, task1b.left+task1b.width()/8, task1b.top+task1b.height()/2)
                        if (colors.isSimilar(task1color, "#fd6526", 50)) {
                            console.log("进行", task1Text);
                            task1Button.click();
                            sleep(2000);
                            console.log("领取成功");
                        }
                    }
                }
            }
            let taskButtons = textMatches(/.*每日6-9点打卡可得.*|.*点击首页浮层可得.*/).find()
            if (taskButtons.empty()) {
                console.log("未找到合适的任务，退出");
                sleep(3000);
                break;
            }
            let taskButton, taskText
            for (let i = 0; i < taskButtons.length; i++) {
                let item = taskButtons[i]
                taskText = item.text();
                item = item.parent().child(3);
                let taskTitle = item.parent().child(1).text()
                let TaskQty = taskTitle.match(/(\d)\/(\d*)/)
                if (!TaskQty) continue
                NotTaskQty = (TaskQty[2] - TaskQty[1])
                if(NotTaskQty) {// 如果数字相减不为0，证明没完成
                    //跳过任务
                    //if (taskText.match(/成功入会/)) continue
                    //if (taskText.match(/品牌墙店铺/)) continue
                    //if (taskText.match(/参与城城点击/)) continue
                    //if (taskText.match(/去组队/)) continue
                    //if (taskText.match(/小程序/)) continue
                    //if (taskText.match(/加购/)) continue
                    //if (taskTitle.match(/种草城/)) continue
                    if (taskTitle.match(/并下单/)) continue
                    if (taskText.match(/参与城城点击/)) continue
                    if (taskText.match(/成功入会/) && IsJoinMember == 0) {
                        console.log("识别到入会任务，当前设置为<不执行入会>，即将进入下一任务");
                        sleep(1000);
                        continue;
                    }
                    if (taskText.match(/参与城城点击/) && IsChengCheng != 0) {
                        console.log("识别到城城任务，当前账号此任务火爆，即将进入下一任务");
                        sleep(1000);
                        continue;
                    }
                    taskButton = item;
                    break;
                }
                else{
                    console.log("任务已完成，即将识别下一任务");
                }
            }
            if (!taskButton) {
                console.log("已完成基础任务，退出当前任务");
                console.log("完整任务请执行完整脚本");
                sleep(1000);
                back();
                sleep(1000);
                back();
                break;
            }

            if (taskText.match(/每日6-9点打卡/)) {
                console.log("进行", taskText);
                taskButton.click();
                sleep(2000);
                while(text("立即前往").exists() |text("点我签到").exists()){
                    if(text("立即前往").exists()){
                        console.log("前往签到");
                        //textContains("立即前往").findOne().parent().click();
                        click(text("立即前往").findOne().bounds().centerX(),text("立即前往").findOne().bounds().centerY())
                        sleep(500);
                        console.log("点我签到");
                        //textContains("点我签到").findOne().parent().click();
                        click(text("点我签到").findOne().bounds().centerX(),text("点我签到").findOne().bounds().centerY())
                        sleep(1000);
                        textContains("开心收下").waitFor();
                        //textContains("开心收下").findOne().parent().click();
                        click(text("开心收下").findOne().bounds().centerX(),text("开心收下").findOne().bounds().centerY())
                        sleep(1000);
                    }
                    if(text("点我签到").exists()){
                        console.log("点我签到");
                        //textContains("点我签到").findOne().parent().click();
                        click(text("点我签到").findOne().bounds().centerX(),text("点我签到").findOne().bounds().centerY())
                        sleep(1000);
                        textContains("开心收下").waitFor();
                        //textContains("开心收下").findOne().parent().click();
                        click(text("开心收下").findOne().bounds().centerX(),text("开心收下").findOne().bounds().centerY())
                        sleep(1000);
                    }
                }
                console.log("任务完成");
            } else if (taskText.match(/点击首页浮层可得/)) {
                console.log("进行", taskText);
                task1Button.click();
                sleep(2000);
                if(!text("累计任务奖励").exists()){
                    if(!text("消耗").exists() && !text("金币").exists()){
                        for(var i = 0; !text("消耗").exists() && !text("金币").exists(); i++){
                            console.log("未识别到活动页面，尝试通过首页浮层进入");
                            if(text("首页").exists()){
                                let into = descContains("浮层活动").findOne(20000);
                                sleep(2000);
                                if (into == null) {
                                    console.log("无法找到京东活动入口，退出当前任务");
                                    return;
                                }
                                click(into.bounds().centerX(), into.bounds().centerY());
                                click(into.bounds().centerX(), into.bounds().centerY());
                                sleep(3000);
                            }
                            if(i > 10){
                                console.log("识别超时，退出当前任务");
                                return;
                            }
                            sleep(3000);
                        }
                        if(text("消耗").exists() && text("金币").exists()){
                            console.log("已检测到活动页面");
                            PageStatus=1//进入活动页面，未打开任务列表
                        }
                    }
                    else{
                        console.log("检测到活动页面");
                        PageStatus=1//进入活动页面，未打开任务列表
                    }
                    console.info("准备打开任务列表");
                    let taskListButton = text("分红：").findOne(10000)
                    if (!taskListButton) {
                        console.log("未能识别关键节点，退出当前任务");
                        return;
                    }
                    if(taskListButton.parent().parent().childCount() == 6){
                        taskListButton.parent().parent().child(4).click();
                    }
                    else{
                        taskListButton.parent().parent().child(5).click();
                    }
                    sleep(1000);
                    /*
                    setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
                    click(1242,2436);
                    click(1242,2436);
                    sleep(2000);
                    setScreenMetrics(device.width, device.height);//恢复本机分辨率
                    */

                    for(var i = 0; !text("累计任务奖励").exists(); i++){
                        console.log("未识别到任务列表，请手动打开")
                        sleep(3000);
                        if(i == 1){
                            console.log("尝试坐标打开")
                            setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
                            click(1242,2436);
                            click(1242,2436);
                            sleep(2000);
                            setScreenMetrics(device.width, device.height);//恢复本机分辨率
                        }
                        if(i >= 10){
                            console.log("未按时打开任务列表，退出当前任务");
                            return;
                        }
                    }
                }
                else{
                    console.log("检测到任务列表");
                    PageStatus=2//已打开任务列表
                }
                console.log("任务完成");
            }

            for(var i = 0; !text("累计任务奖励").exists(); i++){
                console.log("返回");
                back();
                sleep(1000);
                if(i == 10){
                    console.log("无法返回任务界面，退出当前任务");
                    return;
                }
                if(text("领京豆").exists() && text("首页").exists()){
                    console.log("发现首页，尝试退出返回原任务列表");
                    OutAPP(500);
                }
            }
            console.info("准备下一个任务");
        }
        if(text("去领取去领取").exists()){
            console.info("准备领取宝箱");
            while(text("去领取去领取").exists()){
                text("去领取去领取").findOne().parent().click();
                sleep(1500);
                if(textContains("放入我的＞我的优惠券").exists()){
                    console.log("发现优惠券")
                    textContains("放入我的＞我的优惠券").findOne().parent().child(5).click();
                    sleep(100);
                }
                if(textContains("已放入我的＞我的优惠券").exists()){
                    console.log("发现优惠券")
                    textContains("已放入我的＞我的优惠券").findOne().parent().child(0).click();
                    sleep(100);
                }
                if(text("开心收下 开心收下").exists()){
                    console.log("开心收下")
                    text("开心收下 开心收下").findOne().click();
                    sleep(100);
                }
                if(textContains("开心收下").exists()){
                    console.log("开心收下")
                    click(textContains("开心收下").findOne().bounds().centerX(),textContains("开心收下").findOne().bounds().centerY())
                    sleep(100);
                }
                sleep(1500);
            }
            console.info("宝箱领取完毕");
        }
    }
    else{
        console.log("不做任务");
    }
}

function signTask() {
    let anchor = className('android.view.View').filter(function (w) {
        return w.clickable() && (w.text() == '去使用奖励' || w.desc() == '去使用奖励')
    }).findOne(5000)

    if (!anchor) {
        console.log('未找到使用奖励按钮，签到失败')
        return false
    }

    let anchor_index = anchor.indexInParent()
    let sign = anchor.parent().child(anchor_index + 2) // 去使用的后两个
    sign.click()

    sign = textMatches(/.*点我签到.*|.*明天再来.*/).findOne(5000)
    if (!sign) {
        console.log('未找到签到按钮')
        return false
    }

    if (sign.text().match(/明天再来/)) {
        console.log('已经签到')
    } else {
        click(sign.bounds().centerX(), sign.bounds().centerY())
        console.log('签到完成，关闭签到弹窗')
    }

    let title = text('每天签到领大额红包').findOne(5000)
    if (!title) {
        console.log('未找到标题，未能自动关闭签到页。')
        return false
    }
    console.log('关闭签到页')
    title.parent().child(0).click()

    return true
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