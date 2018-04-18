$(document).ready(function(){
   $('ul li a:first').addClass('active');
   $('#contenedora article').hide();
   $('#contenedora').load('inicio.html');

   $('ul li a').click(function(){
   	$('ul li a').removeClass('active');
   	$(this).addClass('active');
   	$('#contenedora article').hide();

   	var link = $(this).attr('href')+"."+"html";
		$('#contenedora ').load(link);
	    return false;
   });
});