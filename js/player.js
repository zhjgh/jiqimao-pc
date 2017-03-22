$(function() {
	var idx = 0;
	var perPage = 45;
	var prevPage;
	var nextPage;
	var length = $("#play-btns a").length;

	$.each($("#play-btns a"), function(i, value) {
		if (i >= perPage) return;
		$("#play-btns a").eq(i).show();
	})

	$("#next").on('click', function(){
		if(nextPage >= length) return;
		prevPage =  perPage * idx + perPage;
		idx++;
		nextPage =  perPage * idx + perPage;
		console.log(idx);
		console.log(prevPage +':'+ nextPage);
		$.each($("#play-btns a"), function(i, value) {
			if(i >= prevPage && i < nextPage){
				$("#play-btns a").eq(i).show();
			}else{
				$("#play-btns a").eq(i).hide();
			}
		})
	});

	$("#prev").on('click', function(){
		if(prevPage <= 0) return;
		idx--;
		prevPage =  perPage * idx;
		nextPage =  perPage * idx + perPage;
		console.log(idx);
		console.log(prevPage +':'+ nextPage);
		$.each($("#play-btns a"), function(i, value) {
			if(i >= prevPage && i < nextPage){
				$("#play-btns a").eq(i).show();
			}else{
				$("#play-btns a").eq(i).hide();
			}
		})
	});

	$(window).resize(function() {
		$("#play-tv").find('.play-tv-inner').css({
			"left": "0"
		});

		$("#today-list").find('.today-list-inner').css({
			"top": "0"
		});
	});

	$("#play-tv").on('click', '.prev-btn', function() {
		$("#play-tv").find('.play-tv-inner').animate({
			"left": "0"
		});
	});

	$("#play-tv").on('click', '.next-btn', function() {
		var left = $("#play-tv").width();
		$("#play-tv").find('.play-tv-inner').animate({
			"left": -left
		});
	});

	$("#today-btns").on('click', '.prevActive', function() {
		$("#today-list").find('.today-list-inner').animate({
			"top": "0"
		});
	});

	$("#today-btns").on('click', '.nextActive', function() {
		var top = $("#today-list").height();
		console.log(top);
		$("#today-list").find('.today-list-inner').animate({
			"top": -top
		});
	});
})