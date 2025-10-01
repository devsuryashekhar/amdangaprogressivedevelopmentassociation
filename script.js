// NAVBAR BURGER
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksList = document.querySelectorAll('.nav-links li a'); // Select all links

const toggleMenu = () => {
  burger.classList.toggle('active');
  navLinks.classList.toggle('show');
};

burger.addEventListener('click', toggleMenu);

// NEW: Close menu when a link is clicked (improved mobile UX)
navLinksList.forEach(link => {
  link.addEventListener('click', () => {
    // Check if the menu is open before closing
    if (navLinks.classList.contains('show')) {
      toggleMenu(); 
    }
  });
});

// SECTION REVEAL
const sections = document.querySelectorAll("section");
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) section.classList.add("visible");
  });
};
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// CONTACT FORM
function sendMessage(e) {
  e.preventDefault();
  alert("✅ Thank you! Your message has been sent.");
  document.querySelector('.contact-form').reset();
}

// TEAM SLIDER LOGIC
const slider = document.querySelector('.member-slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const members = document.querySelectorAll('.member');
let index = 0;

function showSlide(i){
  const total = members.length;
  if(i < 0) index = total - 1;
  else if(i >= total) index = 0;
  else index = i;
  slider.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));
setInterval(() => showSlide(index + 1), 4000);
showSlide(index);