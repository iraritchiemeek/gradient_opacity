function rgbValue () {
	return Math.floor(Math.random() * 256)
}

function randRGB () {
	var rgb = [rgbValue(), rgbValue(), rgbValue()];
    return "rgb(" + rgb.join(",") + ")";
}