<?php
namespace app\admin\controller;

use app\admin\service\NodeService;
use library\Controller;
use library\tools\Data;
use think\Db;
use think\cache\driver\Redis;
use think\facade\Cache;


/**
 * 关键词管理中心
 * Class Reply
 * @package app\admin\controller
 */
class Reply extends Controller
{
    /**
     * 关键词管理
     *@auth true
     *@menu true
     */
    public function index()
    {
        $this->title = '关键字回复管理';
        $this->_query('xy_reply')->page();
    }
    
    /**
     * 添加关键词
     *@auth true
     *@menu true
     */
    public function add_reply()
    {
        $id = input('get.id',0);
        if(request()->isPost()){
            $id = input('post.id/s','');
            $question = input('post.question/s','');
            $answer = input('post.answer/s','');
            $fuzzy = input('post.fuzzy/d',0);
            
            $data=[
                'wxid'=>$id,
                'question'=>$question,
                'answer'=>$answer,
                'fuzzy'=>$fuzzy,
                'addtime'=>time(),
                'update_time'=>time(),
                'cache_name'=>'robot_keyword_'.$question.'_'.$id
            ];
            $res=db('xy_reply')->insert($data);
            if($res){
                //robot_keyword_问题_机器人id
                Cache::store('redis')->set('robot_keyword_'.$question.'_'.$id, $answer);//缓存-存储机器人的关键词-答案-id
                //获取最新的关键词集
                $replys=array_column(db('xy_reply')->where('wxid',$id)->field('question')->select(),'question');
                Cache::store('redis')->set('robot_keyword_'.$id, $replys);//修改缓存-存储机器人的关键词-机器人id
                db('xy_reply_robot')->where('robot_wxid',$id)->update(['replys'=>json_encode($replys,true)]);//更改数据库存储
                return $this->success('添加成功!');
            }else return $this->error('添加失败');
        }
        if(!$id) $this->error('参数错误');
        $this->info = Db::table('xy_robots')->find($id);
        return $this->fetch();
    }
    
    /**
     * 修改关键词
     *@auth true
     *@menu true
     */
    public function edit_reply()
    {
        $id = input('get.id',0);
        $robot_wxid = input('get.robot_wxid','');
        if(request()->isPost()){
            $id = input('post.id/s','');
            $question = input('post.question/s','');
            $answer = input('post.answer/s','');
            $fuzzy = input('post.fuzzy/d',0);
            
            $data=[
                'question'=>$question,
                'answer'=>$answer,
                'fuzzy'=>$fuzzy,
                'update_time'=>time(),
                'cache_name'=>'robot_keyword_'.$question.'_'.$robot_wxid
            ];
            $res=db('xy_reply')->where('id',$id)->update($data);
            if($res){
                Cache::store('redis')->set('robot_keyword_'.$question.'_'.$robot_wxid, $answer);//修改缓存-存储机器人的关键词
                //获取最新的关键词集
                $replys=array_column(db('xy_reply')->where('wxid',$robot_wxid)->field('question')->select(),'question');
                Cache::store('redis')->set('robot_keyword_'.$robot_wxid, $replys);//修改缓存-存储机器人的关键词-机器人id
                db('xy_reply_robot')->where('robot_wxid',$robot_wxid)->update(['replys'=>json_encode($replys,true)]);//更改数据库存储
                return $this->success('修改成功!');
            }else return $this->error('修改失败');
        }
        if(!$id) $this->error('参数错误');
        $this->robot = Db::table('xy_robots')->find($robot_wxid);
        $this->reply = Db::table('xy_reply')->find($id);
        return $this->fetch();
    }
    
    /**
     * 删除关键字
     *@auth true
     *@menu true
     */
    public function delete_reply()
    {
        $id = input('get.id',0);
        if(request()->isPost()){
            $id = input('post.id/s','');
            $reply=db('xy_reply')->where('id',$id)->find();
            Cache::rm('robot_keyword_'.$reply['question'].'_'.$reply['wxid']);//清空缓存-存储机器人的关键词
            $res=db('xy_reply')->where('id',$id)->delete();
            if($res){
                //获取最新的关键词集
                $replys=array_column(db('xy_reply')->where('wxid',$reply['wxid'])->field('question')->select(),'question');
                Cache::store('redis')->set('robot_keyword_'.$reply['wxid'], $replys);//修改缓存-存储机器人的关键词-机器人id
                db('xy_reply_robot')->where('robot_wxid',$reply['wxid'])->update(['replys'=>json_encode($replys,true)]);//更改数据库存储
                return $this->success('删除成功!');
            }else return $this->error('删除失败');
        }
        if(!$id) $this->error('参数错误');
    }
    
}