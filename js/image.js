const mainImage = document.querySelector('.mainImage');
const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const body1 = document.querySelector("body");
const productContent = document.querySelector(".productContent");
var close;
var open = false;

mainImage.addEventListener('click',showImage);

image1.addEventListener('click',function(){ changeImage(image1);});
image2.addEventListener('click',function(){ changeImage(image2);});

function changeImage(image) {
	mainImage.src = image.src;
}

function showImage(){
	if (!open){
		var img = document.createElement("img");
		img.classList.add("nagyKep");
		img.src = mainImage.src;
		productContent.appendChild(img);
		close = document.createElement("img");
		img.addEventListener('click',bezar);
		open = true;
	}
}

function bezar(){
	productContent.removeChild(productContent.childNodes[7]);
	open = false;
}

