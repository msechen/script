/*
  <更新脚本>任务
  20220610 V1.0
  增强脚本可读性和通用性
  20220621 V1.1
  删除失效脚本，调整失效脚本判断逻辑
*/
var TaskName = "更新脚本"
Start(TaskName);
console.log("开始更新");
UpdateScripts();
console.log("已退出脚本");

engines.myEngine().forceStop()

function Start() {
  auto.waitFor();//获取无障碍服务权限
  console.show();//开启悬浮窗
  console.info("<" + TaskName + ">任务");
}

function UpdateScripts() {
  //不想更新的自行修改文件名
  FilesNames = new Array("JD_DianDianQuan.js"
            ,"JD_JiMoFang.js"
            ,"JD_LingXianJin.js"
            ,"JD_MiaoMiaoBi.js"
            ,"JD_ChengChengFenXianJin(纯助力).js"
            ,"JD_JingXiangHongBao.js"
            ,"JD_JinLiHongBao(纯助力).js"
            ,"JD_PingXingShiKong.js"
            ,"JD_PingXingShiKong(签到和助力).js"
            )
  //相应库的地址
  var Address = "https://raw.githubusercontent.com/LingFeng0918/LF_JD/main/AutoJS/JD"
  //下载路径默认为当前脚本所在路径，注意要以/结尾
  var SavePath = "./"
  //var SavePath = "/sdcard/脚本/" //路径示例
  if(SavePath == "./"){
    console.log("当前设置下载路径与当前脚本在相同文件夹");
  }
  else{
    console.log("当前设置下载路径为：" + SavePath);
  }
  for(var i = 0; i < FilesNames.length; i++){
    var FilesName = FilesNames[i]
    var Url = Address + FilesName;
    var File = http.get(Url);
    if(File.statusCode != 200){
      console.error(FilesName + "请求失败，准备下一个脚本");
      continue;
    }
    if(files.exists(SavePath + FilesName)){
      console.log(FilesName + "已存在，准备更新");
    }
    else{
      console.log("未发现" + FilesName + "，准备下载");
    }
    files.writeBytes(SavePath + FilesName, File.body.bytes());
    console.log("下载成功");
  }
  console.info("共计下载" + FilesNames.length + "个脚本")
}

