<?php /*a:2:{s:76:"/mnt/hgfs/centosVM/Manage_WXRobot_Web/application/admin/view/task/index.html";i:1641053262;s:70:"/mnt/hgfs/centosVM/Manage_WXRobot_Web/application/admin/view/main.html";i:1641367337;}*/ ?>
<div class="layui-card layui-bg-gray"><style>        .layui-tab-card>.layui-tab-title .layui-this {
            background-color: #fff;
        }
    </style><?php if(!(empty($title) || (($title instanceof \think\Collection || $title instanceof \think\Paginator ) && $title->isEmpty()))): ?><div class="layui-card-header layui-anim layui-anim-fadein notselect"><span class="layui-icon layui-icon-next font-s10 color-desc margin-right-5"></span><?php echo htmlentities((isset($title) && ($title !== '')?$title:'')); ?><div class="pull-right"></div></div><?php endif; ?><div class="layui-card-body layui-anim layui-anim-upbit"><style>
        table {
            border: 1px solid #e3e6e8;
            border-collapse: collapse;
            display: table;
            table-layout: fixed;
            text-align: center;
            width: 100%;
        }

        th, td {
            border: 1px solid #e3e6e8;
            height: 38px;
            line-height: 38px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

    
        .layui-layer {
            word-break: break-all;
            word-wrap: break-word;
        }
</style><div class="think-box-shadow"><table class="layui-table margin-top-15" lay-skin="line"><?php if(!(empty($list) || (($list instanceof \think\Collection || $list instanceof \think\Paginator ) && $list->isEmpty()))): ?><thead><tr><th class='text-left nowrap'>ID</th><th class='text-left nowrap'>任务内容</th><th class='text-left nowrap'>执行间隔</th><th class='text-left nowrap'>上次执行时间</th><th class='text-left nowrap'>机器人ID</th><th class='text-left nowrap'>添加时间</th><th class='text-left nowrap'>操作</th></tr></thead><?php endif; ?><tbody><?php foreach($list as $key=>$vo): ?><tr><td class='text-left nowrap'><?php echo htmlentities($vo['id']); ?></td><td class='text-left nowrap'><?php echo htmlentities($vo['task_content']); ?></td><td class='text-left nowrap'><?php echo htmlentities($vo['run_interval']); ?>分钟</td><td class='text-left nowrap'><?php echo htmlentities(format_datetime($vo['run_time'])); ?></td><td class='text-left nowrap'><?php echo htmlentities($vo['robot_wxid']); ?></td><td class='text-left nowrap'><?php echo htmlentities(format_datetime($vo['add_time'])); ?></td><td class='text-left nowrap'><a class="layui-btn layui-btn-xs layui-btn" data-modal='<?php echo url("admin/task/edit_task"); ?>?id=<?php echo htmlentities($vo['id']); ?>&robot_wxid=<?php echo htmlentities($vo['robot_wxid']); ?>' style='background:green;'>编辑</a><a class="layui-btn layui-btn-xs layui-btn" style='background:red;' onClick="delete_task(<?php echo htmlentities($vo['id']); ?>)">删除</a></td></tr><?php endforeach; ?></tbody></table><?php if(empty($list) || (($list instanceof \think\Collection || $list instanceof \think\Paginator ) && $list->isEmpty())): ?><span class="notdata">没有记录哦</span><?php else: ?><?php echo (isset($pagehtml) && ($pagehtml !== '')?$pagehtml:''); ?><?php endif; ?></div><script>
    function delete_task(id){
        layer.confirm("确认要删除吗，删除后不能恢复",{ title: "删除确认" },function(index){
            $.ajax({
                type: 'POST',
                url: "<?php echo url('delete_task'); ?>",
                data: {
                    'id': id,
                    '_csrf_': "<?php echo systoken('admin/task/delete_task'); ?>"
                },
                success:function (res) {
                    layer.msg(res.info,{time:2500});
                    location.reload();
                }
            });
        },function(){});
    }
</script></div></div><script>//    layui.use('element', function(){
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