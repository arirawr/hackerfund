
var tabs = document.getElementsByClassName('tab');
var contents = document.getElementsByClassName('content');
var blocks = document.getElementsByClassName('block');

//adjustWidths();

/*for (var i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("mouseover", expand(tabs[i]));
};*/

/*function adjustWidths() {
	for (var i = 0; i < tabs.length; i++) {
		width = parseInt(window.innerWidth) - parseInt(getComputedStyle(tabs[i], null).width) - parseInt(getComputedStyle(blocks[i], null).width);
		contents[i].style.width = width + "px";
	};
}*/

$('section').hover(function() {
	$(this).children('.tab').toggleClass("zero-width");
	$(this).children('.block').toggleClass("auto-width");
	$(this).children('.content').toggleClass("white-section");
	//adjustWidths();
});

//$('section').hover(adjustWidths());


