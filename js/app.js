"use strict";

window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function convert(celsius) {
		return (celsius * (5 / 9)) + 32;
	}

	function display(value) {
		document.getElementById("display-output").textContent = convert(value);
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();
		
	});
};