$(function(){
	//头部导航
	var navListLis=$(".nav-list-li");
	var navSecList=$(".nav-second-list");
	navListLis.each(function(index,item){
		$(this).hover(function(){
			navSecList.eq(index).css("display","block")
		},function(){
			navSecList.eq(index).css("display","none")
		})
	});
	//轮播图
	var mySwiper = new Swiper('.swiper-container', {
	autoplay: 2000,//可选选项，自动滑动
	pagination : '.swiper-pagination',
	paginationClickable :true,
	loop : true,
	autoplayDisableOnInteraction : false,
	})
})