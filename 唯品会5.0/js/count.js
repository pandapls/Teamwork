$(function () {
	
	
            //计算总价，编写总价方法
            
            
            function totalPrice() {
                var zong = 0;
                $(".smallsum").each(function () {
                    var all = parseInt($(this).text());
                    zong += all;
					
                })
                $(".all-number-money").text(zong);	
            };
            
            
            function allnum(){
				var num =0
				 $(".s-number").each(function () {
                    var allnum = parseInt($(this).text());
                    num += allnum;
					
               })
				$(".sct-box4-4-2").find(".all-number").text(num)
			};

			totalPrice()
			allnum()
            //减号逻辑
            $(".less").click(function () {
                var num = $(this).siblings(".s-number").text();  //获取数量框里的数值
                num--;  //单击“-”减号时，数量递减
                $(this).siblings(".s-number").text(num); //把数量变化后的新值放入数量框中
                if (num <= 1) {
                    $(this).siblings(".s-number").text(1)//当输入框内数值为1时，使“-”减号处于不可用状态。
                    
                };
                var danjia = $(this).parent().parent().find(".price").text(); //获取单价
                var xiaoji = danjia * num; //用单价乘以数量计算得到单个小计的值
                $(this).parent().parent().find(".smallsum").text(xiaoji); //把得到的小计值放入数量框中显示
               if($(this).siblings(".s-number").text()==1){
               		$(this).parent().parent().find(".smallsum").text(danjia);
               		
               }
            	allnum();
               totalPrice();//调用“总价”方法，使每点击减号，数量变化时，总价跟着变化
//
				
            })

            //加号逻辑（
            $(".add").click(function () {
                var num = $(this).siblings(".s-number").text();
                num++;
                $(this).siblings(".s-number").text(num); 
                var danjia = $(this).parent().parent().find(".price").text();
                var xiaoji = danjia * num;
                $(this).parent().parent().find(".smallsum").text(xiaoji);
          		allnum();
                totalPrice();
                
            })
		
            //点击合计重整清算(防止单行删除某项商品后，总价不刷新)
            //单行删除商品
            $(".delete").click(function () {
                $(this).parent().remove();
                 allnum();
                totalPrice();
            })




			$(".all-number-money").bind(function(){
          	
            	totalPrice();
            	allnum();
            })
            $(function(){
				 var isChecked=true;
				$("#all-check").click(function(){
					isChecked= !isChecked
					if(isChecked){
						$(".sct-box4-2").find("input[name='choose']").prop("checked",true)
						totalPrice();
						allnum()
						
					}else{
						$(".sct-box4-2").find("input[name='choose']").removeProp("checked")
						$('.all-number').text(0)
						$('.all-number-money').text(0)
					}
					
					
					
				})
			})
			
			
           
			$(function(){
				var isChecked=true;
				 $(".check-position").each(function () {
                   $(this).click(function(){
                   		isChecked= !isChecked
	                   	 if(isChecked){
	                   	 	allnum();
	                    	totalPrice();
	                    }else{
	                    	totalPrice();
	                    	var $cur = $('.all-number-money').text()
	                    	var $curnum = $('.all-number').text()
	                    	$('.all-number-money').text($cur-$(this).parent().find(".smallsum").text())
	                   		 $('.all-number').text($curnum-$(this).parent().find(".s-number").text())
	                    }
                   })
					
                })
			})
			
			
          
        })




$(".sct-box4-5-btn").click(function(){
	if(!window.localStorage){
	 	alert("浏览器不支持localstorage");
	}else{
	    //主逻辑业务
	    var storage=window.localStorage;
	    //设置方式：
	    var $all_number= $('.all-number').text()
	    var $all_number_money= $('.all-number-money').text()
	    storage.setItem("a",$all_number);
	    storage.setItem("b",$all_number_money);
    
   		console.log( storage["a"],storage["b"]);  //打印出结果：String
	}
})
