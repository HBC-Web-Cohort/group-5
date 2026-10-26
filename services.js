const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
menuToggle.addEventListener("click", () => {
const opened = navLinks.classList.toggle("show");
menuToggle.setAttribute("aria-expanded", String(opened));
menuToggle.textContent = opened ? "×" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
link.addEventListener("click", () => {
navLinks.classList.remove("show");
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.textContent = "☰";
});
});
}

const year = document.getElementById("currentYear");
if (year) year.textContent = new Date().getFullYear();