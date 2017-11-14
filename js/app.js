(function (){
$(document).ready(function(){
	var circle = $('#circle');
	var colorInput = $('#color');
	var rangeInput = $('#slider');
	var canvasContainer = document.getElementById('draw');
	var ctx;
	$('#draw').css({
		width: '100%',
		height: '100%',
	});
	// set the color in color bar
	$(".color-item").each(function(i, el){
		var color = $(this).attr('data-color');
		$(this).css('background', color);
	});
	// add event listener on color input to choose required color
	colorInput.click(function(){
		$('.wrap-to-choose').fadeIn();
		//add event listener on color item list
		$('.wrap-to-choose').click(function(e){

			if(e.target.classList.contains('color-item')){	
				var color;
				color = e.target.dataset.color;
				console.log(e);
				colorInput.css('background-color', color).attr({"data-color": color});
				circle.css('background-color', color)
			}else{
				$('.wrap-to-choose').fadeOut();
			}
		});
	});
	//add event listener on range input 
	rangeInput.change(function(){
		var val = $(this).val();
		circle.css({
			width: val+'px',
			height: val+'px'
		});
	});

	// Canvas testing
	ctx = canvasContainer.getContext("2d");
	ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(0, 0, 5, 5);
});//ready function

})()//I.I.F