<?php /*a:3:{s:77:"/mnt/hgfs/centosVM/Manage_WXRobot_Web/application/admin/view/users/index.html";i:1641362224;s:70:"/mnt/hgfs/centosVM/Manage_WXRobot_Web/application/admin/view/main.html";i:1641367337;s:84:"/mnt/hgfs/centosVM/Manage_WXRobot_Web/application/admin/view/users/index_search.html";i:1640776520;}*/ ?>
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
.contain {
            font-family: ‘ Microsoft YaHei ’;
            margin: 15px auto;
            width: 900px;
        }

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
</style><div class="think-box-shadow"><fieldset><legend>条件搜索</legend><form class="layui-form layui-form-pane form-search" action="<?php echo request()->url(); ?>" onsubmit="return false" method="get" autocomplete="off"><div class="layui-form-item layui-inline"><label class="layui-form-label">微信id</label><div class="layui-input-inline"><input name="wxid" value="<?php echo htmlentities((app('request')->get('wxid') ?: '')); ?>" placeholder="请输入微信id" class="layui-input"></div></div><div class="layui-form-item layui-inline"><label class="layui-form-label">微信号</label><div class="layui-input-inline"><input name="wx_num" value="<?php echo htmlentities((app('request')->get('wx_num') ?: '')); ?>" placeholder="请输入微信号" class="layui-input"></div></div><div class="layui-form-item layui-inline"><label class="layui-form-label">昵称</label><div class="layui-input-inline"><input name="nickname" value="<?php echo htmlentities((app('request')->get('nickname') ?: '')); ?>" placeholder="请输入昵称" class="layui-input"></div></div><div class="layui-form-item layui-inline"><button class="layui-btn layui-btn-primary"><i class="layui-icon">&#xe615;</i> 搜 索</button></div></form></fieldset><script>
    var test = "<?php echo htmlentities((app('request')->get('is_jia') ?: '0')); ?>";
    $("#selectList").find("option[value="+test+"]").prop("selected",true);
    form.render()
</script><table class="layui-table margin-top-15" lay-filter="tab" lay-skin="line"><?php if(!(empty($robot_list) || (($robot_list instanceof \think\Collection || $robot_list instanceof \think\Paginator ) && $robot_list->isEmpty()))): ?><thead><tr><th lay-data="{field:'headimgurl',width:130}" class='text-left nowrap'>头像</th><th lay-data="{field:'wxid',width:180}" class='text-left nowrap'>微信ID</th><th lay-data="{field:'wx_num',width:150}" class='text-left nowrap'>微信号</th><th lay-data="{field:'nickname',width:120}" class='text-left nowrap'>昵称</th><th lay-data="{field:'signature',width:150}" class='text-left nowrap'>个性签名</th><th lay-data="{field:'login_time'}" class='text-left nowrap'>登录时间</th><th lay-data="{field:'edit',fixed: 'right'}" class='text-left nowrap'>操作</th></tr></thead><?php endif; ?><tbody><?php foreach($robot_list as $key=>$vo): ?><tr><td class='text-left nowrap'><img src="<?php echo htmlentities($vo['headimgurl']); ?>"></td><td class='text-left nowrap'><?php echo htmlentities($vo['wxid']); ?></td><td class='text-left nowrap'><?php echo htmlentities($vo['wx_num']); ?></td><td class='text-left nowrap'><?php echo htmlentities($vo['nickname']); ?></td><td class='text-left nowrap'><?php echo htmlentities($vo['signature']); ?></td><td class='text-left nowrap'><?php echo htmlentities(format_datetime($vo['login_time'])); ?></td><td class='text-left nowrap'><a data-dbclick class="layui-btn layui-btn-xs" data-title="编辑菜单" data-modal='<?php echo url("admin/users/edit_users"); ?>?id=<?php echo htmlentities($vo['wxid']); ?>'>编 辑</a><a data-dbclick class="layui-btn layui-btn-xs" style="background:blue;" data-title="添加关键词" data-modal='<?php echo url("admin/reply/add_reply"); ?>?id=<?php echo htmlentities($vo['wxid']); ?>'>添加关键词</a><a data-dbclick class="layui-btn layui-btn-xs" style="background:#6cb51d;" data-title="添加定时任务" data-modal='<?php echo url("admin/task/add_task"); ?>?id=<?php echo htmlentities($vo['wxid']); ?>'>添加定时任务</a><br><a data-dbclick class="layui-btn layui-btn-xs" style="background:orange;" data-open='<?php echo url("admin/users/friend"); ?>?id=<?php echo htmlentities($vo['wxid']); ?>'>查看好友</a><a data-dbclick class="layui-btn layui-btn-xs" style="background:brown;" data-open='<?php echo url("admin/users/group"); ?>?id=<?php echo htmlentities($vo['wxid']); ?>'>查看群组</a></td></tr><?php endforeach; ?></tbody></table><script>
        var table = layui.table;
        //转换静态表格
        var limit = Number('<?php echo htmlentities(app('request')->get('limit')); ?>');
        if(limit==0) limit=20;
        table.init('tab', {
            cellMinWidth:120,
            skin: 'line,row',
            size: 'lg',
            limit: limit
        });
    </script><?php if(empty($robot_list) || (($robot_list instanceof \think\Collection || $robot_list instanceof \think\Paginator ) && $robot_list->isEmpty())): ?><span class="notdata">没有记录哦</span><?php else: ?><?php echo (isset($pagehtml) && ($pagehtml !== '')?$pagehtml:''); ?><?php endif; ?></div></div></div><script>//    layui.use('element', function(){
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