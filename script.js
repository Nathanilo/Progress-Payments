// HAMBURGER MENU
const mainMenu = document.querySelector(".nav-links");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .nav-links li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// CLOSE MENU WHEN YOU CLICK ON MENU ITEM
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-150%";
}

// ABOUT US CAROUSEL

let slideIndex = 1;
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let dots2 = document.getElementsByClassName("dot");


showSlides(slideIndex);
showSlide();

function currentSlide(n) {
  showSlides((slideIndex = n));
}

//click dot
function showSlides(n) {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " dot-active";
}

// AUTO CHANGE ABOUT SECTION TEXT
function showSlide() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" dot-active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots2[slideIndex - 1].className += " dot-active";
  setTimeout(showSlide, 5000); // Change image every 2 seconds
}

// REVEAL SECTIONS
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;

    if (revealtop < windowheight) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// FIXED HEADER APPEARS ON SCROLL
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}