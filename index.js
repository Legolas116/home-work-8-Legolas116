function setText(selector, text) { 

	var element = document.querySelector(selector);
	element.InertText = text;


	/*
		`selector` is string with CSS-like selector
		`text` - is just string with text we want to change
	*/

}

function setTextAll(selector, text) {
	

	var arrayElements = document.querySelectorAll(selector);
	arrayElements.forEach(function(elemente) {
          setText(selector, text);
		});
}


setText("p", "change text for all");       
setTextAll("p", "changed from setText");