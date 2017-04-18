function setText(selector, text) { 

	var element = document.querySelector(selector);
	element.innerText = text;


	/*
		`selector` is string with CSS-like selector
		`text` - is just string with text we want to change
	*/

}

function setTextAll(selector, text) {
	var arrayElements = document.querySelectorAll(selector);
	arrayElements.forEach(function(element) {
          setText(selector, text);
		});
}


setText("a", "New");       
setTextAll("p", "changed Text");