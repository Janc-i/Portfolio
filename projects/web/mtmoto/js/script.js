(function($){

	$('.fa-arrow-up').on('click', function(){
$('html, body').animate({scrollTop: '0px'}, 300);
  });


// 	$(window).resize(function() {

//   if ($('body').width() < 734) {

//     $('.navbar').hide();

//   } else {

//     $('.navbar').show();

//     }

// });

// $(window).resize(function() {

//   if ($('body').width() < 734) {

//     $('.hidden-menu').show();

//   } else {

//     $('.hidden-menu').hide();

//     }

// });
$('.hidden-navbar').hide();


$('.hidden-menu').on('click', function(e){
	$('.hidden-navbar').stop().slideToggle();
  e.preventDefault();
});









})(jQuery);