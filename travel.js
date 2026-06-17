// menu responsive
let menuBar = document.querySelector("#menu-bar");
let amenu = document.querySelector(".navbar");
function showmenu() {
  menuBar.classList.toggle("fa-times");
  amenu.classList.toggle("active");
}
// slider js aniation
var Swiper = new Swiper(".container", {
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
// message
var form = document.getElementById("form");
var username = document.getElementById("name");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");
var phone = document.getElementById("phone");
var submitted = document.getElementById("submitted");
const vide = "";

form.addEventListener("submit", (e) => {
  submitted.style.right = "0px";

  e.preventDefault();
});

function closesubmitted() {
  submitted.style.right = "-250px";
  username.value = vide;
  email.value = vide;
  phone.value = vide;
  subject.value = vide;
  message.value = vide;
}
