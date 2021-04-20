这是弹记事本的POC

用非沙箱模式的chrome打开页面即可攻击成功，

- CTRL+R，”Chrome路径“ -no-sandbox
- 右键编辑Chrome浏览器的快捷方式，目标末尾添加 -no-sandbox

若想替换成Cobalt Strike的Payload

直接用攻击-Payload内生成的内容，将'\\'替换成',0'，去掉第一个','放入exploit.html里的sellcode字段内，非沙箱打开页面即可上线