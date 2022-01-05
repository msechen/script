<?php
/**
 * @link http://guoxiaorui.cn
 * @copyright Copyright (c) 2020-2-27 
 */
/**
 * 
 * 回调基础类
 * @author widyhu
 * fiexed by kunx <kunx-edu@qq.com>
 * 修复类名大小写错误，避免在自动加载机制中出错。
 * 修复使用未定义变量的错误
 */
class WxPayNotify extends WxPayNotifyReply {

    /**
     * 
     * 回调入口
     * @param bool $needSign  是否需要签名输出
     */
    final public function Handle($needSign = true) {
        $msg    = "OK";
        //当返回false的时候，表示notify中调用NotifyCallBack回调失败获取签名校验失败，此时直接回复失败
        /**
         * kunx <kunx-edu@qq.com>
         * 2016-11-23
         * 此处原来写的是WxpayApi，导致自己写的自动加载机制实效，当然可以在自动加载机制中不区分大小写解决。
         */
        $result = WxPayApi::notify(array($this, 'NotifyCallBack'), $msg);
        if ($result == false) {
            $this->SetReturn_code("FAIL");
            $this->SetReturn_msg($msg);
            $this->ReplyNotify(false);
            return;
        } else {
            //该分支在成功回调到NotifyCallBack方法，处理完成之后流程
            $this->SetReturn_code("SUCCESS");
            $this->SetReturn_msg("OK");
        }
        $this->ReplyNotify($needSign);
    }

    /**
     * 
     * 回调方法入口，子类可重写该方法
     * 注意：
     * 1、微信回调超时时间为2s，建议用户使用异步处理流程，确认成功之后立刻回复微信服务器
     * 2、微信服务器在调用失败或者接到回包为非确认包的时候，会发起重试，需确保你的回调是可以重入
     * @param array $data 回调解释出的参数
     * @param string $msg 如果回调处理失败，可以将错误信息输出到该方法
     * @return true回调出来完成不需要继续回调，false回调处理未完成需要继续回调
     */
    public function NotifyProcess($data, &$msg) {
        //TODO 用户基础该类之后需要重写该方法，成功的时候返回true，失败返回false
        return true;
    }

    /**
     * 
     * notify回调方法，该方法中需要赋值需要输出的参数,不可重写
     * @param array $data
     * @return true回调出来完成不需要继续回调，false回调处理未完成需要继续回调
     */
    final public function NotifyCallBack($data) {
        $msg    = "OK";
        $result = $this->NotifyProcess($data, $msg);

        if ($result == true) {
            $this->SetReturn_code("SUCCESS");
            $this->SetReturn_msg("OK");
        } else {
            $this->SetReturn_code("FAIL");
            $this->SetReturn_msg($msg);
        }
        return $result;
    }

    /**
     * 
     * 回复通知
     * @param bool $needSign 是否需要签名输出
     */
    final private function ReplyNotify($needSign = true) {
        //如果需要签名
        //kunx 2016-11-23 bug getreturn_code开始的时候使用了一个未定义的return_code
        if ($needSign == true &&
                $this->GetReturn_code() == "SUCCESS") {
            $this->SetSign();
        }
        WxpayApi::replyNotify($this->ToXml());
    }

}
