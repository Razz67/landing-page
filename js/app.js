var topBtn = document.getElementById("topBtn");
// Show button when user scrolls down 100px
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 75 ||
    document.documentElement.scrollTop > 75) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// Scroll to top when button clicked
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
