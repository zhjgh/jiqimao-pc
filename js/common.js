/*
	公共代码
*/
$(function() {
	// 返回顶部
	$("#toTop").on('click', function() {
		$(window).scrollTop(0);
	});

	// 搜索
	var index = 0;
	var search_show = $(".search-result");
	$(".search-input").on('keydown', function(ev) {
		var key = ev.keyCode;
		search_show.show();
		if($(this).val().trim().length <= 1){
			search_show.hide();
			return;
		}
		if (key == 38) {
			if (index == 0) index = 8;
			index--;
		} else if (key == 40) {
			index++;
			if (index == 8) index = 0;
		} else if (key == 13) { //回车搜索
			$(this).val(search_show.find("li:eq(" + index + ")").find('a').html()); //赋值
			search_show.hide(); //隐藏搜索结果
		}
		var li = search_show.find("li:eq(" + index + ")");
		li.css("background", "#E8F4FC").siblings().css("background", "");
	});

	// 缩放屏幕
	$(window).resize(function() {
		$(".tv-tab-inner").css({
			"left": "0"
		});
	});

	var idx = 0;
	// 滚动屏幕
	$(window).scroll(function() {
		idx = 0;
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 580) {
            $(".float-box").show(500);
        } else {
            $(".float-box").hide(500);
        }
    });

	//向左切换
	$(".prev-btn").on('click', function() {
		var left = $(this).parent().width();
		if(idx <= 0) return;
		idx--;
		$(this).parent().find('.tv-tab-inner').animate({
			"left": -left*idx
		});
	});

	//向右切换
	$(".next-btn").on('click', function() {
		var left = $(this).parent().width();
		var length = $(this).parent().find('.tv-tab-inner').find('a').length / 6;
		if(idx >= length -1) return;
		$(this).parent().find('.tv-tab-inner').animate({
			"left": -(left*idx+left)
		});
		idx++;
	});

	// 全部/收起
	$(".selections-inner-box").on('click', '.all', function(){
		var $li = $(this).parent().find('li');
		var $div = $(this).parent().find('div');
		var $btns = $(this).parent().parent().find('.selections-btns');
		var total = $li.length;
		var perPage = 60;//每页显示多少条
		var num = total/perPage;
		
		$li.hide();
		$div.hide();
		$.each($li, function(i, val){
			if(i >= perPage) return;
			$li.eq(i).show();
		});
		$btns.find('a').remove();
		for(var i = 0; i < num; i++){
			var head =i*perPage+1;
			var foot = i*perPage+perPage;
			$btns.show().append('<a href="javascript:;"><span class="head">'+head+'</span>'+'-'+'<span class="foot">'+foot+'</span></a>');
		}
		$(this).parent().append('<div class="stop"><a href="javascript:;"><span>收起</span><i class="arr_up"></i></a></a></div>');
		$btns.find('a').first().addClass('active');
	})

	$(".selections-btns").on('click', 'a', function(){
		var $box = $(this).parent().parent().find('.selections-inner-box');
		var head = $(this).find('.head').html() - 1;
		var foot = $(this).find('.foot').html() - 1;
		$(this).addClass('active').siblings().removeClass('active');
		$box.find('li').hide();
		$.each($box.find('li'), function(i, val){
			if(i >= head && i <= foot){
				$box.find('li').eq(i).show();
			}
		});
	});

	$(document).on('click', '.stop', function(){
		var $li = $(this).parent().find('li');
		$li.show();
		$(this).hide();
		$(this).parent().find('.hide').hide();
		$(this).parent().find('.all').show();
		$(this).parent().parent().find('.selections-btns').hide();
	});
})