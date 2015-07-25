function CentralOpening (argument) {
	this.height = $(window).height()
	this.width = $(window).width()
}

CentralOpening.prototype.appendLines = function(click_count) {
	var lineHtml = '<div class="centralLines click' + click_count + '"/>'


	console.log(click_count)
	if (click_count == 1) {
		$('#container').append(lineHtml)
	} else {	
		for (var i = 0; i < 2; i++) {
			$('#container').append(lineHtml)
		}
	}

};

CentralOpening.prototype.sizeLines = function() {
	$(".centralLines").css({"height":(this.height/10)})
};

CentralOpening.prototype.positionLines = function(positions) {
	var lines = []
	$.each($(".centralLines"), function(index, line){
		lines.push(line)
	})

	// fuck prevobjects ??!!

	if (positions.length == 1) {
		$(".centralLines").css({"top": positions[0], "left": "50%"})
	} else {
		console.log(lines)
		$(lines.pop()).css({"top": positions[0], "left": "50%"})
		$(lines.pop()).css({"top": positions[1], "left": "50%"})
	}

};

CentralOpening.prototype.getPositions = function(click_count) {
	switch (click_count) {
		case 1: return ['50%']; break;
		case 2: return ['40%', '60%']; break;
		case 3: return ['30%', '70%']; break;
		case 4: return ['20%', '80%']; break;
		case 5: return ['10%', '90%']; break;
	}
};

CentralOpening.prototype.colorLines = function(click_count) {
	$(".click" + click_count).css({"background": "linear-gradient(to left," + randRGB() + "," + randRGB() + ")"})

};