//倒计时
var timeDom = document.getElementById("time");
timeDom.innerHTML="1时&nbsp;&nbsp;00分&nbsp;&nbsp;00秒";
var maxtime = 60*60;
timer = setInterval("CountDown()",1000);
function CountDown(){
	if(maxtime>=0){
		minutes = Math.floor(maxtime/60);
		sections = Math.floor(maxtime%60);
		msg ="0时&nbsp;&nbsp;"+ minutes+"分&nbsp;&nbsp;"+sections+"秒";
		timeDom.innerHTML=msg;
		--maxtime;
	}else{
		clearInterval(timer);
	}
}

//$("document").scroll(function(){
//	if($("html,body").scrollTop()=400){
//		var moban = '<li>'+
//						'<img src="images/bg1.jpg"width="226" height="288"/>'+'<div class="s-box6-bg"><img src="images/logo8.png" width="80" height="40"/></div>'+
//						'<div class="s-box6-bottom">'+
//							'<p class="s-box6-bottom-txt">英国百年品牌雅阁狮丹AQ...</p>'+
//							'<p><span class="s-box6-pink1">3.5折</span>折不封顶</p>'+
//							'<button class="s-box6-btn">立即抢购</button>'+
//						'</div>'+
//					'</li>'
//		for(var i=0;i<20;i++){
//			$(".s-box6").append(moban)
//		}
//	
//	}
//
//})