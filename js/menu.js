document.addEventListener("DOMContentLoaded", () => {
const btn = document.getElementById("hamburgerBtn");
const menu = document.getElementById("sideMenu");
const links = menu.querySelectorAll("a");

btn.addEventListener("click", () => {
// Toggle menú y botón 
menu.classList.toggle("open");
btn.style.display = menu.classList.contains("open") ? "none" : "block";
});

// Cerrar menú al hacer clic en cualquier enlace
links.forEach(link => {
link.addEventListener("click", () => {
menu.classList.remove("open");
btn.style.display = "block";
});
});
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const totalSlides = carousel.children.length;
  let index = 0;

  function autoSlide() {
    index = (index + 1) % totalSlides;
    carousel.style.transform = `translateY(-${index * 100}vw)`;
  }

  setInterval(autoSlide, 4000); // Cada 4 segundos
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));