"use strict";

window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function convert(celsius) {
		return (celsius * (9 / 5)) + 32;
	}

	function display(value) {
		document.getElementById("display-output").textContent = convert(value);
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();
		display(this.children[0].children[0].value);
	});
};