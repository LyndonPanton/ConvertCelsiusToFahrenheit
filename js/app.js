"use strict";

window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function convert(celsius) {
		return (celsius * (9 / 5)) + 32;
	}

	function display(value) {
		document.getElementById("display-output").textContent = convert(value);
	}

	let input = document.getElementById("celsius");
	input.addEventListener("input", function(event) {
		display(this.value);
	});
};