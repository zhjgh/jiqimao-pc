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