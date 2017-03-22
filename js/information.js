$(function(){
	$(".newBox-btns").on('mouseover', 'li', function(){
		var idx = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(this).find('a').addClass('active').parent().siblings().find('a').removeClass('active');
		$(this).parents('.newBox-top').find('.newBox-imgs').find('a').eq(idx).show().siblings().hide();
	})
})