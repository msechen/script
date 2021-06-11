var spider_img = document.getElementById('spider_img');
var spider_div = document.getElementById('spider_div');
var spider_a = document.getElementById('spider_a');

var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var rsp = xhr.response;
        spider_div.style.display = '';
        spider_img.style.display = 'none';
        spider_a.style.display = '';
        if (rsp.code != 200) {
            alert('error. check log file for more infomation')
        }
    };
};

function spider() {
    spider_a.style.display = 'none';
    spider_div.style.display = 'none';
    spider_img.style.display = '';
    xhr.open('GET', '/ajax/jd/import');
    xhr.send();
    return false;
};