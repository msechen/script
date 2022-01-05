<?php

/**
 * @link http://guoxiaorui.cn
 * @copyright Copyright (c) 2020-2-27 
 */
/**
 * 
 * 微信支付API异常类
 * @author widyhu
 *
 */
class WxPayException extends Exception {

    public function errorMessage() {
        return $this->getMessage();
    }

}
