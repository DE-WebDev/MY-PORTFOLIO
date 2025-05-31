const openBtn = document.getElementById("open-menu");
const closeBtn = document.getElementById("close-menu");
const navMenu = document.getElementById("nav-menu");

openBtn.onclick = () => {
  navMenu.style.top = "0"; // Slides down
};

closeBtn.onclick = () => {
  navMenu.style.top = "-100%"; // Slides up
};
// Close menu when a link is clicked
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {
  link.onclick = () => {
    navMenu.style.top = "-100%";
  };
});
