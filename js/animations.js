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
