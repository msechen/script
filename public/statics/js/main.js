// JavaScript Document


//底部滑出
function showtab(id){
	$(id).css("display","block");
	$(id).animate({bottom:"0"}, 200);
}
function hidetab(id){
	$(id).css("display","none");
	$(id).animate({bottom:"-100%"}, 200);
}

//弹框
function showpop(id){
	$(id).fadeIn();

	var h = ($(window).height() - $(id).children('.popup-box').height())/2;
	$(id).children('.popup-box').css('margin-top',h);
}

$('.cancle-btn').click(function(){
	$('.popup').fadeOut();
});


//Tab控制选项卡	
$('.tab-item span').mouseover(function () {
	//下划线初始位置
	$('.lava').css({left:$('.tab-item span:first').position()['left']});

	//下划线滚动
	$('.lava').stop().animate({left:$(this).position()['left']}, {duration:200});

	//改变颜色
	$(this).addClass('active').siblings().removeClass("active");

	//内容切换
	$('.tab-content').stop().animate({left:$(this).position()['left'] * (-2)}, {duration:200});
});

$('.tab-title-s span').mouseover(function () {
	//下划线初始位置
	$('.lava').css({left:$('.tab-title-s span:first').position()['left']});

	//下划线滚动
	$('.lava').stop().animate({left:$(this).position()['left']}, {duration:200});

	//改变颜色
	$(this).addClass('active').siblings().removeClass("active");

	//内容切换
	$('.tab-content').stop().animate({left:$(this).position()['left'] * (-3)}, {duration:200});
});