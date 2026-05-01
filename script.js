// ===============================
// NAVBAR SHRINK ON SCROLL
// ===============================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.style.padding = "10px 40px";
    navbar.style.background = "rgba(0,0,0,0.85)";
  } else {
    navbar.style.padding = "18px 60px";
    navbar.style.background = "rgba(0,0,0,0.4)";
  }
});

// ===============================
// BOOKING MODAL
// ===============================

// modal yaratamiz
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2>Rezervatsiya qilish</h2>

    <form id="bookingForm">
      <input type="text" placeholder="Ismingiz" required />
      <input type="email" placeholder="Email" required />
      <input type="date" required />
      <button type="submit">Tasdiqlash</button>
    </form>
  </div>
`;

document.body.appendChild(modal);

// modal style JS orqali (tezkor)
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.background = "rgba(0,0,0,0.7)";
modal.style.justifyContent = "center";
modal.style.alignItems = "center";

// open modal
document.querySelectorAll(".book-btn, .hero-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

// close modal
modal.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
});

// outside click close
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// form submit
document.addEventListener("submit", (e) => {
  if (e.target.id === "bookingForm") {
    e.preventDefault();
    alert("Rezervatsiya qabul qilindi!");
    modal.style.display = "none";
  }
});

// ===============================
// FADE-IN ON SCROLL (AOS STYLE)
// ===============================
const sections = document.querySelectorAll(".section, .room-card, .service, .review");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(40px)";
  sec.style.transition = "0.8s ease";
  observer.observe(sec);
});

// ===============================
// MOBILE HAMBURGER MENU
// ===============================
const menu = document.querySelector(".menu");

const hamburger = document.createElement("div");
hamburger.innerHTML = "☰";
hamburger.classList.add("hamburger");

navbar.appendChild(hamburger);

// style hamburger
hamburger.style.fontSize = "28px";
hamburger.style.cursor = "pointer";
hamburger.style.display = "none";
hamburger.style.color = "#fbbf24";

// responsive show/hide
function checkWidth() {
  if (window.innerWidth <= 768) {
    hamburger.style.display = "block";
    menu.style.display = "none";
  } else {
    hamburger.style.display = "none";
    menu.style.display = "block";
  }
}

checkWidth();
window.addEventListener("resize", checkWidth);

// toggle menu
hamburger.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.background = "#0f172a";
    menu.style.position = "absolute";
    menu.style.top = "70px";
    menu.style.right = "20px";
    menu.style.padding = "20px";
  } else {
    menu.style.display = "none";
  }
});