var jd_items = new Array();

var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // handler 方法需要各业务自行实现
        return handler(xhr.response);
    };
};

/**
 * 构建商品节点
 * @param {*} count 要构造多少个节点
 * @param {*} parent_node  父节点
 **/
function construct_items(count, parent_node) {
    var jd_item = parent_node.getElementsByTagName('div')[0];
    jd_items[0] = jd_item;

    for (var i = 1; i < count; i++) {
        jd_items[i] = jd_item.cloneNode(true);
        parent_node.appendChild(jd_items[i]);
    }
}


/**
 * 渲染商品信息
 * @param {*} e 商品对象, div 对象
 * @param {*} item 商品信息, json 对象
 **/
function render_item(e, item) {

    divs = e.getElementsByTagName('div');

    // 商品图片
    var jd_item_image = divs[0];
    var a = jd_item_image.getElementsByTagName('a')[0];
    a.href = item.popularize_url;
    var img = jd_item_image.getElementsByTagName('img')[0];
    img.src = item.image;


    // 商品属性
    var jd_item_props = divs[1];
    divs = jd_item_props.getElementsByTagName('div');
    // 名称
    jd_item_name = divs[0];
    jd_item_name.innerHTML = item.name;
    // 价格
    jd_item_price = divs[1];
    spans = jd_item_price.getElementsByTagName('span');
    spans[0].innerText = item.floor_price.toFixed(2);
    spans[1].innerText = '￥' + item.price.toFixed(2);
    // 优惠券
    jd_item_coupon = divs[2];
    if (item.coupons) {
        var coupon_html = ''
        coupon_html = '<span>优惠券</span>';
        for (var i = 0; i < item.coupons.length; i++) {
            var coupon = item.coupons[i];
            coupon_html += ' <span class="jd_item_coupon_border">'
            coupon_html += '<a href="' + coupon.url + '" target="_blank">' + coupon.title + '</a>'
            coupon_html += '</span>';
        }
        jd_item_coupon.innerHTML = coupon_html + '<span style="clear: both;"></span>';
    } else {
        jd_item_coupon.innerHTML = ''
    }
    // 秒杀
    jd_item_seckill = divs[3];
    if (item.sec_kill) {
        jd_item_seckill.innerHTML = '秒杀价 <font color="red">￥' + item.sec_kill.price.toFixed(2) + '</font>';
    } else {
        jd_item_seckill.innerHTML = '';
    }
    // 拼购
    jd_item_togbuy = divs[4];
    if (item.together_buy) {
        jd_item_togbuy.innerHTML = '拼购 <font color="red">' + item.together_buy.count + '</font>人拼'
        jd_item_togbuy.innerHTML += ' <font color="red">￥' + item.together_buy.price.toFixed(2) + '</font>';
    } else {
        jd_item_togbuy.innerHTML = '';
    }
    // 物流配送
    jd_item_delivery = divs[5];
    if (item.jd_operate) {
        jd_item_delivery.innerHTML = '<font color="red">京东自营</font>';
    } else if (item.jd_delivery) {
        jd_item_delivery.innerHTML = '由 <font color="red">京东</font> 发货, <font color="red">' + item.shop + '</font> 提供售后服务';
    } else {
        jd_item_delivery.innerHTML = '由 <font color="red">' + item.shop + '</font> 发货, 并提供售后服务';
    }

    e.style.display = '';

    return false;
};