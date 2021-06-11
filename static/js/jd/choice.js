var init = true;

var jdc = document.getElementById('jd_container');

var jd_page_nav_header = document.getElementById('jd_page_nav_header');
var jd_page_nav_footer = document.getElementById('jd_page_nav_footer');

function handler(rsp) {

    // init = true >> 构造频道导航栏
    if (init && rsp) {
        construct_channel_nav(rsp);
        return false;
    }


    // 商品信息
    if (rsp.code == 200) {
        var value = rsp.value;
        var len = value.length;
        var i;
        for (i = 0; i < len; i++) {
            render_item(jd_items[i], value[i]);
        }
        for (; i < 5; i++) {
            jd_items[i].style.display = 'none';
        }


        var page_nav = rsp.channel_name + '（' + rsp.count + ' 件商品）：';
        for (var p = 1; p <= rsp.total; p++) {
            if (p != 1) {
                page_nav += ' | ';
            }
            if (p == rsp.page) {
                page_nav += '第' + p + '页';
            } else {
                page_nav += '<a href="#" onclick="javascript: return reload(' + rsp.channel + ',' + p + ');">第' + p + '页</a>';
            }
        }
        jd_page_nav_header.innerHTML = page_nav;
        jd_page_nav_footer.innerHTML = page_nav;
    }

    return false;
};

function construct_channel_nav(rsp) {
    var nav = document.getElementById('jd_channel_nav');
    var nav_html = '';
    var len = rsp.length;
    for (var i = 0; i < len; i++) {
        var channel = rsp[i];
        if (i > 0) {
            nav_html += ' | ';
        }
        nav_html += '<a href="#" onclick="javascript: return reload(' + channel.id + ', 1);">' + channel.name + '</a>';
    }
    nav.innerHTML = nav_html;

    init = false;

    // 默认返回第一个频道商品信息
    reload(rsp[0].id, 1);
}

function reload(channel, page) {
    xhr.open('GET', '/ajax/jd/choice?channel=' + channel + '&page=' + page);
    xhr.send();
    return false;
};

function channel_nav() {
    xhr.open('GET', '/ajax/jd/channel');
    xhr.send();
}


construct_items(5, jdc)

channel_nav();