(function($){
var menu = $('.hidden-menu'),
    ul = $('.hidden-navbar'),
    h3 = $('.otvaracie');


 ul.hide();
    menu.on('click', function(e){
     ul.stop().slideToggle();
     e.preventDefault();
    });

 h3.on('click', function(e){
 	$('.slide').stop().slideToggle('fast');
 	e.preventDefault();
 });




})(jQuery);