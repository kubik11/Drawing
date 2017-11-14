(function (){
$(document).ready(function(){
	var circle = $('#circle');
	var colorInput = $('#color');
	var rangeInput = $('#slider');
	var canvas = document.getElementById('draw');
	var picture = document.querySelector('#picture-wrap');
	var ctx;
	var drowMode = false;
	var paintMode = true;
	$('#draw').css({
		width: '716',
		height: '500',
		position: 'relative',
		zIndex: '2'
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
	// get canvas context
	ctx = canvas.getContext('2d');
	// object wich stores coordinats
	ctx.strokeStyle = 'red';
	ctx.lineWidth = 3;
	var point = {
		x: 0,
		y: 0
	}
	// event listener on the picture block mousedown
	picture.addEventListener('mousedown', function(e){
		drowMode = true;
		point.x = e.pageX - this.offsetLeft;
		point.y = e.pageY - this.offsetTop;
		console.log(typeof(point.x));
		console.log(point.y);
		ctx.beginPath();
	 	ctx.moveTo(point.x, point.y);
	});
	// event listener on the picture block mousemove
	picture.addEventListener('mousemove', function(e){
		point.x = e.pageX - this.offsetLeft;
		point.y = e.pageY - this.offsetTop;
		if(drowMode != false){
			console.log(point.y);
			ctx.lineTo(point.x, point.y);
			ctx.stroke();
			console.log('s');
		}	 	
	});
	// event listener on the picture block mousedown
	picture.addEventListener('mouseup', function(){
		drowMode = false;
		console.log('stop');
	});
});//ready function

})()//I.I.F