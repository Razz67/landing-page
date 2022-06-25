// Navigation
const menu = document.getElementById("menu");
const sections = [...document.querySelectorAll(".section")];

const nav_menu_items = () => {
  let nav_container = "";

  sections.forEach((section) => {
    const sectionID = section.id;
    const sectionAtrribute = section.dataset.nav;
    nav_container += `<li> <a class="nav-btn" href="#${sectionID}">${sectionAtrribute}</a></li>`;
  });
  menu.innerHTML = nav_container;
};
nav_menu_items();

// Scroll To Top Button
var topBtn = document.getElementById("topBtn");
// Show button when user scrolls down 100px
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// Scroll to top when button clicked
function topFunction() {
  //
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
