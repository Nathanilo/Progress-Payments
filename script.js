// HAMBURGER MENU
const mainMenu = document.querySelector(".nav-links");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav .nav-links li a");
const contact_btn = document.getElementById("contact-btn");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// CLOSE MENU WHEN YOU CLICK ON MENU ITEM
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

contact_btn.addEventListener("click", () => close());

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-150%";
}

// REVEAL SECTIONS ON SCROLL
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

// CONTACT

// Get the modal
var modal = document.getElementById("contact-form");

// Get the button that opens the modal
var btn = document.getElementById("contact-btn");
var btn2 = document.getElementById("footer-contact-btn");

let contactName = document.getElementById("contact-name");
let contactEmail = document.getElementById("contact-email");
let contactMessage = document.getElementById("contact-message");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeForm")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

btn2.onclick = function () {
    modal.style.display = "block";
  };

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  contactName.value = "";
  contactEmail.value = "";
  contactMessage.value = "";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
  }
};
