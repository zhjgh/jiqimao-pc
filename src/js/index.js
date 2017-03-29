define(['jquery', 'public'], function($, public) {

	var exports = {};

	exports.scroll = function() {

		var scrollTop = $(document).scrollTop();

		if (scrollTop > 580) {
			$(".header").css('background', '#fff');
		} else {
			$(".header").css('background', '');
		}
	};

	exports.addEvent = function() {

		$(window).resize(function() {
			var W = $(window).width();
			if (W < 1280) {
				$(".carousel").find('img').height(480 + 'px');
			} else {
				$(".carousel").find('img').height(580 + 'px');
			}
			$('.tv-tab-inner').animate({
				left: 0
			});
		});

		$(window).scroll(function() {
			exports.scroll();
		});
	};

	exports.switch = function() {

		var idx = 0;

		$(".next-btn").on('click', function() {
			var _this = $(this);
			var sum_width = _this.parent().width();
			var width = _this.parent().find('.tv-tab-inner li').width();
			var length = _this.parent().find('.tv-tab-inner li').length;
			var left = _this.parent().find('.tv-tab-inner').css('left');
			var n = parseInt(sum_width / width);
			var i = length / n;
			if(idx >= (i-1)) return;
			idx++;
			_this.parent().find('.tv-tab-inner').animate({
				left: -sum_width * idx
			});
		});

		$(".prev-btn").on('click', function() {
			var _this = $(this);
			var sum_width = _this.parent().width();
			var width = _this.parent().find('.tv-tab-inner li').width();
			var length = _this.parent().find('.tv-tab-inner li').length;
			var left = _this.parent().find('.tv-tab-inner').css('left');
			var n = parseInt(sum_width / width);
			var i = length / n;
			if(idx <= 0) return;
			idx--;
			_this.parent().find('.tv-tab-inner').animate({
				left:  - (sum_width * idx)
			});
		});
	}

	exports.init = function() {
		public.lunbo();
		exports.scroll();
		exports.addEvent();
		exports.switch();
	};

	return exports;
});