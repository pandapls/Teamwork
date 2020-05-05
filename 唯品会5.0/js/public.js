$(".ntb-ul .ntb-ul-li-1").hover(function(){
	$(".listbox1").show()
},function(){
	$(".listbox1").hide()
	
})

$(".ntb-ul .ntb-ul-li-2").hover(function(){
	var $span =$(".ntb-ul .ntb-ul-li-2 span");
	var $a =$(".ntb-ul .ntb-ul-li-2>a");
	$span.toggleClass("angle").addClass("angle-pink");
	$a.css("color","#f10180")
	$(this).css({"background":"#fff","border-top":"1px solid  #cdcdcd","border-left":"1px solid  #cdcdcd","border-right":"1px solid  #cdcdcd"})
	$(".listbox2").css("display","block");
	$(".ntb-ul-li-2>i").css("background","none")
},function(){
	var $span =$(".ntb-ul .ntb-ul-li-2 span");
	var $a =$(".ntb-ul .ntb-ul-li-2>a");
	$span.toggleClass("angle-pink").addClass("angle");
	$a.css("color","#666666")
	$(this).css({"background":"none","border-top":"1px solid  #f5f5f5","border-left":"1px solid #f5f5f5","border-right":"1px solid  #f5f5f5"})
	$(".listbox2").css("display","none");
//	$(".ntb-ul-li-2>i").css({
//		 "background-image":"url(../images/logo38.png)",
//  	"background-position":"-273px -177px ",
// 		"background-repeat":" no-repeat"
//	})

	$(".ntb-ul-li-2>i").removeAttr("style")
	
})
$(".ntb-ul .ntb-ul-li-3").hover(function(){
	var $span =$(".ntb-ul .ntb-ul-li-3 span");
	var $a =$(".ntb-ul .ntb-ul-li-3>a");
	$span.toggleClass("angle").addClass("angle-pink");
	$a.css("color","#f10180")
	$(this).css({"background":"#fff","border-top":"1px solid  #cdcdcd","border-left":"1px solid  #cdcdcd","border-right":"1px solid  #cdcdcd"})
	$(".listbox3").css("display","block");
	$(".ntb-ul-li-3>i").css("background","none")
	
},function(){
	var $span =$(".ntb-ul .ntb-ul-li-3 span");
	var $a =$(".ntb-ul .ntb-ul-li-3>a");
	$span.toggleClass("angle-pink").addClass("angle");
	$a.css("color","#666666")
	$(this).css({"background":"none","border-top":"1px solid  #f5f5f5","border-left":"1px solid #f5f5f5","border-right":"1px solid  #f5f5f5"})
	$(".listbox3").css("display","none");
	$(".ntb-ul-li-3>i").removeAttr("style")
	
	
})

$(".ntb-ul .ntb-ul-li-4").hover(function(){
	var $span =$(".ntb-ul .ntb-ul-li-4 span");
	var $a =$(".ntb-ul .ntb-ul-li-4>a");
	$span.toggleClass("angle").addClass("angle-pink");
	$a.css("color","#f10180")
	$(this).css({"background":"#fff","border-top":"1px solid  #cdcdcd","border-left":"1px solid  #cdcdcd","border-right":"1px solid  #cdcdcd"})
	$(".listbox4").css("display","block");
	$(".ntb-ul-li-4>i").css("background","none")
	
},function(){
	var $span =$(".ntb-ul .ntb-ul-li-4 span");
	var $a =$(".ntb-ul .ntb-ul-li-4>a");
	$span.toggleClass("angle-pink").addClass("angle");
	$a.css("color","#666666")
	$(this).css({"background":"none","border-top":"1px solid  #f5f5f5","border-left":"1px solid #f5f5f5","border-right":"1px solid  #f5f5f5"})
	$(".listbox4").css("display","none");
	$(".ntb-ul-li-4>i").removeAttr("style")
	
	
})


$(".ntb-ul .ntb-ul-li-5").hover(function(){
	var $a =$(".ntb-ul .ntb-ul-li-5>a");
	$a.css("color","#f10180")
	$(this).css({"background":"#fff","border-top":"1px solid  #cdcdcd","border-left":"1px solid  #cdcdcd","border-right":"1px solid  #cdcdcd"})
	$(".listbox5").css("display","block");
	$(".ntb-ul-li-5>i").css("background","none")
},function(){
	var $a =$(".ntb-ul .ntb-ul-li-5>a");
	$a.css("color","#666666")
	$(this).css({"background":"none","border-top":"1px solid  #f5f5f5","border-left":"1px solid #f5f5f5","border-right":"1px solid  #f5f5f5"})
	$(".listbox5").css("display","none");
	$(".ntb-ul-li-5>i").removeAttr("style")
	
})


$(".ntb-ul .ntb-ul-li-6").hover(function(){
	$(".listbox6").show()
},function(){
	$(".listbox6").hide()
	
})

$(".n-m-red").hover(function(){
	$(".n-m-list1").slideDown("fast","linear");
},function(){
	$(".n-m-list1").slideUp("fast","linear");
}
)


$(".n-m-list1-box1>li").hover(function(){
	$(this).addClass('red-white').children(".n-m-list1-box2").show()
},function(){
	
	$(this).removeClass('red-white').children(".n-m-list1-box2").hide()

	
})



document.getElementById("login").onclick= function jump(){
	window.location.href="login.html"
}


	window.onload=function(){
			var keyDom =document.getElementById("hb-f-input");
			
			
			keyDom.onfocus=function(){
				document.getElementsByClassName("list-input2")[0].style.display="none"
				document.getElementsByClassName("list-input")[0].style.display="block"
				keyDom.onkeyup=function(){
					var script = document.createElement("script");
					script.src ="https://category.vip.com/ajax/getSuggest.php?callback=searchSuggestions&keyword="+this.value ;
					document.body.appendChild(script);
					window['searchSuggestions']=function(data){
							var listDom ="";
							for(var i =0;i<data.data.length;i++){
//								console.log(data.data[i].word)
								listDom += "<li>"+data.data[i].word+"</li>";
							}
							document.getElementsByClassName("list-input2")[0].style.display="block";
							document.getElementsByClassName("list-input2")[0].innerHTML=listDom;
							window.onclick=function(){
								document.getElementsByClassName("list-input2")[0].style.display="none";
								
							}
						
					}
				}
			}
			
						keyDom.onblur=function(){
				document.getElementsByClassName("list-input")[0].style.display="none"
			}
	}
	

	$(".list-input2 ").on("click","li",function(){
		var curli = $(this).index();
		var curval = $(this).text()
		console.log(curval)
		$("#hb-f-input").val(curval)
		
	})


	$(".hb-f-btn").click(function(){
		console.log($("#hb-f-input").val())
		if($("#hb-f-input").val()=="连衣裙"){
			window.location.href="ShangPingYe.html"
		}
	})
	
			
//				
//	console.log(lison)	
//	lison.onclick=function(){
//		console.log(1)
//	}

