
//smooth scroll

var posY=0;
jarak = 10;
function smoothScroll(id) {
	var target = document.getElementById(id).offsetTop;

	var scrollAnimate = setTimeout(function(){
		smoothScroll(id);
	}, 5)

	posY = posY + jarak;

	if(posY >= target) {
		clearTimeout(scrollAnimate);
		posY=0;
	}
	else {
	window.scroll(0, posY)
	}

	return false;

}