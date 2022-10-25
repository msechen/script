"ui";
importClass(android.view.View);
var scriptName = '京东任务'
var version = '0.1'
var themeColor = '#4EBFDD'
var scriptTitle = scriptName + ' v' + version
var APPVersion = '京东任务 0.1'
//新增UI界面

var ScriptUIAllStr = ScriptUI.toString()
var ScriptUIStr = ScriptUIAllStr.slice(ScriptUIAllStr.indexOf('{'), ScriptUIAllStr.lastIndexOf('}')).slice(1, -2).replace(/项目标题/g, scriptTitle).replace(/#4EBFDD/g, themeColor)
configIDArr = ScriptUIStr.match(/ id( )?=( )?["|'].*?["|']/g).map(item => item.replace(/ id( )?=( )?["|']|"|'/g, ''))
ui.statusBarColor(themeColor);
ui.layout(ScriptUIStr);

function ScriptUI() {
  <vertical>
    <appbar>
      <toolbar bg="#4EBFDD" layout_height="70" margin="-2" id="toolbar" title="项目标题" />
    </appbar>
    <ScrollView>
      <vertical marginTop="5">
        <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
          <vertical padding="18 8" h="auto">
            <linear>
              <Switch margin="12 0" layout_weight="1" id="autoService" text="无障碍服务" textSize="15sp" checked="{{auto.service != null}}" />
              <Switch margin="12 0" layout_weight="1" id="floatingWindow" text="悬浮窗权限" textSize="15sp" checked="{{android.provider.Settings().canDrawOverlays(context) != false}}" />
            </linear>
          </vertical>
          <View bg="#4EBFDD" h="*" w="5" />
        </card>
        <text id="info" text="与脚本文件和账号明细文件需在同一文件夹" layout_gravity="center" textColor="red" w="auto" textStyle="bold" />
        <text id="info" text="脚本暂只在AutoJS V6.0.3中测试通过，其他版本不一定可以使用" layout_gravity="center" textColor="red" w="auto" textStyle="bold" />
        <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
          <vertical padding="18 8" h="auto">
            <text text="功能选择" marginLeft="5" w="auto" textStyle="bold" textColor='black' />
            <radiogroup>
              <vertical>
                <radiogroup orientation="horizontal">
                  <checkbox id="JD_DianDianQuan" text="点点券" textColor="black" checked='true' />
                  {/* <checkbox id="IsLotteryDraw" text="点点券抽奖" color="#A9A9A9" /> */}
                </radiogroup>
                <radiogroup orientation="horizontal">
                  <checkbox id="JD_JiMoFang" text="集魔方" textColor="black" checked='true' />
                  {/* <checkbox id="IsJoinMember" text="入会任务" color="#A9A9A9" checked='true' />
                  <checkbox id="IsExchange" text="兑换京豆" color="#A9A9A9" checked='true' /> */}
                </radiogroup>
                <checkbox id="JD_LingXianJin" text="领现金" textColor="black" checked='true' />
                <checkbox id="JD_MiaoMiaoBi" text="秒秒币" textColor="black" checked='true' />
                <checkbox id="JD_JingXiangHongBao" text="京享红包" textColor="black" />
                <checkbox id="JD_JinLiHongBao" text="锦鲤红包（纯助力）" textColor="black" />
                <checkbox id="JD_ChengChengFenXianJin" text="城城分现金（纯助力）" textColor="black" />
              </vertical>
            </radiogroup>
            {/* <text text="任务设置:" marginLeft="5" w="auto" textStyle="bold" textColor='black' />
            <checkbox id="选择框_是否点点券抽奖" text="点点券抽奖" textColor="black" />
            <checkbox id="选择框_是否集魔方兑换" text="集魔方兑换" textColor="black" checked='true' /> */}
          </vertical>
          <View bg="#4EBFDD" h="*" w="5" />
        </card>
        <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
          <vertical padding="18 8" h="auto">
            <text text="全局设置" color="#FFA500" textStyle="bold" textSize="15sp" />
            <checkbox id="IsMute" text="任务运行中静音" textColor="black" />
            <checkbox id="IsLowBrightness" text="任务运行中降低亮度" textColor="black" />
          </vertical>
          <View bg="#FFA500" h="*" w="5" />
        </card>
        <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
          <button id="StartScript" h="auto" text="开 始 运 行" textSize="17" textStyle="bold" color="#ffffff" bg="#4EBFDD" foreground="?selectableItemBackground" layout_gravity="bottom" />
          <View bg="#4EBFDD" h="*" w="5" />
        </card>
        <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
          <button id="UpdateScripts" h="auto" text="更 新 脚 本" textSize="17" textStyle="bold" color="#ffffff" bg="#A9A9A9" foreground="?selectableItemBackground" layout_gravity="bottom" />
          <View bg="#A9A9A9" h="*" w="5" />
        </card>
      </vertical>
    </ScrollView>
  </vertical>
}

//用户勾选无障碍服务的选项时，跳转到页面让用户去开启
ui.autoService.on("check", function (checked) {
  if (checked && auto.service == null) {
    app.startActivity({
      action: "android.settings.ACCESSIBILITY_SETTINGS"
    });
  }
  if (!checked && auto.service != null) {
    auto.service.disableSelf();
  }
});

//当用户勾选悬浮窗权限的选项时，跳转到页面让用户去开启
ui.floatingWindow.on("check", function (checked) {
  // 用户勾选悬浮窗权限的选项时，跳转到页面让用户去开启
  if ((checked && android.provider.Settings().canDrawOverlays(context) == false) | (!checked && android.provider.Settings().canDrawOverlays(context) == true)) {
    var intent = new Intent();
    intent.setAction("android.settings.action.MANAGE_OVERLAY_PERMISSION");
    activity.getEventEmitter().on("activity_result", function (requestCode, resultCode, intentData) { });
    activity.startActivityForResult(intent, 8000);
    //以下方法在安卓12下不能用，故屏蔽
    //方法1
    // app.startActivity({
    //   packageName: "com.android.settings",
    //   className: "com.android.settings.Settings$AppDrawOverlaySettingsActivity",
    //   data: "package:" + context.packageName.toString(),
    // });
    //方法2
    // app.startActivity({
    //   packageName: "com.android.settings",
    //   className: "com.android.settings.Settings$AppDrawOverlaySettingsActivity",
    //   data: "package:" + context.getPackageName(),
    // });
  }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
  // 此时根据无障碍服务和悬浮窗权限的开启情况，同步开关的状态
  ui.autoService.checked = auto.service != null;
  ui.floatingWindow.checked = android.provider.Settings().canDrawOverlays(context) != false;
});

ui.StartScript.on("click", function () {
  //程序开始运行之前判断无障碍服务
  if (auto.service == null) {
    toast("请先开启无障碍服务！");
    return;
  }
  //备份亮度、声音设置
  let OldBrightnessMode = device.getBrightnessMode()
  let OldBrightness = device.getBrightness()
  let OldMusicVolume = device.getMusicVolume()

  if (ui.IsMute.checked == true) {
    console.log("静音");
    device.setMusicVolume(0)
  }
  if (ui.IsLowBrightness.checked == true) {
    console.log("降低亮度");
    device.setBrightnessMode(0);
    device.setBrightness(1);
  }
  Fsleep(1000);
  main();



  if (ui.IsMute.checked == true) {
    console.log("恢复音量");
    device.setMusicVolume(OldMusicVolume)
  }
  if (ui.IsLowBrightness.checked == true) {
    console.log("恢复亮度");
    device.setBrightnessMode(OldBrightnessMode);
    device.setBrightness(OldBrightness);
  }

  //app.launchPackage("org.autojs.autojs")
});

ui.UpdateScripts.on("click", function () {
  //程序开始运行之前判断无障碍服务
  if (auto.service == null) {
    toast("请先开启无障碍服务！");
    return;
  }
  engines.execScriptFile("./UpdateScripts.js");
});

function Fsleep(Ftime) {
  //等待
  var thread = threads.start(function () {
    sleep(Ftime)
  });
  thread.join();
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

function Start(TaskName) {
  auto.waitFor();//获取无障碍服务权限
  console.show();//开启悬浮窗
  console.info("京东<" + TaskName + ">任务");
  Task_Log = Task_Log + "\n" + "========== " + "\n" + TaskName + "\n" + "———————"
}

function main() {
  threads.start(function () {

    let TaskName = ""
    let CleanQty = 5 //默认每5个账户清除缓存一次
    console.info("开始任务");

    let Task_Log = "重要日志汇总："


    if (ui.JD_DianDianQuan.checked == true) {
      TaskName = "点点券"
      Start(TaskName);
      DianDianQuan(TaskName, 3, CleanQty, Task_Log);
    }
    if (ui.JD_JiMoFang.checked == true) {
      TaskName = "集魔方"
      Start(TaskName);
      JiMoFang(TaskName, 4, CleanQty, Task_Log);
    }
    if (ui.JD_LingXianJin.checked == true) {
      console.log("领现金");
      var thread = threads.start(function () {
        let e = engines.execScriptFile("./JD_LingXianJin.js");
        while (!e.getEngine());
        let currentScriptEngine = e.getEngine();
        while (1) {
          if (currentScriptEngine.isDestroyed()) {
            break;
          } else {
            sleep(1000);
          }
        }
      });
      thread.join();
    }
    if (ui.JD_MiaoMiaoBi.checked == true) {
      console.log("秒秒币");
      var thread = threads.start(function () {
        let e = engines.execScriptFile("./JD_MiaoMiaoBi.js");
        while (!e.getEngine());
        let currentScriptEngine = e.getEngine();
        while (1) {
          if (currentScriptEngine.isDestroyed()) {
            break;
          } else {
            sleep(1000);
          }
        }
      });
      thread.join();
    }
    if (ui.JD_JingXiangHongBao.checked == true) {
      console.log("京享红包");
      var thread = threads.start(function () {
        let e = engines.execScriptFile("./JD_JingXiangHongBao.js");
        while (!e.getEngine());
        let currentScriptEngine = e.getEngine();
        while (1) {
          if (currentScriptEngine.isDestroyed()) {
            break;
          } else {
            sleep(1000);
          }
        }
      });
      thread.join();
    }
    if (ui.JD_JinLiHongBao.checked == true) {
      console.log("锦鲤红包（纯助力）");
      var thread = threads.start(function () {
        let e = engines.execScriptFile("./JD_JinLiHongBao(纯助力).js");
        while (!e.getEngine());
        let currentScriptEngine = e.getEngine();
        while (1) {
          if (currentScriptEngine.isDestroyed()) {
            break;
          } else {
            sleep(1000);
          }
        }
      });
      thread.join();
    }
    if (ui.JD_ChengChengFenXianJin.checked == true) {
      console.log("城城分现金（纯助力）");
      var thread = threads.start(function () {
        let e = engines.execScriptFile("./JD_ChengChengFenXianJin(纯助力).js");
        while (!e.getEngine());
        let currentScriptEngine = e.getEngine();
        while (1) {
          if (currentScriptEngine.isDestroyed()) {
            break;
          } else {
            sleep(1000);
          }
        }
      });
      thread.join();
    }
  });
  console.log(Task_Log);
}

function DianDianQuan(TaskName, ParametersQty, CleanQty, Task_Log) {

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
        if (ParametersQty == 2) {
          Run(AccountID[1], AccountID[2]);
        }
        if (ParametersQty == 3) {
          Run(AccountID[1], AccountID[2], AccountID[3]);
        }
        if (ParametersQty == 4) {
          Run(AccountID[1], AccountID[2], AccountID[3], AccountID[4]);
        }
        if (ParametersQty == 5) {
          Run(AccountID[1], AccountID[2], AccountID[3], AccountID[4], AccountID[5]);
        }
        home();
        console.info("第" + (i + 1) + "行账号任务执行完毕")
        //每（CleanQty）个账号清除一次分身有术的缓存
        if (t > CleanQty && (t / CleanQty) % 1 === 0) {
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
    if (ParametersQty == 2) {
      Run("手动", AccountID[2]);
    }
    if (ParametersQty == 3) {
      Run("手动", AccountID[2], AccountID[3]);
    }
    if (ParametersQty == 4) {
      Run("手动", AccountID[2], AccountID[3], AccountID[4]);
    }
    if (ParametersQty == 5) {
      Run("手动", AccountID[2], AccountID[3], AccountID[4], AccountID[5]);
    }
    //CleanCache("分身有术Pro", 1);
  }

  console.log("已退出脚本");
  console.clear();

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
          for (var i = 0; !text("任务完成返回活动").exists(); i++) {
            sleep(1000);
            if (i == 10 | i == 20 | i == 30) {
              console.log("已等待" + i + "秒");
            }
            if (i == 35) {
              console.log("等待任务完成标识");
            }
            if (text("任务完成返回活动").exists()) {
              console.log("任务完成");
              break;
            }
            if (text("已完成浏览").exists()) {
              console.log("任务完成");
              break;
            }
          }
          if (text("任务完成返回活动").exists()) {
            text("任务完成返回活动").findOne().parent().click();
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

}
function JiMoFang(TaskName, ParametersQty, CleanQty, Task_Log) {

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
        if (ParametersQty == 2) {
          Run(AccountID[1], AccountID[2]);
        }
        if (ParametersQty == 3) {
          Run(AccountID[1], AccountID[2], AccountID[3]);
        }
        if (ParametersQty == 4) {
          Run(AccountID[1], AccountID[2], AccountID[3], AccountID[4]);
        }
        if (ParametersQty == 5) {
          Run(AccountID[1], AccountID[2], AccountID[3], AccountID[4], AccountID[5]);
        }
        home();
        console.info("第" + (i + 1) + "行账号任务执行完毕")
        //每（CleanQty）个账号清除一次分身有术的缓存
        if (t > CleanQty && (t / CleanQty) % 1 === 0) {
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
    if (ParametersQty == 2) {
      Run("手动", AccountID[2]);
    }
    if (ParametersQty == 3) {
      Run("手动", AccountID[2], AccountID[3]);
    }
    if (ParametersQty == 4) {
      Run("手动", AccountID[2], AccountID[3], AccountID[4]);
    }
    if (ParametersQty == 5) {
      Run("手动", AccountID[2], AccountID[3], AccountID[4], AccountID[5]);
    }
    //CleanCache("分身有术Pro", 1);
  }

  console.log("已退出脚本");
  console.clear();

  function Run(LauchAPPName, IsSeparation, IsJoinMember, IsExchange) {
    if (IsSeparation == null) {
      IsSeparation = 0 //0：正常应用 1：分身有术内部应用
    }
    if (IsJoinMember == null) {
      IsJoinMember = 0 //0：不执行入会任务 1：执行入会任务，遇到新入会店铺则退出脚本 3:执行入会任务，遇到需入会店铺，等待手动入会
    }
    if (IsExchange == null) {
      IsExchange = 0 //0：不兑换 1：兑换
    }
    var IsSeparation_info = ""
    var IsJoinMember_info = ""
    var IsExchange_info = ""
    if (IsSeparation == 0) {
      IsSeparation_info = "正常应用"
    } else if (IsSeparation == 1) {
      IsSeparation_info = "分身有术Pro"
    } else {
      IsSeparation_info = "无效参数，改为默认值“非分身应用”"
      IsSeparation = 0
    }
    if (IsJoinMember == 0) {
      IsJoinMember_info = "不执行入会"
    } else if (IsJoinMember == 1) {
      IsJoinMember_info = "有新入会店铺则退出脚本"
    } else if (IsJoinMember == 3) {
      IsJoinMember_info = "有新入会店铺，等待手动入会"
    } else {
      IsJoinMember_info = "无效参数，改为默认值“不执行入会”"
      IsJoinMember = 0
    }
    if (IsExchange == 0) {
      IsExchange_info = "不兑换"
    } else if (IsExchange == 1) {
      IsExchange_info = "兑换"
    } else {
      IsExchange_info = "无效参数，改为默认值“不兑换”"
      IsExchange = 0
    }
    Task_Log = Task_Log + "\n" + LauchAPPName + "-" + IsSeparation_info
    console.info(
      "当前设置" + "\n" +
      "启动APP：" + LauchAPPName + "\n" +
      "是否分身：" + IsSeparation_info + "\n" +
      "是否入会：" + IsJoinMember_info + "\n" +
      "是否兑换京豆：" + IsExchange_info
    )
    console.log("复制活动京口令");
    Code = new Array("￥Z31iI8QQkF%");//通过分享链接进入活动界面
    setClip(Code);
    if (LauchAPPName == "手动") {
      console.log("请手动打开APP，以便进行下一步");
      while (text("领京豆").findOnce() == null) {
        if (text("立即查看").exists() | text("集魔方 赢大奖").exists() |
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
      while (j < 15 | text("立即查看").findOnce() == null) {
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
            while (text("领京豆").findOnce() == null) {
              if (text("立即查看").exists() | text("集魔方 赢大奖").exists() |
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
      text("立即查看").findOnce().click();
      sleep(1000);
      console.log("等待跳转活动界面");
    }
    for (var i = 0; !text("集魔方 赢大奖").exists(); i++) {
      sleep(1000);
      if (text("集魔方 赢大奖").exists()) {
        break;
      }
      sleep(1000);
      if (i == 1) {
        console.log("等待识别<集魔方>活动界面");
      }
      if (i > 30) {
        Task_Log = Task_Log + "\n" + "识别超时，退出当前任务"
        console.error("识别超时，退出当前任务");
        return;
      }
    }
    if (text("集魔方 赢大奖").exists()) {
      console.info("进入活动界面");
      sleep(3000);
      if (text("开心收下").exists() | text("立即签到").exists()) {
        console.info("发现签到弹窗");
        if (text("立即签到").exists()) {
          text("立即签到").findOne().click();
          sleep(1000);
          console.log("立即签到");
        }
        if (text("开心收下").exists()) {
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
      while (true) {
        if (text("浏览会场").exists() && text("浏览会场").findOne().parent().child(0).className() != "android.widget.Image") {
          console.info("开始<浏览会场>任务");
          var SumTimes = text("浏览会场").findOne().parent().child(0).text()//总次数
          text("浏览会场").findOne().parent().click();
          for (var i = 1; i <= SumTimes; i++) {
            console.log("第" + i + "次浏览");
            for (var ii = 0; !text("任务完成").exists() && ii < 10; ii++) {
              if (ii == 1) {
                console.log("等待<任务完成>标志");
              }
              sleep(1000);
            }
            if (!text("集魔方 赢大奖").exists()) {
              console.log("返回");
              back();
            }
            MoFangFragmentCheck();
          }
          console.log("任务完成");
        } else if (text("加购商品").exists() && text("加购商品").findOne().parent().child(0).className() != "android.widget.Image") {
          console.info("开始<加购商品>任务");
          var SumTimes = text("加购商品").findOne().parent().child(0).text()//总次数
          text("加购商品").findOne().parent().child(1).click();
          sleep(2000);
          for (var i = 1; i <= SumTimes && text("选择ta并加购").exists(); i++) {
            console.log("第" + i + "次加购");
            text("选择ta并加购").findOne().click();
            sleep(2000);
            console.log("返回");
            back();
            sleep(2000);
          }
          console.log("任务完成");
          back();
        } else if (text("浏览商品").exists() && text("浏览商品").findOne().parent().child(0).className() != "android.widget.Image") {
          console.info("开始<浏览商品>任务");
          var SumTimes = text("浏览商品").findOnce().parent().child(0).text()//总次数
          text("浏览商品").findOne().parent().click();
          for (var i = 1; i <= SumTimes; i++) {
            console.log("第" + i + "次浏览");
            text("浏览商品").findOne().parent().click();
            sleep(1500);
            for (var ii = 0; text("集魔方 赢大奖").findOne(1500) == null; ii++) {
              if (ii == 0) {
                console.log("准备返回活动界面");
              }
              else {
                console.log("再次返回");
              }
              back();
              sleep(1000);
              if (ii == 5) {
                Task_Log = Task_Log + "\n" + "无法返回活动界面，退出当前任务"
                console.log("无法返回活动界面，退出当前任务");
                return;
              }
            }
            sleep(500);
            MoFangFragmentCheck();
          }
          console.log("任务完成");
        } else if (text("加入会员").exists() && text("加入会员").findOne().parent().child(0).className() != "android.widget.Image" && Status == 0) {
          if (IsJoinMember == 0) {
            console.info("当前设置不做入会任务，跳过");
            Status = 1
          }
          else {
            console.info("开始<加入会员>任务");
            var SumTimes = text("加入会员").findOnce().parent().child(0).text()//总次数
            text("加入会员").findOne().parent().click();
            for (var i = 1; i <= SumTimes; i++) {
              text("加入会员").findOne().parent().click();
              sleep(3000);
              Status = 1
              if (textContains("确认授权并加入店铺会员").exists() | text("授权信息，解锁全部会员福利").exists()) {
                if (IsJoinMember == 1) {
                  console.log("涉及个人隐私，请手动加入店铺会员或者忽略加入会员任务");
                  break;
                }
                else if (IsJoinMember == 3) {
                  console.log("当前店铺未入会，等待手动");
                  sleep(8000);
                  console.log("超时自动返回");
                }
              }
              else {
                console.info("未找到入会按钮，应是当前店铺会员");
                console.log("任务完成");
              }
            }
          }
        } else if (text("逛逛频道").exists() && text("逛逛频道").findOne().parent().child(0).className() != "android.widget.Image") {
          console.info("开始<逛逛频道>任务");
          var SumTimes = text("逛逛频道").findOnce().parent().child(0).text()//总次数
          text("逛逛频道").findOne().parent().click();
          sleep(1000);
          for (var i = 0; !text("点击6个商品得奖励").exists(); i++) {
            sleep(1000);
            if (i == 1) {
              console.log("等待加载任务界面")
            }
            if (i > 30) {
              console.error("加载超时，退出任务")
              break;
            }
          }
          if (text("去付定金").exists()) {
            let Buttons = text("去付定金").find()
            for (var i = 0; i <= Buttons.length(); i++) {
              console.log("第" + (i + 1) + "个商品");
              let Button = Buttons[i]
              Button.click()
              sleep(1500);
              back();
              sleep(1500);
              if (text("立即领奖").exists()) {
                break;
              }
              if (i > 6) {
                console.error("任务异常，退出任务")
                break;
              }
            }
          }
          for (var ii = 0; !text("立即领奖").exists() && ii < 10; ii++) {
            if (ii == 1) {
              console.log("等待<立即领奖>标志");
            }
            sleep(1000);
          }
          if (text("立即领奖").exists()) {
            console.log("立即领奖");
            sleep(1000);
          } else {
            console.log("任务超时");
          }
          console.log("返回");
          back();
          console.log("任务完成");
        } else if (text("浏览店铺").exists() && text("浏览店铺").findOne().parent().child(0).className() != "android.widget.Image") {
          console.info("开始<浏览店铺>任务");
          var SumTimes = text("浏览店铺").findOnce().parent().child(0).text()//总次数
          text("浏览店铺").findOne().parent().click();
          for (var i = 1; i <= SumTimes; i++) {
            console.log("第" + i + "次浏览");
            for (var ii = 0; !text("任务完成").exists() && ii < 10; ii++) {
              if (ii == 1) {
                console.log("等待<任务完成>标志");
              }
              sleep(1000);
            }
            if (!text("集魔方 赢大奖").exists()) {
              console.log("返回");
              back();
            }
            MoFangFragmentCheck();
          }
          console.log("任务完成");
        } else if (text("签到任务").exists() && text("签到任务").findOne().parent().child(0).className() != "android.widget.Image") {
          console.info("开始<每日签到>任务");
          text("签到任务").findOne().parent().click();
          sleep(1500);
          if (text("开心收下").exists()) {
            console.info("发现签到弹窗");
            text("开心收下").findOne().click();
            sleep(500);
            console.log("开心收下");
          }
          console.log("任务完成");
          MoFangFragmentCheck();
        } else {
          break;
        }
        sleep(1500);
        times++;
        for (var i = 0; text("集魔方 赢大奖").findOne(1500) == null; i++) {
          if (i == 0) {
            console.log("准备返回活动界面");
          }
          else {
            console.log("再次返回");
          }
          back();
          sleep(1000);
          if (i == 5) {
            Task_Log = Task_Log + "\n" + "无法返回活动界面，退出当前任务"
            console.log("无法返回活动界面，退出当前任务");
            return;
          }
        }
        if (times > 15) {
          Task_Log = Task_Log + "\n" + "执行任务超过15次，可能进入死循环，准备退出任务"
          console.log("执行任务超过15次，可能进入死循环，准备退出任务");
          return;
        }
        MoFangFragmentCheck();
      }
      console.log("所有任务已完成");
      if (IsExchange == 1) {
        if (text("做任务得魔方碎片").exists()) {
          console.log("关闭任务列表，准备兑换");
          text("做任务得魔方碎片").findOne().parent().child(1).click();
          sleep(1000);
        }
        if (textStartsWith("魔方碎片进度").exists()) {
          console.log("进入礼品仓库");
          if (textStartsWith("魔方碎片进度").findOne().parent().child(6).clickable() == true) {
            textStartsWith("魔方碎片进度").findOne().parent().child(6).click();
          }
          else {
            textStartsWith("魔方碎片进度").findOne().parent().child(5).click();
          }
          sleep(1000);
          if (text("3/10京豆").findOne(3000) != null) {
            sleep(1500);
            text("3/10京豆").findOne().parent().parent().child(2).child(0).click();
            if (text("兑换将消耗1魔方哦").findOne(3000) != null) {
              console.log("确认");
              text("确认").findOne().click()
              sleep(1000);
              if (text("查看我的兑换 >").findOne(3000) != null) {
                var LotteryResults = text("查看我的兑换 >").findOne().parent().parent().child(0).text()
                if (LotteryResults == "很遗憾没有抽中") {
                  LotteryResults = "未中奖"
                }
                else if (LotteryResults == "兑换成功,获得") {
                  if (text("兑换成功,获得").findOne().parent().child(1).childCount() == 2) {
                    LotteryResults = "兑换成功，获得" + text("兑换成功,获得").findOne().parent().child(1).child(1).text()
                  }
                  else if (text("兑换成功,获得").findOne().parent().child(1).childCount() == 1) {
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
            else {
              Task_Log = Task_Log + "\n" + "未成功兑换"
              console.log("未成功兑换");
            }
          }
          back();
          sleep(1000);
        }
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
      //TaskListState：1：任务列表已打开 2：经过点击打开 0：未能识别到任务列表
      if (text("做任务得魔方碎片").exists()) {
        console.info("任务列表已打开");
        TaskListState = 1;
      }
      else if (text("集魔方 赢大奖").exists() && !text("做任务得魔方碎片").exists()) {
        console.log("检测任务列表");
        //点击收集更多魔方碎片
        if (text("浏览会场").exists()) {
          text("浏览会场").findOne().parent().parent().parent().child(1).click();
        } else if (text("加购商品").exists()) {
          text("加购商品").findOne().parent().parent().parent().child(1).click();
        } else if (text("浏览商品").exists()) {
          text("浏览商品").findOne().parent().parent().parent().child(1).click();
        } else if (text("加入会员").exists()) {
          text("加入会员").findOne().parent().parent().parent().child(1).click();
        } else if (text("逛逛频道").exists()) {
          text("逛逛频道").findOne().parent().parent().parent().child(1).click();
        } else if (text("签到任务").exists()) {
          text("签到任务").findOne().parent().parent().parent().child(1).click();
        }
        sleep(1500)
        if (!text("做任务得魔方碎片").exists()) {
          console.log("未识别到任务列表");
          setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
          for (var i = 0; i < 1 && text("集魔方 赢大奖").exists() && !text("做任务得魔方碎片").exists(); i++) {
            console.log("关闭");
            click(1374, 1014);
            sleep(1000);
            console.log("再次打开任务列表");
            click(random(708, 1396), random(2544, 2760));
            sleep(1500);
            if (text("做任务得魔方碎片").exists()) {
              break;
            }
          }
          if (i >= 1) {
            //console.log("未识别到任务列表，即将使用另一识别方式");
            TaskListState = 0;
            return TaskListState;
          }
          if (text("做任务得魔方碎片").exists()) {
            console.info("已打开任务列表")
            TaskListState = 2;
          }
        }
        else {
          console.info("已打开任务列表")
          TaskListState = 2;
        }
      }
      else {
        //console.info("当前界面未发现任务列表")
        TaskListState = 0;
      }
      return TaskListState;
    }

    function MoFangFragmentCheck() {
      if (textStartsWith("魔方碎片进度").exists()) {
        let KeyText = textStartsWith("魔方碎片进度").findOne().text()
        var MoFangFragment = KeyText.substring(6, 7)
        if ((MoFangFragment <= 3 && text("收下魔方").findOne(2500) != null) | text("收下魔方").exists()) {
          text("收下魔方").findOne().click();
          console.log("收下魔方");
          sleep(1000);
        }
      }
    }
  }

}
function Start(TaskName) {
  auto.waitFor();//获取无障碍服务权限
  console.show();//开启悬浮窗
  console.info("京东<" + TaskName + ">任务");
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
