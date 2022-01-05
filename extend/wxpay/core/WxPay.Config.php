<?php

/**
 * @link http://guoxiaorui.cn
 * @copyright Copyright (c) 2020-2-27 
 */

/**
 * 配置账号信息
 */
class WxPayConfig {

    //=======【基本信息设置】=====================================
    //绑定支付的APPID（开户邮件中可查看）
    public static $appid;
    //MCHID：商户号（开户邮件中可查看）
    public static $mchid;
    //KEY：商户支付密钥，参考开户邮件设置（登录商户平台自行设置）
    //设置地址：https://pay.weixin.qq.com/index.php/account/api_cert
    public static $key;
    //APPSECRET：公众帐号secert（仅JSAPI支付的时候需要配置， 登录公众平台，进入开发者中心可设置），
    //获取地址：https://mp.weixin.qq.com/advanced/advanced?action=dev&t=advanced/dev&token=2005451881&lang=zh_CN
    public static $appsecret;

    //=======【证书路径设置】=====================================
    /**
     * TODO：设置商户证书路径
     * 证书路径,注意应该填写绝对路径（仅退款、撤销订单时需要，可登录商户平台下载，
     * API证书下载地址：https://pay.weixin.qq.com/index.php/account/api_cert，下载之前需要安装商户操作证书）
     * @var path
     */
    const SSLCERT_PATH    = __DIR__ . '/cert/apiclient_cert.pem';
    const SSLKEY_PATH     = __DIR__ . '/cert/apiclient_key.pem';
    //=======【curl代理设置】===================================
    /**
     * TODO：这里设置代理机器，只有需要代理的时候才设置，不需要代理，请设置为0.0.0.0和0
     * 本例程通过curl使用HTTP POST方法，此处可修改代理服务器，
     * 默认CURL_PROXY_HOST=0.0.0.0和CURL_PROXY_PORT=0，此时不开启代理（如有需要才设置）
     * @var unknown_type
     */
    const CURL_PROXY_HOST = "0.0.0.0"; //"10.152.18.220";
    const CURL_PROXY_PORT = 0; //8080;
    //=======【上报信息配置】===================================
    /**
     * TODO：接口调用上报等级，默认紧错误上报（注意：上报超时间为【1s】，上报无论成败【永不抛出异常】，
     * 不会影响接口调用流程），开启上报之后，方便微信监控请求调用的质量，建议至少
     * 开启错误上报。
     * 上报等级，0.关闭上报; 1.仅错误出错上报; 2.全量上报
     * @var int
     */
    const REPORT_LEVENL   = 1;

    /**
     * 从thinkphp5中获取微信支付的配置
     * 如果食用的是thinkphp3，请将config函数改为C函数
     */
    public static function init() {
        self::$appid     = config('wxpay')['appid'];
        self::$mchid     = config('wxpay')['mchid'];
        self::$key       = config('wxpay')['key'];
        self::$appsecret = config('wxpay')['appsecret'];
    }

}

WxPayConfig::init();
