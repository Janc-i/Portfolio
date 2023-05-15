(function($){

var menu = $('.hidden-menu-icon');
var ul = $('.navbar-hidden');
ul.hide();
menu.on('click', function(event){
	ul.stop().slideToggle();
	event.preventDefault();
});






})(jQuery);