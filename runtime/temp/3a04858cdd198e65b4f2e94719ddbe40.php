<?php /*a:2:{s:78:"/mnt/hgfs/centosVM/Manage_WXRobot_Web/application/admin/view/users/friend.html";i:1640775919;s:70:"/mnt/hgfs/centosVM/Manage_WXRobot_Web/application/admin/view/main.html";i:1641367337;}*/ ?>
<div class="layui-card layui-bg-gray"><style>        .layui-tab-card>.layui-tab-title .layui-this {
            background-color: #fff;
        }
    </style><?php if(!(empty($title) || (($title instanceof \think\Collection || $title instanceof \think\Paginator ) && $title->isEmpty()))): ?><div class="layui-card-header layui-anim layui-anim-fadein notselect"><span class="layui-icon layui-icon-next font-s10 color-desc margin-right-5"></span><?php echo htmlentities((isset($title) && ($title !== '')?$title:'')); ?><div class="pull-right"></div></div><?php endif; ?><div class="layui-card-body layui-anim layui-anim-upbit"><style>
.layui-table-cell{
    height: auto !important;
}
.layui-table img {
width: 120px;
height:120px;
}

</style><div class="think-box-shadow"><fieldset><legend>条件搜索</legend><form class="layui-form layui-form-pane form-search" action="<?php echo request()->url(); ?>" onsubmit="return false" method="get" autocomplete="off"><div class="layui-form-item layui-inline"><label class="layui-form-label">微信号</label><div class="layui-input-inline"><input name="wxNum" value="<?php echo htmlentities((app('request')->get('wxNum') ?: '')); ?>" placeholder="请输入微信号" class="layui-input"></div></div><div class="layui-form-item layui-inline"><label class="layui-form-label">昵称</label><div class="layui-input-inline"><input name="nickname" value="<?php echo htmlentities((app('request')->get('nickname') ?: '')); ?>" placeholder="请输入昵称" class="layui-input"></div></div><div class="layui-form-item layui-inline"><label class="layui-form-label">备注</label><div class="layui-input-inline"><input name="remark" value="<?php echo htmlentities((app('request')->get('remark') ?: '')); ?>" placeholder="请输入备注" class="layui-input"></div></div><div class="layui-form-item layui-inline"><button class="layui-btn layui-btn-primary"><i class="layui-icon">&#xe615;</i> 搜 索</button></div></form></fieldset><table class="layui-table margin-top-15" lay-filter="tab" lay-skin="line"><?php if(!(empty($list) || (($list instanceof \think\Collection || $list instanceof \think\Paginator ) && $list->isEmpty()))): ?><thead><tr><th lay-data="{field:'wxid',width:180}" class='text-left nowrap'>好友微信ID</th><th lay-data="{field:'robot_wxid',width:150}" class='text-left nowrap'>机器人微信ID</th><th lay-data="{field:'wxNum',width:150}" class='text-left nowrap'>微信号</th><th lay-data="{field:'nickname',width:120}" class='text-left nowrap'>昵称</th><th lay-data="{field:'remark'}" class='text-left nowrap'>备注</th><th lay-data="{field:'edit',width:380,fixed: 'right'}" class='text-left nowrap'>操作</th></tr></thead><?php endif; ?><tbody><?php foreach($list as $key=>$vo): ?><tr><td class='text-left nowrap'><?php echo htmlentities($vo['wxid']); ?></td><td class='text-left nowrap'><?php echo htmlentities($vo['robot_wxid']); ?></td><td class='text-left nowrap'><?php echo htmlentities($vo['wxNum']); ?></td><td class='text-left nowrap'><?php echo htmlentities($vo['nickname']); ?></td><td class='text-left nowrap'><?php echo htmlentities((isset($vo['remark']) && ($vo['remark'] !== '')?$vo['remark']:'无备注')); ?></td><td class='text-left nowrap'><a data-dbclick class="layui-btn layui-btn-xs" data-title="编辑菜单" data-modal='<?php echo url("admin/users/edit_users"); ?>?id=<?php echo htmlentities($vo['wxid']); ?>'>编 辑</a><a data-dbclick class="layui-btn layui-btn-xs" style="background:blue;" data-title="向<?php echo htmlentities($vo['nickname']); ?>发送消息" data-modal='<?php echo url("admin/users/send_message"); ?>?to_wxid=<?php echo htmlentities($vo['wxid']); ?>&robot_wxid=<?php echo htmlentities($vo['robot_wxid']); ?>'>发送消息</a></td></tr><?php endforeach; ?></tbody></table><script>
        function del_user(id){
            layer.confirm("确认要删除吗，删除后不能恢复",{ title: "删除确认" },function(index){
                $.ajax({
                    type: 'POST',
                    url: "<?php echo url('delete_user'); ?>",
                    data: {
                        'id': id,
                        '_csrf_': "<?php echo systoken('admin/users/delete_user'); ?>"
                    },
                    success:function (res) {
                        layer.msg(res.info,{time:2500});
                        location.reload();
                    }
                });
            },function(){});
        }
    </script><script></script><?php if(empty($list) || (($list instanceof \think\Collection || $list instanceof \think\Paginator ) && $list->isEmpty())): ?><span class="notdata">没有记录哦</span><?php else: ?><?php echo (isset($pagehtml) && ($pagehtml !== '')?$pagehtml:''); ?><?php endif; ?></div></div></div><script>//    layui.use('element', function(){
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