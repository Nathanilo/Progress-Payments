// Hamburger Menu

const mainMenu = document.querySelector(".nav-links");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .nav-links li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
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

// About us Carousel

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
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

// auto
function showSlide() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots2[slideIndex - 1].className += " active";
  setTimeout(showSlide, 5000); // Change image every 2 seconds
}
