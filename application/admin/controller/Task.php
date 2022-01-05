<?php
namespace app\admin\controller;

use app\admin\service\NodeService;
use library\Controller;
use library\tools\Data;
use think\Db;
use think\cache\driver\Redis;
use think\facade\Cache;

/**
 * 定时任务管理中心
 */
class Task extends Controller
{
    /**
     * 关键词管理
     */
    public function index()
    {
        $this->title = '定时任务管理';
        $this->_query('xy_task_robot')->page();
    }
    
    //添加定时任务
    public function add_task()
    {
        $id = input('get.id',0);
        if(request()->isPost()){
            $id = input('post.id/s','');
            $task_content = input('post.task_content/s','');
            $run_interval = input('post.run_interval/d',0);

            if(!is_numeric($run_interval)) return $this->error('任务执行间隔填写错误！');
            
            $data=[
                'robot_wxid'=>$id,
                'task_content'=>$task_content,
                'run_interval'=>$run_interval,
                'add_time'=>time(),
                'run_time'=>time()
            ];
            $res=db('xy_task_robot')->insert($data);
            if($res){
                return $this->success('添加成功!');
            }else return $this->error('添加失败');
        }
        if(!$id) $this->error('参数错误');
        $this->info = Db::table('xy_robots')->find($id);
        return $this->fetch();
    }
    
    //修改关键词
    public function edit_task()
    {
        $id = input('get.id',0);
        $robot_wxid = input('get.robot_wxid','');
        if(request()->isPost()){
            $task_content = input('post.task_content/s','');
            $run_interval = input('post.run_interval/d',0);
            
            $data=[
                'id'=>$id,
                'task_content'=>$task_content,
                'run_interval'=>$run_interval
            ];
            $res=db('xy_task_robot')->where('id',$id)->update($data);
            if($res){
                return $this->success('修改成功!');
            }else return $this->error('修改失败');
        }
        if(!$id) $this->error('参数错误');
        $this->robot = Db::table('xy_robots')->find($robot_wxid);
        $this->task = Db::table('xy_task_robot')->find($id);
        return $this->fetch();
    }
    
    //删除定时任务
    public function delete_task()
    {
        $id = input('get.id',0);
        if(request()->isPost()){
            $id = input('post.id/s','');
            $res=db('xy_task_robot')->where('id',$id)->delete();
            if($res){
                return $this->success('删除成功!');
            }else return $this->error('删除失败');
        }
        if(!$id) $this->error('参数错误');
    }
    
}