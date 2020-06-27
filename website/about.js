console.log("yep it's working!!");

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