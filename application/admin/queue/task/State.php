<?php

// +----------------------------------------------------------------------
// | ThinkAdmin
// +----------------------------------------------------------------------
// | 版权所有 2014~2019 
// +----------------------------------------------------------------------

// +----------------------------------------------------------------------

// +----------------------------------------------------------------------
// | 

// +----------------------------------------------------------------------

namespace app\admin\queue\task;

use library\command\Task;
use think\console\Input;
use think\console\Output;

/**
 * 查看异步任务监听的主进程状态
 * Class State
 * @package app\admin\queue\task
 */
class State extends Task
{
    /**
     * 指令属性配置
     */
    protected function configure()
    {
        $this->setName('xtask:state')->setDescription('[控制]查看异步任务监听主进程状态');
    }

    /**
     * 指令执行状态
     * @param Input $input
     * @param Output $output
     */
    protected function execute(Input $input, Output $output)
    {
        $this->cmd = "{$this->bin} xtask:listen";
        if (($pid = $this->checkProcess()) > 0) {
            $output->info("异步任务监听主进程{$pid}正在运行...");
        } else {
            $output->error("异步任务监听主进程没有运行哦!");
        }
    }
}
