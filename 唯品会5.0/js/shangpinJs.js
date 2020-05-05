$(function(){
	var nav=$(".pricetop");//得到导航
	var win=$(window);
	var sc=$(document);
	win.scroll(function(){
		if(sc.scrollTop()>=845){
		nav.addClass("fixednav"),
		$("#pbolck").css("display","none")
		}else{
			nav.removeClass("fixednav"),	
			$("#pbolck").css("display","block")
		}
	})
	$(".inputi-tem>input").focus(function(){
		$(".inputi-tem>button").show();
		$(".inputi-tem").css("background","white")
	}),
	$(".inputi-tem>input").blur(function(){
		$(".inputi-tem>button").hide();
		$(".inputi-tem").css("background","#f5f5f5")
	})
	
	
	
	
	
})
