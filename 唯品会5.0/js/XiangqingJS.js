$(function(){
	var nav=$(".fine");//得到导航
	var btn=$(".buttonBox button");
	var win=$(window);
	var sc=$(document);
	win.scroll(function(){
		if(sc.scrollTop()>=841){
		nav.addClass("fixedStyle")
		}else{
			nav.removeClass("fixedStyle")
		}
	})
   win.scroll(function(){
		if(sc.scrollTop()>=841){
		btn.addClass("btnFixedStyle")
		}else{
			btn.removeClass("btnFixedStyle")
		}
	})
   $("#city").click(function(){
   		if($(".city-details").css("display")=="none"){
   			 	$(".city-details").css("display","block");
   		}else{
   			$(".city-details").css("display","none");
	   	}
	  })
})



function jumpset(){
		window.location.href="login.html"
}


$(function(){
	$(".number-add").click(function(){
		var n = $(".s-number").text()
		var num=parseInt(n)+1;
		if(num<0){return;}
		$(".s-number").text(num)
		
	})
	
	$(".number-down").click(function(){
		var n = $(".s-number").text()
		var num=parseInt(n)-1;
			if(num<0){return;}
			$(".s-number").text(num)

	})
	
	$(".city-details").find("ul").children().click(function(){
		var cur = $(this).index()
		console.log($(".city-details ul li")[cur].innerHTML)
		$("#city").html($(".city-details ul li")[cur].innerText)
		$(".city-details").css("display","none")
	})
	
	$(".icolor>dd>ul>li").each(function(){
			$(this).click(function(){
				if($(this).siblings().children().find("a").hasClass("pinka")&&$(this).siblings().children().find("a").children().find("i").hasClass("pinki")){
					$(this).siblings().children().find("a").removeClass("pinka")
					$(this).siblings().children().find("a").children().find("i").removeClass("pinki")
				}else{
					$(this).find("a").addClass("pinka").find("i").addClass("pinki")
					
				}
			})
	})
	
	
	$(".minimg").find('a').click(function(){
		var curimg = $(this).index();
		if(curimg ==0){
			$(".zoomPad").find('img').attr('src','images/qiuji01.jpg')
		}else if(curimg ==1){
			$(".zoomPad").find('img').attr('src','images/detailbg1.jpg')
			
		}else if(curimg==2){
			$(".zoomPad").find('img').attr('src','images/detailbg2.jpg')
			
		}
		
	})

})
