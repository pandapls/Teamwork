//倒计时
var timeDom = document.getElementById("time");
timeDom.innerHTML="&nbsp;&nbsp;30分&nbsp;&nbsp;00秒";
var maxtime = 30*60;
timer = setInterval("CountDown()",1000);
function CountDown(){
	if(maxtime>=0){
		minutes = Math.floor(maxtime/60);
		sections = Math.floor(maxtime%60);
		msg ="&nbsp;&nbsp;"+minutes+"分&nbsp;&nbsp;"+sections+"秒";
		timeDom.innerHTML=msg;
		--maxtime;
	}else{
		clearInterval(timer);
	}
}


//加减



//$(".add").click(function(){
//	var $curadd = $(this) 
//	var n = $curadd.parent().find(".s-number").text()
//	var num=parseInt(n)+1;
//	if(num<1){return;}
//	var $sum = "￥"+(num*108)
//	$curadd.parent().find(".s-number").text(num)
//	$curadd.parent().parent().find("#smallsum").text($sum)
//})
//
//
//
//$(".less").click(function(){
//	var $curadd = $(this)
//	var n = $curadd.parent().find(".s-number").text()
//	var num=parseInt(n)-1;
//		if(num<1){return;}
//		var $sum = "￥"+(num*108)
//		$curadd.parent().find(".s-number").text(num)
//		$curadd.parent().parent().find("#smallsum").text($sum)
//})



//var $boxnum =$(".sct-box4-2").length
//$(".delete").click(function(){
//	
//	$(this).parent().remove().removeClass('.sct-box4-2-1');
//	if(i =1){
//		$num = $(".all-number").html();
//	}
//})





$(".sct-box4-5-btn").click(function(){
	alert("尚未支持支付")
})


//$(function(){
//	isChecked=true;
//	$("#all-check").click(function(){
//		isChecked= !isChecked
//		if(isChecked){
//			$(".sct-box4-2").find("input[name='choose']").prop("checked",true)
//		}else{
//			$(".sct-box4-2").find("input[name='choose']").removeProp("checked")
//		}
//	})
//})



