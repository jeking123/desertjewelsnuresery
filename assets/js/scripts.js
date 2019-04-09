// adjusting settings for bulma carousel
// https://creativebulma.net/product/carousel/demo
window.onload = function() {
  var carousels = bulmaCarousel.attach('.hero-carousel',{
    autoplay: true,
    autoplaySpeed: 5000,
    loop: true,
    navigation: true,
    effect: 'fade'
  }); // carousels now contains an array of all Carousel instances
};

function navBurger () {
  var e = document.querySelector(".navbar-burger");
  var navMenu = document.querySelector(".navbar-menu");
  if (e.classList.contains('is-active')) {
    e.classList.remove('is-active');
    navMenu.classList.remove('is-active');
  } else {
    e.className += ' is-active';
    navMenu.className += ' is-active';
  }
}

function toggle_visibility(id) {
  var e = document.getElementById(id);
  if (e.classList.contains('is-hidden')) {
    e.classList.remove( 'is-hidden');
    e.className += " is-active";
  } else {
    e.classList.remove('is-active');
    e.className += ' is-hidden';
  }
}