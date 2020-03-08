$(function() {
  objectFitImages();
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<img src='./themes/dem/assets/img/arrow_left.svg'>",
      "<img src='./themes/dem/assets/img/arrow_right.svg'>"
    ],
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });
});

var menu = document.getElementById("navbar");
var modalImg = document.getElementById("modal-img");
// var img = document.querySelector("myImg");
var imgcont = document.getElementById("img01");
var close = document.getElementById("close");
var open = document.getElementById("modal-open");
var shadow = document.getElementById("example");
var bgLayer = document.getElementById("bg_layer");
var hamburger = document.querySelector(".hamburger");
var mobmenu = document.querySelector(".nav__right");

// var body = document.body;

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  mobmenu.classList.toggle("nav__right--visible");
  if (hamburger.classList.contains("is-active")) {
    // body.style.overflowY = 'hidden'; // body переменную переименуй, под какую нить осмысленную, типа wrapper
    // body.style.position = 'fixed';
    document.getElementById("bg_layer").style.display = "block";
    document.body.classList.add("modal-open");
    shadow.classList.add("shadow-wrapper--active");
  } else {
    // body.style.overflowY = 'visible';
    shadow.classList.remove("shadow-wrapper--active");
    document.body.classList.remove("modal-open");
    document.getElementById("bg_layer").removeAttribute("style");
    // body.style.position = 'relative';
  }
});

window.onscroll = function() {
  scrollFunction();
};

function ScrollDown() {
  document.getElementById("start").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 180 ||
//     document.documentElement.scrollTop > 180
//   ) {
//     document.getElementById('navbar').classList.add('nav--fixed');
//     document.getElementById('space-navbar-fixed').style.marginTop = '94px';
//   } else {
//     document.getElementById('navbar').classList.remove('nav--fixed');
//     document.getElementById('space-navbar-fixed').removeAttribute('style');
//   }
// }

function openFunction() {
  modal.classList.add("modal--is-visible");
  document.body.classList.add("modal-open");
  document.getElementById("bg_layer").style.display = "block";
}

function closeFunction() {
  modal.classList.remove("modal--is-visible");
  document.body.classList.remove("modal-open");
  document.getElementById("bg_layer").removeAttribute("style");
  modalImg.classList.remove("modal--is-visible");
}

bgLayer.onclick = function() {
  modal.classList.remove("modal--is-visible");
  document.body.classList.remove("modal-open");
  document.getElementById("bg_layer").removeAttribute("style");
};

//img modal

// img.onclick = function() {
//   modalImg.classList.add("modal--is-visible");
//   document.body.classList.add("modal-open");
//   document.getElementById("bg_layer").style.display = "block";
//   imgcont.src = this.dataset.src;
// };

// document.querySelectorAll(".myImg").forEach(img => {
//   img.addEventListener("click", () => {
//     modalImg.classList.add("modal--is-visible");

//     document.body.classList.add("modal-open");
//     document.getElementById("bg_layer").style.display = "block";
//     document.querySelector("#img01").setAttribute("src", img.dataset.src);
//   });
// });

// function ValidateFunction() {
//   var x = document.forms["modall"]["fname"].value;
//   if (x == "") {
//     x.add("modal-open");
//     alert("Name must be filled out");
//     return false;
//   }
// }
