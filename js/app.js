(function (){
$(document).ready(function(){
	var circle = $('circle');
	$('#draw').css({
		width: '100%',
		height: '100%',
	});
	// set the color in color bar
	$(".color-item").each(function(i, el){
		var color = $(this).attr('data-color');
		$(this).css('background', color);
	});

});//ready function

})()//I.I.F