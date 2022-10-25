/*
  京东<点点券>任务
https://t.me/LingFeng0918
  已知问题：
  Q：收取最后一个点点券气泡的时候有报错：Wrapped java.lang.IllegalArgumentException
  A：根据当前反馈，应是分身运行过多导致缓存不足，可在多个分身中穿插使用分身有术缓存清理代码

  Q：活动界面识别错、脚本执行中断、脚本卡在某个界面无法继续等情况
  A：上述情况，在页面加载缓慢的情况下，可能出现，更换良好的网络环境再执行脚本

  20220927 V7.6
  新增立领200任务
*/
var TaskName = "点点券"
Start(TaskName);
console.info("开始任务");
let Task_Log = "重要日志汇总："
Task_Log = Task_Log + "\n" + "========== " + "\n" + "京东点点券" + "\n" + "———————"
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
  参数3：是否进入券后9.9抽奖，0：不参与抽奖，1：参与抽奖

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
  //Run("京东",0,1);home();
  //Run("京东",1,0);home();
  //Run("京东-2",1,0);home();
  //手动例子
  Run("手动", 0, 0); home();
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

function Run(LauchAPPName, IsSeparation, IsLotteryDraw) {
  if (IsSeparation == null) {
    IsSeparation = 0 //0：正常应用 1：分身有术内部应用
  }
  if (IsLotteryDraw == null) {
    IsLotteryDraw = 0 //0：不参与抽奖 1：参与抽奖
  }
  var IsSeparation_info = ""
  var IsLotteryDraw_info = ""
  if (IsSeparation == 0) {
    IsSeparation_info = "正常应用"
  } else if (IsSeparation == 1) {
    IsSeparation_info = "分身有术Pro"
  } else {
    IsSeparation_info = "无效参数，改为默认值“非分身应用”"
    IsSeparation = 0
  }
  if (IsLotteryDraw == 0) {
    IsLotteryDraw_info = "不参与抽奖"
  } else if (IsLotteryDraw == 1) {
    IsLotteryDraw_info = "参与抽奖"
  } else {
    IsLotteryDraw_info = "无效参数，改为默认值“不参与抽奖”"
    IsLotteryDraw = 0
  }
  console.info(
    "当前设置" + "\n" +
    "启动APP：" + LauchAPPName + "\n" +
    "是否分身：" + IsSeparation_info + "\n" +
    "是否抽奖：" + IsLotteryDraw_info
  )
  Task_Log = Task_Log + "\n" + LauchAPPName + "-" + IsSeparation_info + "-" + IsLotteryDraw_info
  if (LauchAPPName == "手动") {
    console.log("请手动打开APP，以便进行下一步");
    while (text("领京豆").findOnce() == null) {
      if (textContains("券后9.9").exists() |
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
    while (text("待收取").exists() | text("领取任务").exists() | text("继续完成").exists()) {//增加2次弹出的任务关键字，避免提前跳出循环
      let Buttons = text("我的点点券").findOne(5000).parent().parent().parent().children()
      if (Buttons.empty()) {
        console.info("无点点券收取");
      }
      else {
        for (var i = 1; i < Buttons.length - 3; i++) {
          if (i == 1) {
            console.info("发现可收取点点券");
          }
          let Button = Buttons[i]
          ButtonText = Button.child(0).child(0).child(0).text()
          if (ButtonText.match(/[+][1-9].*/)) {
            console.log("第" + i + "次收点点券");
            //有2组任务的时候，多停留1秒
            if (textStartsWith("浏览2组").exists()) {
              Button.click();
              sleep(1000);
            }
            else {
              Button.click();
              sleep(100);
            }
            if (text("每日攒点点券").findOne(3000) == null) {
              console.log("点击错误，返回");
              back();
              sleep(500);
            }
            else {
              console.log("收取成功");
              sleep(500);
            }
            //这组任务是收取之后才出现，故再做一次判断
            if (text("领取任务").exists() | text("继续完成").exists()) {
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
  if (textContains("点点券将在7天内过期，快去使用吧").exists()) {
    var log = textContains("点点券将在7天内过期，快去使用吧").findOne().text()
    Task_Log = Task_Log + "\n" + "当前账号" + log.replace("您", "")
    console.error("当前账号" + log.replace("您", ""));
    sleep(2000);
  }
  back();
  sleep(1000);
  back();
  sleep(1000);
  home();
  sleep(500);

  function RunAllTask() {
    if (text("领取任务").exists() | text("继续完成").exists()) {
      let times = 0
      while (true) {
        if (textStartsWith("浏览2组会场").exists() && (textStartsWith("浏览2组会场").findOnce().parent().child(3).text() == "领取任务"
          | textStartsWith("浏览2组会场").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1, "浏览2组会场", 1);
        }
        else if (textStartsWith("浏览2组商品").exists() && (textStartsWith("浏览2组商品").findOnce().parent().child(3).text() == "领取任务"
          | textStartsWith("浏览2组商品").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1, "浏览2组商品", 1);
        }
        else if (textStartsWith("浏览2组活动").exists() && (textStartsWith("浏览2组活动").findOnce().parent().child(3).text() == "领取任务"
          | textStartsWith("浏览2组活动").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1, "浏览2组活动", 1);
        }
        else if (text("浏览精选商品").exists() && (text("浏览精选商品").findOnce().parent().child(3).text() == "领取任务"
          | text("浏览精选商品").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1, "浏览精选商品", 1);
        }
        else if (text("浏览精选活动").exists() && (text("浏览精选活动").findOnce().parent().child(3).text() == "领取任务"
          | text("浏览精选活动").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1, "浏览精选活动", 1);
        }
        else if (textStartsWith("浏览精选活动3s").exists() && (textStartsWith("浏览精选活动3s").findOnce().parent().child(3).text() == "领取任务"
          | textStartsWith("浏览精选活动3s").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1, "浏览精选活动3s", 1);
        }
        else if (text("关注精选频道").exists() && (text("关注精选频道").findOnce().parent().child(3).text() == "领取任务"
          | text("关注精选频道").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1, "关注精选频道", 1);
        }
        else if (textStartsWith("关注浏览10s").exists() && (textStartsWith("关注浏览10s").findOnce().parent().child(3).text() == "领取任务"
          | textStartsWith("关注浏览10s").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1, "关注浏览10s", 2);
        }
        else if (text("领暴力好券").exists() && (text("领暴力好券").findOnce().parent().child(3).text() == "领取任务"
          | text("领暴力好券").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1, "领暴力好券", 3);
        }
        else if (text("逛领券15s").exists() && (text("逛领券15s").findOnce().parent().parent().child(3).text() == "领取任务"
          | text("逛领券15s").findOnce().parent().parent().child(3).text() == "继续完成")) {
          RunTask(2, "逛领券15s", 4);
        }
        else if (text("立领60").exists() && (text("立领60").findOnce().parent().parent().child(3).text() == "领取任务"
          | text("立领60").findOnce().parent().parent().child(3).text() == "继续完成")) {
          RunTask(2, "立领60", 4);
        }
        else if (text("立领60点点券").exists() && (text("立领60点点券").findOnce().parent().parent().child(3).text() == "领取任务"
          | text("立领60点点券").findOnce().parent().parent().child(3).text() == "继续完成")) {
          RunTask(2, "立领60点点券", 4);
        }
        else if (text("逛30s").exists() && (text("逛30s").findOnce().parent().parent().child(3).text() == "领取任务"
          | text("逛30s").findOnce().parent().parent().child(3).text() == "继续完成")) {
          RunTask(2, "逛30s", 4);
        }
        else if (text("点击“领券”").exists() && (text("点击“领券”").findOnce().parent().child(3).text() == "领取任务"
          | text("点击“领券”").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1, "点击“领券”", 4);
        }
        else if (text("逛折学系频道10s").exists() && (text("逛折学系频道10s").findOnce().parent().child(3).text() == "领取任务"
          | text("逛折学系频道10s").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1, "逛折学系频道10s", 5);
        }
        else if (text("点击券后9.9").exists() && (text("点击券后9.9").findOnce().parent().child(3).text() == "领取任务"
          | text("点击券后9.9").findOnce().parent().child(3).text() == "继续完成")) {
          RunTask(1, "点击券后9.9", 4);
        }
        else if (text("立领100").exists() && (text("立领100").findOnce().parent().parent().child(3).text() == "领取任务"
          | text("立领100").findOnce().parent().parent().child(3).text() == "继续完成")) {
          RunTask(2, "立领100", 4);
        }
        else if (text("领200").exists() && (text("领200").findOnce().parent().parent().child(3).text() == "领取任务"
          | text("领200").findOnce().parent().parent().child(3).text() == "继续完成")) {
          RunTask(2, "领200", 4);
        }
        else if (text("立领200").exists() && (text("立领200").findOnce().parent().parent().child(3).text() == "领取任务"
          | text("立领200").findOnce().parent().parent().child(3).text() == "继续完成")) {
          RunTask(2, "立领200", 4);
        }
        else if (text("领500").exists() && (text("领500").findOnce().parent().parent().child(3).text() == "领取任务"
          | text("领500").findOnce().parent().parent().child(3).text() == "继续完成")) {
          RunTask(2, "领500", 4);
        }
        else if (text("领取任务").exists()) {
          console.info("领取任务");
          text("领取任务").findOnce().click();
          sleep(1000);
          console.log("任务完成");
        }
        else if (text("继续完成").exists()) {
          console.info("继续完成");
          text("继续完成").findOnce().click();
          sleep(1000);
          console.log("任务完成");
        }
        times++;
        sleep(1000);
        for (var i = 0; !text("每日攒点点券").exists() && i < 5; i++) {
          console.log("返回");
          back();
          sleep(2000);
          ActiveInterface();
          if (i == 5) {
            Task_Log = Task_Log + "\n" + "无法返回任务界面，准备退出任务"
            console.log("无法返回任务界面，准备退出任务");
            return;
          }
        }
        if (!text("领取任务").exists() && !text("继续完成").exists()) {
          //所有任务已完成，退出循环
          break;
        }
        if (times > 15) {
          Task_Log = Task_Log + "\n" + "执行任务超过15次，可能进入死循环，准备退出任务"
          console.log("执行任务超过15次，可能进入死循环，准备退出任务");
          return;
        }
      }
    }
    console.info("所有任务已完成");
    sleep(500);

    function RunTask(LevelNum, TaskName, KeyKind) {
      console.info("开始<" + TaskName + ">任务");
      if (LevelNum == 1) {
        textStartsWith(TaskName).findOnce().parent().child(3).click();
      }
      else if (LevelNum == 2) {
        textStartsWith(TaskName).findOnce().parent().parent().child(3).click();
      }
      else {
        Task_Log = Task_Log + "\n" + "任务参数异常，退出任务"
        console.error("任务参数异常，退出任务");
        return;
      }
      if (KeyKind == 1 | KeyKind == 2 | KeyKind == 3) {
        var TaskKey = TaskName + "（"
        for (var i = 0; !textContains(TaskKey).exists(); i++) {
          sleep(1000);
          if (i == 2 | i == 4 | i == 6 | i == 8) {
            console.log("等待识别<" + TaskKey + ">");
          }
          if (i > 10) {
            console.error("关键节点识别超时，退出任务");
            return;
          }
        }
        if (textContains("/10）").exists()) {
          var t = 10
        } else if (textContains("/9）").exists()) {
          var t = 9
        } else if (textContains("/8）").exists()) {
          var t = 8
        } else if (textContains("/7）").exists()) {
          var t = 7
        } else if (textContains("/6）").exists()) {
          var t = 6
        } else if (textContains("/5）").exists()) {
          var t = 5
        } else if (textContains("/4）").exists()) {
          var t = 4
        } else if (textContains("/3）").exists()) {
          var t = 3
        } else if (textContains("/2）").exists()) {
          var t = 2
        } else if (textContains("/1）").exists()) {
          var t = 1
        }
        if (KeyKind == 1) {
          for (var i = 0; i < t; i++) {
            console.log("第" + (i + 1) + "次浏览");
            textStartsWith(TaskKey).findOnce().parent().child(2).child(t - i - 1).click();
            sleep(1000);
            if (TaskName == "浏览精选活动3s") {
              sleep(3000)
            }
            if (!textStartsWith(TaskKey).exists()) {
              back();
              sleep(1000);
            }
            for (var ii = 0; !textStartsWith(TaskKey).exists(); ii++) {
              console.log("返回异常，再次尝试返回");
              back();
              sleep(2000);
              if (ii > 5) {
                Task_Log = Task_Log + "\n" + "任务异常，请重新运行脚本"
                console.error("任务异常，请重新运行脚本");
                return;
              }
            }
            if (i >= 15) {
              Task_Log = Task_Log + "\n" + "执行任务超过15次，可能进入死循环，准备退出任务"
              console.error("执行任务超过15次，可能进入死循环，准备退出任务");
              return;
            }
          }
          console.log("浏览完成");
        } else if (KeyKind == 2) {
          for (var i = 0; text("浏览并关注").exists(); i++) {
            console.log("第" + (i + 1) + "次关注浏览");
            textStartsWith(TaskKey).findOnce().parent().child(2).child(0).click();
            for (var ii = 0; !text("已完成浏览").exists(); ii++) {
              sleep(1000);
              if (ii == 1) {
                console.log("等待<任务完成>标志");
              }
              if (ii > 20) {
                console.log("任务已超时，准备返回");
                back();
                sleep(1000);
                break;
              }
            }
            if (text("已完成浏览").exists()) {
              console.log("任务完成，返回");
              back();
              sleep(1000);
            }
            for (var ii = 0; !textStartsWith(TaskKey).exists(); ii++) {
              console.log("返回异常，再次尝试返回");
              back();
              sleep(2000);
              if (ii > 5) {
                Task_Log = Task_Log + "\n" + "任务异常，请重新运行脚本"
                console.error("任务异常，请重新运行脚本");
                return;
              }
            }
            sleep(2000);
            if (i >= 15) {
              Task_Log = Task_Log + "\n" + "执行任务超过15次，可能进入死循环，准备退出任务"
              console.error("执行任务超过15次，可能进入死循环，准备退出任务");
              return;
            }
          }
          console.log("关注浏览完成");
        } else if (KeyKind == 3) {
          for (var i = 0; text("立即领取").exists(); i++) {
            console.log("第" + (i + 1) + "次领券");
            text("立即领取").findOne().parent().click();
            sleep(2000);
            if (i >= 15) {
              Task_Log = Task_Log + "\n" + "执行任务超过15次，可能进入死循环，准备退出任务"
              console.error("执行任务超过15次，可能进入死循环，准备退出任务");
              return;
            }
          }
          console.log("领券完成");
        }
        else {
          Task_Log = Task_Log + "\n" + "任务参数异常，退出任务"
          console.error("任务参数异常，退出任务");
          return;
        }
        //关闭浮窗
        console.log("关闭弹窗");
        for (var i = 0; !textStartsWith(TaskKey).exists(); i++) {
          console.log("关闭按钮异常，再次尝试返回");
          back();
          sleep(2000);
          if (i > 5) {
            Task_Log = Task_Log + "\n" + "任务异常，请重新运行脚本"
            console.error("任务异常，请重新运行脚本");
            return;
          }
        }
        let CloseButton = textStartsWith(TaskKey).findOnce().parent().child(0)
        if (CloseButton) {
          CloseButton.click();
          console.log("关闭成功");
          sleep(500);
        }
      }
      else if (KeyKind == 4) {
        console.log("等待跳转首页，可手动");
        if (text("去完成任务").findOne(3000) != null) {
          text("去完成任务").findOne(3000).parent().click();
          while (true) {
            if (className("android.widget.TextView").text("券后9.9").exists()) {
              console.log("进入券后9.9");
              className("android.widget.TextView").text("券后9.9").findOnce().parent().click();
              sleep(1000);
              break;
            } else if (className("android.widget.TextView").text("领券").exists()) {
              console.log("进入领券");
              className("android.widget.TextView").text("领券").findOnce().parent().click();
              sleep(1000);
              break;
            }
          }
        }
        console.log("等待任务完成")
        for (var i = 0; !textStartsWith("任务完成").exists(); i++) {
          sleep(1000);
          if (i == 10 | i == 20 | i == 30) {
            console.log("已等待" + i + "秒");
          }
          if (i == 35) {
            console.log("等待任务完成标识");
          }
          if (textStartsWith("任务完成").exists()) {
            console.log("任务完成");
            break;
          }
          if (text("已完成浏览").exists()) {
            console.log("任务完成");
            break;
          }
        }
        if (textStartsWith("任务完成").exists()) {
          textStartsWith("任务完成").findOne().parent().click();
          sleep(1000);
        }
        else if (text("已完成浏览").exists()) {
          text("已完成浏览").findOne().parent().click();
          sleep(1000);
        }
        sleep(1000);
        ActiveInterface();
      }
      else if (KeyKind == 5) {
        for (var i = 0; i < 12; i++) {
          sleep(1000);
          if (i == 2 | i == 4 | i == 6 | i == 8 | i == 10) {
            console.log("已浏览" + i + "s");
          }
          if (i >= 12) {
            break;
          }
        }
        console.log("已完成浏览");
        if (!text("每日攒点点券").exists()) {
          back();
        }
      }
    }
  }

  function ActiveInterface() {
    //活动界面判断&点点券签到
    for (var i = 0; !text("每日攒点点券").exists() && i < 10; i++) {
      if (i == 4 && app.getAppName(currentPackage()) == "京东") {
        console.log("尝试返回");
        back();
        sleep(500);
      }
      if (i == 5 && className("android.view.View").desc("首页").exists() && desc("新品").exists()) {
        console.log("尝试刷新首页");
        desc("新品").findOne().click();
        sleep(500);
        desc("首页").findOne().click();
        sleep(2500);
      }
      if (i == 6) {
        console.log("尝试重启APP");
        back();
        sleep(500);
        back();
        sleep(500);
        back();
        sleep(500);
        home();
        if (LauchAPPName == "手动") {
          console.log("请手动打开APP，以便进行下一步");
          while (text("领京豆").findOnce() == null) {
            if (textContains("券后9.9").exists() |
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
        sleep(3000);
      }
      if (i == 10) {
        Task_Log = Task_Log + "\n" + "无法找到活动界面,即将退出任务"
        console.log("无法找到活动界面,即将退出任务");
        return;
      }
      if (className("android.widget.TextView").text("领券").exists()) {
        console.info("进入领券");
        className("android.widget.TextView").text("领券").findOnce().parent().click();
        sleep(1000);
        for (var i = 0; text("签到领奖励").exists(); i++) {
          if (i == 0) {
            console.log("签到领奖励");
          }
          text("签到领奖励").findOne().parent().click();
          if (className("android.widget.ImageView").desc("关闭弹窗").findOne(2000) != null) {
            console.log("签到完成");
            className("android.widget.ImageView").desc("关闭弹窗").findOne().click();
            console.log("关闭弹窗");
          }
          else {
            console.error("签到未成功，重新签到")
            swipe((device.width / 3) * 2, (device.height / 6), (device.width / 3) * 2, (device.height / 6) * 3, 500);  //向下滑动，确保是在顶部位置
          }
          sleep(1000);
          if (i > 3) {
            console.error("签到未成功，跳过")
            break;
          }
        }
        if (className("android.view.View").desc("9.9下沉").exists() && IsLotteryDraw == 1) {
          console.log("券后9.9");
          className("android.view.View").desc("9.9下沉").findOne().parent().parent().click();
          for (var ii = 0; !textStartsWith("抽奖次数：").exists(); ii++) {
            if (textStartsWith("抽奖次数：").exists()) {
              break;
            }
            console.log("等待识别<抽奖次数>");
            sleep(2000);
            if (ii > 3) {
              Task_Log = Task_Log + "\n" + "识别超时，跳过抽奖任务"
              console.error("识别超时，跳过抽奖任务");
              break;
            }
          }
          if (text("抽奖次数：0").exists()) {
            console.log("抽奖次数已用完");
          }
          else if (textStartsWith("抽奖次数：").exists() && text("点击拿奖励").exists()) {
            console.log("点击拿奖励");
            text("点击拿奖励").findOnce().click();
            console.log("等待进入抽奖界面");
            sleep(2000);
            textStartsWith("抽奖次数：").waitFor();
            for (var ii = 1; textStartsWith("抽奖次数：").exists(); ii++) {
              console.log("第" + ii + "次抽奖");
              sleep(500)
              textStartsWith("抽奖次数：").findOne().parent().click();
              console.log("等待开奖");
              sleep(3000);
              if (text("收下奖品").findOne() != null) {
                console.log("收下奖品");
                text("收下奖品").findOne().click();
              } else if (text("再抽一次").exists()) {
                console.log("没奖品");
                text("再抽一次").findOne().parent().parent().parent().child(1).click();
              } else {
                console.log("未识别到奖品");
                sleep(1000);
              }
              if (ii == 3) {
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
      if (className("android.widget.TextView").text("券后9.9").exists()) {
        console.info("进入券后9.9");
        className("android.widget.TextView").text("券后9.9").findOnce().parent().click();
        console.log("等待加载……");
        if (IsLotteryDraw == 1) {
          for (var ii = 0; !textStartsWith("抽奖次数：").exists(); ii++) {
            if (textStartsWith("抽奖次数：").exists()) {
              break;
            }
            console.log("等待识别<抽奖次数>");
            sleep(2000);
            if (ii > 3) {
              console.error("识别超时，跳过抽奖任务");
              Task_Log = Task_Log + "\n" + "识别超时，跳过抽奖任务"
              break;
            }
          }
          if (text("抽奖次数：0").exists()) {
            console.log("抽奖次数已用完");
          }
          else if (textStartsWith("抽奖次数：").exists() && text("点击拿奖励").exists()) {
            console.log("点击拿奖励");
            text("点击拿奖励").findOnce().click();
            console.log("等待进入抽奖界面");
            sleep(2000);
            textStartsWith("抽奖次数：").waitFor();
            for (var ii = 1; textStartsWith("抽奖次数：").exists(); ii++) {
              console.log("第" + ii + "次抽奖");
              sleep(500)
              textStartsWith("抽奖次数：").findOne().parent().click();
              console.log("等待开奖");
              sleep(3000);
              if (text("收下奖品").findOne() != null) {
                console.log("收下奖品");
                text("收下奖品").findOne().click();
              } else if (text("再抽一次").exists()) {
                console.log("没奖品");
                text("再抽一次").findOne().parent().parent().parent().child(1).click();
              } else {
                console.log("未识别到奖品");
                sleep(1000);
              }
              if (ii == 3) {
                console.log("抽奖次数已达上限");
                break;
              }
              sleep(2000);
            }
            sleep(1000);
            back();
          }
        }
        else {
          console.log("跳过抽奖任务");
          sleep(2000);
        }
        console.info("领券");
        sleep(1000);
        back();
        sleep(1000);
      }
      if (desc("领券中心").exists()) {
        sleep(1000);
        for (var i = 0; text("签到领奖励").exists(); i++) {
          if (i == 0) {
            console.log("签到领奖励");
          }
          text("签到领奖励").findOne().parent().click();
          if (className("android.widget.ImageView").desc("关闭弹窗").findOne(2000) != null) {
            console.log("签到完成");
            className("android.widget.ImageView").desc("关闭弹窗").findOne().click();
            console.log("关闭弹窗");
          }
          else {
            console.error("签到未成功，重新签到")
            swipe((device.width / 3) * 2, (device.height / 6), (device.width / 3) * 2, (device.height / 6) * 3, 500);  //向下滑动，确保是在顶部位置
          }
          sleep(1000);
          if (i > 3) {
            console.error("签到未成功，跳过")
            break;
          }
        }
        console.info("寻找点点券入口");
        if (desc("领券中心").findOne(3000) != null) {
          if (desc("领券中心").findOne().parent().child(3).clickable() == true) {
            desc("领券中心").findOne().parent().child(3).click();
          }
          else {
            desc("领券中心").findOne().parent().child(2).click();
          }
          console.info("进入点点券");
        }
        console.log("等待加载点点券……");
        console.log("如一直无响应，可手动进入活动，脚本将继续执行");
        for (var ii = 0; !text("每日攒点点券").exists(); ii++) {
          sleep(1500);
          if (text("每日攒点点券").exists()) {
            break;
          }
          console.log("等待识别<每日攒点点券>");
          sleep(1500);
          if (ii == 2 && desc("领券中心").exists()) {
            console.info("再次尝试进入点点券");
            if (desc("领券中心").findOne().parent().child(3).clickable() == true) {
              desc("领券中心").findOne().parent().child(3).click();
            }
            else {
              desc("领券中心").findOne().parent().child(2).click();
            }
          }
          if (ii > 5) {
            Task_Log = Task_Log + "\n" + "关键节点识别超时，退出当前账号"
            console.error("关键节点识别超时，退出当前账号");
            return;
          }
        }
      }
      if (!text("每日攒点点券").exists()) {
        console.log("未找到活动界面，请手动进入，如遮挡了入口，可关闭此悬浮窗");
        sleep(3000);
      }
    }
    console.show();
    if (text("每日攒点点券").exists() && (text("待领取").exists() | text("天天攒天天兑").exists())) {
      console.info("任务列表需要展开");
      if (text("待领取").exists()) {
        var KeyButton = text("待领取").findOne().parent()
      }
      else if (text("天天攒天天兑").exists()) {
        var KeyButton = text("天天攒天天兑").findOne().parent()
      }
      sleep(500);
      console.log("展开任务列表");
      KeyButton.click();
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
/*
  20211009 V1.0
  支持手动、自动两种打开APP方式
  由于悬浮窗会遮挡点点券的入口和点击位置，中途可手动关闭浮窗，不影响任务
  20211009 V1.1
  增加逛30秒任务
  增加60点点券收取判断
  修复逛精彩活动任务结束后不关闭弹窗问题
  20211009 V1.2
  修复60点点券任务报错问题
  增加寻找活动界面函数
  尝试修复60点点券任务无法跳转问题
  增加签到50点点券收取判断
  20211011 V1.3
  增加浏览2组会场、浏览2组商品和暴力好券三个任务
  去除退出APP函数，只回到桌面
  20211011 V1.4
  增加逛15秒任务
  收取点点券上限设置为6次，避免网络卡顿导致无限循环
  20211012 V1.5
  增加收取每日签到气泡
  加长返回等待时间，避免重复执行任务
  增加普通任务领取时的日志
  20211015 V1.6
  增加浏览10秒并关注任务
  修复不识别继续完成状态的任务问题
  收取点券上限调整为10次，避免出现未完全收取的情况
  20211015 V1.7
  调整浏览10秒并关注任务的点击按钮，改为控件点击
  20211025 V1.8
  增加40点点券气泡的收取动作
  20211027 V1.9
  浏览精选任务增加到8次循环
  20211031 V1.9.1
  新增浏览精选商品任务
  浏览精选任务增加到10次循环
  20211031 V2.0
  调试未完成，慎重升级
  增加逛15s和逛30s任务
  20211031 V2.1
  修复浏览关注任务有弹窗无法返回导致报错问题
  20211102 V2.2
  调整逛15s和逛30s任务执行逻辑
  20211102 V2.3
  调整券后9.9界面进入退出逻辑
  20211102 V2.3.1
  个别调整
  20211102 V2.4
  修改逛30秒任务跳转后的日志
  20211110 V2.5
  修改点点券收取动作
  20211110 V2.6
  调整15s、30s任务日志
  20211111 V2.7
  调整展开任务列表语句触发方式
  20211111 V2.7.1
  调整悬浮窗触发显示时机
  20211115 V3.0
  增加分身调用参数
  20211115 V3.0.1
  去除分辨率自适应，避免坐标点击错位
  20211115 V3.0.2
  缩短逛15秒任务跳转首页等待时间
  修改应用识别关键字
  20211115 V3.0.3
  删除观察代码，修改部分注释
  20211122 V3.1
  增加识别不到活动界面时，自动重启APP功能
  增加券后9.9抽奖任务，首页是领券的也自动进券后9.9消耗抽奖机会
  20211123 V3.2
  修复上一版本缺失手动模式问题
  20211123 V3.2.1
  收取点点券的日志调整，方便跟踪问题
  20211123 V3.3
  增加分身有术缓存清理，多号执行的时候，可以隔几个号执行一次
  20211124 V3.3.1
  浏览任务循环十次修改
  20211124 V3.3.2
  增加分身识别时的控件提示，方便追踪问题
  20211125 V3.3.3
  浏览精选活动任务修改
  20211130 V3.4
  调整任务浏览方式，略微提升任务速度
  20211201 V3.5
  收取点点券动作后增加一组任务判断
  修复关闭弹窗时报错问题
  20211201 V3.6
  修复浏览途中无法返回导致报错问题
  增加任务关键字，为下次精简代码作准备
  20211201 V3.7
  将重复的任务代码合并为RunTask函数，精简代码
  20211201 V3.7.1
  修改任务循环，避免漏任务
  20211201 V3.8
  修复识别不成功时不会重启APP问题
  20211203 V3.9
  大幅提高点点券收取速度
  缩短部分操作等待时间
  20211203 V3.9.1
  点点券收取暂用坐标点击
  20211203 V3.9.2
  券后9.9抽奖增加判断
  20211203 V3.9.3
  券后9.9抽奖调整判断逻辑
  20211206 V4.0
  点点券收取逻辑调整
  逛一逛任务增加超时刷新
  20211207 V4.1
  增加浏览2组活动任务
  增加领200浏览任务
  20211207 V4.2
  缓存清理增加按钮判断，超时未识别到按钮自动退出
  20211207 V4.2.1
  增加缓存清理时加速完成的弹窗判断
  20211207 V4.3
  调整点点券收取后触发的新任务逻辑
  20211207 V4.4
  调整任务执行逻辑，每次收取点点券时均对任务列表进行任务判断，避免漏任务
  20211207 V4.4.1
  新增每次收取点点券时，对界面关键字进行判断，避免错点进入其他界面，导致后续判断出错
  20211208 V4.5
  点点券收取改用控件点击
  点点券收取时屏蔽集卡背包和兑换福利
  延长点点券收取后的等待时间，避免由于状态未更新而重复做任务
  20211208 V4.5.1
  收取点点券不再隐藏悬浮窗
  20211208 V4.5.2
  有2组任务时，收取点点券间隔增加到1秒
  20211209 V4.6
  点点券签到动作增加日志，以便定位偶发的报错问题
  分身识别增加日志，以便定位偶发的分身识别问题
  20211210 V4.6.1
  日志调整
  20211210 V4.6.2
  调整点点券收取后触发的新任务逻辑
  20211211 V4.7
  新增收取点点券时对气泡的判断，减少误点击的次数
  每次任务后新增收取点点券动作
  调整所有任务完成后收取点点券的判断
  20211212 V4.7.1
  任务中不再中途收取点点券，任务完成后统一收取
  气泡增加文本判断，减少误点击的可能
  20211212 V4.7.2
  气泡判断条件调整
  20211213 V4.8
  气泡判断条件调整，收取气泡更精确
  删除已无用的代码
  20211213 V4.8.1
  调整日志
  20211214 V4.9
  新增立领500浏览任务
  20211214 V4.9.1
  立领500浏览任务关键字改为点击券后9.9
  20211214 V5.0
  跳转首页浏览类任务归入RunTask任务函数中，方便以后新增任务
    RunTask参数说明：
    参数1：任务名所属层级（1：加粗字体 2：加粗字体下的小字体）
    参数2：任务名
    参数3：任务类型（1：弹窗中浏览会场、浏览商品类任务 2：跳转关注浏览10s类任务 3：弹窗中领券类任务 4：跳转首页的超长时间浏览任务）
  20211214 V5.0.1
  进入点点券时增加控件判断
  20211215 V5.1
  券后9.9抽奖增加次数控制
  20211215 V5.2
  分身识别增加控件前缀，避免因为识别到桌面同名图标而提前进入活动入口识别环节
  增加部分点击动作的等待间隔，避免日志卡顿
  20211215 V5.2.1
  新增点击“领券”任务
  20211221 V5.3
  waitFor等待改为循环提示，以便区分脚本卡死和等待识别
  20220105 V5.4
  领券中心签到改为循环点击，避免因为未签到成功而卡在等待跳转环节
  20220116 V5.5
  抽奖次数识别增加上限，避免因为未识别成功而卡在等待跳转环节
  关键节点识别增加上限，超过上限退出当前账号，避免因为未识别成功而卡在等待跳转环节
  20220118 V5.6
  增加参数，控制是否进入券后9.9抽奖
  略微缩短券后9.9循环识别时间
  20220119 V5.6.1
  修复首页只有券后9.9入口时直接跳过任务问题
  20220119 V5.7
  调整抽奖任务日志提示内容，稍微缓解卡日志的情况
  20220216 V5.7.1
  修改刷新首页方式
  20220216 V5.8
  最后汇总显示所有账号执行情况，方便查看
  20220217 V5.8.1
  增加立领60点点券任务
  20220222 V5.8.2
  修复签到按钮不在当前屏幕范围导致无法签到的问题
  20220222 V5.8.3
  修复关注浏览任务无法返回导致报错问题
  调整部分日志
  点点券活动检测增加重复进入功能
  20220304 V5.9
  修复浏览10s任务返回太快导致跳出任务列表的问题
  部分坐标点击改为更稳定的控件点击
*/
