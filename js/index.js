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
	var srchTxt=$(".nav-btn .nav-text");
	srchTxt.focus(function(){
		$(this).css("border-color","#ff6700")
	});
	srchTxt.blur(function(){
		$(this).css("border-color","#ddd")
	});
	//轮播图
	var myBanner = new Swiper('#banner', {
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
	})();

	//搭配
	(function(){
		var dapei=$(".dapei"),
			dapeiHdLists=$(".dapei-head-list li"),
			dapeiTabs=$(".dapei-tab",dapei);
		// alert(dapeiTabs)
		dapeiHdLists.each(function(index,list){
			$(this).mouseover(function(){
				var _this=$(this);
				_this.siblings("li").removeClass("dapei-lion");
				_this.addClass("dapei-lion");
				dapeiTabs.each(function(index,list){
					$(this).css("display","none");
				});
				dapeiTabs.eq(index).css("display","block");
			})
		});
	})();

	//内容
	var neirongSlide=new Swiper(".neirong-slide",{
		autoplay: 5000, //可选选项，自动滑动
		pagination: '.swiper-pagination',
		paginationClickable: true,
		//loop: true,
		autoplayDisableOnInteraction: false,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
	});

	//视频
	$(".video-close").click(function(){
		$(".video-box").css("display","none");
		$(".mark").css("display","none");
		$("#myVideo").get(0).pause();
	});
	$(".shipin-box").each(function(index,item){
		$(this).click(function(){
			$(".video-box").css("display","block");
			$(".mark").css("display","block");
			$("#myVideo").get(0).play();
		});
	})

})