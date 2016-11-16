$(function() {
	//头部导航
	var navListLis = $(".nav-list-li");
	var navSecList = $(".nav-second-list");
	navListLis.each(function(index, item) {
		$(this).hover(function() {
			navSecList.eq(index).css("display", "block")
		}, function() {
			navSecList.eq(index).css("display", "none")
		})
	});
	//轮播图
	var mySwiper = new Swiper('.swiper-container', {
		autoplay: 5000, //可选选项，自动滑动
		pagination: '.swiper-pagination',
		paginationClickable: true,
		loop: true,
		autoplayDisableOnInteraction: false,
	});
	//明星单品
	(function() {
		var leftBtn = $("#spanleft"),
			rightBtn = $("#spanright"),
			main2Wrap = $("#main2-wrap");
		leftBtn.click(function() {
			if (main2Wrap.position().left !== 0) {
				main2Wrap.animate({
					left: 0
				})
			}
		})
		rightBtn.click(function() {
			if (!main2Wrap.position().left) {
				main2Wrap.animate({
					left: "-1238px"
				})
			}
		})
		//3s自动播放
		setInterval(function(){
			var l=main2Wrap.position().left;
			if(l==0){
				main2Wrap.animate({
					left: "-1238px"
				},1000)
			}else{
				main2Wrap.animate({
					left: 0
				},1000)
			}
		},5000)
	})()
})