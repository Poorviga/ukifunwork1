
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() { 



SC.stream('/tracks/347092104',function(sound){ });

	$('#start').click(function(e) {
           e.preventDefault();
           sound.start();
         });

	$('#stop').click(function(e) {
           e.preventDefault();
           sound.stop();
         });



SC.stream('/tracks/652012811',function(sound){ });

	$('#start2').click(function(e) {
           e.preventDefault();
           sound.start();
         });

	$('#stop2').click(function(e) {
           e.preventDefault();
           sound.stop();
         });



SC.stream('/tracks/347092104',function(sound){ });

	$('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });

	$('#stop3').click(function(e) {
           e.preventDefault();
           sound.stop();
         });


	SC.stream('/tracks/216133717',function(sound){ });

	$('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });

	$('#stop4').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
	
	 }); 
