<?php

/**
 * @link http://blog.kunx.org/.
 * @copyright Copyright (c) 2016-11-21 
 * @license kunx-edu@qq.com.
 */

/**
 * 微信扫码支付自动加载器。
 *
 * @author kunx <kunx-edu@qq.com>
 */
class Autoloader {

    /**
     * 核心类，映射数组。
     * @param  $classname
     */
    public static function autoload($classname) {
        $class_map = [
            'WxPayApi'          => __DIR__ . '/core/WxPay.Api.php',
            'WxPayConfig'       => __DIR__ . '/core/WxPay.Config.php',
            'WxPayBizPayUrl'    => __DIR__ . '/core/WxPay.Data.php',
            'WxPayCloseOrder'   => __DIR__ . '/core/WxPay.Data.php',
            'WxPayDataBase'     => __DIR__ . '/core/WxPay.Data.php',
            'WxPayDownloadBill' => __DIR__ . '/core/WxPay.Data.php',
            'WxPayJsApiPay'     => __DIR__ . '/core/WxPay.Data.php',
            'WxPayMicroPay'     => __DIR__ . '/core/WxPay.Data.php',
            'WxPayNotifyReply'  => __DIR__ . '/core/WxPay.Data.php',
            'WxPayOrderQuery'   => __DIR__ . '/core/WxPay.Data.php',
            'WxPayRefund'       => __DIR__ . '/core/WxPay.Data.php',
            'WxPayRefundQuery'  => __DIR__ . '/core/WxPay.Data.php',
            'WxPayReport'       => __DIR__ . '/core/WxPay.Data.php',
            'WxPayResults'      => __DIR__ . '/core/WxPay.Data.php',
            'WxPayReverse'      => __DIR__ . '/core/WxPay.Data.php',
            'WxPayShortUrl'     => __DIR__ . '/core/WxPay.Data.php',
            'WxPayUnifiedOrder' => __DIR__ . '/core/WxPay.Data.php',
            'WxPayException'    => __DIR__ . '/core/WxPay.Exception.php',
            'NativePay'         => __DIR__ . '/core/WxPay.NativePay.php',
            'WxPayNotify'       => __DIR__ . '/core/WxPay.Notify.php',
            'PayNotifyCallBack' => __DIR__ . '/core/PayNotifyCallBack.php',
            'ILogHandler'       => __DIR__ . '/core/log.php',
            'CLogFileHandler'   => __DIR__ . '/core/log.php',
            'Log'               => __DIR__ . '/core/log.php',
        ];

        if (isset($class_map[$classname])) {
            require $class_map[$classname];
        }
    }

}

spl_autoload_register('Autoloader::autoload');
