document.addEventListener("DOMNodeInserted", function(event) {
	[].forEach.call(document.querySelectorAll('a[href^="http"]'),function(a){
		a['target'] = '_blank';
	});
});
