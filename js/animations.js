$(".portfolio-block i").hover(function(){
		if (window.innerWidth > 640) {
			var span = $(this).parent().siblings().eq(0);
			span.text($(this).attr('title'));
			span.css("opacity", 1.0);
		}
  }, function(){
		var span = $(this).parent().siblings().eq(0);
		span.text("");
		span.css("opacity", 0);
});

// Skills progressbars
var bars = [];
var nBars = 4;
for (var i = 0; i < nBars; i++) {
	bars[i] = new ProgressBar.Circle(("#skillBar" + i), {
	  color: '#aaa',
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 7,
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: '#aaa', width: 1 },
	  to: { color: '#8e9297', width: 7 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    // circle.path.setAttribute('stroke-width', state.width);

	    var value = (Math.round(circle.value() * 100) + "%");
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value);
	    }

	  }
	});

	bars[i].text.style.fontFamily = '"Optima", Helvetica, sans-serif';
	bars[i].text.style.fontStyle = "italic";
	bars[i].text.style.fontWeight= "bold";
	bars[i].text.style.fontSize = '1.5rem';
}

$(document).bind('scroll', function(ev) {
    var scrollOffset = $(document).scrollTop();
    var containerOffset = $('#skillBar0').offset().top - window.innerHeight;
    if (scrollOffset > containerOffset) {
			bars[0].animate(0.8);  // Number from 0.0 to 1.0
			bars[1].animate(0.7);
			bars[2].animate(0.6);
			bars[3].animate(0.4);
       // unbind event
        $(document).unbind('scroll');
    }
});
