<?php /*a:2:{s:86:"/mnt/hgfs/centosVM/Manage_WXRobot_Web/application/admin/view/config/communication.html";i:1641716010;s:70:"/mnt/hgfs/centosVM/Manage_WXRobot_Web/application/admin/view/main.html";i:1641367337;}*/ ?>
<div class="layui-card layui-bg-gray"><style>        .layui-tab-card>.layui-tab-title .layui-this {
            background-color: #fff;
        }
    </style><?php if(!(empty($title) || (($title instanceof \think\Collection || $title instanceof \think\Paginator ) && $title->isEmpty()))): ?><div class="layui-card-header layui-anim layui-anim-fadein notselect"><span class="layui-icon layui-icon-next font-s10 color-desc margin-right-5"></span><?php echo htmlentities((isset($title) && ($title !== '')?$title:'')); ?><div class="pull-right"></div></div><?php endif; ?><div class="layui-card-body layui-anim layui-anim-upbit"><form onsubmit="return false;" data-auto="true" method="post" class='layui-form layui-card' autocomplete="off"><div class="layui-tab layui-tab-card"><ul class="layui-tab-title"><li class="layui-this">基本配置</li></ul><div class="layui-tab-content" ><div class="layui-tab-item layui-show" ><div class="layui-card-body padding-40 layui-col-md8"><label class="layui-form-item block relative"><span class="color-green margin-right-10">内网通讯地址</span><input name="intranet_communication" required value="<?php echo config('intranet_communication'); ?>" class="layui-input"><p class="help-block">内网地址:端口，你可以填写127.0.0.1、localhost、内网ip、公网ip，实在分不清，你就写公网ip</p></label><label class="layui-form-item block relative"><span class="color-green margin-right-10">机器人运行所在ip</span><input name="remote_communication" required value="<?php echo config('remote_communication'); ?>" class="layui-input"><p class="help-block">如果在机器人本机运行，修改为127.0.0.1或者localhost，若外网访问改为运行机器人的服务器外网ip</p></label><label class="layui-form-item block relative"><span class="color-green margin-right-10">机器人运行所在端口</span><input name="remote_communication_port" required value="<?php echo config('remote_communication_port'); ?>" class="layui-input"><p class="help-block">端口，默认8090。如果你不懂，就默认就行。</p></label></div></div></div><div class="layui-form-item text-center margin-top-20"><button class="layui-btn" type="submit">保存配置</button></div></div></form><script></script></div></div><script>//    layui.use('element', function(){
//        var element = layui.element;
//
//        element.tabAdd('demo', {
//            title: '选项卡的标题'
//            ,content: '选项卡的内容' //支持传入html
//            ,id: '选项卡标题的lay-id属性值'
//        });
//
//        //获取hash来切换选项卡，假设当前地址的hash为lay-id对应的值
//        var layid = location.hash.replace(/^#test1=/, '');
//        element.tabChange('test1', layid); //假设当前地址为：http://a.com#test1=222，那么选项卡会自动切换到“发送消息”这一项
//
//        //监听Tab切换，以改变地址hash值
//        element.on('tab(test1)', function(){
//            location.hash = ''+ this.getAttribute('lay-id');
//        });
//    });

</script>