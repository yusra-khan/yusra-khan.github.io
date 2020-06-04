console.log("yep it's working!!");

let devil = document.getElementById("1");
devil.addEventListener('mouseenter', () => {
	devil.src = "yusra.png";
})

devil.addEventListener('mouseleave', () => {
	devil.src = "devil.png";
})

let doubt = document.getElementById("2");
doubt.addEventListener('mouseenter', () => {
	doubt.src = "romeno.png";
})

doubt.addEventListener('mouseleave', () => {
	doubt.src = "doubt.png";
})

let thumb = document.getElementById("3");
thumb.addEventListener('mouseenter', () => {
	thumb.src = "saad.png";
})

thumb.addEventListener('mouseleave', () => {
	thumb.src = "thumbup.png";
})

let hungry = document.getElementById("4");
hungry.addEventListener('mouseenter', () => {
	hungry.src = "tonia.png";
})

hungry.addEventListener('mouseleave', () => {
	hungry.src = "hungry.png";
})

let covid = document.getElementById("covid");
let cross = document.getElementById("cross");
cross.style.cursor = 'pointer';
cross.addEventListener('click', () => {
	covid.style.display = 'none';
})

let cart = document.getElementById("cart");
cart.style.cursor = 'pointer';
cart.addEventListener('mouseenter', () => {
	cart.style.transform = "scale(1.25,1.25)";
})
cart.addEventListener('mouseleave', () => {
	cart.style.transform = "scale(0.8,0.8)";
})
cart.addEventListener('click', () => {
	window.open("error.html", "", "width=300,height=100");
})