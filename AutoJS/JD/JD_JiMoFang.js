/*
  京东<集魔方>任务
https://t.me/LingFeng0918
  已知问题：
  Q：活动界面识别错、脚本执行中断、脚本卡在某个界面无法继续等情况
  A：上述情况，在页面加载缓慢的情况下，可能出现，更换良好的网络环境再执行脚本

  Q：魔方碎片攒够时，会自动结束任务
  A：任务等待间隔不稳定，待修复

  20220814 V2.8
  修改逛一逛任务
 */
var TaskName = "集魔方"
Start(TaskName);
console.info("开始任务");
let Task_Log = "重要日志汇总："
Task_Log = Task_Log + "\n" + "========== " + "\n" + "京东集魔方" + "\n" + "———————"

/*
  账号明细.js文件说明
  账号文件需和脚本在同一目录
  文件编码为utf-8
  每行一个账号，参数以逗号隔开（中英不限）
  每行第一个参数为任务名称，后续的参数参考对应Run参数说明填写

 */
/*
  Run参数说明：
  参数1：启动的APP名称，如需手动，则填手动
  参数2：对应参数1的APP名称，是否是分身应用，0：正常应用，1：分身有术Pro内部分身，暂不支持其他分身应用（如是小X分身（原多开分身），可在参数1中直接填入分身应用APP名称即可）
  参数3：是否入会，0：不执行入会任务 1：执行入会任务，遇到新入会店铺则退出任务 3:执行入会任务，遇到需入会店铺，等待手动入会
  参数4：是否参与兑换京豆（目前仅支持3/10京豆一种兑换，消耗1魔方），0：不兑换 1：兑换
*/

if(files.exists("./账号明细.js")){
  console.info("发现账号文件");
  var file = open("./账号明细.js")
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
  //Run("京东",0,3,1);//home();
  //Run("京东",1,3,1);//home();
  //Run("京东-2",1,3,1);//home();
  //手动例子
  Run("手动",0,3,1);//home();
  //分身有术缓存清理
  //CleanCache("分身有术Pro",1);
}

console.log("已退出脚本");
console.clear();
console.log(Task_Log);
engines.myEngine().forceStop()

function Start() {
  auto.waitFor();//获取无障碍服务权限
  console.show();//开启悬浮窗
  console.info("京东<" + TaskName + ">任务");
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
        setClip(Code);
        console.log("助力码重新写入剪切板");
        sleep(1000);
        if(LauchAPPName == "手动"){
          console.log("请手动打开APP，以便进行下一步");
          while(text("领京豆").findOnce() == null){
            if(text("立即查看").exists() |text("集魔方 赢大奖").exists() |
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
        console.error("超时未检测到京口令，跳过任务");
        sleep(1000);
        break;
      }
    }
    if(j > 15){
      //超时则跳出当前任务
      console.info("跳过当前任务");
      return;
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
    sleep(3000);
    if(text("开心收下").exists() |text("立即签到").exists()){
      console.info("发现签到弹窗");
      if(text("立即签到").exists()){
        text("立即签到").findOne().click();
        sleep(1000);
        console.log("立即签到");
      }
      if(text("开心收下").exists()){
        text("开心收下").findOne().click();
        sleep(1000);
        console.log("开心收下");
      }
    }
    //任务列表检测
    let //TaskListState = 0
        Status = 0
        times = 0
    //TaskListState = TaskListCheck(TaskListState);
    while(true){
      if(text("浏览会场").exists() && text("浏览会场").findOne().parent().child(0).className() != "android.widget.Image"){
        console.info("开始<浏览会场>任务");
        var SumTimes = text("浏览会场").findOne().parent().child(0).text()//总次数
        text("浏览会场").findOne().parent().click();
        for(var i = 1; i <= SumTimes; i++){
          console.log("第" + i + "次浏览");
          for(var ii = 0; !text("任务完成").exists() && ii < 10; ii++){
            if(ii == 1){
              console.log("等待<任务完成>标志");
            }
            sleep(1000);
          }
          if(!text("集魔方 赢大奖").exists()){
            console.log("返回");
            back();
          }
          MoFangFragmentCheck();
        }
        console.log("任务完成");
      }else if(text("加购商品").exists() && text("加购商品").findOne().parent().child(0).className() != "android.widget.Image"){
        console.info("开始<加购商品>任务");
        var SumTimes = text("加购商品").findOne().parent().child(0).text()//总次数
        text("加购商品").findOne().parent().child(1).click();
        sleep(2000);
        for(var i = 1; i <= SumTimes && text("选择ta并加购").exists(); i++){
          console.log("第" + i+ "次加购");
          text("选择ta并加购").findOne().click();
          sleep(2000);
          console.log("返回");
          back();
          sleep(2000);
        }
        console.log("任务完成");
        back();
      }else if(text("浏览商品").exists() && text("浏览商品").findOne().parent().child(0).className() != "android.widget.Image"){
        console.info("开始<浏览商品>任务");
        var SumTimes = text("浏览商品").findOnce().parent().child(0).text()//总次数
        text("浏览商品").findOne().parent().click();
        for(var i = 1; i <= SumTimes; i++){
          console.log("第" + i + "次浏览");
          text("浏览商品").findOne().parent().click();
          sleep(1500);
          for(var ii = 0; text("集魔方 赢大奖").findOne(1500) == null; ii++){
            if(ii == 0){
              console.log("准备返回活动界面");
            }
            else{
              console.log("再次返回");
            }
            back();
            sleep(1000);
            if(ii == 5){
              Task_Log = Task_Log + "\n" +"无法返回活动界面，退出当前任务"
              console.log("无法返回活动界面，退出当前任务");
              return;
            }
          }
          sleep(500);
          MoFangFragmentCheck();
        }
        console.log("任务完成");
      }else if(text("加入会员").exists() && text("加入会员").findOne().parent().child(0).className() != "android.widget.Image" && Status == 0){
        if(IsJoinMember == 0){
          console.info("当前设置不做入会任务，跳过");
          Status = 1
        }
        else{
          console.info("开始<加入会员>任务");
          var SumTimes = text("加入会员").findOnce().parent().child(0).text()//总次数
          text("加入会员").findOne().parent().click();
          for(var i = 1; i <= SumTimes; i++){
            text("加入会员").findOne().parent().click();
            sleep(3000);
            Status = 1
            if(textContains("确认授权并加入店铺会员").exists() |text("授权信息，解锁全部会员福利").exists()){
              if(IsJoinMember == 1){
                console.log("涉及个人隐私，请手动加入店铺会员或者忽略加入会员任务");
                break;
              }
              else if(IsJoinMember == 3){
                console.log("当前店铺未入会，等待手动");
                sleep(8000);
                console.log("超时自动返回");
              }
            }
            else{
              console.info("未找到入会按钮，应是当前店铺会员");
              console.log("任务完成");
            }
          }
        }
      }else if(text("逛逛频道").exists() && text("逛逛频道").findOne().parent().child(0).className() != "android.widget.Image"){
        console.info("开始<逛逛频道>任务");
        var SumTimes = text("逛逛频道").findOnce().parent().child(0).text()//总次数
        text("逛逛频道").findOne().parent().click();
        sleep(1000);
        for(var i = 0; !text("点击6个商品得奖励").exists();i++){
          sleep(1000);
          if(i == 1){
            console.log("等待加载任务界面")
          }
          if(i > 30){
            console.error("加载超时，退出任务")
            break;
          }
        }
        if(text("去付定金").exists()){
          let Buttons = text("去付定金").find()
          for(var i = 0; i <= Buttons.length(); i++){
            console.log("第" + (i + 1)+ "个商品");
            let Button = Buttons[i]
            Button.click()
            sleep(1500);
            back();
            sleep(1500);
            if(text("立即领奖").exists()){
              break;
            }
            if(i > 6){
              console.error("任务异常，退出任务")
              break;
            }
          }
        }
        for(var ii = 0; !text("立即领奖").exists() && ii < 10; ii++){
          if(ii == 1){
            console.log("等待<立即领奖>标志");
          }
          sleep(1000);
        }
        if(text("立即领奖").exists()){
          console.log("立即领奖");
          sleep(1000);
        }else{
          console.log("任务超时");
        }
          console.log("返回");
          back();
        console.log("任务完成");
      }else if(text("浏览店铺").exists() && text("浏览店铺").findOne().parent().child(0).className() != "android.widget.Image"){
        console.info("开始<浏览店铺>任务");
        var SumTimes = text("浏览店铺").findOnce().parent().child(0).text()//总次数
        text("浏览店铺").findOne().parent().click();
        for(var i = 1; i <= SumTimes; i++){
          console.log("第" + i + "次浏览");
          for(var ii = 0; !text("任务完成").exists() && ii < 10; ii++){
            if(ii == 1){
              console.log("等待<任务完成>标志");
            }
            sleep(1000);
          }
          if(!text("集魔方 赢大奖").exists()){
            console.log("返回");
            back();
          }
          MoFangFragmentCheck();
        }
        console.log("任务完成");
      }else if(text("签到任务").exists() && text("签到任务").findOne().parent().child(0).className() != "android.widget.Image"){
        console.info("开始<每日签到>任务");
        text("签到任务").findOne().parent().click();
        sleep(1500);
        if(text("开心收下").exists()){
          console.info("发现签到弹窗");
          text("开心收下").findOne().click();
          sleep(500);
          console.log("开心收下");
        }
        console.log("任务完成");
        MoFangFragmentCheck();
      }else{
        break;
      }
      sleep(1500);
      times++;
      for(var i = 0; text("集魔方 赢大奖").findOne(1500) == null; i++){
        if(i == 0){
          console.log("准备返回活动界面");
        }
        else{
          console.log("再次返回");
        }
        back();
        sleep(1000);
        if(i == 5){
          Task_Log = Task_Log + "\n" +"无法返回活动界面，退出当前任务"
          console.log("无法返回活动界面，退出当前任务");
          return;
        }
      }
      if(times > 15){
        Task_Log = Task_Log + "\n" +"执行任务超过15次，可能进入死循环，准备退出任务"
        console.log("执行任务超过15次，可能进入死循环，准备退出任务");
        return;
      }
      MoFangFragmentCheck();
    }
    console.log("所有任务已完成");
    if(IsExchange == 1){
      if(text("做任务得魔方碎片").exists()){
        console.log("关闭任务列表，准备兑换");
        text("做任务得魔方碎片").findOne().parent().child(1).click();
        sleep(1000);
      }
      if(textStartsWith("魔方碎片进度").exists()){
        console.log("进入礼品仓库");
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
            console.log("确认");
            text("确认").findOne().click()
            sleep(1000);
            if(text("查看我的兑换 >").findOne(3000) != null){
              var LotteryResults = text("查看我的兑换 >").findOne().parent().parent().child(0).text()
              if(LotteryResults == "很遗憾没有抽中"){
                LotteryResults = "未中奖"
              }
              else if(LotteryResults == "兑换成功,获得"){
                if(text("兑换成功,获得").findOne().parent().child(1).childCount() == 2){
                  LotteryResults = "兑换成功，获得" + text("兑换成功,获得").findOne().parent().child(1).child(1).text()
                }
                else if(text("兑换成功,获得").findOne().parent().child(1).childCount() == 1){
                  LotteryResults = "兑换成功，获得" + text("兑换成功,获得").findOne().parent().child(1).child(0).text()
                }
              }
              Task_Log = Task_Log + "\n" + "兑换结果：" + LotteryResults
              console.log("兑换结果：" + LotteryResults);
              sleep(1000);
              text("查看我的兑换 >").findOne().parent().child(0).click();
              sleep(500);
            }
          }
          else{
            Task_Log = Task_Log + "\n" + "未成功兑换"
            console.log("未成功兑换");
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
    //TaskListState：1：任务列表已打开 2：经过点击打开 0：未能识别到任务列表
    if(text("做任务得魔方碎片").exists()){
      console.info("任务列表已打开");
      TaskListState = 1;
    }
    else if(text("集魔方 赢大奖").exists() && !text("做任务得魔方碎片").exists()){
      console.log("检测任务列表");
      //点击收集更多魔方碎片
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
      }else if(text("签到任务").exists()){
        text("签到任务").findOne().parent().parent().parent().child(1).click();
      }
      sleep(1500)
      if(!text("做任务得魔方碎片").exists()){
        console.log("未识别到任务列表");
        setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
        for(var i = 0; i < 1 && text("集魔方 赢大奖").exists() && !text("做任务得魔方碎片").exists(); i++){
          console.log("关闭");
          click(1374,1014);
          sleep(1000);
          console.log("再次打开任务列表");
          click(random(708, 1396),random(2544, 2760));
          sleep(1500);
          if(text("做任务得魔方碎片").exists()){
            break;
          }
        }
        if(i >= 1){
          //console.log("未识别到任务列表，即将使用另一识别方式");
          TaskListState = 0;
          return TaskListState;
        }
        if(text("做任务得魔方碎片").exists()){
          console.info("已打开任务列表")
          TaskListState = 2;
        }
      }
      else{
        console.info("已打开任务列表")
        TaskListState = 2;
      }
    }
    else{
      //console.info("当前界面未发现任务列表")
      TaskListState = 0;
    }
    return TaskListState;
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
//确保退出活动界面及当前账号
function OutAPP(SleepTime) {
  if(SleepTime == null){
    SleepTime=100
  }
  back();
  sleep(100);
  back();
  sleep(SleepTime);
  home();
}