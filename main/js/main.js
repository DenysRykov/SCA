// Mobile Navigation
let header = document.querySelector(".header");
const mobileNav = document.querySelector(".mobilenav");
const navMenu = document.querySelector(".navmenu");

mobileNav.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  setTimeout(() => {
    navMenu.classList.toggle("active");
  }, 100);
});

document.querySelectorAll(".navlink").forEach((n) =>
  n.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    setTimeout(() => {
      navMenu.classList.remove("active");
    }, 100);
  })
);
//...

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    // Calculate the offset to scroll the div into the middle
    const windowHeight = window.innerHeight;
    const targetRect = target.getBoundingClientRect();
    const targetHeight = targetRect.height;
    const offset = Math.max(
      0,
      targetRect.top +
        window.pageYOffset +
        targetHeight / 2 -
        windowHeight / 2 -
        -40
    );

    // Scroll to the modified position using smooth scrolling behavior
    window.scrollTo({
      top: offset,
      left: 0,
      behavior: "smooth",
    });
  });
});
//...

//Sticky header
function updateHeader() {
  if (window.pageYOffset > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function handleResize() {
  updateHeader();
}
window.addEventListener("scroll", updateHeader);
window.addEventListener("load", updateHeader);
window.addEventListener("resize", handleResize);
// ...
