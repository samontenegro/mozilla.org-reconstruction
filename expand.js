function set_att (cls) {
	var x = document.getElementsByClassName(cls);
	for (xid='',i=0;i<x.length;i++,xid=''){
		xid = '"' + x[i].id + '_cont"';
		x[i].setAttribute('onmouseover','contExpand('+xid+')');
		x[i].setAttribute('onmouseleave','contHide('+xid+')');
	}
} //Sets attributes for expandable elements!

function contExpand (elem) {
	elem = elem.toString();
	document.getElementById(elem).style.height = "auto"
} //Expands HTML element vertically

function contHide (elem) {
	elem = elem.toString();
	document.getElementById(elem).style.height = "0px";
} //Contracts HTML element vertically


