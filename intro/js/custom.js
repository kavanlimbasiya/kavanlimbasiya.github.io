$( document ).ready(function() {
	
	/*------------------------------ WOW Script ----------------------*/

	new WOW().init();
		
});

/*------------------------------ Preloader ----------------------*/

$(window).load(function() { 
	$('.spinner').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
	$('body').delay(350).css({'overflow':'visible'});
});