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