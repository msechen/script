/*
  京东<点点券>任务

  已知问题：
  Q：收取最后一个点点券气泡的时候有报错：Wrapped java.lang.IllegalArgumentException
  A：根据当前反馈，应是分身运行过多导致缓存不足，可在多个分身中穿插使用分身有术缓存清理代码

  Q：活动界面识别错、脚本执行中断、脚本卡在某个界面无法继续等情况
  A：上述情况，在页面加载缓慢的情况下，可能出现，更换良好的网络环境再执行脚本

  20220305 V6.0
  所有坐标点击均改为更稳定的控件点击，部分任务目前未测试，暂时保留旧坐标点击代码，仅屏蔽
  20220305 V6.0.1
  增加立领100点点券任务
  20220403 V6.0.2
  新增逛折学系频道任务
  20220412 V6.0.3
  更新逛精选任务

*/
Start();
console.info("开始任务");
let Task_Log = "重要日志汇总："
Task_Log = Task_Log + "\n" + "========== " + "\n" + "京东点点券" + "\n" + "———————"
/*
  Run参数说明：
  参数1：启动的APP名称，如需手动，则填手动
  参数2：对应参数1的APP名称，是否是分身应用，0：正常应用，1：分身有术Pro内部分身，暂不支持其他分身应用（如是小X分身（原多开分身），可在参数1中直接填入分身应用APP名称即可）
  参数3：是否进入券后9.9抽奖，0：不参与抽奖，1：参与抽奖
 */
//京东例子
//Run("京东",0,1);home();
//Run("京东",1,0);home();
//Run("京东-2",1,0);home();
//手动例子
Run("手动",0,1);home();
//分身有术缓存清理
//CleanCache("分身有术Pro",1);

console.log("已退出脚本");
console.clear();
console.log(Task_Log);
engines.myEngine().forceStop()

function Start() {
  auto.waitFor();//获取无障碍服务权限
  console.show();//开启悬浮窗
  console.info("京东<点点券>任务");
}

function Run(LauchAPPName,IsSeparation,IsLotteryDraw){
  if(IsSeparation == null){
    IsSeparation = 0 //0：正常应用 1：分身有术内部应用
  }
  if(IsLotteryDraw == null){
    IsLotteryDraw = 0 //0：不参与抽奖 1：参与抽奖
  }
  var IsSeparation_info = ""
  var IsLotteryDraw_info = ""
  if(IsSeparation == 0){
    IsSeparation_info = "正常应用"
  } else if(IsSeparation == 1){
    IsSeparation_info = "分身有术Pro"
  } else{
    IsSeparation_info = "无效参数，改为默认值“非分身应用”"
    IsSeparation = 0
  }
  if(IsLotteryDraw == 0){
    IsLotteryDraw_info = "不参与抽奖"
  } else if(IsLotteryDraw == 1){
    IsLotteryDraw_info = "参与抽奖"
  } else{
    IsLotteryDraw_info = "无效参数，改为默认值“不参与抽奖”"
    IsLotteryDraw = 0
  }
  console.info(
      "当前设置"+"\n"+
      "启动APP："+LauchAPPName+"\n"+
      "是否分身："+IsSeparation_info+"\n"+
      "是否抽奖："+IsLotteryDraw_info
  )
  Task_Log = Task_Log + "\n" + LauchAPPName + "-" + IsSeparation_info + "-" + IsLotteryDraw_info
  if(LauchAPPName == "手动"){
    console.log("请手动打开APP，以便进行下一步");
    while(text("领京豆").findOnce() == null){
      if(textContains("券后9.9").exists()|
          app.getAppName(currentPackage()) == "京东"|currentActivity() == "com.jingdong.app.mall.WebActivity"){
        break;
      }
      console.log("当前应用名:  " + app.getAppName(currentPackage())+ "\n"
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
  sleep(2000);
  ActiveInterface();
  if (text("每日攒点点券").exists()) {
    console.info("任务列表检测正常");
    sleep(500);
    //做任务
    RunAllTask();
    //收点券
    console.info("待检测点点券可收取情况");
    sleep(500);
    while(text("待收取").exists() |text("领取任务").exists() |text("继续完成").exists() ){//增加2次弹出的任务关键字，避免提前跳出循环
      let Buttons = text("我的点点券").findOne(5000).parent().parent().parent().children()
      if (Buttons.empty()) {
        console.info("无点点券收取");
      }
      else{
        for (var i = 1; i < Buttons.length - 2; i++) {
          if(i == 1){
            console.info("发现可收取点点券");
          }
          let Button = Buttons[i]
          ButtonText = Button.child(0).child(0).child(0).text()
          if(ButtonText.match(/[+][1-9]0.*/)){
            console.log("第" + i + "次收点点券");
            //有2组任务的时候，多停留1秒
            if(textStartsWith("浏览2组").exists()){
              Button.click();
              sleep(1000);
            }
            else{
              Button.click();
              sleep(100);
            }
            if(text("每日攒点点券").findOne(3000) == null){
              console.log("点击错误，返回");
              back();
              sleep(500);
            }
            else{
              console.log("收取成功");
              sleep(500);
            }
            //这组任务是收取之后才出现，故再做一次判断
            if (text("领取任务").exists() |text("继续完成").exists()) {
              console.info("发现任务");
              RunAllTask();
              console.info("继续收取");
            }
          }
          sleep(500);
        }
      }
      sleep(1500);
    }
    console.info("点点券收取完毕");
    console.show();
  }
  Task_Log = Task_Log + "\n" + "当前账号所有任务已完成"
  console.info("当前账号所有任务已完成");
  back();
  sleep(1000);
  back();
  sleep(1000);
  home();
  sleep(500);

  function RunAllTask() {
    if (text("领取任务").exists() |text("继续完成").exists()) {
      while(true) {
        if (textStartsWith("浏览2组会场").exists() && (textStartsWith("浏览2组会场").findOnce().parent().child(3).text() == "领取任务"
            |textStartsWith("浏览2组会场").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1,"浏览2组会场",1);
        }
        else if (textStartsWith("浏览2组商品").exists() && (textStartsWith("浏览2组商品").findOnce().parent().child(3).text() == "领取任务"
            |textStartsWith("浏览2组商品").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1,"浏览2组商品",1);
        }
        else if (textStartsWith("浏览2组活动").exists() && (textStartsWith("浏览2组活动").findOnce().parent().child(3).text() == "领取任务"
            |textStartsWith("浏览2组活动").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1,"浏览2组活动",1);
        }
        else if (text("浏览精选商品").exists() && (text("浏览精选商品").findOnce().parent().child(3).text() == "领取任务"
            |text("浏览精选商品").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1,"浏览精选商品",1);
        }
        else if (text("浏览精选活动").exists() && (text("浏览精选活动").findOnce().parent().child(3).text() == "领取任务"
            |text("浏览精选活动").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1,"浏览精选活动",1);
        }
        else if (text("浏览精选活动3s").exists() && (text("浏览精选活动3s").findOnce().parent().child(3).text() == "领取任务"
            |text("浏览精选活动3s").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1,"浏览精选活动3s",1);
        }
        else if (textStartsWith("关注浏览10s").exists() && (textStartsWith("关注浏览10s").findOnce().parent().child(3).text() == "领取任务"
            |textStartsWith("关注浏览10s").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1,"关注浏览10s",2);
        }
        else if (text("领暴力好券").exists() && (text("领暴力好券").findOnce().parent().child(3).text() == "领取任务"
            |text("领暴力好券").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1,"领暴力好券",3);
        }
        else if (text("逛领券15s").exists()&& (text("逛领券15s").findOnce().parent().parent().child(3).text() == "领取任务"
            |text("逛领券15s").findOnce().parent().parent().child(3).text() == "继续完成")){
          RunTask(2,"逛领券15s",4);
        }
        else if (text("立领60点点券").exists()&& (text("立领60点点券").findOnce().parent().parent().child(3).text() == "领取任务"
            |text("立领60点点券").findOnce().parent().parent().child(3).text() == "继续完成")){
          RunTask(2,"立领60点点券",4);
        }
        else if (text("逛30s").exists() && (text("逛30s").findOnce().parent().parent().child(3).text() == "领取任务"
            |text("逛30s").findOnce().parent().parent().child(3).text() == "继续完成")){
          RunTask(2,"逛30s",4);
        }
        else if (text("点击“领券”").exists() && (text("点击“领券”").findOnce().parent().child(3).text() == "领取任务"
            |text("点击“领券”").findOnce().parent().child(3).text() == "继续完成")){
          RunTask(1,"点击“领券”",4);
        }
        else if (text("逛折学系频道10s").exists() && (text("逛折学系频道10s").findOnce().parent().child(3).text() == "领取任务"
            |text("逛折学系频道10s").findOnce().parent().child(3).text() == "继续完成")){
          RunTask(1,"逛折学系频道10s",5);
        }
        else if (text("点击券后9.9").exists() && (text("点击券后9.9").findOnce().parent().child(3).text() == "领取任务"
            |text("点击券后9.9").findOnce().parent().child(3).text() == "继续完成")){
          RunTask(1,"点击券后9.9",4);
        }
        else if (text("立领100").exists() && (text("立领100").findOnce().parent().parent().child(3).text() == "领取任务"
            |text("立领100").findOnce().parent().parent().child(3).text() == "继续完成")){
          RunTask(2,"立领100",4);
        }
        else if (text("领200").exists() && (text("领200").findOnce().parent().parent().child(3).text() == "领取任务"
            |text("领200").findOnce().parent().parent().child(3).text() == "继续完成")){
          RunTask(2,"领200",4);
        }
        else if (text("领500").exists() && (text("领500").findOnce().parent().parent().child(3).text() == "领取任务"
            |text("领500").findOnce().parent().parent().child(3).text() == "继续完成")){
          RunTask(2,"领500",4);
        }
        else if (text("领取任务").exists()){
          console.info("领取任务");
          text("领取任务").findOnce().click();
          sleep(1000);
          console.log("任务完成");
        }
        sleep(1000);
        for(var i = 0; !text("每日攒点点券").exists() && i < 5; i++){
          console.log("返回");
          back();
          sleep(2000);
          ActiveInterface();
          if(i == 5){
            Task_Log = Task_Log + "\n" +"无法返回任务界面，准备退出任务"
            console.log("无法返回任务界面，准备退出任务");
            return;
          }
        }
        if(!text("领取任务").exists() && !text("继续完成").exists() ) {
          //所有任务已完成，退出循环
          break;
        }
      }
    }
    console.info("所有任务已完成");
    sleep(500);

    function RunTask(LevelNum,TaskName,KeyKind) {
      console.info("开始<"+TaskName+">任务");
      if(LevelNum == 1){
        textStartsWith(TaskName).findOnce().parent().child(3).click();
      }
      else if(LevelNum == 2){
        textStartsWith(TaskName).findOnce().parent().parent().child(3).click();
      }
      else{
        Task_Log = Task_Log + "\n" +"任务参数异常，退出任务"
        console.error("任务参数异常，退出任务");
        return;
      }
      if(KeyKind ==1 |KeyKind == 2 |KeyKind == 3){
        var TaskKey = TaskName + "（"
        for(var i = 0; !className("android.view.View").textContains(TaskKey).exists(); i++){
          sleep(1000);
          if(i == 2| i == 4| i == 6| i == 8){
            console.log("等待识别<" + TaskKey + ">");
          }
          if(i > 10){
            Task_Log = Task_Log + "\n" +"关键节点识别超时，退出当前账号"
            console.error("关键节点识别超时，退出当前账号");
            return;
          }
        }
        if(textContains("/10）").exists()){
          var t = 10
        }else if(textContains("/9）").exists()){
          var t = 9
        }else if(textContains("/8）").exists()){
          var t = 8
        }else if(textContains("/7）").exists()){
          var t = 7
        }else if(textContains("/6）").exists()){
          var t = 6
        }else if(textContains("/5）").exists()){
          var t = 5
        }else if(textContains("/4）").exists()){
          var t = 4
        }else if(textContains("/3）").exists()){
          var t = 3
        }
        if(KeyKind == 1){
          for(var i = 0; i < t; i++){
            console.log("第"+(i+1)+"次浏览");
            className("android.view.View").textStartsWith(TaskKey).findOnce().parent().child(2).child(t-i-1).click();
            sleep(1000);
            if(TaskName == "浏览精选活动3s"){
              sleep(3000)
            }
            if(!className("android.view.View").textStartsWith(TaskKey).exists()){
              back();
              sleep(1000);
            }
            for(var ii = 0; !className("android.view.View").textStartsWith(TaskKey).exists(); ii++){
              console.log("返回异常，再次尝试返回");
              back();
              sleep(2000);
              if(ii > 5){
                Task_Log = Task_Log + "\n" +"任务异常，请重新运行脚本"
                console.error("任务异常，请重新运行脚本");
                return;
              }
            }
          }
          console.log("浏览完成");
        }else if(KeyKind == 2){
          for(var i = 0; text("浏览并关注").exists(); i++){
            console.log("第"+(i+1)+"次关注浏览");
            className("android.view.View").textStartsWith(TaskKey).findOnce().parent().child(2).child(0).click();
            for(var ii = 0; !text("已完成浏览").exists(); ii++){
              sleep(1000);
              if(ii == 1){
                console.log("等待<任务完成>标志");
              }
              if(ii > 20){
                console.log("任务已超时，准备返回");
                back();
                sleep(1000);
                break;
              }
            }
            if(text("已完成浏览").exists()){
              console.log("任务完成，返回");
              back();
              sleep(1000);
            }
            for(var ii = 0; !className("android.view.View").textStartsWith(TaskKey).exists(); ii++){
              console.log("返回异常，再次尝试返回");
              back();
              sleep(2000);
              if(ii > 5){
                Task_Log = Task_Log + "\n" +"任务异常，请重新运行脚本"
                console.error("任务异常，请重新运行脚本");
                return;
              }
            }
            sleep(2000);
          }
          console.log("关注浏览完成");
        }else if(KeyKind == 3){
          for(var i = 0; text("立即领取").exists(); i++){
            console.log("第"+(i+1)+"次领券");
            text("立即领取").findOne().parent(),click();
            sleep(2000);
          }
          console.log("领券完成");
        }
        else{
          Task_Log = Task_Log + "\n" +"任务参数异常，退出任务"
          console.error("任务参数异常，退出任务");
          return;
        }
        //关闭浮窗
        console.log("关闭弹窗");
        for(var i = 0; !className("android.view.View").textStartsWith(TaskKey).exists(); i++){
          console.log("关闭按钮异常，再次尝试返回");
          back();
          sleep(2000);
          if(i > 5){
            Task_Log = Task_Log + "\n" +"任务异常，请重新运行脚本"
            console.error("任务异常，请重新运行脚本");
            return;
          }
        }
        let CloseButton = className("android.view.View").textStartsWith(TaskKey).findOnce().parent().child(0)
        if(CloseButton){
          CloseButton.click();
          console.log("关闭成功");
          sleep(500);
        }
      }
      else if(KeyKind == 4){
        console.log("等待跳转首页，可手动");
        if(text("去完成任务").findOne(3000) != null){
          text("去完成任务").findOne(3000).parent().click();
          while(true){
            if(className("android.widget.TextView").text("券后9.9").exists()){
              console.log("进入券后9.9");
              className("android.widget.TextView").text("券后9.9").findOnce().parent().click();
              sleep(1000);
              break;
            } else if(className("android.widget.TextView").text("领券").exists()){
              console.log("进入领券");
              className("android.widget.TextView").text("领券").findOnce().parent().click();
              sleep(1000);
              break;
            }
          }
        }
        console.log("等待任务完成")
        for(var i = 0; !text("已完成浏览").exists(); i++){
          sleep(1000);
          if(i == 10 |i == 20 |i == 30 ){
            console.log("已等待"+i+"秒");
          }
          if(i == 35){
            console.log("等待任务完成标识");
          }
          if(text("已完成浏览").exists()){
            console.log("已完成浏览");
            break;
          }
        }
        if(text("已完成浏览").exists()){
          text("已完成浏览").findOne().parent().click();
          sleep(1000);
        }
        sleep(1000);
        ActiveInterface();
      }
      else if(KeyKind == 5){
        for(var i = 0; i < 12; i++){
          sleep(1000);
          if(i == 2| i == 4| i == 6| i == 8| i == 10){
            console.log("已浏览" + i + "s");
          }
          if(i >= 12){
            break;
          }
        }
        console.log("已完成浏览");
        back();
      }
    }
  }

  function ActiveInterface() {
    //活动界面判断&点点券签到
    for(var i = 0; !text("每日攒点点券").exists() && i < 10; i++) {
      if(i == 4 && app.getAppName(currentPackage()) == "京东"){
        console.log("尝试返回");
        back();
        sleep(500);
      }
      if(i == 5 && className("android.view.View").desc("首页").exists() && desc("新品").exists()){
        console.log("尝试刷新首页");
        desc("新品").findOne().click();
        sleep(500);
        desc("首页").findOne().click();
        sleep(2500);
      }
      if(i == 6){
        console.log("尝试重启APP");
        back();
        sleep(500);
        back();
        sleep(500);
        back();
        sleep(500);
        home();
        if(LauchAPPName == "手动"){
          console.log("请手动打开APP，以便进行下一步");
          while(text("领京豆").findOnce() == null){
            if(textContains("券后9.9").exists()|
                app.getAppName(currentPackage()) == "京东"|currentActivity() == "com.jingdong.app.mall.WebActivity"){
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
              console.log("当前应用名:  " + app.getAppName(currentPackage())+ "\n"
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
        sleep(3000);
      }
      if(i == 10){
        Task_Log = Task_Log + "\n" +"无法找到活动界面,即将退出任务"
        console.log("无法找到活动界面,即将退出任务");
        return;
      }
      if(className("android.widget.TextView").text("领券").exists()){
        console.info("进入领券");
        className("android.widget.TextView").text("领券").findOnce().parent().click();
        sleep(1000);
        while(text("签到领奖励").exists()){
          console.log("签到领奖励");
          text("签到领奖励").findOne().parent().click();
          if(className("android.widget.ImageView").desc("关闭弹窗").findOne(2000) != null){
            console.log("签到完成");
            className("android.widget.ImageView").desc("关闭弹窗").findOne().click();
            console.log("关闭弹窗");
          }
          else{
            console.error("签到未成功，重新签到")
            swipe((device.width / 3) * 2, (device.height / 6), (device.width / 3) * 2, (device.height / 6) * 3, 500);  //向下滑动，确保是在顶部位置
          }
          sleep(1000);
        }
        if(className("android.view.View").desc("9.9下沉").exists() && IsLotteryDraw == 1){
          console.log("券后9.9");
          className("android.view.View").desc("9.9下沉").findOne().parent().parent().click();
          for(var ii = 0; !className("android.view.View").textStartsWith("抽奖次数：").exists(); ii++){
            if(className("android.view.View").textStartsWith("抽奖次数：").exists()){
              break;
            }
            console.log("等待识别<抽奖次数>");
            sleep(2000);
            if(ii > 3){
              Task_Log = Task_Log + "\n" +"识别超时，跳过抽奖任务"
              console.error("识别超时，跳过抽奖任务");
              break;
            }
          }
          if(className("android.view.View").text("抽奖次数：0").exists()){
            console.log("抽奖次数已用完");
          }
          else if(className("android.view.View").textStartsWith("抽奖次数：").exists() && text("点击拿奖励").exists()){
            console.log("点击拿奖励");
            text("点击拿奖励").findOnce().click();
            console.log("等待进入抽奖界面");
            sleep(2000);
            className("android.view.View").textStartsWith("抽奖次数：").waitFor();
            for(var ii = 1; className("android.view.View").textStartsWith("抽奖次数：").exists(); ii++){
              console.log("第" + ii + "次抽奖");
              sleep(500)
              className("android.view.View").textStartsWith("抽奖次数：").findOne().parent().click();
              console.log("等待开奖");
              if(text("收下奖品").findOne(3000) != null){
                console.log("收下奖品");
                text("收下奖品").findOne().click();
              } else if(text("再抽一次").exists()){
                console.log("没奖品");
                text("再抽一次").findOne().parent().parent().parent().child(1).click();
              } else{
                console.log("未识别到奖品");
                sleep(1000);
              }
              if(ii == 3){
                console.log("抽奖次数已达上限");
                break;
              }
              sleep(2000);
            }
            sleep(1000);
            back();
          }
          console.info("领券");
          sleep(1000);
          back();
        }
        sleep(1000);
      }
      if(className("android.widget.TextView").text("券后9.9").exists()){
        console.info("进入券后9.9");
        className("android.widget.TextView").text("券后9.9").findOnce().parent().click();
        console.log("等待加载……");
        if(IsLotteryDraw == 1){
          for(var ii = 0; !className("android.view.View").textStartsWith("抽奖次数：").exists(); ii++){
            if(className("android.view.View").textStartsWith("抽奖次数：").exists()){
              break;
            }
            console.log("等待识别<抽奖次数>");
            sleep(2000);
            if(ii > 3){
              console.error("识别超时，跳过抽奖任务");
              Task_Log = Task_Log + "\n" +"识别超时，跳过抽奖任务"
              break;
            }
          }
          if(className("android.view.View").text("抽奖次数：0").exists()){
            console.log("抽奖次数已用完");
          }
          else if(className("android.view.View").textStartsWith("抽奖次数：").exists() && text("点击拿奖励").exists()){
            console.log("点击拿奖励");
            text("点击拿奖励").findOnce().click();
            sleep(2000);
            console.log("等待进入抽奖界面");
            className("android.view.View").textStartsWith("抽奖次数：").waitFor();
            for(var ii = 1; className("android.view.View").textStartsWith("抽奖次数：").exists(); ii++){
              console.log("第" + ii + "次抽奖");
              sleep(500)
              className("android.view.View").textStartsWith("抽奖次数：").findOne().parent().click();
              log("等待开奖");
              if(text("收下奖品").findOne(3000) != null){
                log("收下奖品");
                text("收下奖品").findOne().click();
              } else if(text("再抽一次").exists()){
                log("没奖品");
                text("再抽一次").findOne().parent().parent().parent().child(1).click();
              } else{
                log("未识别到奖品");
                sleep(1000);
              }
              if(ii == 3){
                console.log("抽奖次数已达上限");
                break;
              }
              sleep(2000);
            }
            sleep(1000);
            back();
          }
        }
        else{
          console.log("跳过抽奖任务");
          sleep(2000);
        }
        console.info("领券");
        sleep(1000);
        back();
        sleep(1000);
      }
      if(desc("领券中心").exists()){
        sleep(1000);
        while(text("签到领奖励").exists()){
          console.log("签到领奖励");
          text("签到领奖励").findOne().parent().click();
          if(className("android.widget.ImageView").desc("关闭弹窗").findOne(2000) != null){
            console.log("签到完成");
            className("android.widget.ImageView").desc("关闭弹窗").findOne().click();
            console.log("关闭弹窗");
          }
          else{
            console.error("签到未成功，重新签到")
            swipe((device.width / 3) * 2, (device.height / 6), (device.width / 3) * 2, (device.height / 6) * 3, 500);  //向下滑动，确保是在顶部位置
          }
          sleep(2000);
        }
        console.info("寻找点点券入口");
        if(desc("领券中心").findOne(3000) != null){
          console.info("进入点点券");
          desc("领券中心").findOne().parent().child(3).click();
        }
        console.log("等待加载点点券……");
        console.log("如一直无响应，可手动进入活动，脚本将继续执行");
        for(var ii = 0; !text("每日攒点点券").exists(); ii++){
          sleep(1500);
          if(text("每日攒点点券").exists()){
            break;
          }
          console.log("等待识别<每日攒点点券>");
          sleep(1500);
          if(ii == 2 && desc("领券中心").exists()){
            console.info("再次尝试进入点点券");
            desc("领券中心").findOne().parent().child(3).click();
          }
          if(ii > 5){
            Task_Log = Task_Log + "\n" +"关键节点识别超时，退出当前账号"
            console.error("关键节点识别超时，退出当前账号");
            return;
          }
        }
      }
      if(!text("每日攒点点券").exists()){
        console.log("未找到活动界面，请手动进入，如遮挡了入口，可关闭此悬浮窗");
        sleep(3000);
      }
    }
    console.show();
    if(text("每日攒点点券").exists() && (text("待领取").exists() |text("天天攒天天兑").exists())){
      console.info("任务列表需要展开");
      if(text("待领取").exists()){
        var KeyButton = text("待领取").findOne().parent()
      }
      else if(text("天天攒天天兑").exists()){
        var KeyButton = text("天天攒天天兑").findOne().parent()
      }
      sleep(500);
      console.log("展开任务列表");
      KeyButton.click();
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