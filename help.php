<?php
function jsApiCall()
{

    //使用jsapi接口

    //$jsApi = new \JsApi_pub();

    $NativeLink = new \NativeLink_pub();

    $name = isset($_POST['name']) ? $_POST['name'] : '蔬菜批发商品';

    $total_fee = isset($_POST['total_fee']) ? $_POST['total_fee'] * 100 : 1;

    $order_no = isset($_POST['order_no']) ? $_POST['order_no'] : 1;

    $where['order_no'] = $order_no;

    $res = M('order')->where($where)->select();

    session('new_order_id', $res['0']['id']);

    //=========保存支付成功必须字段============

    // session('address_id', I('address_id'));

    // session('type', I('type'));

    // session('user_id', $res['0']['user_id']);

    //=========步骤1：网页授权获取用户openid============

    $userId = $res['0']['user_id'];

    $where_user_id['id'] = $userId;

    $res_user = M('user')->where($where_user_id)->find();

    $openid = $res_user['openid'];

    //=========步骤2：使用统一支付接口，获取prepay_id============

    //使用统一支付接口

    $unifiedOrder = new \UnifiedOrder_pub();

    $timeStamp = time();

    $pageURL = 'http';

    if ($_SERVER["HTTPS"] == "on") {

        $pageURL .= "s";

    }

    $pageURL .= "://";

    $REDIRECT_URI = $pageURL . $_SERVER['HTTP_HOST'] . U("WxPay/notifyUrl");

    //设置统一支付接口参数

    $unifiedOrder->setParameter("openid", $openid); //openid

    $unifiedOrder->setParameter("body", $name); //商品描述

    //自定义订单号，此处仅作举例

    $unifiedOrder->setParameter("out_trade_no", $order_no); //商户订单号

    $unifiedOrder->setParameter("total_fee", $total_fee); //总金额

    // $unifiedOrder->setParameter("total_fee",1);//总金额

    $unifiedOrder->setParameter("notify_url", "http://srmtj.xyz/scpf/index.php/WxPay/notifyUrl"); //通知地址

    $unifiedOrder->setParameter("trade_type", "NATIVE"); //交易类型
    //$unifiedOrder->setParameter("trade_type", "JSAPI"); //交易类型

    $code_url = $unifiedOrder->getCodeUrl();
    $a = "wx/lasda/a";
    if (!empty($code_url)) {
        ajaxReturnNo(0, '成功', array('url' => $code_url, 'a' => $a));
    }
    ajaxReturn(1, '失败');
}

/**

 * 通用通知接口demo

 * ====================================================

 * 支付完成后，微信会把相关支付和用户信息发送到商户设定的通知URL，

 * 商户接收回调信息后，根据需要设定相应的处理流程。

 *

 * 这里举例使用log文件形式记录回调信息。

 */

function notifyUrl()
{

    //使用通用通知接口

    $notify = new \Notify_pub();

    //存储微信的回调

    $xml = $GLOBALS['HTTP_RAW_POST_DATA'];

    $notify->saveData($xml);

    //验证签名，并回应微信。

    //对后台通知交互时，如果微信收到商户的应答不是成功或超时，微信认为通知失败，

    //微信会通过一定的策略（如30分钟共8次）定期重新发起通知，

    //尽可能提高通知的成功率，但微信不保证通知最终能成功。

    if ($notify->checkSign() == false) {

        $notify->setReturnParameter("return_code", "FAIL"); //返回状态码

        $notify->setReturnParameter("return_msg", "签名失败"); //返回信息

    } else {

        $notify->setReturnParameter("return_code", "SUCCESS"); //设置返回码

    }

    $returnXml = $notify->returnXml();

    echo $returnXml;

    $common = new \Common_util_pub();

    $parameter = $common->xmlToArray($xml);

    echo $parameter;

    //==商户根据实际情况设置相应的处理流程，此处仅作举例=======

    //以log文件形式记录回调信息

    $log_ = new \Log_();

    $log_name = "./notify_url.log"; //log文件路径

    $where_order_no["order_no"] = $parameter["out_trade_no"];

    $log_->log_result($log_name, "【测试123】:\n");

    $log_name = "./ThinkPHP/Library/Vendor/WxPayPubHelper/notify_url.log";

    $log_->log_result($log_name, "【接收到的notify通知】:\n" . $xml . "\n");

    if ($notify->checkSign() == true) {

        $where["order_no"] = $parameter["out_trade_no"];

        $where["is_delete"] = IS_DELETE_NO;

        $orderModel = D("Order");

        if ($notify->data["return_code"] == "FAIL") {

            //此处应该更新一下订单状态，商户自行增删操作

            $log_->log_result($log_name, "【通信出错】:\n" . $xml . "\n");

        } elseif ($notify->data["result_code"] == "FAIL") {

            //此处应该更新一下订单状态，商户自行增删操作

            $log_->log_result($log_name, "【业务出错】:\n" . $xml . "\n");

        } else {

            $order_no = strval($parameter["out_trade_no"]);

            $res = A('Common')->confirmOrder($order_no);

            //此处应该更新一下订单状态，商户自行增删操作
            $log_->log_result($log_name, "【支付成功】:\n" . $order_no . "\n");

        }

        //商户自行增加处理流程,

        //例如：更新订单状态

        //例如：数据库操作

        //例如：推送支付完成信息

    } else {

        $log_->log_result($log_name, "【通信出错】:\n" . $xml . "\n");

    }

}
