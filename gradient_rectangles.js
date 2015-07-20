function Rectangle () {

}

Rectangle.prototype.appendRectangle = function() {
	var div = "<div class=rectangle />"
	$("body").append(div)
};

Rectangle.prototype.scale = function() {
	$(".rectangle").css({"height":"400px", "width":"250px"})
};

Rectangle.prototype.position = function() {
	var posTop = this.getRandPositionInRange()
	var posLeft = this.getRandPositionInRange()

	$(".rectangle").css({"top":posTop + "%", "left":posLeft + "%", "transform":"translateX(-" + posTop+"%) translateY(-" + posLeft+"%)"})
};

Rectangle.prototype.getRandPositionInRange = function() {
	var min = 40
	var max = 60
	return Math.floor(Math.random() * (max-min + 1) + min)
};