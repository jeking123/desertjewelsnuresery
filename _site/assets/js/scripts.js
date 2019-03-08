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