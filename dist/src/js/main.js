
// Preloader
// $(window).on('load', function() { // makes sure the whole site is loaded
// 	$('#status').fadeOut(); // will first fade out the loading animation
// 	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
// 	$('body').delay(350).css({'overflow':'visible'});
// })


// Copyrights Get Current Year
var year = new Date().getFullYear();
$('.fullYear').html(year)



// Video player popup
$('.player-inner').on('click', function(){
	$('#video-popup').addClass('hide-player');
})
$('.close-icon').on('click', function(){
	$('#video-popup').removeClass('hide-player');
})