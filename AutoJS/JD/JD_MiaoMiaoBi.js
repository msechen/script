/*
  京东<秒秒币>任务
https://t.me/LingFeng0918
  已知问题：
  Q：活动界面识别错、脚本执行中断、脚本卡在某个界面无法继续等情况
  A：上述情况，在页面加载缓慢的情况下，可能出现，更换良好的网络环境再执行脚本

  20220930 V2.9
  修改首页类任务返回方式
 */
var TaskName = "秒秒币"
Start();
console.info("开始任务");
let Task_Log = "重要日志汇总："
Task_Log = Task_Log + "\n" + "========== " + "\n" + "京东秒秒币" + "\n" + "———————"

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
  参数3：是否跳过首页任务和领券任务 0：不跳过，1：跳过
*/

if (files.exists("./账号明细.js")) {
  console.info("发现账号文件");
  var file = open("./账号明细.js")
  let AccountIDs = file.readlines()
  let t = 0
  for (var i = 0; i < AccountIDs.length; i++) {
    var str = AccountIDs[i];
    //处理格式
    var str = str.replace(/，/g, ",")
    var str = str.replace(/"/g, "")
    var AccountID = str.split(",");
    if (AccountID[0] == TaskName) {
      console.info("第" + (i + 1) + "行账号符合当前任务，开始执行")
      Run(AccountID[1], AccountID[2], AccountID[3]); home();
      console.info("第" + (i + 1) + "行账号任务执行完毕")
      //每5个账号清除一次分身有术的缓存
      if (t > 5 && (t / 5) % 1 === 0) {
        CleanCache("分身有术Pro", 1);
      }
      t++;
    } else {
      console.info("第" + (i + 1) + "行账号不属于当前任务，跳过")
    }
  }
  file.close();
}
else {
  //京东例子
  Run("京东", 0); home();
  //Run("京东",1);home();
  //Run("京东-2",1);home();
  //手动例子
  //Run("手动", 0); home();
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

function Run(LauchAPPName, IsSeparation, IsStartPage) {
  if (IsSeparation == null) {
    IsSeparation = 0 //0：正常应用 1：分身有术内部应用
  }
  if (IsStartPage == null) {
    IsStartPage = 0 //0：不跳过，1：跳过
  }
  var IsSeparation_info = ""
  var IsStartPage_info = ""
  if (IsSeparation == 0) {
    IsSeparation_info = "正常应用"
  } else if (IsSeparation == 1) {
    IsSeparation_info = "分身有术Pro"
  } else {
    IsSeparation_info = "无效参数，改为默认值“非分身应用”"
    IsSeparation = 0
  }
  if (IsStartPage == 0) {
    IsStartPage_info = "不跳过"
  } else if (IsStartPage == 1) {
    IsStartPage_info = "跳过"
  } else {
    IsStartPage_info = "无效参数，改为默认值“不跳过”"
    IsStartPage = 0
  }
  Task_Log = Task_Log + "\n" + LauchAPPName + "-" + IsSeparation_info
  console.info(
    "当前设置" + "\n" +
    "启动APP：" + LauchAPPName + "\n" +
    "是否分身：" + IsSeparation_info + "\n" +
    "是否跳过首页类任务：" + IsStartPage_info
  )
  console.log("复制活动京口令");
  Code = new Array("(I22boFYMgX)");//通过分享链接进入活动界面
  //活动界面检测
  EnterTheActivity(Code);
  //签到判断
  if (textContains("，可瓜分百万秒秒币").findOne(5000) != null) {
    let Button = textContains("，可瓜分百万秒秒币").findOne().parent()
    let ButtonText = ""
    for (var i = 0; i < 7; i++) {
      ButtonText = Button.child(i).child(1).text()
      if (ButtonText == "已领") {
        console.log("第" + (i + 1) + "天已签到");
        continue;
      } else if (ButtonText == "第" + (i + 1) + "天") {
        Task_Log = Task_Log + "\n" + "今日已完成签到"
        console.log("今日已完成签到");
        sleep(1000);
        break;
      } else {
        Button.child(i).child(1).click();
        sleep(1000);
        Task_Log = Task_Log + "\n" + "今日签到完成"
        console.log("今日签到完成");
        if (textContains("恭喜获得").findOne(3000) != null) {
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
  for (var i = 0; !textContains("分享秒杀").exists(); i++) {
    if (text("首页").exists() && desc("京东秒杀").exists()) {
      console.log("首页");
      sleep(1000);
      if (desc("京东秒杀").clickable(true).exists()) {
        console.log("京东秒杀");
        desc("京东秒杀").clickable(true).findOnce().click();
        sleep(3000);
        console.log("任务完成");
      }
      if (descContains("连签红包").exists()) {
        console.log("重新进入任务界面");
        descContains("连签红包").findOne().child(0).click();
        sleep(3000);
      }
      TaskListCheck();
    }
    if (i == 2) {
      console.log("正在加载任务内容，请稍后");
    }
    sleep(1000);
    if (i > 10) {
      console.log("任务加载超时");
      break;
    }
  }
  let times = 0
  while (true) {
    if (!text("去完成").exists()) {
      break;
    }
    let taskButtons = text("去完成").find()
    let taskButton, taskText, taskTitle
    if (taskButtons.empty()) {
      console.log("未找到合适的任务，退出");
      sleep(3000);
      break;
    }
    for (let i = 0; i < taskButtons.length; i++) {
      let item = taskButtons[i]
      if (item.parent().childCount() <= 5) {
        continue;
      }
      else {
        taskText = item.parent().child(item.indexInParent() - 1).text();
        if (taskText == "") {
          taskText = item.parent().child(item.indexInParent() - 1).child(0).text();
        }
        taskTitle = item.parent().child(item.indexInParent() - 2).text();
        if (taskText == "" | taskTitle == "") {
          Task_Log = Task_Log + "\n" + "未能正确识别到任务内容，退出当前账号"
          console.error("未能正确识别到任务内容，退出当前账号");
          return;
        }
        if (taskText.match(/从首页逛/) && IsStartPage != 0) {
          console.log("跳过首页类任务");
          continue;
        }
        taskButton = item
        break;
      }
    }
    if (taskButton) {
      console.info("开始<" + taskTitle + ">任务");
      taskButton.click();
    }
    else {
      console.log("未找到可自动完成的任务，退出当前任务");
      break;
    }

    if (taskText.match(/从首页逛秒杀/) && IsStartPage == 0) {
      RunTask(1);
    }
    else if (taskTitle.match(/分享秒杀/)) {
      RunTask(2);
    }
    else if (taskText.match(/浏览15s/)) {
      RunTask(3);
    }
    else if (taskText.match(/参与.*|浏览关注.*/)) {
      RunTask(4);
    }
    else if (taskText.match(/从首页逛领券/) && IsStartPage == 0) {
      RunTask(5);
    }
    else {
      RunTask(4);
    }
    times++;
    sleep(1000);
    if (!text("去完成").exists()) {
      break;
    }
    if (times > 25) {
      Task_Log = Task_Log + "\n" + "执行任务超过25次，可能进入死循环，准备退出任务"
      console.log("执行任务超过25次，可能进入死循环，准备退出任务");
      return;
    }
  }
  Task_Log = Task_Log + "\n" + "当前账号所有任务已完成"
  console.info("当前账号所有任务已完成");
  back();
  sleep(1000);
  back();
  sleep(1000);
  home();
  sleep(500);

  function TaskListCheck() {
    if (text("秒秒币可兑换更多红包哦").exists()) {
      console.info("任务列表已打开")
    }
    else if (textContains("活动太火爆，逛逛商品吧").exists()) {
      Task_Log = Task_Log + "\n" + "当前账号活动火爆，退出当前任务"
      console.error("当前账号活动火爆，退出当前任务");
      return;
    }
    else if (text("天天领红包").exists() && !text("秒秒币可兑换更多红包哦").exists()) {
      console.log("检测任务列表");
      if (text("更多任务").exists()) {
        text("更多任务").findOne().click();
        sleep(1000);
      }
      else {
        Task_Log = Task_Log + "\n" + "未找到任务列表，退出当前任务"
        console.error("未找到任务列表，退出当前任务");
        return;
      }
    }
  }

  function RunTask(KeyKind) {
    if (KeyKind == 1) {
      if (textContains("去完成任务").exists()) {
        textContains("去完成任务").findOne().click();
        console.log("去完成任务");
      }
      else {
        console.log("停留5秒，等待跳转");
        sleep(5000);
      }
      for (var i = 0; !text("首页").exists() && !desc("新品").exists(); i++) {
        if (i == 1) {
          console.log("等待跳转首页");
        }
        sleep(1000);
        if (i > 10) {
          console.error("首页任务异常，退出当前任务");
          back();
          sleep(500);
          back();
          sleep(500);
          back();
          break;
        }
      }
      if (text("首页").exists() && desc("京东秒杀").exists()) {
        console.log("首页");
        sleep(1000);
        if (desc("京东秒杀").clickable(true).exists()) {
          console.log("京东秒杀");
          desc("京东秒杀").clickable(true).findOnce().click();
          sleep(3000);
          console.log("任务完成");
        }
        home();
        EnterTheActivity(Code);
        // if (descContains("连签红包").exists()) {
        //   console.log("重新进入任务界面");
        //   descContains("连签红包").findOne().child(0).click();
        //   sleep(3000);
        // }
        // else if(id("fa").exists()){
        //   console.log("重新进入任务界面");
        //   id("fa").findOne().click()
        //   sleep(3000);
        // }
        // else{
        //   console.error("没有识别到活动入口，需要手动进入");
        // }
      }
      TaskCheck();
      //任务列表检测
      TaskListCheck();
    }
    else if (KeyKind == 2) {
      if (text("微信好友").findOne(2000) != null) {
        text("微信好友").findOne().parent().click();
        for (var i = 0; !text("去微信粘贴给好友").exists(); i++) {
          if (i == 1) {
            console.log("等待去微信粘贴");
          }
          sleep(1000);
          if (i > 10) {
            console.log("任务超时，跳过任务");
            return;
          }
        }
      }
      else {
        Task_Log = Task_Log + "\n" + "未识别到任务节点，退出当前任务"
        console.error("未识别到任务节点，退出当前任务");
        return;
      }
      if (text("去微信粘贴给好友").exists()) {
        console.log("去微信粘贴给好友");
        click(text("去微信粘贴给好友").findOne().bounds().centerX(), text("去微信粘贴给好友").findOne().bounds().centerY());
        sleep(1000);
      }
      console.log("任务完成");
      back();
      sleep(1000);
    }
    else if (KeyKind == 3) {
      for (var i = 0; !text("任务完成").exists(); i++) {
        if (i == 1) {
          console.log("等待任务完成");
        }
        sleep(1000);
        if (i > 15 && !text("浏览15s").exists()) {
          console.log("未识别到倒计时，准备返回");
          sleep(3000);
          break;
        }
        if (i > 35) {
          console.log("任务超时，准备返回");
          break;
        }
      }
      if (!text("秒秒币可兑换更多红包哦").exists()) {
        console.log("任务完成");
        back();
      }
    }
    else if (KeyKind == 4) {
      sleep(1000);
      if (!text("秒秒币可兑换更多红包哦").exists()) {
        console.log("任务完成");
        back();
      }
      else {
        console.log("任务异常，准备返回");
      }
    }
    else if (KeyKind == 5) {
      if (textContains("去完成任务").exists()) {
        textContains("去完成任务").findOne().click();
        console.log("去完成任务");
      }
      else {
        console.log("停留5秒，等待跳转");
        sleep(5000);
      }
      for (var i = 0; !text("首页").exists() && !desc("新品").exists(); i++) {
        if (i == 1) {
          console.log("等待跳转首页");
        }
        sleep(1000);
        if (i > 10) {
          console.error("领券频道任务异常，退出当前任务");
          back();
          sleep(500);
          back();
          sleep(500);
          back();
          break;
        }
      }
      if (className("android.widget.TextView").text("领券").exists()) {
        console.info("进入领券");
        className("android.widget.TextView").text("领券").findOnce().parent().click();
        sleep(1000);
      }
      if (className("android.widget.TextView").text("券后9.9").exists()) {
        console.info("进入券后9.9");
        className("android.widget.TextView").text("券后9.9").findOnce().parent().click();
        sleep(1000);
      }
      if (!textContains("任务完成").exists()) {
        console.log("等待任务完成");
        for (var i = 0; !textContains("任务完成").exists(); i++) {
          if (i == 1) {
            console.log("等待任务完成");
          }
          sleep(1000);
          if (i > 20) {
            console.error("已停留20秒，开始返回");
            back();
            sleep(500);
            break;
          }
        }
        if (i < 20) {
          console.log("任务完成");
        }
        back();
        sleep(2000);
      }
      home();
      EnterTheActivity(Code);
      // if (text("首页").exists() && desc("京东秒杀").exists()) {
      //   console.log("首页");
      //   sleep(1000);
      //   if (desc("京东秒杀").clickable(true).exists()) {
      //     console.log("京东秒杀");
      //     desc("京东秒杀").clickable(true).findOnce().click();
      //     sleep(3000);
      //     console.log("任务完成");
      //   }
      //   if (descContains("连签红包").exists()) {
      //     console.log("重新进入任务界面");
      //     descContains("连签红包").findOne().child(0).click();
      //     sleep(3000);
      //   }
      // }
      TaskCheck();
      //任务列表检测
      TaskListCheck();
    }
    for (var i = 0; text("秒秒币可兑换更多红包哦").findOne(2000) == null; i++) {
      console.log("返回任务界面");
      sleep(1000);
      while (id("ffp").exists() | id("gv3").exists() | text("确定").exists()) {
        if (id("ffp").exists() | id("gv3").exists()) {
          console.log("发现微信，准备返回");
          if (id("ffp").exists()) {
            id("ffp").findOne().click();
          }
          else if (id("gv3").exists()) {
            id("gv3").findOne().click();
          }
          sleep(1000);
        } else if (text("确定").exists()) {
          text("确定").findOne().click();
          console.log("确定");
          sleep(1000);
        }
        sleep(1000);
      }
      TaskListCheck();
      if (!text("秒秒币可兑换更多红包哦").exists()) {
        back();
      }
      if (i == 5) {
        Task_Log = Task_Log + "\n" + "无法返回任务界面，退出当前任务"
        console.log("无法返回任务界面，退出当前任务");
        return;
      }
    }
  }

  function EnterTheActivity(Code) {
    setClip(Code);
    if (LauchAPPName == "手动") {
      console.log("请手动打开APP，以便进行下一步");
      while (text("领京豆").findOne() == null) {
        if (text("立即查看").exists() | text("天天领红包").exists() |
          app.getAppName(currentPackage()) == "京东" | currentActivity() == "com.jingdong.app.mall.WebActivity") {
          break;
        }
        console.log("当前应用名:  " + app.getAppName(currentPackage()) + "\n"
          + "当前活动:  " + currentActivity() + "\n"
          + "未识别到京东相关界面，继续等待……");
        sleep(3000);
      }
      console.log("已检测到京东APP，等待下一步");
    }
    else {
      if (IsSeparation == 1) {
        console.info("打开分身有术Pro，准备调用分身");
        app.launchApp("分身有术Pro");
        for (var t = 0; !id("tv_app_name").className("android.widget.TextView").text(LauchAPPName).exists(); t++) {
          console.log("等待识别分身……");
          console.log("当前应用名:  " + app.getAppName(currentPackage()) + "\n"
            + "未识别到<" + LauchAPPName + ">，继续等待……");
          sleep(3000);
          if (id("im_close_clear").exists()) {
            console.log("发现加速弹窗");
            id("im_close_clear").findOne().click();
            console.log("关闭加速弹窗");
          }
          if (t > 10) {
            Task_Log = Task_Log + "\n" + "识别超时，退出当前任务"
            console.log("识别超时，退出当前任务");
            return;
          }
        }
        if (id("tv_app_name").className("android.widget.TextView").text(LauchAPPName).exists()) {
          console.log("找到分身<" + LauchAPPName + ">");
          text(LauchAPPName).findOne().parent().click();
          console.log("分身已启动，等待活动检测……");
        }
      }
      else {
        console.info("打开" + LauchAPPName + "");
        app.launchApp(LauchAPPName);
        console.log("等待任务检测……");
      }
    }
    //活动界面判断
    if (text("立即查看").findOne(2000) == null) {
      console.log("等待APP识别助力码");
      var j = 0;
      while (j < 15 | text("立即查看").findOne() == null) {
        if (text("立即查看").exists()) {
          break;
        }
        console.log(j + 1);
        j++;
        sleep(1000);
        if (j == 10) {
          console.log("未检测到新助力码，尝试再次复制");
          OutAPP(1000);
          setClip(Code);
          console.log("助力码重新写入剪切板");
          sleep(1000);
          if (LauchAPPName == "手动") {
            console.log("请手动打开APP，以便进行下一步");
            while (text("领京豆").findOne() == null) {
              if (text("立即查看").exists() | text("天天领红包").exists() |
                app.getAppName(currentPackage()) == "京东" | currentActivity() == "com.jingdong.app.mall.MainFrameActivity") {
                break;
              }
              console.log("当前应用名:  " + app.getAppName(currentPackage()) + "\n"
                + "当前活动:  " + currentActivity() + "\n"
                + "未识别到京东相关界面，继续等待……");
              sleep(3000);
            }
            console.log("检测到京东APP，等待再次检测");
          }
          else {
            if (IsSeparation == 1) {
              console.info("打开分身有术Pro，准备调用分身");
              app.launchApp("分身有术Pro");
              for (var t = 0; !id("tv_app_name").className("android.widget.TextView").text(LauchAPPName).exists(); t++) {
                console.log("等待识别分身……");
                console.log("当前应用名:  " + app.getAppName(currentPackage()) + "\n"
                  + "未识别到<" + LauchAPPName + ">，继续等待……");
                sleep(3000);
                if (id("im_close_clear").exists()) {
                  console.log("发现加速弹窗");
                  id("im_close_clear").findOne().click();
                  console.log("关闭加速弹窗");
                }
                if (t > 10) {
                  console.log("识别超时，退出当前任务");
                  return;
                }
              }
              if (id("tv_app_name").className("android.widget.TextView").text(LauchAPPName).exists()) {
                console.log("找到分身<" + LauchAPPName + ">");
                text(LauchAPPName).findOne().parent().click();
                console.log("分身已启动，等待活动检测……");
              }
            }
            else {
              console.info("打开" + LauchAPPName + "");
              app.launchApp(LauchAPPName);
            }
            console.log("重启APP成功，等待再次检测");
            sleep(1000);
          }
        }
        if (j > 15) {
          console.error("超时未检测到京口令，跳过任务");
          sleep(1000);
          break;
        }
      }
      if (j > 15) {
        //超时则跳出当前任务
        console.info("跳过当前任务");
        return;
      }
    }
    if (text("立即查看").exists()) {
      console.log("立即查看");
      text("立即查看").findOne().click();
      sleep(1000);
      console.log("等待跳转活动界面");
    }
  }

  function TaskCheck() {
    for (var i = 0; !text("天天领红包").exists(); i++) {
      sleep(1000);
      if (text("天天领红包").exists()) {
        break;
      }
      sleep(1000);
      console.log("等待识别<秒秒币>活动界面");
      if (i > 30) {
        Task_Log = Task_Log + "\n" + "识别超时，退出当前任务"
        console.error("识别超时，退出当前任务");
        return;
      }
      // if(textContains("任务完成").exists()){
      //   click(textContains("任务完成").findOne().bounds().centerX(),textContains("任务完成").findOne().bounds().centerY())
      //   sleep(1000);
      // }
    }
    if (text("天天领红包").exists()) {
      console.info("进入活动界面");
      sleep(1000);
    }
  }
}

function CleanCache(LauchAPPName, Isclean) {
  if (LauchAPPName == "分身有术Pro" && Isclean == 1) {
    console.info("打开分身有术Pro，准备清理缓存");
    app.launchApp("分身有术Pro");
    console.log("等待清理");
    for (var i = 0; !id("iv_home_clean").exists() && i < 15; i++) {
      sleep(1000);
      if (i == 5 | i == 10) {
        console.log("已等待" + i + "秒");
      }
      if (id("iv_home_clean").exists()) {
        id("iv_home_clean").findOne().click();
        console.log("加速完毕");
        sleep(3000);
        break;
      }
    }
    if (i >= 15) {
      console.error("识别超时，未能完成加速");
    }
    if (id("im_close_clear").exists()) {
      sleep(2000);
      id("im_close_clear").findOne().click();
      console.log("关闭加速弹窗");
    }
  }
  else {
    console.error("参数不符，退出清理任务");
  }
}

//确保退出活动界面及当前账号
function OutAPP(SleepTime) {
  if (SleepTime == null) {
    SleepTime = 100
  }
  back();
  sleep(100);
  back();
  sleep(SleepTime);
  home();
}
/*
  20220228 V1.0
  新增脚本
  20220301 V1.1
  修改日志提示内容
  部分任务缩短等待时间
  去掉分享任务参数
  20220302 V1.2
  修改分享任务返回逻辑
  20220309 V1.3
  增加浏览时长任务在计时失败的判断
  修改任务返回的判断逻辑，避免直接退出任务界面
  20220309 V1.3.1
  调整部分日志
  20220320 V1.4
  缩短任务间隙等待时间
  20220426 V1.5
  增加任务死循环检测
  20220502 V1.6
  增加微信弹窗异常处理
  20220503 V1.6.1
  修改微信弹窗异常处理
  20220520 V1.7
  修复新版本微信弹窗异常时无法返回问题
  20220520 V1.8
  读取脚本所在文件夹中的账号明细文件执行任务，具体见文件说明
  20220531 V1.9
  增加识别不成功时的重启代码
  20220601 V1.9.1
  增加任务等待时间，避免任务识别错
  增加任务循环次数，避免提前退出任务
*/
