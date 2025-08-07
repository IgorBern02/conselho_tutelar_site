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
