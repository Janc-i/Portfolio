(function($){

	var square = $('.square img'),
		playground = $('.playground'),
        height = $('.playground').height()-125,
        width = $('.playground').width()-125;


		//turtle moving	
	let moving = square.on('mouseenter', function(){
		$(this).animate({
			left: (Math.random()*width),
            top: (Math.random()*height),
			

		},200);



	});
//turtle cought - enlarging, reload on click
	square.on('click', function(){


        $(this).attr('src',"img/bubuska2.jpg");
		$(this).animate({width: '160px', height: '160px'},500, function(){
			$(this).on('click', function(){$(this).fadeOut(function(){
				location.reload();
			});

			});

			$(playground).on('click', function(){
				$(square).fadeOut(function(){
					location.reload();
				})
			})
		});

		square.on('mouseenter', function(){
			moving.stop()
		})


		});

// 	$(document).on('keydown', function(e){
// 		switch (e.which) {
// 			case 39:
// 			square.stop().animate({
// 				left: '+=100'
// 			});
// 			break;
// 			case 40:
// 			square.stop().animate({
// 				top: '+=100'
// 			});
// 			break;
// 			case 37:
// 			square.stop().animate({
// 				left: '-=100'
// 			});
// 			break;
// 			case 38:
// 			square.stop().animate({
// 				top: '-=100'
// 			});
// 			break;
// 			case 107:
// 			square.stop().animate({
// 				width: '+=100', height: '+=100'
// 			});
// 			break;
// 			case 109:
// 			square.stop().animate({
// 				width: '-=100', height: '-=100'
// 			});
//             break;
//             case 13:
//             location.reload();
// 		}

// 		e.preventDefault();






// });

// 	$(document).bind('wheel mousewheel', function(e){
//         var delta;

//         if (e.originalEvent.wheelDelta !== undefined)
//             delta = e.originalEvent.wheelDelta;
//         else
//             delta = e.originalEvent.deltaY * -1;

//             if(delta > 0) {
//                 square.stop().animate({width: '+=100', height: '+=100'});
//             }
//             else{
//                 square.stop().animate({width: '-=100', height: '-=100'});
//             }

//             e.preventDefault();
//         });









})(jQuery);