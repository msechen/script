/*
  京东<领现金>任务
https://t.me/LingFeng0918
  已知问题：
  Q：活动界面识别错、脚本执行中断、脚本卡在某个界面无法继续等情况
  A：上述情况，在页面加载缓慢的情况下，可能出现，更换良好的网络环境再执行脚本

  20220930 V2.8
  更新签到任务
  修复重复提示跳过问题
 */
var TaskName = "领现金"
Start(TaskName);
console.info("开始任务");
let Task_Log = "重要日志汇总："
Task_Log = Task_Log + "\n" + "========== " + "\n" + "京东领现金" + "\n" + "———————"

console.info("设备设置静音");
var v = device.getMusicVolume()
device.setMusicVolume(0)
sleep(1000);

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
  参数3：进入活动界面的方式，0：我的-更多游戏-领现金 1：搜索进入
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
  //Run("京东",0,0);home();
  //Run("京东",1,0);home();
  //Run("京东-2",1,0);home();
  //手动例子
  Run("手动", 0, 0); home();
  //分身有术缓存清理
  //CleanCache("分身有术Pro",1);
}

console.info("设备恢复原来音量");
device.setMusicVolume(v)
console.log("音量恢复为" + v);
sleep(1000);

console.log("已退出脚本");
console.clear();
console.log(Task_Log);
engines.myEngine().forceStop()

function Start() {
  auto.waitFor();//获取无障碍服务权限
  console.show();//开启悬浮窗
  console.info("京东<" + TaskName + ">任务");
}

function Run(LauchAPPName, IsSeparation, StartKind) {
  if (IsSeparation == null) {
    IsSeparation = 0 //0：正常应用 1：分身有术内部应用
  }
  if (StartKind == null) {
    StartKind = 0 //0：我的-更多游戏-领现金 1：搜索进入
  }
  var IsSeparation_info = ""
  var StartKind_info = ""
  if (IsSeparation == 0) {
    IsSeparation_info = "正常应用"
  } else if (IsSeparation == 1) {
    IsSeparation_info = "分身有术Pro"
  } else {
    IsSeparation_info = "无效参数，改为默认值“非分身应用”"
    IsSeparation = 0
  }
  if (StartKind == 0) {
    StartKind_info = "我的-更多游戏-领现金"
  } else if (StartKind == 1) {
    StartKind_info = "搜索进入"
  } else {
    StartKind_info = "无效参数，改为默认值“我的-更多游戏-领现金”"
    StartKind = 0
  }
  Task_Log = Task_Log + "\n" + LauchAPPName + "-" + IsSeparation_info
  console.info(
    "当前设置" + "\n" +
    "启动APP：" + LauchAPPName + "\n" +
    "是否分身：" + IsSeparation_info + "\n" +
    "进入方式：" + StartKind_info
  )
  setClip("");//避免被其他京口令影响
  if (LauchAPPName == "手动") {
    console.log("请手动打开APP，以便进行下一步");
    while (text("领京豆").findOnce() == null) {
      if (desc("我的").exists() | textContains("现金悬赏任务").exists() |
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
  if (StartKind == 1) {
    if (descContains("搜索框").findOnce() == null) {
      console.log("等待识别关键节点");
      for (var i = 1; descContains("搜索框").findOnce() == null; i++) {
        sleep(1000);
        if (descContains("搜索框").exists() | textContains("现金悬赏任务").exists()) {
          break;
        }
        console.log(i);
        if (i == 10) {
          console.error("超时未检测到关键节点，跳过");
          console.info("请手动进入活动");
          sleep(1000);
          break;
        }
      }
    }
    for (var i = 0; !desc("我的").exists() && i < 10; i++) {
      if (i == 4 && app.getAppName(currentPackage()) == "京东") {
        console.log("尝试返回");
        back();
        sleep(500);
      }
      if (i == 5 && className("android.view.View").desc("我的").exists() && desc("首页").exists()) {
        console.log("尝试刷新首页");
        desc("首页").findOne().click();
        sleep(500);
        desc("我的").findOne().click();
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
            if (desc("我的").exists() | textContains("现金悬赏任务").exists() |
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
      sleep(1000);
    }
    if (desc("首页").findOne(5000) != null) {
      console.log("首页")
      desc("首页").findOne().click();
    }
    else {
      Task_Log = Task_Log + "\n" + "未识别到关键节点,即将退出任务"
      console.log("未识别到关键节点,即将退出任务");
      return;
    }
    sleep(1500);
    for (var t = 0; t < 30; t++) {
      sleep(1000);
      if (t == 1) {
        console.log("等待识别入口")
      }
      if (descContains("搜索框").exists()) {
        break;
      }
    }
    if (descContains("搜索框").exists()) {
      console.log("开始搜索");
      descContains("搜索框").findOnce().click();
      sleep(1000);
      if (desc("搜索，按钮").exists()) {
        setText("领现金");
        desc("搜索，按钮").findOnce().click();
        console.log("等待跳转活动界面");
      }
      else {
        Task_Log = Task_Log + "\n" + "未能开始搜索，退出当前任务"
        console.error("未能开始搜索，退出当前任务");
        return;
      }
    }
    else {
      Task_Log = Task_Log + "\n" + "未能找到搜索，可尝试更换活动进入方式"
      console.error("未能找到搜索，可尝试更换活动进入方式");
      return;
    }
  }
  else if (StartKind == 0) {
    for (var i = 0; !desc("我的").exists() && i < 10; i++) {
      if (i == 4 && app.getAppName(currentPackage()) == "京东") {
        console.log("尝试返回");
        back();
        sleep(500);
      }
      if (i == 5 && className("android.view.View").desc("我的").exists() && desc("首页").exists()) {
        console.log("尝试刷新首页");
        desc("首页").findOne().click();
        sleep(500);
        desc("我的").findOne().click();
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
            if (desc("我的").exists() | textContains("现金悬赏任务").exists() |
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
      sleep(1000);
    }
    if (desc("我的").findOne(5000) != null) {
      console.log("我的")
      desc("我的").findOne().click();
    }
    else {
      Task_Log = Task_Log + "\n" + "未识别到关键节点,即将退出任务"
      console.log("未识别到关键节点,即将退出任务");
      return;
    }
    sleep(1500);
    for (var t = 0; t < 30; t++) {
      sleep(1000);
      if (t == 1) {
        console.log("等待识别入口")
      }
      if (text("签到领豆").exists() | text("更多游戏").exists()) {
        break;
      }
    }
    if (text("更多游戏").exists()) {
      console.log("更多游戏")
      text("更多游戏").findOne().parent().parent().click();
      sleep(1000);
      text("领现金").findOne(5000).parent().parent().click();
    }
    else if (text("签到领豆").exists()) {
      console.log("发现签到领豆")
      //从右往左滑动
      let aX = text("签到领豆").findOne().parent().parent().parent().child(4).bounds().centerX()
      aY = text("签到领豆").findOne().parent().parent().parent().child(4).bounds().centerY()
      bX = text("签到领豆").findOne().parent().parent().parent().child(0).bounds().centerX()
      bY = text("签到领豆").findOne().parent().parent().parent().child(0).bounds().centerY()
      swipe(aX, aY, bX, bY, 200);
      if (text("更多游戏").findOne(5000) != null) {
        console.log("进入更多游戏")
        text("更多游戏").findOne().parent().parent().click();
        sleep(1000);
        text("领现金").findOne(5000).parent().parent().click();
      }
      else {
        Task_Log = Task_Log + "\n" + "未识别到关键节点，退出当前账号"
        console.error("未识别到关键节点，退出当前账号");
        return;
      }
    }
  }
  //活动界面判断
  for (var i = 0; !textContains("现金悬赏任务").exists() | !id("ds").exists(); i++) {
    sleep(1000);
    if (textContains("现金悬赏任务").exists() | id("ds").exists() | text("开启提醒").exists()) {
      break;
    }
    sleep(1000);
    console.log("等待识别<领现金>活动界面");
    if (i > 15) {
      Task_Log = Task_Log + "\n" + "识别超时，可能黑号，退出当前账号"
      console.error("识别超时，可能黑号，退出当前账号");
      return;
    }
  }
  console.info("进入活动界面");
  sleep(1000);
  //签到任务
  if (text("开启提醒").exists()) {
    console.info("开启签到");
    text("开启提醒").findOne().parent().parent().child(1).click();
    sleep(1500);
    text("知道了").findOne().click();
    console.log("签到完成");
    sleep(1000);
  }
  if (textContains("现金悬赏任务").exists()) {
    //任务列表检测
    TaskListCheck();
    let times = 0
    while (text("去做任务赚钱").exists()) {
      let taskButtons = text("去做任务赚钱").find()
      if (taskButtons.empty()) {
        console.log("未找到合适的任务，退出");
        sleep(3000);
        break;
      }
      let taskButton, taskText
      for (let i = 2; i < taskButtons.length; i++) {
        let Temp = taskButtons[i]
        taskText = Temp.parent().child(1).child(0).text();
        if (taskText == "APP签到提醒") {
          console.log("识别到<" + taskText + ">任务，需手动完成，跳过");
          sleep(200);
          continue;
        }
        else if (taskText == "健康双签" | taskText == "每日健康app领红包") {
          console.log("识别到<" + taskText + ">任务，需手动完成，跳过");
          sleep(200);
          continue;
        }
        taskButton = Temp;
        break;
      }
      if (!taskButton) {
        console.log("未找到可自动完成的任务，退出当前任务");
        break;
      }
      console.log("开始<" + taskText + ">任务");
      taskButton.click();
      if (taskText == "逛商品") {
        sleep(6000);
      }
      else if (taskText == "逛店铺" | taskText == "逛互动") {
        sleep(5000);
      }
      else {
        sleep(3000);
      }
      if (!text("去做任务赚钱").exists() | !text("已获得酬劳").exists()) {
        console.log("任务完成");
        sleep(1000);
        back();
      }
      for (var ii = 0; textContains("需浏览2S").findOne(1000) == null; ii++) {
        console.log("准备返回任务界面");
        sleep(1000);
        while (id("ffp").exists() | id("gv3").exists() | text("确定").exists()) {
          if (id("ffp").exists() | id("gv3").exists()) {
            console.log("跳转微信异常，准备返回");
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
        if (!textContains("需浏览2S").exists()) {
          back();
          sleep(500);
        }
        if (text("首页").exists() | text("总资产").exists()) {
          console.log("发现首页，强制退出");
          back();
          sleep(200);
          back();
        }
        if (app.getAppName(currentPackage()) == "京喜") {
          console.log("发现京喜页面，返回");
          back();
          sleep(500);
          if (desc("关闭页面").findOnce(2000) != null) {
            console.log("关闭跳转页面");
            desc("关闭页面").findOne().click();
            sleep(2000);
          }
        }
        if (ii > 4) {
          console.log("多次返回失败，尝试连续返回");
          back();
          sleep(200);
          back();
        }
        if (ii == 6) {
          Task_Log = Task_Log + "\n" + "无法返回任务界面，退出当前任务"
          console.log("无法返回任务界面，退出当前任务");
          return;
        }
      }
      sleep(2000);
      times++;
      if (!text("去做任务赚钱").exists()) {
        console.log("所有任务已完成");
        break;
      }
      if (times > 15) {
        Task_Log = Task_Log + "\n" + "执行任务超过15次，可能进入死循环，准备退出任务"
        console.log("执行任务超过15次，可能进入死循环，准备退出任务");
        return;
      }
    }
    Task_Log = Task_Log + "\n" + "当前账号所有任务已完成"
    console.info("当前账号所有任务已完成");
  }
  else {
    Task_Log = Task_Log + "\n" + "未识别到任务列表，当前账号活动已黑"
    console.info("未识别到任务列表，当前账号活动已黑");
  }
  back();
  sleep(1000);
  back();
  sleep(1000);
  back();
  sleep(1000);
  back();
  sleep(1000);
  back();
  sleep(1000);
  home();
  sleep(500);

  function TaskListCheck() {
    if (textContains("需浏览2S").exists() && text("APP签到提醒").exists() && id("dy").exists()) {
      console.info("任务列表已打开")
    }
    else if (textContains("活动太火爆，逛逛商品吧").exists()) {
      Task_Log = Task_Log + "\n" + "当前账号活动火爆，退出当前任务"
      console.error("当前账号活动火爆，退出当前任务");
      return;
    }
    else if (textContains("已完成全部任务").exists()) {
      console.info("已完成全部任务")
      return;
    }
    else if (textContains("现金悬赏任务").exists() && !id("dy").exists()) {
      console.log("检测任务列表");
      if (text("查看全部任务").exists()) {
        text("查看全部任务").findOne().click();
        console.info("已打开任务列表");
        sleep(1000);
      }
      else {
        Task_Log = Task_Log + "\n" + "未找到任务列表，退出当前任务"
        console.error("未找到任务列表，退出当前任务");
      }
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
