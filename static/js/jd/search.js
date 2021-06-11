var max = 20;
var jds = document.getElementById('jd_search_info');
var jdc = document.getElementById('jd_container');

function handler(rsp) {

    if (rsp.code != 200) {
        hide_all_item();
        jds.innerText = '未能搜索到符合条件的商品';
        return false;
    }

    var value = rsp.value;
    var len = value.length;
    for (var i = 0; i < len; i++) {
        render_item(jd_items[i], value[i]);
    }
    for (; i < max; i++) {
        jd_items[i].style.display = 'none';
    }
    if (len == max) {
        jds.innerHTML = '仅展示前 <font color="red">20</font> 条符合条件的商品';
    } else {
        jds.innerHTML = '搜索到 <font color="red">' + len + '</font> 条符合条件的商品';
    }
    return false;
};

function jsearch() {
    url = '/ajax/jd/search?page=1'
    if (jds_form.p_s_name.value) {
        url += '&name=' + jds_form.p_s_name.value;
    }
    if (jds_form.pn.checked && !jds_form.sn.checked) {
        url += '&name_type=1'
    } else if (!jds_form.pn.checked && jds_form.sn.checked) {
        url += '&name_type=2'
    }
    if (jds_form.coupon.checked) {
        url += '&coupon=1'
    }
    if (jds_form.jd_operate.checked) {
        url += '&jd_operate=1'
    }
    if (jds_form.discount.checked) {
        url += '&discount=1'
    }

    if (url == '/ajax/jd/search?page=1') {
        jds.innerText = '请至少提供一个搜索条件...';
    } else {
        xhr.open('GET', url);
        xhr.send();
    }

    return false;
}

function hide_all_item() {
    for (var i = 0; i < max; i++) {
        jd_items[i].style.display = 'none';
    }
}

construct_items(max, jdc);
hide_all_item();

