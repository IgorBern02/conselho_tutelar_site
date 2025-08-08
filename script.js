document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Formutário de denúncia
document.querySelector("form").addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  alert("Denúncia registrada. Obrigado.");
  event.target.reset();
}

// Cards de perguntas frequentes
document.querySelectorAll(".faq-item").forEach((item) => {
  const icon = item.querySelector(".material-symbols-outlined");
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      icon.textContent = "arrow_upward";
    } else {
      icon.textContent = "arrow_downward";
    }
  });
});

// Scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector("nav ul");
mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
