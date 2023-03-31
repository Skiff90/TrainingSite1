"use strict"

//slider 1

var slideIndex = 1;


window.addEventListener('resize', function (event) {
	var width = window.innerWidth;
	if (width > 756) {
		hideSlider();
	}
	else if (width <= 756) {
		oneSlide();
		showSlider(slideIndex);
	}
})

function plusDivs(n) {
	showSlider(slideIndex += n);
}

function oneSlide() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 1; i < x.length; i++) {
		x[i].style.display = "none";
	}
}

function showSlider(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n > x.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = x.length };
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndex - 1].style.display = "block";
}

function hideSlider() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "block";
	}
}


//slider 2
var slideIndexT = 1;


window.addEventListener('resize', function (event) {
	var widthT = window.innerWidth;
	if (widthT > 1100) {
		hideSliderT();
	}
	else if (widthT <= 1100) {
		oneSlideT();
		showSliderT(slideIndexT);
	}
})

function plusDivsT(f) {
	showSliderT(slideIndexT += f);
}

function oneSlideT() {
	var i;
	var x = document.getElementsByClassName("card");
	for (i = 1; i < x.length; i++) {
		x[i].style.display = "none";
	}
}

function showSliderT(n) {
	var i;
	var x = document.getElementsByClassName("card");
	if (n > x.length) { slideIndexT = 1 }
	if (n < 1) { slideIndexT = x.length };
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[slideIndexT - 1].style.display = "block";
}

function hideSliderT() {
	var i;
	var x = document.getElementsByClassName("card");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "block";
	}
}

//scroll


const button = document.querySelector(".footer__image");

if (button)
	button.addEventListener('click', function (e) {
		const bike = document.querySelector(".bike");
		bike.scrollIntoView(top);
	})