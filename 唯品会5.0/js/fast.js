$(function() {
	for(var i = 1; i <= 40; i++) {
		$(".f-section").append('<div class="listL2">' +
			'<div class="mainImg">' +
			'<img class="lazy" src="images/lazyload278-518.gif/" width="220px" height="220px" data-original="images/quickly/' + imgData[i].src + '"/>' +
			'<span class="m-a"></span>' +
			'<span class="m-b"></span>' +
			'<span class="m-c"></span>' +
			'</div>' +
			'<div class="mainFont">' +
			'<span class="m-d"><img  src="images/' + imgData[i].src2 + '" width="160px" height="79px" /></span>' +
			' <span class="m-e"></span>' +
			'<p class="m-recored">' + imgData[i].dec2 + '</p>' +
			'<p class="m-recored2">' + imgData[i].dec3 + '</p>' +
			'<p class="m-shopValue"><span class="m-f">店庆价</span><span class="m-g">' + imgData[i].value + '</span></p> ' +
			' <p class="m-num"><span class="m-nimg"></span><span class="m-nimg2"></span>累计热卖3.0万件</p>' +
			'</div>' +
			'</div>'
		)
	}
})

$(function() {
	$("img.lazy").lazyload({
		event: "sporty"
	});
});

$(window).bind("load", function() {
	var timeout = setTimeout(function() {
		$("img.lazy").trigger("sporty")
	}, 2000);
});

$(function() {
	$(document).scroll(function() {
		console.log(1);
		if($(document).scrollTop() > 700) {

			$(".fixNav").show()
		}else{
			$(".fixNav").hide()
		}
	})
})