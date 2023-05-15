(function($){
   var menu = $('.menu-hidden'),
       nav = $('.navigation-hidden'),
       body=$('body');


nav.hide();
menu.on('click', function(e){
	nav.stop().slideToggle();
e.preventDefault();
});





})(jQuery);