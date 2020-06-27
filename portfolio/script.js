
let bg = document.getElementById("about");
let me = document.getElementById("me");
me.addEventListener("mouseenter", () => {
	bg.style.backgroundImage = "url('yusra.png')";
})
me.addEventListener("mouseleave", () => {
	bg.style.backgroundImage = "none";
})

let karachi = document.getElementById("karachi");
karachi.addEventListener("mouseenter", () => {
	bg.style.backgroundImage = "url('karachi.png')";
})
karachi.addEventListener("mouseleave", () => {
	bg.style.backgroundImage = "none";
})

let pakistan = document.getElementById("pak");
pakistan.addEventListener("mouseenter", () => {
	bg.style.backgroundImage = "url('pakistan.png')";
})
pakistan.addEventListener("mouseleave", () => {
	bg.style.backgroundImage = "none";
})

let nyuad = document.getElementById("nyuad");
nyuad.addEventListener("mouseenter", () => {
	bg.style.backgroundImage = "url('nyuad.png')";
})
nyuad.addEventListener("mouseleave", () => {
	bg.style.backgroundImage = "none";
})


let pic = document.getElementById("pic");
pic.addEventListener('mouseenter', () => {
	pic.src = "pic2.jpg";
})
pic.addEventListener('mouseleave', () => {
	pic.src = "pic1.png";
})

