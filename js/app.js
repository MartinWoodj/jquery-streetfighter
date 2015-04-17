$(document).ready(function() {
  var ryuHadouken = false;
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		ryuHadouken = true;
		playHadouken ();
		$('.ryu-ready').hide();
    $('.looking-cool').hide();
    $('.ryu-still').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
				}
			);
		$('.hadouken').finish().show()
		.animate(
			{'left':'1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left','520px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
    ryuHadouken = false;
	});
	$(document).keydown(function(e) {
	if (e.which == 88 && ryuHadouken == false){
		$('.ryu-still').hide();
		$('.looking-cool').show();
		$('.ryu-ready').hide();
	}
	});
$(document).keyup(function(e) {
	if (e.which == 88){
		$('.looking-cool').hide();
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	} 
	});
});

function playHadouken () {
	$('#hadouken-sound') [0].volume = 0.5;
	$('#hadouken-sound') [0].load();
	$('#hadouken-sound') [0].play();
}
