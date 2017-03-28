define(['jquery', 'public'], function($, public){

	var exports = {};

	exports.scroll = function(){
		var scrollTop = $(document).scrollTop();
		if (scrollTop > 580) {
			$(".header").css('background', '#fff');
		} else {
			$(".header").css('background', '');
		}
	};

	exports.addEvent = function(){
		$(window).resize(function(){
			var W = $(window).width();
			if(W < 1280){
				$(".carousel").find('img').height(480 + 'px');
			}else{
				$(".carousel").find('img').height(580 + 'px');
			}
		});

		$(window).scroll(function(){
			exports.scroll();
		});
	};

	exports.init = function(){
		// public.lunbo();
		exports.scroll();
		exports.addEvent();
	};

	return exports;
});
define('public', ['jquery'], function($) {

	var public = {};

	// 轮播
	public.lunbo = function() {
		var idx = 0,timer;

		function auto() {
			timer = setInterval(function() {
				idx++;
				if (idx > $(".carousel-nav a").length - 1) idx = 0;
				$(".slider").hide().eq(idx).show();
				$(".carousel-nav a").eq(idx).addClass('active').siblings().removeClass('active');
			}, 5000);
		}
		auto();

		$(".carousel-nav a").bind({
			mouseover: function(){
				clearInterval(timer);
				idx = $(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				$(".slider").hide().eq(idx).show();
			},
			mouseout: function() {
				auto();
			}
		});
	}

	return public;
});