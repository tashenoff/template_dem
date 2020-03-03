$(function() {
  objectFitImages();
});

var menu = document.getElementById("navbar");
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
}

bgLayer.onclick = function() {
  modal.classList.remove("modal--is-visible");
  document.body.classList.remove("modal-open");
  document.getElementById("bg_layer").removeAttribute("style");
};

function ValidateFunction() {
  var x = document.forms["modall"]["fname"].value;
  if (x == "") {
    x.add("modal-open");
    alert("Name must be filled out");
    return false;
  }
}
