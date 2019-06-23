"use strict";

window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function convert(celsius) {
		return (celsius * (5 / 9)) + 32;
	}
};