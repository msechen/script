/*
  京东<穿行寻宝-膨胀红包>任务
https://t.me/LingFeng0918
  20221021 V1.0
  新增脚本
*/
var TaskName = "穿行寻宝-膨胀助力"
Start();
console.info("开始任务");

/*
  账号明细.js文件说明
  账号文件需和脚本在同一目录
  文件编码为utf-8
  每行一个账号，参数以逗号隔开（中英不限）
  每行第一个参数为任务名称，后续的参数参考对应Run参数说明填写

 */
/*
关于<邀请码>：搜索关键字"邀请码"，按规则填入即可互相助力
第一个参数：通过APP名指定打开APP
           填入“手动”则需要手动打开APP，脚本每3秒检测一次当前运行的APP名字作为判断是否启动成功
第二个参数：对应参数1的APP名称，是否是分身应用，0：正常应用，1：分身有术Pro内部分身，暂不支持其他分身应用（如是多开分身，可在参数1中直接填入分身应用APP名称即可）
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
      Run(AccountID[1], AccountID[2]); home();
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
  // Run("京东-3", 1); home();
  // Run("京东", 1); home();
  // Run("京东-2", 1); home();
  //手动例子
  Run("手动", 1); home();
  //分身有术缓存清理
  //CleanCache("分身有术Pro",1);
}

console.info("结束任务");
home();
sleep(1000);

console.log("已退出脚本");
engines.myEngine().forceStop()

function Start() {
  auto.waitFor();//获取无障碍服务权限
  console.show();//开启悬浮窗
  console.info("京东<" + TaskName + ">任务");
}

function Run(LauchAPPName, IsSeparation) {
  if (IsSeparation == null) {
    IsSeparation = 0 //0：正常应用 1：分身有术内部应用
  }
  var IsSeparation_info = ""
  if (IsSeparation == 0) {
    IsSeparation_info = "正常应用"
  } else if (IsSeparation == 1) {
    IsSeparation_info = "分身有术Pro"
  } else {
    IsSeparation_info = "无效参数，改为默认值“非分身应用”"
    IsSeparation = 0
  }
  console.info(
    "当前设置" + "\n" +
    "启动APP：" + LauchAPPName + "\n" +
    "是否分身：" + IsSeparation_info
  )
  sleep(2000);
  console.info("开始膨胀红包");
  //将京口令分段填入，只要里面的特征码即可，分不清什么是特征码的也可以整段放进来，注意用双引号和逗号隔开
  Code = new Array("￥3DIFi3EsIAhRkW￥", "￥JEhvG8yJX9tmSO￥");//邀请码每天都是新的，此处纯属举例
  RunTime = Code.length;
  console.info("共识别到" + RunTime + "个助力码");
  for (var i = 0; i < RunTime; i++) {
    console.log("第" + (i + 1) + "个助力码");
    setClip(Code[i]);
    console.log("助力码写入剪切板");
    if (LauchAPPName == "手动") {
      console.log("请手动打开APP，以便进行下一步");
      while (text("领京豆").findOnce() == null) {
        if (app.getAppName(currentPackage()) == "京东" | currentActivity() == "com.jingdong.app.mall.MainFrameActivity"
          | currentActivity() == "com.jingdong.sdk.jdshare.cell.k") {
          break;
        }
        console.log("当前应用名:  " + app.getAppName(currentPackage()) + "\n"
          + "当前活动:  " + currentActivity() + "\n"
          + "未识别到京东界面，继续等待……");
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
    if (text("立即查看").findOnce() == null) {
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
              if (app.getAppName(currentPackage()) == "京东" | text("立即查看").exists() | currentActivity() == "com.jingdong.app.mall.MainFrameActivity"
                | currentActivity() == "com.jingdong.sdk.jdshare.cell.k") {
                break;
              }
              console.log("当前应用名:  " + app.getAppName(currentPackage()) + "\n"
                + "当前活动:  " + currentActivity() + "\n"
                + "未识别到京东界面，继续等待……");
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
    while (text("立即查看").exists() | textContains("的助力邀请").exists()) {
      if (text("立即查看").exists()) {
        console.log("立即查看");
        text("立即查看").findOnce().click();
        while (!text("正在加载100%").exists()) {
          console.log("等待加载……");
          sleep(2000);
        }
        textContains("的助力邀请").findOne(5000).parent().child(6).child(0).click();
        console.log("为TA助力");
        console.log("助力完成");
        break;
      } else if (textContains("的助力邀请").exists()) {
        while (!text("正在加载100%").exists()) {
          sleep(2000);
          console.log("等待加载……");
        }
        console.log("为TA助力");
        textContains("的助力邀请").findOne(5000).parent().child(6).child(0).click();
        console.log("助力完成");
        break;
      }
    }
    sleep(2000);
    //最后一次助力不返回首页，以便进行下一个任务
    if (i < RunTime - 1) {
      OutAPP(100);
      console.log("退出当前APP，准备第" + (i + 2) + "个助力码");
    }
    else {
      console.log("当前账户已助力完成");
      home();
    }
  }
}
//确保退出活动界面及当前账号

function OutAPP(SleepTime) {
  if (SleepTime == null) {
    SleepTime = 100
  }
  back();
  sleep(500);
  back();
  sleep(500);
  back();
  sleep(SleepTime);
}
