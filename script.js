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

  (function(){
    emailjs.init("EqQX2wXzJKLi7FbK9"); // Replace with your real public key
  })();

// EmailJS integration for contact form
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_1iof7pk', 'template_ap4s5ff', this)
      .then(function(response) {
        alert('✅ Message sent successfully!');
      }, function(error) {
        alert('❌ Failed to send message. Try again later.');
        console.error(error);
      });
  });
