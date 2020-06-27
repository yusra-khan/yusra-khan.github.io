
let logo = document.getElementById("logo");
// let up = logo.contentDocument.getElementById("up");
// let down = logo.contentDocument.getElementById("down");
// logo.addEventListener('mouseenter', () => {
// 	console.log(up);
// 	up.style.display = "inline";
// 	down.style.display = "none";
// })
// logo.addEventListener = ("mouseleave", () => {
// 	down.style.display = "none";
// 	up.style.display = "inline";
// })
// logo.addEventListener('mouseenter',() => {
// 	logo.src = "logo2.png";
// })
// logo.addEventListener('mouseleave',() => {
// 	logo.src = "logo1.png";
// })

// logo.addEventListener('click', () => {
// 	open("index.html");
// })

// let logo = document.getElementById("logo2");
// logo.addEventListener('click', () => {
// 	open("index.html");
// })
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

// let website = document.getElementById("one");
// website.addEventListener('mouseenter', () => {
// 	website.src = "website.png";
// 	website.style.backgroundImage = "url('website.jpg')";
// })