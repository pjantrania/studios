$(function(){
	//Title Fade in.
	$('h1').hide().fadeIn(1000);
	$('#edge').hide().fadeIn(5000);
	$('#edge').hover(function() {
		$('#ill').show();
	}, function() {
		$('#ill').hide();
	});

	$('button').click(function() {
		window.open('http://vimeo.com/11040425','_newtab');
	})
});