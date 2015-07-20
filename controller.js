$(function(){
	
	var rectangle = new Rectangle	

	for (var i = 0; i < 2; i++) {
		rectangle.appendRectangle()
	};

	for (var i = $(".rectangle").length - 1; i >= 0; i--) {
		rectangle.scale($(".rectangle")[i])
		rectangle.position($(".rectangle")[i])
	};
		// rectangle.fillGradient()
})