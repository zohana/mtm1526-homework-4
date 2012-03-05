$(document).ready(function () {
       
	   $('.tabs a').on('click',function (e) {
	   var tabToShow = $(this).attr('href');
	
	   $('.indiv img').hide();
	   $(tabToShow).fadeToggle(500);
	
});
	

});
