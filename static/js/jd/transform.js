var ONE_YEAR = 365 * 24 * 60 * 60 * 1000;

var jd_original_url = document.getElementById('jd_original_url');
var jd_sub_uid = document.getElementById('jd_sub_uid')
var jd_transfor_url = document.getElementById('jd_transfor_url');
var jd_surl = document.getElementById('jd_surl')

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        url = xhr.responseText;
        jd_transfor_url.value = url;
    };
};

function transform_url() {
    var original_url = jd_original_url.value;
    var sub_uid = jd_sub_uid.value
    if (original_url && original_url.indexOf('jd.com') != -1) {
        var url = '/ajax/jd/transform_url?url=' + original_url;
        if (sub_uid) {
            url += '&sub_uid=' + sub_uid;
            cookie_sub_uid(sub_uid);
        }
        if (jd_surl.checked) {
            url += '&surl=1'
        } else {
            url += '&surl=0'
        }
        xhr.open('GET', url);
        xhr.send();
    } else {
        jd_transfor_url.value = '请输入有效的商品链接.';
    }

    return false;
};

function goshopping() {
    var url = jd_transfor_url.value;
    if (url && (url.indexOf('jd.com') != -1 || url.indexOf('refusea.com') != -1)) {
        window.open(url, '_blank');
    }
    return false;
}

function copy_url() {
    var url = jd_transfor_url.value;
    if (url && url.indexOf('jd.com') != -1) {
        jd_transfor_url.select();
        document.execCommand('Copy');
    }
    return false;
}

function cookie_sub_uid(sub_uid) {
    var exp = new Date();
    exp.setTime(exp.getTime() + ONE_YEAR);
    document.cookie = 'jd_sub_uid=' + escape(sub_uid) + '; expires=' + exp.toGMTString();
}

function auto_fill_sub_uid() {
    var all_cookies = document.cookie;
    if (all_cookies) {
        var cookie_list = all_cookies.split('; ');
        if (cookie_list) {
            len = cookie_list.length;
            for (var i = 0; i < len; i++) {
                var kv = cookie_list[i].split('=');
                if (kv[0] == 'jd_sub_uid') {
                    jd_sub_uid.value = kv[1];
                    break;
                }
            }
        }
    }
}

auto_fill_sub_uid()