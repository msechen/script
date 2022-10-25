/*
  京东<穿行寻宝>任务
  脚本执行时间过长，自动调低手机屏幕亮度，减少电量消耗和发热
https://t.me/LingFeng0918
  20221022 V1.7
  修复打卡关键字
  修复首页返回判断

*/
var TaskName = "穿行寻宝"
Start(TaskName);
console.info("开始任务");

//console.log("降低音量和亮度");
sleep(2000);
//备份亮度、声音设置
//let OldBrightnessMode = device.getBrightnessMode()
//let OldBrightness = device.getBrightness()
let OldMusicVolume = device.getMusicVolume()
//调低亮度、声音
//device.setBrightnessMode(0);
//device.setBrightness(1);
device.setMusicVolume(0)


/*
  账号明细.js文件说明
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
  参数4：是否入会，0：不执行入会任务 1：执行入会任务，遇到新入会店铺则退出任务 2：执行入会任务，遇到需入会店铺则返回，等待刷新别的店铺 3:执行入会任务，遇到需入会店铺，等待手动入会
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
      Run(AccountID[1], AccountID[2], AccountID[3], AccountID[4]); home();
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
  // 京东例子
  // Run("京东-3", 1, 0, 2); home();
  // Run("京东", 1, 1, 2); home();
  // Run("京东-2", 1, 1, 0); home();
  //手动例子
  //Run("手动", 1, 1, 2); home();
  //测试
  Run("手动", 1, 0, 0); home();
  //分身有术缓存清理
  //CleanCache("分身有术Pro",1);
}
console.info("结束任务");


//console.log("恢复音量和亮度");
////恢复亮度、音量设置
//device.setBrightnessMode(OldBrightnessMode);
//device.setBrightness(OldBrightness);
device.setMusicVolume(OldMusicVolume)

console.log("已退出脚本");
engines.myEngine().forceStop()

function Start(TaskName) {
  auto.waitFor();//获取无障碍服务权限
  console.show();//开启悬浮窗
  console.info("京东<" + TaskName + ">任务");
}

function Run(LauchAPPName, IsSeparation, IsInvite, IsJoinMember) {
  var PageStatus = 0//页面状态，用于记录当前页面状态，避免点击错位置
  if (IsSeparation == null) {
    IsSeparation = 0 //0：正常应用 1：分身有术内部应用
  } if (IsJoinMember == null) {
    IsJoinMember = 0 //0：不执行入会任务 1：执行入会任务，遇到新入会店铺则退出脚本 2：执行入会任务，遇到需入会店铺则返回，等待刷新别的店铺 3:执行入会任务，遇到需入会店铺，等待手动入会
  }
  var IsSeparation_info = ""
  var IsInvite_info = ""
  var IsJoinMember_info = ""
  if (IsSeparation == 0) {
    IsSeparation_info = "正常应用"
  } else if (IsSeparation == 1) {
    IsSeparation_info = "分身有术Pro"
  } else {
    IsSeparation_info = "无效参数，改为默认值“非分身应用”"
    IsSeparation = 0
  }
  if (IsInvite == 0) {
    IsInvite_info = "跳过助力邀请"
  } else if (IsInvite == 1) {
    IsInvite_info = "助力邀请"
  } else {
    IsInvite_info = "无效参数，改为默认值“跳过助力邀请”"
    IsInvite = 0
  }
  if (IsJoinMember == 0) {
    IsJoinMember_info = "不执行入会"
  } else if (IsJoinMember == 1) {
    IsJoinMember_info = "有新入会店铺则退出脚本"
  } else if (IsJoinMember == 2) {
    IsJoinMember_info = "有新入会店铺则返回，等待刷新别的店铺"
  } else if (IsJoinMember == 3) {
    IsJoinMember_info = "有新入会店铺，等待手动入会"
  } else {
    IsJoinMember_info = "无效参数，改为默认值“不执行入会”"
    IsJoinMember = 0
  }
  console.info(
    "当前设置" + "\n" +
    "启动APP：" + LauchAPPName + "\n" +
    "是否分身：" + IsSeparation_info + "\n" +
    "是否助力：" + IsInvite_info + "\n" +
    "是否入会：" + IsJoinMember_info
  )
  sleep(2000);
  if (IsInvite == 1) {
    //将京口令分段填入，只要里面的特征码即可，分不清什么是特征码的也可以整段放进来，注意用双引号和逗号隔开
    Code = new Array("4京东热爱穿行记每天都能领红包！加油把红包都拿走 倞放心强韧的青蟹冷链细腻的蘑菇涷 ，【/ 最新版】Jιιngマ崬");//邀请码第一个是助力作者，第二个纯属举例，使用时建议删除
    RunTime = Code.length;
    console.info("共识别到" + RunTime + "个助力码");
    for (var i = 0; i < RunTime; i++) {
      console.log("第" + (i + 1) + "个助力码");
      setClip(Code[i]);
      console.log("助力码写入剪切板");
      if (LauchAPPName == "手动") {
        console.log("请手动打开APP，以便进行下一步");
        while (text("领京豆").findOnce() == null) {
          if ((textContains("消耗").exists()) | text("立即查看").exists() | textContains("开奖啦").exists() | text("累计任务奖励").exists() |
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
            setClip(Code[i]);
            console.log("助力码重新写入剪切板");
            sleep(1000);
            if (LauchAPPName == "手动") {
              console.log("请手动打开APP，以便进行下一步");
              while (text("领京豆").findOnce() == null) {
                if ((textContains("消耗").exists()) | textContains("开奖啦").exists() | text("累计任务奖励").exists() |
                  app.getAppName(currentPackage()) == "京东" | currentActivity() == "com.jingdong.app.mall.WebActivity") {
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
            console.error("超时未检测到新助力码，跳过助力任务");
            sleep(1000);
            if (i < RunTime - 1) {
              console.log("退出当前APP，准备第" + (i + 2) + "个助力码");
              OutAPP(2000);
            }
            break;
          }
        }
        if (j > 15) {
          //超时则跳出当前助力任务
          console.info("跳过当前助力");
          continue;
        }
      }
      //setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
      if (text("立即查看").exists()) {
        console.log("立即查看");
        text("立即查看").findOnce().click();
        while (!textContains("为TA助力").exists()) {
          sleep(1000);
          console.log("等待加载……");
          if (textContains("活动太火爆了").exists()) {
            console.error("当前账号火爆，退出任务");
            return;
          }
        }
        sleep(1000);
        //click(720,1845);
        textContains("为TA助力").findOne().click();
        console.log("为TA助力");
        sleep(2000);
        if (textContains("助力成功").exists()) {
          console.log("助力完成");
        }
        if (textContains("我也要赢红包").exists()) {
          console.log("我也要赢红包");
          textContains("我也要赢红包").findOne().click();
        }
        if (textContains("开心收下").exists()) {
          //text("开心收下").findOne().parent().click();
          click(textContains("开心收下").findOne().bounds().centerX(), textContains("开心收下").findOne().bounds().centerY())
          sleep(1000);
        }
      }
      //setScreenMetrics(device.width, device.height);//恢复本机分辨率
      //最后一次助力不返回首页，以便进行下一个任务
      if (i < RunTime - 1) {
        home(); sleep(1000); home();//多返回一次，避免未退出app界面
        console.log("准备第" + (i + 2) + "个助力码");
      }
      else {
        console.log("当前账户已助力完成");
      }
    }
  }
  if (IsInvite == 0) {
    console.info("跳过活动助力");
    if (LauchAPPName == "手动") {
      console.log("请手动打开APP，以便进行下一步");
      while (text("领京豆").findOnce() == null) {
        if ((textContains("消耗").exists()) | textContains("开奖啦").exists() | text("累计任务奖励").exists() |
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
        for (var i = 0; !text(LauchAPPName).exists(); i++) {
          console.log("等待识别分身……");
          sleep(3000);
          if (i > 10) {
            console.log("识别超时，退出当前任务");
            return;
          }
        }
        if (text(LauchAPPName).exists()) {
          text(LauchAPPName).findOne().parent().click();
          console.log("分身已启动，等待活动检测……");
        }
      }
      else {
        console.info("打开" + LauchAPPName + "");
        app.launchApp(LauchAPPName);
        console.log("等待活动检测……");
      }
    }
    if (!text("累计任务奖励").exists()) {
      if (!textContains("消耗").exists()) {
        //进入活动
        console.log("寻找活动入口……");
        if (LauchAPPName == "手动") {
          for (; ;) {
            if ((textContains("消耗").exists())) {
              break;
            }
            if (textContains("开奖啦").exists()) {
              break;
            }
            if (textContains("活动太火爆了").exists()) {
              console.error("当前账号火爆，退出任务");
              return;
            }
            console.log("手动进入活动界面后，脚本将继续");
            sleep(5000);
          }
        }
        else {
          if (!text("累计任务奖励").exists()) {
            if (!textContains("消耗").exists()) {
              for (var i = 0; !textContains("消耗").exists(); i++) {
                console.log("未识别到活动页面，尝试通过首页浮层进入");
                if (text("首页").exists()) {
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
                if ((textContains("消耗").exists()) | textContains("开奖啦").exists()) {
                  break;
                }
                if (textContains("活动太火爆了").exists()) {
                  console.error("当前账号火爆，退出任务");
                  return;
                }
                if (i > 10) {
                  console.log("识别超时，退出当前任务");
                  return;
                }
                sleep(3000);
              }
              if ((textContains("消耗").exists()) | textContains("开奖啦").exists()) {
                console.log("已检测到活动页面");
                PageStatus = 1//进入活动页面，未打开任务列表
              }
            }
            else {
              console.log("检测到活动页面");
              PageStatus = 1//进入活动页面，未打开任务列表
            }
          }
          else {
            console.log("检测到任务列表");
            PageStatus = 2//已打开任务列表
          }
        }
        console.info("进入活动页面");
      }
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
  }

  sleep(2000);
  if (!text("累计任务奖励").exists()) {
    if (!textContains("消耗").exists()) {
      for (var i = 0; !textContains("消耗").exists(); i++) {
        console.log("未识别到活动页面，尝试通过首页浮层进入");
        if (text("首页").exists()) {
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
        if ((textContains("消耗").exists()) | textContains("开奖啦").exists()) {
          break;
        }
        if (i > 10) {
          console.log("识别超时，退出当前任务");
          return;
        }
        sleep(3000);
      }
      if ((textContains("消耗").exists()) | textContains("开奖啦").exists()) {
        console.log("已检测到活动页面");
        PageStatus = 1//进入活动页面，未打开任务列表
      }
    }
    else {
      console.log("检测到活动页面");
      PageStatus = 1//进入活动页面，未打开任务列表
    }
  }
  else {
    console.log("检测到任务列表");
    PageStatus = 2//已打开任务列表
  }
  if (PageStatus != 2) {
    sleep(2000);
    console.log("成功进入活动界面");
    let IsSign = 0
    //signTask(IsSign);
    console.log("等待加载弹窗……");
    while (textContains("继续环游").exists() | textContains("立即抽奖").exists() | textContains("开启今日抽奖").exists() | textContains("点我签到").exists() | textContains("开心收下").exists()
      | textContains("立即签到").exists() | textContains("去用券 享低价").exists() | textContains("每日签到拿红包").exists()) {
      if (textContains("开心收下").exists()) {
        console.log("开心收下");
        click(textContains("开心收下").findOne().bounds().centerX(), textContains("开心收下").findOne().bounds().centerY())
        sleep(1000);
      }
      if (textContains("继续环游").exists()) {
        console.log("继续环游");
        click(textContains("继续环游").findOne().bounds().centerX(), textContains("继续环游").findOne().bounds().centerY())
        sleep(500);
      }
      if (textContains("立即抽奖").exists()) {
        console.log("关闭立即抽奖");
        setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
        click(1336, 808);
        sleep(1000);
        setScreenMetrics(device.width, device.height);//恢复本机分辨率
      }
      if (textContains("开启今日抽奖").exists()) {
        console.log("开启今日抽奖");
        click(textContains("开启今日抽奖").findOne().bounds().centerX(), textContains("开启今日抽奖").findOne().bounds().centerY())
        sleep(3000);
      }
      if (textContains("去用券 享低价").exists()) {
        textContains("去用券 享低价").findOne().parent().parent().parent().child(0).click();
        console.log("关闭用券弹窗");
        sleep(1000);
      }
      if (textContains("每日签到拿红包").exists()) {
        console.log("每日签到拿红包");
        click(textContains("每日签到拿红包").findOne().bounds().centerX(), textContains("每日签到拿红包").findOne().bounds().centerY())
        textContains("立即签到").waitFor();
      }
      if (textContains("立即签到").exists()) {
        console.log("立即签到");
        click(textContains("立即签到").findOne().bounds().centerX(), textContains("立即签到").findOne().bounds().centerY())
        sleep(1000);
        textContains("开心收下").waitFor();
        console.log("开心收下");
        click(textContains("开心收下").findOne().bounds().centerX(), textContains("开心收下").findOne().bounds().centerY())
        sleep(1000);
        textContains("明天继续").waitFor();
        console.log("明天继续");
        textContains("每天签到领福利").findOne().parent().child(1).click();
        IsSign = 1
      }
      if (textContains("点我签到").exists()) {
        console.log("点我签到");
        click(textContains("点我签到").findOne().bounds().centerX(), textContains("点我签到").findOne().bounds().centerY())
        sleep(1000);
        textContains("开心收下").waitFor();
        click(textContains("开心收下").findOne().bounds().centerX(), textContains("开心收下").findOne().bounds().centerY())
        sleep(1000);
        IsSign = 1
      }
      if (text("每天签到领福利").exists()) {
        text("每天签到领福利").findOne().parent().child(1).click();
        console.log("关闭签到页面");
      }
      sleep(1000);
      console.log("如还有弹窗，请手动处理");
      sleep(3000);
    }
    if (textContains("消耗").exists() && IsSign == 0) {
      console.log("前往签到");
      textContains("消耗").findOne().parent().parent().parent().parent().parent().child(7).click();
      sleep(2500);
      if (textContains("立即签到").exists()) {
        console.log("立即签到");
        click(textContains("立即签到").findOne().bounds().centerX(), textContains("立即签到").findOne().bounds().centerY())
        sleep(1000);
        if (textContains("开心收下").exists()) {
          click(textContains("开心收下").findOne().bounds().centerX(), textContains("开心收下").findOne().bounds().centerY())
          sleep(1000);
        }
      }
      if (textContains("明天继续").exists()) {
        console.log("明天继续");
        textContains("每天签到领福利").findOne().parent().child(1).click();
        sleep(1000);
      }
      if (textContains("取消").exists()) {
        textContains("取消").findOne().click();
        sleep(1000);
      }
      if (!textContains("消耗").exists()) {
        console.log("页面异常，返回");
        back();
        sleep(1000);
      }
    }
    if (text("领取金币").exists()) {
      console.log("金币已存满");
      text("领取金币").findOne().parent().click();
      console.log("金币领取成功");
      sleep(2000);
    }
    else if (textContains("后满").exists()) {
      textContains("后满").findOne().parent().click();
      console.log("金币领取成功");
      sleep(2000);
    }
    if (textContains("去用券 享低价").exists()) {
      textContains("去用券 享低价").findOne().parent().parent().parent().child(0).click();
      console.log("关闭用券弹窗");
      sleep(1000);
    }
    if (textContains("开奖啦").exists()) {
      console.info("已满级，跳过任务");
      return;
    }
    else {
      console.info("打开任务列表");
      let taskListButton = textContains("消耗").findOne(10000)
      if (!taskListButton) {
        console.log("未能识别到关键节点，退出当前任务");
        return;
      }
      taskListButton.parent().parent().parent().parent().child(3).click();
      sleep(1000);
      for (var i = 0; !text("累计任务奖励").exists(); i++) {
        if (textContains("邀请好友助力").exists()) {
          break;
        }
        console.log("未识别到任务列表，请手动打开")
        sleep(3000);
        if (i == 1) {
          console.log("尝试坐标打开")
          setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
          click(1260, 2598);
          click(1260, 2598);
          sleep(2000);
          setScreenMetrics(device.width, device.height);//恢复本机分辨率
        }
        if (i >= 10) {
          console.log("超时未打开任务列表，退出当前任务");
          return;
        }
      }
    }
  }
  if (textContains("开奖啦").exists()) {
    return;
  }
  let IsChengCheng = 0
  let IsStartPage = 0
  let IsStartPage_2 = 0
  let IsNotJoinMemberTimes = 0
  let SkipTask = 0
  let GoToQQTask = 0
  let GoShoppingTask = 0
  let SkipSmallTask = 0
  console.log("寻找未完成任务……");
  while (true) {
    if (textContains("去用券 享低价").exists()) {
      textContains("去用券 享低价").findOne().parent().parent().parent().child(0).click();
      console.log("关闭用券弹窗");
      sleep(1000);
    }
    if (IsNotJoinMemberTimes == 4 && IsJoinMember != 0) {
      IsJoinMember = 0
      console.log("已连续" + IsNotJoinMemberTimes + "次为新店铺，跳过入会任务");
    }
    //let taskButtons = textMatches(/.*浏览.*s.*|.*浏览.*秒.*|.*首页二屏.*|.*去手Q频道.*|.*去下游参加游戏.*|.*累计浏览.*|.*浏览加购.*|.*预约并浏览.*|.*浏览即可得.*|.*浏览并关注.*|.*逛会场可得.*|.*浏览可得.*|.*预约并了解.*|.*成功入会.*|.*小程序.*|.*去组队可得.*|.*打卡可得.*|.*去APP.*|.*参与城城点击.*|.*品牌墙店铺.*|.*玩AR游戏可得.*金币.*/).find()
    let taskButtons = textMatches(/去完成|去领取|去打卡/).find()
    if (taskButtons.empty()) {
      console.log("未找到合适的任务，退出");
      sleep(3000);
      break;
    }
    let taskButton, taskText, taskTitle
    for (let i = 0; i < taskButtons.length; i++) {
      let item = taskButtons[i];
      if (item.text() == '去领取') {
        console.log('领取奖励')
        item.click()
        sleep(500)
        continue
      }
      taskText = item.parent().child(item.indexInParent() - 1).child(1).text();
      taskTitle = item.parent().child(item.indexInParent() - 1).child(0).text();
      let TaskQty = taskTitle.match(/(\d)\/(\d*)/)
      if (!TaskQty) continue
      NotTaskQty = (TaskQty[2] - TaskQty[1])

      if (NotTaskQty) {// 如果数字相减不为0，证明没完成
        //跳过任务
        //if (taskText.match(/首页二屏/)) continue
        //if (taskText.match(/成功入会/)) continue
        //if (taskText.match(/品牌墙店铺/)) continue
        //if (taskText.match(/参与城城点击/)) continue
        //if (taskText.match(/去组队/)) continue
        //if (taskText.match(/小程序/)) continue
        //if (taskText.match(/加购/)) continue
        //if (taskTitle.match(/种草城/)) continue
        if (taskText.match(/去下游参加游戏可得/) && SkipSmallTask == 1) {
          console.log("下游任务当前账号活动火爆，跳过");
          continue
        }
        if (taskText.match(/首页二屏/) && IsStartPage_2 == 3) {
          console.log("首页二屏任务无法找到活动入口，跳过");
          continue
        }
        if (taskText.match(/下单再得/) && GoShoppingTask == 1) {
          console.log("下单任务已完成浏览部分，跳过");
          continue
        }
        if (taskText.match(/去手Q频道/) && GoToQQTask == 1) {
          console.log("手Q任务已尝试完成，避免重复执行，跳过");
          continue
        }
        if (taskText.match(/成功入会/) && IsJoinMember == 0) {
          console.log("当前设置为<不执行入会>，跳过");
          continue;
        }
        if (taskText.match(/8s/) && SkipTask == 1) {
          console.log("浏览任务已达上限，跳过");
          continue;
        }
        if (taskText.match(/参与城城点击/) && IsChengCheng != 0) {
          console.log("城城任务当前账号活动火爆，跳过");
          continue;
        }
        taskButton = item;
        break;
      }
    }
    if (!taskButton) {
      console.log("未找到可自动完成的任务，退出当前任务");
      console.log("互动任务需要手动完成");
      break;
    }

    function timeTask() {
      sleep(1000);
      console.log("等待浏览任务完成……");
      if (textStartsWith("当前页").findOne(3000) != null) {//当前页浏览加购个商品领1000金币|当前页点击浏览个商品领1000金币
        console.log('任务转为累计类型');
        if (!textContains('.jpg!q70').exists()) {
          console.log("模式2");
          for (var i = 0; i < 4; i++) {
            let Model2items = textStartsWith("当前页").findOne(5000);
            if (Model1items.empty()) {
              console.log("未找到关键控件2，退出");
              break;
            }
            if (textContains("浏览加购").exists()) {
              console.log("第" + (i + 1) + "次加购");
              console.log('待加购');
              sleep(200);
              if (!Model2items.parent().parent()) {
                console.error("界面异常，跳过此商品");
                continue;
              }
              Model2items.parent().parent().child(1).child(i).child(4).click();
            } else {
              console.log("第" + (i + 1) + "次浏览");
              Model2items.parent().parent().child(1).child(i).child(4).click();
            }
            sleep(1000);
            for (var ii = 0; !textStartsWith("当前页").exists(); ii++) {
              if (ii == 0) {
                console.log("返回");
              } else {
                console.log("再次返回");
              }
              back();
              sleep(2000);
              if (ii > 4) {
                console.error("任务异常，退出当前账号");
                home();
                return;
              }
            }
          }
        }
        else {
          console.log("模式1");
          for (var i = 0; i < 4; i++) {
            let Model1items = textContains('.jpg!q70').find();
            if (Model1items.empty()) {
              console.log("未找到关键控件1，退出");
              break;
            }
            if (textStartsWith("当前页").exists()) {
              console.log("第" + (i + 1) + "次加购");
              let Model1tmp = Model1items[i].parent().parent();
              console.log('待加购');
              sleep(200);
              if (!Model1tmp) {
                console.error("界面异常，跳过此商品");
                continue;
              }
              Model1tmp.child(4).click();
            } else {
              console.log("第" + (i + 1) + "次浏览");
              Model1items[i].parent().parent().child(4).click();
            }
            sleep(1000);
            for (var ii = 0; !textStartsWith("当前页").exists(); ii++) {
              if (ii == 0) {
                console.log("返回");
              } else {
                console.log("再次返回");
              }
              back();
              sleep(2000);
              if (ii > 4) {
                console.error("加购任务异常，退出当前账号");
                home();
                return;
              }
            }
          }
        }
        console.log("浏览商品任务完成");
      }
      else {
        let c = 0
        while (c < 10) { // 10秒，防止死循环
          if (textContains("滑动浏览").exists()) {
            swipe((device.width / 3) * 2 + random(20, 50), (device.height / 6) * 3 + random(20, 50), (device.width / 3) * 2 + random(20, 50), (device.height / 6) + random(20, 50), 500);  //从下往上滑动
          }
          else {
            sleep(500);
          }
          sleep(500)
          let finish_reg = /获得.*?金币|浏览完成|任务完成|已达上限|出错了/
          if ((textMatches(finish_reg).exists() || descMatches(finish_reg).exists())) { // 等待已完成出现，有可能失败
            if (textContains("已达上限").exists()) {
              console.log("已达上限，跳过同类型任务")
              SkipTask = 1
            } else {
              console.log(textMatches(finish_reg).findOne().text());
            }
            break;
          }
          c++;
          if (c == 3 | c == 6 | c == 10) {
            //console.log("已等待" + c + "秒");
            //财富岛任务无法直接返回，只能跳转返回
            if (app.getAppName(currentPackage()) == "京喜") {
              if (LauchAPPName == "手动") {
                console.log("请手动返回任务界面，以便进行下一步");
                while (text("累计任务奖励").findOnce() == null) {
                  if ((textContains("消耗").exists()) |
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
                  for (var i = 0; !text(LauchAPPName).exists(); i++) {
                    console.log("等待识别分身……");
                    sleep(3000);
                    if (i > 10) {
                      console.log("识别超时，退出当前任务");
                      return;
                    }
                  }
                  if (text(LauchAPPName).exists()) {
                    text(LauchAPPName).findOne().parent().click();
                    console.log("分身已启动，等待活动检测……");
                  }
                }
                else {
                  console.info("打开" + LauchAPPName + "");
                  app.launchApp(LauchAPPName);
                  console.log("等待活动检测……");
                }
              }
            }
          }
        }
        if (c >= 10) {
          console.log("超时，即将返回");
        }
        else {
          console.log("浏览时长任务完成");
        }
      }
    }

    function itemTask(cart) {
      sleep(1000);
      console.log("等待进入商品列表……");
      textStartsWith("当前页").waitFor();//当前页浏览加购 个商品领金币|当前页点击浏览 个商品领金币
      if (!textContains('.jpg!q70').exists()) {
        console.log("模式2");
        for (var i = 0; i < 4; i++) {
          let Model2items = textStartsWith("当前页").findOne(5000);
          if (cart) {
            console.log("第" + (i + 1) + "次加购");
            console.log('待加购');
            sleep(200);
            if (!Model2items.parent().parent().child(1).child(i).child(4)) {
              console.error("界面异常，跳过此商品");
              continue;
            }
            Model2items.parent().parent().child(1).child(i).child(4).click();
          } else {
            console.log("第" + (i + 1) + "次浏览");
            if (!Model2items.parent().parent().child(1).child(i).child(4)) {
              console.error("界面异常，跳过此商品");
              continue;
            }
            Model2items.parent().parent().child(1).child(i).child(4).click();
          }
          sleep(1000);
          for (var ii = 0; !textStartsWith("当前页").exists(); ii++) {
            if (ii == 0) {
              console.log("返回");
            } else {
              console.log("再次返回");
            }
            back();
            sleep(2000);
            if (ii > 4) {
              console.error("任务异常，退出当前账号");
              home();
              return;
            }
          }
        }
      }
      else {
        console.log("模式1");
        for (var i = 0; i < 4; i++) {
          let Model1items = textContains('.jpg!q70').find();
          if (Model1items.empty()) {
            console.log("未找到关键控件1，退出");
            break;
          }
          if (cart) {
            console.log("第" + (i + 1) + "次加购");
            let Model1tmp = Model1items[i].parent().parent();
            console.log('待加购');
            sleep(200);
            if (!Model1tmp) {
              console.error("界面异常，跳过此商品");
              continue;
            }
            Model1tmp.child(4).click();
          } else {
            console.log("第" + (i + 1) + "次浏览");
            if (!Model1items) {
              console.error("界面异常，跳过此商品");
              continue;
            }
            Model1items[i].parent().parent().child(4).click();
          }
          sleep(1000);
          for (var ii = 0; !textStartsWith("当前页").exists(); ii++) {
            if (ii == 0) {
              console.log("返回");
            } else {
              console.log("再次返回");
            }
            back();
            sleep(2000);
            if (ii > 4) {
              console.error("加购任务异常，退出当前账号");
              home();
              return;
            }
          }
        }
      }
      console.log("浏览商品任务完成");
    }
    console.log("当前任务：" + taskTitle);
    console.log(taskText);
    taskButton.click();
    if (taskText.match(/浏览.*s|浏览.*秒/)) {
      timeTask();
    } else if (taskText.match(/参与城城点击/) && IsChengCheng == 0) {
      sleep(2000);
      for (var ii = 0; !text("邀请新朋友 更快赚现金").exists(); ii++) {
        console.log("等待识别助力状态");
        sleep(2000);
        if (textContains("活动太火爆了").findOne(3000) != null) {
          console.error("该账号活动火爆，屏蔽此任务");
          IsChengCheng = 1;
          break;
        }
        if (text("活动已结束").findOne(3000) != null) {
          console.error("活动已结束");
          console.log("查看我的现金");
          text("活动已结束").findOne().parent().parent().parent().child(5).child(0).click();
          console.log("任务完成");
          break;
        }
        else {
          if (textContains("可微信零钱提现").exists()) {
            console.log("点我收下");
            textContains("可微信零钱提现").findOne().parent().parent().parent().child(3).click();
            sleep(500);
          }
          if (textMatches(/.*获得.*现金/).exists()) {
            let tmp = textMatches(/.*获得.*现金/).findOne()
            console.log("获得现金");
            tmp.parent().child(1).click();
            sleep(500);
          }
          if (textContains("邀请活动新朋友，金额更高噢").exists()) {
            console.log("关闭弹窗");
            textContains("邀请活动新朋友，金额更高噢").findOne().parent().child(0).click();
            sleep(500);
          }
          if (textContains("有机会得大额现金").exists()) {
            console.log("发起邀请");
            textContains("有机会得大额现金").findOne().parent().child(1).click();
            sleep(2000);
            console.log("任务完成");
            back();
            sleep(500);
            ii = 6;//任务完成，提前跳出循环
          }
          if (text("京口令已复制").exists()) {
            console.log("关闭弹窗");
            text("京口令已复制").findOne().parent().parent().child(1).click();
            sleep(500);
          }
        }
        if (ii > 5) {
          console.error("助力超时，退出当前助力账号");
          break;
        }
      }
    } else if (taskText.match(/去APP/) && IsStartPage < 2) {
      sleep(2000);
      /* 如果任务按钮为去完成，则此处应该有弹窗 */
      if (textContains("立即完成").exists()) {
        console.log("立即完成");
        click(textContains("立即完成").findOne().bounds().centerX(), textContains("立即完成").findOne().bounds().centerY())
        sleep(1500);
      }
      if (!desc("我的").exists() && IsStartPage == 0) {
        console.log("未识别到我的，等待5秒待跳转");
        if (desc("我的").findOne(5000) == null) {
          console.log("未识别到我的，退出活动重进");
          back();
          sleep(500);
          back();
        }
      }
      if (!text("累计任务奖励").exists()) {
        if (!(textContains("消耗").exists())) {
          for (var i = 0; !textContains("消耗").exists(); i++) {
            console.log("未识别到活动页面，尝试通过首页浮层进入");
            if (text("首页").exists()) {
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
            if ((textContains("消耗").exists()) | textContains("开奖啦").exists()) {
              break;
            }
            if (i > 10) {
              console.log("识别超时，退出当前任务");
              return;
            }
            sleep(3000);
          }
          if (textContains("消耗").exists()) {
            console.log("已检测到活动页面");
            PageStatus = 1//进入活动页面，未打开任务列表
          }
        }
        else {
          console.log("检测到活动页面");
          PageStatus = 1//进入活动页面，未打开任务列表
        }
        while (textContains("继续环游").exists() | textContains("立即抽奖").exists() | textContains("开启今日抽奖").exists() | textContains("点我签到").exists() | textContains("开心收下").exists()
          | textContains("立即签到").exists() | textContains("去用券 享低价").exists()) {
          if (textContains("开心收下").exists()) {
            console.log("开心收下");
            click(textContains("开心收下").findOne().bounds().centerX(), textContains("开心收下").findOne().bounds().centerY())
            sleep(1000);
          }
          if (textContains("继续环游").exists()) {
            console.log("继续环游");
            click(textContains("继续环游").findOne().bounds().centerX(), textContains("继续环游").findOne().bounds().centerY())
            sleep(500);
          }
          if (textContains("立即抽奖").exists()) {
            console.log("关闭立即抽奖");
            setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
            click(1336, 808);
            sleep(1000);
            setScreenMetrics(device.width, device.height);//恢复本机分辨率
          }
          if (textContains("开启今日抽奖").exists()) {
            console.log("开启今日抽奖");
            click(textContains("开启今日抽奖").findOne().bounds().centerX(), textContains("开启今日抽奖").findOne().bounds().centerY())
            sleep(3000);
          }
          if (textContains("去用券 享低价").exists()) {
            textContains("去用券 享低价").findOne().parent().parent().parent().child(0).click();
            console.log("关闭用券弹窗");
            sleep(1000);
          }
          if (textContains("立即签到").exists()) {
            console.log("立即签到");
            click(textContains("立即签到").findOne().bounds().centerX(), textContains("立即签到").findOne().bounds().centerY())
            sleep(1000);
            textContains("开心收下").waitFor();
            console.log("开心收下");
            click(textContains("开心收下").findOne().bounds().centerX(), textContains("开心收下").findOne().bounds().centerY())
            sleep(1000);
            textContains("明天继续").waitFor();
            console.log("明天继续");
            textContains("每天签到领福利").findOne().parent().child(1).click()
            IsSign = 1
          }
          if (textContains("点我签到").exists()) {
            console.log("点我签到");
            click(textContains("点我签到").findOne().bounds().centerX(), textContains("点我签到").findOne().bounds().centerY())
            sleep(1000);
            textContains("开心收下").waitFor();
            click(textContains("开心收下").findOne().bounds().centerX(), textContains("开心收下").findOne().bounds().centerY())
            sleep(1000);
            IsSign = 1
          }
          if (text("每天签到领福利").exists()) {
            text("每天签到领福利").findOne().parent().child(1).click();
            console.log("关闭签到页面");
          }
          sleep(1000);
          console.log("如还有弹窗，请手动处理");
          sleep(3000);
        }
        if (!text("累计任务奖励").exists()) {
          console.info("打开任务列表");
          let taskListButton = textContains("消耗").findOne(10000)
          if (!taskListButton) {
            console.log("未能识别到关键节点，退出当前任务");
            return;
          }
          taskListButton.parent().parent().parent().parent().child(3).click();
          sleep(1000);
          for (var i = 0; !text("累计任务奖励").exists(); i++) {
            if (textContains("邀请好友助力").exists()) {
              break;
            }
            console.log("未识别到任务列表，请手动打开")
            sleep(3000);
            if (i == 1) {
              console.log("尝试坐标打开")
              setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
              click(1260, 2598);
              click(1260, 2598);
              sleep(2000);
              setScreenMetrics(device.width, device.height);//恢复本机分辨率
            }
            if (i >= 10) {
              console.log("超时未打开任务列表，退出当前任务");
              return;
            }
          }
        }
        IsStartPage++
        if (IsStartPage == 1) {
          console.log("任务完成");
        }
        if (IsStartPage == 2) {
          console.log("领取奖励");
        }

      }
    } else if (taskText.match(/首页二屏/) && IsStartPage_2 < 2) {
      sleep(2000);
      /* 如果任务按钮为去完成，则此处应该有弹窗 */
      if (textContains("立即完成").exists()) {
        console.log("立即完成");
        click(textContains("立即完成").findOne().bounds().centerX(), textContains("立即完成").findOne().bounds().centerY())
        sleep(1500);
      }
      if (!text("首页").exists() && IsStartPage_2 == 0) {
        console.log("未识别到首页，等待5秒待跳转");
        if (text("首页").findOne(5000) == null) {
          console.log("未识别到首页，退出活动重进");
          back();
          sleep(500);
          back();
        }
      }
      if (!text("累计任务奖励").exists()) {
        if (!(textContains("消耗").exists())) {
          for (var i = 0; !textContains("消耗").exists(); i++) {
            console.log("尝试通过首页浮层进入");
            for (var ii = 0; text("首页").exists(); ii++) {
              swipe((device.width / 3) * 2, (device.height / 6) * 3, (device.width / 3) * 2, (device.height / 6), 500);  //从下往上滑动
              sleep(2000);
              if (ii == 0) {
                console.log("寻找活动入口");
              }
              if (ii == 5) {
                console.log("超时未找到首页入口，通过我的入口返回，并跳过此任务");
                if (desc("我的").exists()) {
                  desc("我的").findOne().click();
                  let into = text("活动浮层").findOne(20000);
                  sleep(2000);
                  if (into == null) {
                    console.log("无法找到京东活动入口，退出当前任务");
                    return;
                  }
                  text("穿行寻宝").findOne().parent().parent().click();
                  sleep(3000);
                }
                IsStartPage_2 = 3;
                break;
              }
              if (descContains("浮层活动").findOne().bounds().centerX() > 0) {
                break;
              }
            }
            if (descContains("浮层活动").exists() && descContains("浮层活动").findOne().bounds().centerX() > 0) {
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
            if ((textContains("消耗").exists()) | textContains("开奖啦").exists()) {
              break;
            }
            if (i > 10) {
              console.log("识别超时，退出当前任务");
              return;
            }
            sleep(3000);
          }
          if (textContains("消耗").exists()) {
            console.log("已检测到活动页面");
            PageStatus = 1//进入活动页面，未打开任务列表
          }
        }
        else {
          console.log("检测到活动页面");
          PageStatus = 1//进入活动页面，未打开任务列表
        }
        while (textContains("继续环游").exists() | textContains("立即抽奖").exists() | textContains("开启今日抽奖").exists() | textContains("点我签到").exists() | textContains("开心收下").exists()
          | textContains("立即签到").exists() | textContains("去用券 享低价").exists()) {
          if (textContains("开心收下").exists()) {
            console.log("开心收下");
            click(textContains("开心收下").findOne().bounds().centerX(), textContains("开心收下").findOne().bounds().centerY())
            sleep(1000);
          }
          if (textContains("继续环游").exists()) {
            console.log("继续环游");
            click(textContains("继续环游").findOne().bounds().centerX(), textContains("继续环游").findOne().bounds().centerY())
            sleep(500);
          }
          if (textContains("立即抽奖").exists()) {
            console.log("关闭立即抽奖");
            setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
            click(1336, 808);
            sleep(1000);
            setScreenMetrics(device.width, device.height);//恢复本机分辨率
          }
          if (textContains("开启今日抽奖").exists()) {
            console.log("开启今日抽奖");
            click(textContains("开启今日抽奖").findOne().bounds().centerX(), textContains("开启今日抽奖").findOne().bounds().centerY())
            sleep(3000);
          }
          if (textContains("去用券 享低价").exists()) {
            textContains("去用券 享低价").findOne().parent().parent().parent().child(0).click();
            console.log("关闭用券弹窗");
            sleep(1000);
          }
          if (textContains("立即签到").exists()) {
            console.log("立即签到");
            click(textContains("立即签到").findOne().bounds().centerX(), textContains("立即签到").findOne().bounds().centerY())
            sleep(1000);
            textContains("开心收下").waitFor();
            console.log("开心收下");
            click(textContains("开心收下").findOne().bounds().centerX(), textContains("开心收下").findOne().bounds().centerY())
            sleep(1000);
            textContains("明天继续").waitFor();
            console.log("明天继续");
            textContains("每天签到领福利").findOne().parent().child(1).click()
            IsSign = 1
          }
          if (textContains("点我签到").exists()) {
            console.log("点我签到");
            click(textContains("点我签到").findOne().bounds().centerX(), textContains("点我签到").findOne().bounds().centerY())
            sleep(1000);
            textContains("开心收下").waitFor();
            click(textContains("开心收下").findOne().bounds().centerX(), textContains("开心收下").findOne().bounds().centerY())
            sleep(1000);
            IsSign = 1
          }
          if (text("每天签到领福利").exists()) {
            text("每天签到领福利").findOne().parent().child(1).click();
            console.log("关闭签到页面");
          }
          sleep(1000);
          console.log("如还有弹窗，请手动处理");
          sleep(3000);
        }
        if (!text("累计任务奖励").exists()) {
          console.info("打开任务列表");
          let taskListButton = textContains("消耗").findOne(10000)
          if (!taskListButton) {
            console.log("未能识别到关键节点，退出当前任务");
            return;
          }
          taskListButton.parent().parent().parent().parent().child(3).click();
          sleep(1000);
          for (var i = 0; !text("累计任务奖励").exists(); i++) {
            if (textContains("邀请好友助力").exists()) {
              break;
            }
            console.log("未识别到任务列表，请手动打开")
            sleep(3000);
            if (i == 1) {
              console.log("尝试坐标打开")
              setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
              click(1260, 2598);
              click(1260, 2598);
              sleep(2000);
              setScreenMetrics(device.width, device.height);//恢复本机分辨率
            }
            if (i >= 10) {
              console.log("超时未打开任务列表，退出当前任务");
              return;
            }
          }
        }
        if (IsStartPage_2 != 3) {
          IsStartPage_2++;
        }
        if (IsStartPage_2 == 1) {
          console.log("任务完成");
        }
        if (IsStartPage_2 == 2) {
          console.log("领取奖励");
        }

      }
    } else if (taskText.match(/品牌墙店铺/)) {
      sleep(2000);
      if (taskText.match(/浏览5个/)) {
        var task2 = textContains("到底了，没有更多").findOne().parent().child(14).child(0)
        for (var i = 0; i < 5; i++) {
          console.log("第" + (i + 1) + "个店铺");
          if (task2.childCount() < 14) {
            //界面异常，更换控件
            task2 = textContains("到底了，没有更多").findOne().parent().child(15).child(0)
          }
          var task2DianPu = task2.child(i + 1)
          task2DianPu.click();
          sleep(3500);
          for (var ii = 0; !textContains("后满").exists(); ii++) {
            console.log("返回")
            back();
            sleep(1500);
            if (ii > 4) {
              console.log("返回活动界面，退出当前任务");
              return;
            }
          }
        }
      }
      if (textContains("到底了，没有更多").exists()) {
        var task2 = textContains("到底了，没有更多").findOne().parent().child(16)
        for (var i = 0; i < 10 && !taskText.match(/浏览5个/); i++) {
          sleep(1000);
          if (i == 1) {
            console.log("等待任务完成");
          }
        }
        console.log("返回页面顶部");
        task2.click();//返回
        sleep(1000);
        console.info("打开任务列表");
        let taskListButton = textContains("消耗").findOne(10000)
        if (!taskListButton) {
          console.log("未能识别到关键节点，退出当前任务");
          return;
        }
        taskListButton.parent().parent().parent().parent().child(3).click();
        sleep(1000);
        for (var i = 0; !text("累计任务奖励").exists(); i++) {
          if (textContains("邀请好友助力").exists()) {
            break;
          }
          console.log("未识别到任务列表，请手动打开")
          sleep(3000);
          if (i == 1) {
            console.log("尝试坐标打开")
            setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
            click(1260, 2598);
            click(1260, 2598);
            sleep(2000);
            setScreenMetrics(device.width, device.height);//恢复本机分辨率
          }
          if (i >= 10) {
            console.log("超时未打开任务列表，退出当前任务");
            return;
          }
        }
      }
      else {
        console.log("未能识别关键节点，重进活动页面");
        if (!desc("我的").exists()) {
          console.log("未识别到我的，等待5秒待跳转");
          if (desc("我的").findOne(5000) == null) {
            console.log("未识别到我的，退出活动重进");
            back();
            sleep(500);
            back();
          }
        }
        if (!text("累计任务奖励").exists()) {
          if ((!textContains("消耗").exists())) {
            for (var i = 0; !textContains("消耗").exists(); i++) {
              console.log("未识别到活动页面，尝试通过首页浮层进入");
              if (text("首页").exists()) {
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
              if ((textContains("消耗").exists()) | textContains("开奖啦").exists()) {
                break;
              }
              if (i > 10) {
                console.log("识别超时，退出当前任务");
                return;
              }
              sleep(3000);
            }
            if ((textContains("消耗").exists())) {
              console.log("已检测到活动页面");
              PageStatus = 1//进入活动页面，未打开任务列表
            }
          }
          else {
            console.log("检测到活动页面");
            PageStatus = 1//进入活动页面，未打开任务列表
          }
          console.info("打开任务列表");
          let taskListButton = textContains("消耗").findOne(10000)
          if (!taskListButton) {
            console.log("未能识别到关键节点，退出当前任务");
            return;
          }
          taskListButton.parent().parent().parent().parent().child(3).click();
          sleep(1000);
          for (var i = 0; !text("累计任务奖励").exists(); i++) {
            if (textContains("邀请好友助力").exists()) {
              break;
            }
            console.log("未识别到任务列表，请手动打开")
            sleep(3000);
            if (i == 1) {
              console.log("尝试坐标打开")
              setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
              click(1260, 2598);
              click(1260, 2598);
              sleep(2000);
              setScreenMetrics(device.width, device.height);//恢复本机分辨率
            }
            if (i >= 10) {
              console.log("超时未打开任务列表，退出当前任务");
              return;
            }
          }
        }
      }
    } else if (taskText.match(/累计浏览/)) {
      if (taskText.match(/加购/)) {
        itemTask(true);
      }
      else {
        itemTask(false);
      }
    } else if (taskText.match(/浏览加购/)) {
      if (taskText.match(/加购/)) {
        itemTask(true);
      }
      else {
        itemTask(false);
      }
    } else if (taskText.match(/去组队可得/)) {
      sleep(3000);
      for (var ii = 0; !text("累计任务奖励").exists(); ii++) {
        sleep(1000);
        console.log("返回");
        back();
        sleep(2000);
        if ((textContains("消耗").exists())) {
          console.log("已返回活动界面");
          break;
        }
        if (ii > 4) {
          console.error("未能返回任务界面，退出当前任务");
          return;
        }
      }
      console.log("领取成功");
      if (!text("累计任务奖励").exists() && (textContains("消耗").exists())) {
        console.log("未识别到任务列表，尝试自动打开");
        taskListButton.parent().click();
        sleep(1000);
      }
      for (var ii = 0; !text("累计任务奖励").exists(); ii++) {
        console.log("未识别到任务列表，请手动打开");
        sleep(3000);
        if (i == 1) {
          console.log("尝试坐标打开")
          setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
          click(720, 2732);
          click(720, 2732);
          sleep(2000);
          setScreenMetrics(device.width, device.height);//恢复本机分辨率
        }
        if (ii >= 10) {
          console.error("未按时打开任务列表，退出当前任务");
          return;
        }
      }
    } else if (taskText.match(/小程序/)) {
      sleep(3000);
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
      console.log("任务完成");
    } else if (taskText.match(/成功入会/)) {
      sleep(4000);
      if (textContains("确认授权并加入店铺会员").exists()) {
        if (IsJoinMember == 2) {
          console.log("当前店铺未入会，跳过");
          IsNotJoinMemberTimes = IsNotJoinMemberTimes + 1
        }
        else if (IsJoinMember == 1) {
          console.log("涉及个人隐私，请手动加入店铺会员或者忽略加入会员任务");
          return;
        }
        else if (IsJoinMember == 3) {
          console.log("当前店铺未入会，等待手动");
          sleep(8000);
        }
      }
      else {
        console.info("已是当前店铺会员");
        console.log("任务完成");
        IsNotJoinMemberTimes = 0;
      }
    } else if (taskText.match(/预约并了解|玩AR游戏可得|打卡/)) {
      sleep(2000);
      while (text("立即前往").exists() | text("立即签到").exists()) {
        if (text("立即前往").exists()) {
          console.log("前往签到");
          click(text("立即前往").findOne().bounds().centerX(), text("立即前往").findOne().bounds().centerY())
          sleep(1500);
          console.log("立即签到");
          click(text("立即签到").findOne().bounds().centerX(), text("立即签到").findOne().bounds().centerY())
          sleep(1000);
          textContains("开心收下").waitFor();
          click(text("开心收下").findOne().bounds().centerX(), text("开心收下").findOne().bounds().centerY())
          sleep(1000);
        }
        if (text("立即签到").exists()) {
          console.log("立即签到");
          click(text("立即签到").findOne().bounds().centerX(), text("立即签到").findOne().bounds().centerY())
          sleep(1000);
          textContains("开心收下").waitFor();
          click(text("开心收下").findOne().bounds().centerX(), text("开心收下").findOne().bounds().centerY())
          sleep(1000);
        }
      }
      console.log("任务完成");
    } else if (taskText.match(/浏览并关注|预约并浏览|浏览可得|浏览即可得|逛会场可得|去手Q频道|去下游参加游戏/)) {
      if (taskTitle.match(/去种草城/)) {
        sleep(5000);
        if (text("互动种草城").exists()) {
          if (textContains("/3）").exists()) {
            for (var i = 0; i < 3; i++) {
              console.log("第" + (i + 1) + "次浏览店铺");
              textContains("/3）").findOnce().parent().parent().child(2).click();
              sleep(1000);
              console.log("返回");
              back();
              sleep(2000);
              for (var ii = 0; !text("互动种草城").exists(); ii++) {
                console.log("再次返回");
                sleep(2000);
                back();
                if (ii > 3) {
                  console.error("无法识别关键节点，退出当前账号任务");
                  return;
                }
              }
            }
          }
        }
        else if (text("品牌种草城").exists()) {
          if (textStartsWith("点击【喜欢】").exists()) {
            let temp = textStartsWith("点击【喜欢】").findOne()
            setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
            for (var i = 0; i < 4; i++) {
              console.log("第" + (i + 1) + "次浏览店铺");
              click(1046, 2520);
              sleep(2000);
              console.log("返回");
              back();
              sleep(2000);
              for (var ii = 0; !textStartsWith("点击【喜欢】").exists(); ii++) {
                console.log("再次返回");
                sleep(2000);
                back();
                if (ii > 3) {
                  console.error("无法识别关键节点，退出当前账号任务");
                  return;
                }
              }
              sleep(2000);
              if (i < 3) {
                console.log("下一个店铺");
                temp.parent().child(1).child(1).click();
                sleep(1500);
              }
            }
            setScreenMetrics(device.width, device.height);//恢复本机分辨率

          }
        }
      } else {
        if (taskText.match(/去下游参加游戏/)) {
          sleep(800);
        }
        else {
          sleep(2000);
        }
        if (taskText.match(/去手Q频道/)) {
          console.log("等待跳转QQ");
          for (var t = 0; app.getAppName(currentPackage()) != "QQ" && !text("频道").exists(); t++) {
            if (t > 10) {
              console.log("超时未识别到QQ，退出此任务");
              break;
            }
            if (text("加入频道").exists()) {
              break;
            }
            console.log("当前应用名:  " + app.getAppName(currentPackage()) + "\n"
              + "未识别到QQ相关界面，继续等待……");
            sleep(3000);
          }
          sleep(1500);
          GoToQQTask = 1;
        }
        if (taskText.match(/下单/)) {
          console.log("仅浏览，不下单");
          GoShoppingTask = 1;
        }
      }
      console.log("任务完成");
    } else {
      //默认当浏览任务做
      sleep(2000);
      console.log("任务完成");
    }

    for (var i = 0; !text("累计任务奖励").exists(); i++) {
      console.log("返回");
      back();
      sleep(1000);
      if (i == 10) {
        console.log("无法返回任务界面，退出当前任务");
        return;
      }
      if (text("累计任务奖励").findOnce(2000) != null) {
        break;
      }
      if (text("暂时离开").exists()) {
        console.log("暂时离开");
        click(textContains("暂时离开").findOne().bounds().centerX(), textContains("暂时离开").findOne().bounds().centerY())
        sleep(1000);
      }
      if (i == 4) {
        console.log("可能是京东医疗弹窗，尝试坐标点击");
        setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
        click(720, 2358);
        sleep(2000);
        setScreenMetrics(device.width, device.height);//恢复本机分辨率
      }
      if (text("已发放至“京东APP-我的-优惠券”，可立即使用").exists()) {
        console.log("关闭优惠券");
        let closebutton = text("已发放至“京东APP-我的-优惠券”，可立即使用").findOne().parent().parent().parent().child(1);
        click(closebutton.bounds().centerX(), closebutton.bounds().centerY());
        sleep(1500);
      }
      else {
        if (text("累计任务奖励").exists()) break;
        if (id("ffp").exists() | id("gv3").exists() | text("确定").exists()) {
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
        if (text("累计任务奖励").exists()) break;
        console.info("准备下一个任务");
        if (text("首页").exists() && text("我的").exists()) {
          console.log("识别到首页，返回原活动列表");
          OutAPP();
          sleep(1000);
          if (!text("累计任务奖励").exists()) {
            if (!(textContains("消耗").exists())) {
              for (var i = 0; !textContains("消耗").exists(); i++) {
                console.log("尝试通过首页浮层进入");
                let into = descContains("浮层活动").findOne(20000);
                sleep(2000);
                if (into == null) {
                  console.log("无法找到京东活动入口，退出当前任务");
                  return;
                }
                click(into.bounds().centerX(), into.bounds().centerY());
                click(into.bounds().centerX(), into.bounds().centerY());
                sleep(3000);
                if ((textContains("消耗").exists()) | textContains("开奖啦").exists()) {
                  break;
                }
                if (i > 10) {
                  console.log("识别超时，退出当前任务");
                  return;
                }
                sleep(3000);
              }
              if (textContains("消耗").exists()) {
                console.log("已检测到活动页面");
                PageStatus = 1//进入活动页面，未打开任务列表
              }
            }
            else {
              console.log("检测到活动页面");
              PageStatus = 1//进入活动页面，未打开任务列表
            }
            while (textContains("继续环游").exists() | textContains("立即抽奖").exists() | textContains("开启今日抽奖").exists() | textContains("点我签到").exists() | textContains("开心收下").exists()
              | textContains("立即签到").exists() | textContains("去用券 享低价").exists()) {
              if (textContains("开心收下").exists()) {
                console.log("开心收下");
                click(textContains("开心收下").findOne().bounds().centerX(), textContains("开心收下").findOne().bounds().centerY())
                sleep(1000);
              }
              if (textContains("继续环游").exists()) {
                console.log("继续环游");
                click(textContains("继续环游").findOne().bounds().centerX(), textContains("继续环游").findOne().bounds().centerY())
                sleep(500);
              }
              if (textContains("立即抽奖").exists()) {
                console.log("关闭立即抽奖");
                setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
                click(1336, 808);
                sleep(1000);
                setScreenMetrics(device.width, device.height);//恢复本机分辨率
              }
              if (textContains("开启今日抽奖").exists()) {
                console.log("开启今日抽奖");
                click(textContains("开启今日抽奖").findOne().bounds().centerX(), textContains("开启今日抽奖").findOne().bounds().centerY())
                sleep(3000);
              }
              if (textContains("去用券 享低价").exists()) {
                textContains("去用券 享低价").findOne().parent().parent().parent().child(0).click();
                console.log("关闭用券弹窗");
                sleep(1000);
              }
              if (textContains("立即签到").exists()) {
                console.log("立即签到");
                click(textContains("立即签到").findOne().bounds().centerX(), textContains("立即签到").findOne().bounds().centerY())
                sleep(1000);
                textContains("开心收下").waitFor();
                console.log("开心收下");
                click(textContains("开心收下").findOne().bounds().centerX(), textContains("开心收下").findOne().bounds().centerY())
                sleep(1000);
                textContains("明天继续").waitFor();
                console.log("明天继续");
                textContains("每天签到领福利").findOne().parent().child(1).click()
                IsSign = 1
              }
              if (textContains("点我签到").exists()) {
                console.log("点我签到");
                click(textContains("点我签到").findOne().bounds().centerX(), textContains("点我签到").findOne().bounds().centerY())
                sleep(1000);
                textContains("开心收下").waitFor();
                click(textContains("开心收下").findOne().bounds().centerX(), textContains("开心收下").findOne().bounds().centerY())
                sleep(1000);
                IsSign = 1
              }
              if (text("每天签到领福利").exists()) {
                text("每天签到领福利").findOne().parent().child(1).click();
                console.log("关闭签到页面");
              }
              sleep(1000);
              console.log("如还有弹窗，请手动处理");
              sleep(3000);
            }
            if (!text("累计任务奖励").exists()) {
              console.info("打开任务列表");
              let taskListButton = textContains("消耗").findOne(10000)
              if (!taskListButton) {
                console.log("未能识别到关键节点，退出当前任务");
                return;
              }
              taskListButton.parent().parent().parent().parent().child(3).click();
              sleep(1000);
              for (var i = 0; !text("累计任务奖励").exists(); i++) {
                if (textContains("邀请好友助力").exists()) {
                  break;
                }
                console.log("未识别到任务列表，请手动打开")
                sleep(3000);
                if (i == 1) {
                  console.log("尝试坐标打开")
                  setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
                  click(1260, 2598);
                  click(1260, 2598);
                  sleep(2000);
                  setScreenMetrics(device.width, device.height);//恢复本机分辨率
                }
                if (i >= 10) {
                  console.log("超时未打开任务列表，退出当前任务");
                  return;
                }
              }
            }
          }
        }
        if (textContains("重新连接").exists()) {
          console.info("尝试重新连接");
          textContains("重新连接").findOne().click();
          sleep(500);
        }
        sleep(1000);
      }
    }
    sleep(2000);
  }
  if (textContains("去领取").exists()) {
    console.info("准备领取奖励");
    while (textContains("去领取").exists()) {
      textContains("去领取").findOne().parent().click();
      sleep(2500);
      if (textContains("去用券 享低价").exists()) {
        textContains("去用券 享低价").findOne().parent().parent().parent().child(0).click();
        console.log("关闭用券弹窗");
        sleep(1000);
      }
      if (textContains("开心收下").exists()) {
        textContains("开心收下").findOne().parent().parent().parent().child(0).click();
        console.log("开心收下");
        sleep(1000);
      }
    }
    console.info("奖励领取完毕");
  }
  sleep(500);
  back();
  sleep(500);
  back();
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
