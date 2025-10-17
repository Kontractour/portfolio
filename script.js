// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("active");
});

// ===== ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

// ===== STICKY HEADER =====
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// ===== DARK / LIGHT THEME TOGGLE =====
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
} else {
  themeToggle.innerHTML = `<i class="fas fa-moon"></i>`;
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.innerHTML = `<i class="fas fa-moon"></i>`;
    localStorage.setItem("theme", "light");
  }
});

// ===== DROP ANIMATION ON PAGE LOAD =====
window.addEventListener("load", () => {
  const drops = document.querySelectorAll(".drop");
  drops.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
    el.classList.add("animate-drop");
  });
});
// ===== SMOOTH SCROLLING =====
const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });

            // Close mobile menu after clicking
      if (navLinks && navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
        if (menuToggle) menuToggle.classList.remove("active");
      }
        }
    });
});
