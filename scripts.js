
var tabs = document.getElementsByClassName('tab');
var contents = document.getElementsByClassName('content');

adjustWidths();

/*for (var i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("mouseover", expand(tabs[i]));
};*/

function adjustWidths() {
	for (var i = 0; i < tabs.length; i++) {
		width = parseInt(window.innerWidth) - parseInt(getComputedStyle(tabs[i], null).width);
		contents[i].style.width = width + "px";
	};
}

/*function expand(tab) {
	alert("hovering on " + tab);
}*/
