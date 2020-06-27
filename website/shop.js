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

//get an HTMLCollection of all items
let items = document.getElementsByClassName("pic");
len = items.length;
//to display items in only category 1
let category1 = document.getElementById("d");
category1.addEventListener('click', () => {
	for(i=0;i<len;i++){
		classes = items[i].classList;
		if(classes.contains("1") == 0){
			items[i].style.display = 'none';
		}
		else{
			items[i].style.display = 'block';
		}
	}
})

//to display items in only category 2
let category2 = document.getElementById("end");
category2.addEventListener('click', () => {
	for(i=0;i<len;i++){
		classes = items[i].classList;
		if(classes.contains("2") == 0){
			items[i].style.display='none';
		}
		else{
			items[i].style.display = 'block';
		}
	}
})

//to display items in only category 3
let category3 = document.getElementById("fp");
category3.addEventListener('click', () => {
	for(i=0;i<len;i++){
		classes = items[i].classList;
		if(classes.contains("3") == 0){
			items[i].style.display='none';
		}
		else{
			items[i].style.display = 'block';
		}
	}
})

//to display items in only category 4
let category4 = document.getElementById("s");
category4.addEventListener('click', () => {
	for(i=0;i<len;i++){
		classes = items[i].classList;
		if(classes.contains("4") == 0){
			items[i].style.display='none';
		}
		else{
			items[i].style.display = 'block';
		}
	}
})

//to display items in only category 5
let category5 = document.getElementById("st");
category5.addEventListener('click', () => {
	for(i=0;i<len;i++){
		classes = items[i].classList;
		if(classes.contains("5") == 0){
			items[i].style.display='none';
		}
		else{
			items[i].style.display = 'block';
		}
	}
})

//to display items in only category 6
let category6 = document.getElementById("t");
category6.addEventListener('click', () => {
	for(i=0;i<len;i++){
		classes = items[i].classList;
		if(classes.contains("6") == 0){
			items[i].style.display='none';
		}
		else{
			items[i].style.display = 'block';
		}
	}
})
