$(function() {
    var cat = function(obj) {
        obj.tv = {
            addEvent: function() {
                var _this = this;

                // 滚动屏幕
                $(window).scroll(function() {
                    var scrollTop = $(document).scrollTop();
                    if (scrollTop > 460) {
                        $(".site-head").css('background', '#fff');
                    } else {
                        $(".site-head").css('background', '');
                    }
                });

                // 轮播
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    paginationClickable: true,
                    centeredSlides: true,
                    autoplay: 5000,
                    autoplayDisableOnInteraction: false,
                    loop: true
                });
            },
            init: function() {
                var _this = this;
                _this.addEvent();
            }
        };
        return obj;
    }(cat || {});
    cat.tv.init();
});