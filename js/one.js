$(function() {
	var cat = function(obj) {
		obj.tv = {
			carousel: function() {
				var idx = 0, timer;

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
					mouseout: function(){
						auto();
					}
				});
			},
			tab: function() {
				var i = 0;
				var left = $("#news-big-vedio").find('.big-vedio-inner').css("left");
				var width = $("#news-big-vedio").find('a').width();
				var length = $("#news-big-vedio").find('a').length - 1;
				$("#news-big-vedio").on('click', '.left-btn', function() {
					if (i <= 0) return;
					i--;
					$("#news-big-vedio").find('.big-vedio-inner').animate({
						left: parseInt(left) - (width * i)
					});
				});

				$("#news-big-vedio").on('click', '.right-btn', function() {
					if (i >= length) return;
					i++;
					$("#news-big-vedio").find('.big-vedio-inner').animate({
						left: -width * i
					});
				});
			},
			addEvent: function() {
				var _this = this;

				// 缩放屏幕
				var length = $("#news-big-vedio").find('a').length;
				$("#news-big-vedio").find('.big-vedio-inner').width($(".big-vedio").width() * length);
				$(window).resize(function() {
					$("#news-big-vedio").find('.big-vedio-inner').width($(".big-vedio").width() * length);
				});

				// 滚动屏幕
				$(window).scroll(function() {
					var scrollTop = $(document).scrollTop();
					if (scrollTop > 580) {
						$(".site-head").css('background', '#fff');
					} else {
						$(".site-head").css('background', '');
					}
				});

				// 一级导航鼠标浮动上面添加样式效果
				$(".site-nav").on('mouseover', 'a', function() {
					$(".site-nav").find('a').removeClass('active');
					$(this).addClass('active');
				});

				// 关闭二维码弹框
				$("#close").on('click', function() {
					$("#ewm-box").hide();
				});

				// 二级导航鼠标浮动上面添加样式效果
				$(".nav").on('mouseover', 'a', function() {
					$(this).addClass('current').parent().siblings('li').find('a').removeClass('current');
				});

				//左右切换
				_this.tab();
			},
			init: function() {
				var _this = this;
				_this.carousel();
				_this.addEvent();
			}
		};
		return obj;
	}(cat || {});
	cat.tv.init();
});