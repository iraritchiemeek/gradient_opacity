$(function(){
	
	var rectangle = new Rectangle
	var centralOpening = new CentralOpening	
	var click_count = 0

	$("#container").on('click', function(){

		if (click_count < 5) {
			click_count += 1
		} else {
			click_count = 1
		}
		var positions = centralOpening.getPositions(click_count)

		$("#click").remove()
		$(".rectangle").remove()

		centralOpening.appendLines(click_count)
		centralOpening.positionLines(positions)
		centralOpening.sizeLines()
		centralOpening.colorLines(click_count)

		for (var i = 0; i < 3; i++) {
			rectangle.appendRectangle()
		};

		for (var i = $(".rectangle").length - 1; i >= 0; i--) {
			rectangle.scale($(".rectangle")[i])
			rectangle.position($(".rectangle")[i])
			rectangle.applyGradient($(".rectangle")[i])
		};
	})


})