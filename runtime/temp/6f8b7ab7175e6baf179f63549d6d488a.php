<?php /*a:2:{s:76:"/mnt/hgfs/centosVM/Manage_WXRobot_Web/application/admin/view/index/main.html";i:1639981018;s:70:"/mnt/hgfs/centosVM/Manage_WXRobot_Web/application/admin/view/main.html";i:1641367337;}*/ ?>
<div class="layui-card layui-bg-gray"><style>        .layui-tab-card>.layui-tab-title .layui-this {
            background-color: #fff;
        }
    </style><?php if(!(empty($title) || (($title instanceof \think\Collection || $title instanceof \think\Paginator ) && $title->isEmpty()))): ?><div class="layui-card-header layui-anim layui-anim-fadein notselect"><span class="layui-icon layui-icon-next font-s10 color-desc margin-right-5"></span><?php echo htmlentities((isset($title) && ($title !== '')?$title:'')); ?><div class="pull-right"></div></div><?php endif; ?><div class="layui-card-body layui-anim layui-anim-upbit"><style>    .store-total-container {
        font-size: 14px;
        margin-bottom: 20px;
        letter-spacing: 1px;
    }

    .store-total-container .store-total-icon {
        top: 45%;
        right: 8%;
        font-size: 65px;
        position: absolute;
        color: rgba(255, 255, 255, 0.4);
    }

    .store-total-container .store-total-item {
        color: #fff;
        line-height: 4em;
        padding: 15px 25px;
        position: relative;
    }

    .store-total-container .store-total-item > div:nth-child(2) {
        font-size: 46px;
        line-height: 46px;
    }

    .num2{font-size: 20px;font-weight: bold;line-height: 100%}
    .store-total-container .store-total-item > div:nth-child(2) {
        font-size: 26px;
        line-height: 36px;
        font-weight: bold;
    }
    .store-total-container .store-total-item{line-height: 2em}
</style><div class="layui-row layui-col-space15"><div class="layui-col-md6"><div class="think-box-shadow"><table class="layui-table" lay-skin="line" lay-even><caption class="text-left margin-bottom-15 font-s14">系统信息</caption><colgroup><col width="30%"></colgroup><tbody><tr><td>当前程序版本</td><td><?php echo sysconf('app_version'); ?></td></tr><tr><td>运行PHP版本</td><td><?php echo htmlentities(PHP_VERSION); ?></td></tr><tr><td>ThinkPHP版本</td><td><?php echo htmlentities($think_ver); ?></td></tr><tr><td>MySQL数据库版本</td><td><?php echo htmlentities($mysql_ver); ?></td></tr><tr><td>服务器操作系统</td><td><?php echo php_uname('s'); ?></td></tr><tr><td>WEB运行环境</td><td><?php echo php_sapi_name(); ?></td></tr><tr><td>上传大小限制</td><td><?php echo ini_get('upload_max_filesize'); ?></td></tr><tr><td>POST大小限制</td><td><?php echo ini_get('post_max_size'); ?></td></tr></tbody></table></div></div><div class="layui-col-md6"><div class="think-box-shadow" id="versionTest" data-version="<?php echo htmlentities($has_version); ?>"><table class="layui-table" lay-skin="line" lay-even><caption class="text-left margin-bottom-15 font-s14">产品团队</caption><colgroup><col width="30%"></colgroup><tbody><tr><td>产品名称</td><td><?php echo sysconf('app_name'); ?></td></tr><tr><td>产品说明</td><td>本产品只为学习测试交流,请勿要做商业或者用于违法行为,一切后果自负</td></tr><tr><td>请勿点击</td><td><a href="#"><img src="" style="height:18px;width:auto" target="_blank"></a></td></tr><tr><td>产品大小</td><td><a target="_blank" href="">25.5M</a></td></tr><tr><td>数据库</td><td><a target="_blank" href="">mysql</a></td></tr><tr><td>版本</td><td><?php echo config('version'); ?>  　
                    <a  onclick="return updateVersion()" href="https://www.98sucai.com/">检查更新 </a></td></tr></tbody></table></div></div></div><script>    $(function () {
        if ($('#versionTest').data('version')) {
            setTimeout(function () {
                updateVersion();
            }, 1000);
        }
    });



    function updateVersion() {
        //多窗口模式，层叠置顶
        layer.open({
            type: 2 //此处以iframe举例
            , title: '温馨提示!'
            , area: ['680px', '550px']
            , shade: 0
            ,skin: 'layui-layer-setmybg'
            , maxmin: true
            , content: "<?php echo url('Index/clear'); ?>"+'?'
            , btn: ['查看全部更新记录', '关闭'] //只是为了演示
            , yes: function () {
                layer.closeAll();
                // window.open('/');
            }
            , btn2: function () {
                layer.closeAll();
            }

            , zIndex: layer.zIndex //重点1
            , success: function (layero) {
                layer.setTop(layero); //重点2
            }
        });
        return false;
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