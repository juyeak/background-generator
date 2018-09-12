var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);

// body.style.background = "red";

function setGradient() { 
	body.style.background = 
	"Linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient); 

// // setGradient() niepracuje, bo przed tym idzie "input" format
// // ale najlepiej to jest w html fajle w input prosto wstawic oninput="setGradient()"



// color1.addEventListener("input", function() {
// 	// console.log(color1.value);
// 	body.style.background = "Linear-gradient(to right, "
// 	+ color1.value
// 	+ ", "
// 	+ color2.value
// 	+ ")";
// })

// color2.addEventListener("input", function() {
// 	// console.log(color2.value);
// 	body.style.background = "Linear-gradient(to right, "
// 	+ color1.value
// 	+ ", "
// 	+ color2.value
// 	+ ")";
// })

