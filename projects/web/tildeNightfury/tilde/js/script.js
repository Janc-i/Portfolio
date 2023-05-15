(function($){
   var menu = $('.menu-button'),
       nav = $('.hidden-menu');


nav.hide();
menu.on('click', function(e){
	nav.stop().slideToggle(0);
	e.preventDefault();
});

var close = $('.x'),
    next = $('.next');
close.on('click', function(e){
close.hide();
next.hide();
e.preventDefault();

});



})(jQuery);