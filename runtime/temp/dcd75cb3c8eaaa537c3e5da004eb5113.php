<?php /*a:1:{s:79:"/mnt/hgfs/centosVM/Manage_WXRobot_Web/application/admin/view/task/add_task.html";i:1641053444;}*/ ?>
<style>
    .layui-input, .layui-select {
    line-height: initial;
}
</style><form class="layui-form layui-card" action="<?php echo request()->url(); ?>" data-auto="true" method="post" autocomplete="off"><div class="layui-card-body"><div class="layui-form-item"><label class="layui-form-label">机器人昵称</label><div class="layui-input-block"><input name="user_name" readonly placeholder="请输入用户名称" value="<?php echo htmlentities($info['nickname']); ?>" class="layui-input"><input type="hidden" name="_csrf_" value="<?php echo systoken('admin/task/add_task'); ?>"></div></div><div class="layui-form-item"><label class="layui-form-label label-required">发送内容</label><div class="layui-input-block"><textarea name="task_content" required placeholder="请输入发送好友内容" class="layui-input" style="height:250px"></textarea></div></div><div class="layui-form-item"><label class="layui-form-label label-required">任务执行间隔</label><div class="layui-input-block"><input name="run_interval" type="number" required placeholder="请输入任务执行间隔(单位:分钟)" value="" class="layui-input"></div></div><div class="layui-form-item"><label class="layui-form-label label-required">面向对象</label><div class="layui-input-block"><select name="oriented" id="selectList" disabled=""><option value="1">群组</option><option value="0">私信</option><option value="2">不限</option></select></div></div></div><input name="id" type="hidden" value="<?php echo htmlentities($info['wxid']); ?>"><div class="hr-line-dashed"></div><div class="layui-form-item text-center"><button class="layui-btn" type='submit'>提交</button><button class="layui-btn layui-btn-danger" type='button' data-close>取消</button></div><script>window.form.render();</script></form>