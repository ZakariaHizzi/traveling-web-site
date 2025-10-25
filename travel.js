let menuBar = document.querySelector("#menu-bar");
let amenu = document.querySelector(".navbar");
function showmenu() {
  menuBar.classList.toggle("fa-times");
  amenu.classList.toggle("active");
}

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
