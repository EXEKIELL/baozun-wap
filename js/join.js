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
});
