$(function(){
    //展开右侧导航
    /*$('#right_nav').simpleSidebar({
        settings: {
            opener: '#open-right-nav',
            wrapper: '#body',
            animation: {
                duration: 500,
                easing: 'easeOutQuint'
            }
        },
        sidebar: {
            align: 'right',
            width: 500,
            closingLinks: 'a'
        }
    });*/


    $('.menu .link').click(function(){
        $(this).next('.sub_link').toggle().siblings('.sub_link').hide();
        var class_name = $(this).attr('class');
        if( class_name.indexOf('active') == -1 ) {
            $('.menu .link').removeClass('active');
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });

    //返回上一页
    $('.go-back').click(function(){
        if( $(this).attr('data-confirm') != '' && $(this).attr('data-confirm') != undefined ) {
            var zh = $(this).attr('data-confirm');
            if(!confirm(zh)){
                return false;
            }
        }
        if( $(this).attr('data-url') != '' && $(this).attr('data-url') != undefined ) {
            window.location.href = $(this).attr('data-url');
        } else {
            var history_go = -1;
            if( $(this).attr('data-go') != '' && $(this).attr('data-go') != undefined ){
                history_go = $(this).attr('data-go');
            }
            //返回刷新上一页
            if( $(this).attr('data-referrer') == 'true' ){
                location.replace(document.referrer);
            } else {
                window.history.go(history_go);
            }
        }
    })

    /**
     * ajax提交
     */
    $('.submit-ajax').submit(function(){
        var url = $(this).attr('action');
        var data = $(this).serialize();
        var refresh = $(this).attr('data-refresh');
        var is_callback = $(this).attr('data-callback');
        $.ajax({
            type: "post",
            url:url,
            data:data,
            dataType:"json",
            success:function(data){
                if( is_callback != '' && is_callback != undefined ) {
                    submit_callback(data);
                    return false;
                }
                if( data.status == 1 ) {
                    sp_tip(data.info);
                    if( data.url != '' ) {
                        setTimeout(function(){
                            window.location.href = data.url;
                        },2000);
                    } else {
                        //默认刷新 refresh 为0不刷新
                        if( refresh != 0 ) {
                            setTimeout(function(){
                                window.location.reload();
                            },2000);
                        }
                    }
                } else {
                    sp_tip(data.info);
                }
            },
            error:function(data){
                alert(data);
            }
        });
        return false;
    });
});

//弹出alert，自动关掉
function sp_tip(tip){
    var time = arguments[1] ? arguments[1] : 2;
    layer.open({
        content: tip,
        time: time,
        skin: 'msg'
    });
}

/**
 * 弹出对话窗  不会自动关掉
 * @param msg
 */
function sp_alert(msg){
    var btn_text = arguments[1] ? arguments[1] : '我知道了';
    var title = arguments[2];
    var bgcolor = arguments[3]==1 ? 'background-color: #5FB878; color:#fff;' : 'background-color: #e77f28; color:#fff;';
    if( title ) {
        layer.open({
            title: [
                title,
                bgcolor
            ],
            content: msg,
            btn: btn_text,
            yes: function(index){
                //location.reload();
                layer.close(index);
            }
        });
    } else {
        layer.open({
            content: msg,
            btn: btn_text,
            yes: function(index){
                //location.reload();
                layer.close(index);
            }
        });
    }

}

function sp_alert_reload(msg){
    var btn_text = arguments[1] ? arguments[1] : '我知道了';
    layer.open({
        content: msg,
        btn: btn_text,
        yes: function(index){
            location.reload();
            //layer.close(index);
        }
    });
}

/**
 * 点击确定后跳转URL
 * @param msg
 * @param btn_text
 * @param btn_url
 */
function sp_alert_gourl(msg,btn_text,btn_url){
    layer.open({
        content: msg,
        btn: btn_text,
        yes: function(){
            window.location.href = btn_url;
        }
    });
}