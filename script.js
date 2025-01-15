document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.sliding-text');
    textElement.classList.add('slide-in');
});

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
