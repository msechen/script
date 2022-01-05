<?php /*a:2:{s:77:"/mnt/hgfs/centosVM/Manage_WXRobot_Web/application/admin/view/users/group.html";i:1641374787;s:70:"/mnt/hgfs/centosVM/Manage_WXRobot_Web/application/admin/view/main.html";i:1641367337;}*/ ?>
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
.think-checkbox input[type=checkbox]{
    border: 1px solid black;
}
.think-checkbox input[type=checkbox]:checked:after{
    color: #fff;
    background: black;
}


</style><div class="think-box-shadow"><fieldset><legend>条件搜索</legend><form class="layui-form layui-form-pane form-search" action="<?php echo request()->url(); ?>" onsubmit="return false" method="get" autocomplete="off"><div class="layui-form-item layui-inline" style="margin-right: 10px"><button data-action='<?php echo url("do_group"); ?>?robot_wxid=<?php echo htmlentities($robot_wxid); ?>' data-csrf="<?php echo systoken('do_deposit2'); ?>" data-rule="id#{key}" class='layui-btn layui-btn-sm layui-btn-danger'>批量服务</button></div><div class="layui-form-item layui-inline"><label class="layui-form-label">群名</label><div class="layui-input-inline"><input name="nickname" value="<?php echo htmlentities((app('request')->get('nickname') ?: '')); ?>" placeholder="请输入群名" class="layui-input"></div></div><div class="layui-form-item layui-inline"><button class="layui-btn layui-btn-primary"><i class="layui-icon">&#xe615;</i> 搜 索</button></div></form></fieldset><table class="layui-table margin-top-15" lay-filter="tab" lay-skin="line"><?php if(!(empty($list) || (($list instanceof \think\Collection || $list instanceof \think\Paginator ) && $list->isEmpty()))): ?><thead><tr><th class='list-table-check-td think-checkbox'><input data-auto-none data-check-target='.list-check-box' type='checkbox'></th><th lay-data="{field:'nickname',width:120}" class='text-left nowrap'>群组名</th><th lay-data="{field:'wxid',width:180}" class='text-left nowrap'>群组微信ID</th><th lay-data="{field:'robot_wxid',width:150}" class='text-left nowrap'>机器人微信ID</th><th lay-data="{field:'edit',width:380,fixed: 'right'}" class='text-left nowrap'>操作</th></tr></thead><?php endif; ?><tbody><?php foreach($list as $key=>$vo): ?><tr><td class='list-table-check-td think-checkbox'><input class="list-check-box" value='<?php echo htmlentities($vo['wxid']); ?>' type='checkbox'></td><td class='text-left nowrap'><?php echo htmlentities($vo['nickname']); ?></td><td class='text-left nowrap'><?php echo htmlentities($vo['wxid']); ?></td><td class='text-left nowrap'><?php echo htmlentities($vo['robot_wxid']); ?></td><td class='text-left nowrap'><a data-dbclick class="layui-btn layui-btn-xs" data-title="修改【<?php echo htmlentities($vo['nickname']); ?>】群资料" data-modal='<?php echo url("admin/users/edit_group"); ?>?to_wxid=<?php echo htmlentities($vo['wxid']); ?>&robot_wxid=<?php echo htmlentities($vo['robot_wxid']); ?>'>修改群资料</a><a data-dbclick class="layui-btn layui-btn-xs" style="background:blue;" data-title="向【<?php echo htmlentities($vo['nickname']); ?>】发送消息" data-modal='<?php echo url("admin/users/send_message"); ?>?to_wxid=<?php echo htmlentities($vo['wxid']); ?>&robot_wxid=<?php echo htmlentities($vo['robot_wxid']); ?>'>发送消息</a></td></tr><?php endforeach; ?></tbody></table><script>
        var serviced_for_group=<?php echo(json_encode($serviced_for_group));?>;
        $(function(){
            $(serviced_for_group).each(function (i,e){
                $("input[value='"+e+"']").prop("checked",true);
            });
        });
        
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