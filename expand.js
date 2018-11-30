function contExpand (elem,height_val) {
	height_val = height_val.toString();
	elem = elem.toString();
	document.getElementById(elem).style.height = height_val + "px";
}

function contHide (elem) {
	elem = elem.toString();
	document.getElementById(elem).style.height = "0px";
}


