

$(function(){
   $(document).on("scroll",function(){
         //屏幕滚动的距离+可见高度
        var $winTop =$(window).scrollTop();
        // console.log($winTop)
        //指定元素的页面位置
        var $top1 =$("#page_1").outerHeight()
        // console.log($top1)
        var $top2=$("#page_2").offset().top+$("#page_2").outerHeight()
        var $top3=$("#page_3").offset().top+$("#page_3").outerHeight()
        var $top4=$("#page_4").offset().top+$("#page_4").outerHeight()
        // console.log($top2)
        // console.log($top3)
        // console.log($top4)


       if($winTop<$top1){
           $(".light").animate({top:"+=20",opacity:'toggle'},'slow').stop(true,true)
       }else if($top1<$winTop&&$winTop<$top2){
            $(".window").animate({top:"+=15",opacity:'toggle'},'slow').stop(true,true)
       }else if($top2<$winTop&&$winTop<$top3){
            $(".plant").animate({left:"+=15",opacity:'toggle'},'slow')
       }else{
            $(".alipay").animate({left:"+=20",opacity:'toggle'},'slow')

        }
   })
})