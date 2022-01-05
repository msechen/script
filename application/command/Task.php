<?php
namespace app\command;
use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\Db;
use think\facade\Cache;

class Task extends Command
{
    // 配置定时器的信息
    protected function configure()
    {
        $this->setName('task')
            ->setDescription('监控定时任务');
    }
    protected function execute(Input $input, Output $output)
    {
        $output->writeln("开始监控定时任务:");
        $tasks=db('xy_task_robot')->select();
        foreach ($tasks as $task){
            $time=time();
            $cur_task=db('xy_task_robot')->where('id',$task['id'])->find();
            
            if($cur_task['run_time']+$cur_task['run_interval']*60>$time) break; //间隔时间未到,跳过不执行
            //修改执行时间
            db('xy_task_robot')->where('id',$task['id'])->update(['run_time'=>time()]);
            $output->writeln("机器人ID:".$task['robot_wxid']);
            //获取机器人服务的群组
            $robot_for_groups=readRobotForGroup($task['robot_wxid']);
            //遍历服务的群组，发送内容
            foreach($robot_for_groups as $group){
                $now_time=date('Y-m-d H:i:s');
                $params=[
                    "event" => 'SendTextMsg',
                    "robot_wxid" => $task['robot_wxid'],
                    "to_wxid" => $group,
                    "msg" => $task['task_content']
                ];
                $resp =post_json_data(config('intranet_communication'),$params);
                $output->writeln($group.'群组发送成功！时间：'.$now_time);
                $output->writeln("休息3秒...");
                sleep(3);
            }
            $output->writeln($task['robot_wxid'].'任务执行完毕！！！');
            $output->writeln('');
        }
    }
}