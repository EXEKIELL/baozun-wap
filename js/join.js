$(function(){
	//
	$('.searchBox input').on('input',function(){
		if($(this).val().length==0)
		{
			$(this).nextAll('a').hide();
		}else{
			$(this).nextAll('a').show();
		}
	});
	$('.searchBox a').on('click',function(){
		$(this).prev('input').val("");
		$(this).hide();
	});
	//选择文件
	$('.file input').on('change',function(){
		if($(this).val()=="")
		{
			$(this).parent('.file').nextAll('.fileName').text('未选择文件');
		}else{
			$(this).parent('.file').nextAll('.fileName').text($(this).val());
		}
	});
	//获取焦点
	$('.fou input').on('focusin',function(){
		$(this).parents('li').addClass('choice');
		$(this).parents('li').siblings('li').removeClass('choice');
	});
	$('.fou textarea').on('focusin',function(){
		$(this).parents('li').addClass('choice');
		$(this).parents('li').siblings('li').removeClass('choice');
	});
	$('.fou input').on('focusout',function(){
		$(this).parents('li').removeClass('choice');
	});
	$('.fou textarea').on('focusout',function(){
		$(this).parents('li').removeClass('choice');
	});
	var mo=function(e){e.preventDefault();};
		/***禁止滑动***/
		function stop(){
			 $('body').css('overflow','hidden');     
			 document.addEventListener("touchmove",mo,false);//禁止页面滑动
		}
		/***取消滑动限制***/
		function move(){
			$('body').css('overflow-y','scroll');  
			document.removeEventListener("touchmove",mo,false);        
		}
		//显示职位
	$('.apply a').on('click',function(){
		$('#joinApply').show();
		stop();
	});
	//关闭职位
	$('#joinApply .closeJoin').on('click',function(){
		$('#joinApply').hide();
		move();
	});
});
