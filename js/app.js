(function (){
$(document).ready(function(){
	var circle = $('#circle');
	var colorInput = $('#color');
	var rangeInput = $('#slider');
	var canvas = document.getElementById('draw');
	var picture = document.querySelector('#picture-wrap');
	var ctx;
	var drowMode = false;
	var paintMode = false;// erase mode
	var color = '#ff0000';
	// get canvas context
	ctx = canvas.getContext('2d');
	ctx.strokeStyle = 'red';
	ctx.lineWidth = 3;
	$('#draw').css({
		// width: '716',
		// height: '500',
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
		if(!paintMode){
			$('.wrap-to-choose').fadeIn();
			//add event listener on color item list
			$('.wrap-to-choose').click(function(e){

				if(e.target.classList.contains('color-item')){	
					
					color = e.target.dataset.color;
					colorInput.css('background-color', color).attr({"data-color": color});
					circle.css('background-color', color);
					ctx.strokeStyle = color;
				}else{
					$('.wrap-to-choose').fadeOut();
				}
			});
		}
	});
	//add event listener on range input 
	rangeInput.change(function(){
		var val = $(this).val();
		circle.css({
			width: val + 'px',
			height: val + 'px'
		});
		ctx.lineWidth = val;
	});
	
	// object wich stores coordinats
	var point = {
		x: 0,
		y: 0
	}
	// event listener on the picture block mousedown
	picture.addEventListener('mousedown', function(e){
		var off = this.getBoundingClientRect();
		// console.log(off.top);
		drowMode = true;
		point.x = e.pageX - off.left;
		point.y = e.pageY - off.top - window.pageYOffset;
		console.log(point.y);
		console.log('отступ');
		console.log(point.x);
		ctx.beginPath();
	 	ctx.moveTo(point.x, point.y);
	 	ctx.lineTo(point.x, point.y);
	});
	// event listener on the picture block mousemove
	picture.addEventListener('mousemove', function(e){
		var off = this.getBoundingClientRect();
		point.x = e.pageX - off.left;
		point.y = e.pageY - off.top - window.pageYOffset;
		if(drowMode != false){
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
	// mouse leave event to preserve painting out of canvas
	picture.addEventListener('mouseleave', function(){
		drowMode = false;
		console.log('stop');
	});
	// erase event
	$('.erase').click(function(){
		$(this).toggleClass('active-erase');
		if(!paintMode){
			ctx.strokeStyle = '#cdcdcd';
			paintMode = true;
		}else{	
			ctx.strokeStyle = color;
			paintMode = false;
		}
	});
	// event to clear the canvas I'm going to reset the page becouse if I drow up the whole canvas 
	// it'll be not very cool stuff
	$('.reset').click(function(){
		location.reload();
	});
		
});//ready function

})()//I.I.F