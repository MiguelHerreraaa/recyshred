// RecyShred script.js
// Global interactivity + bin status animations + alerts

// Mobile Nav Toggle (for future hamburger menu)
function toggleNav() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
}

// Notification Popup
function notify(message) {
  const box = document.createElement("div");
  box.className = "notif";
  box.innerText = message;
  document.body.appendChild(box);

  setTimeout(() => {
    box.style.opacity = "0";
    setTimeout(() => box.remove(), 500);
  }, 2500);
}

// Simulated Bin Alert Example
function checkBins() {
  const fullness = 87; // Replace later with PHP/MySQL values

  if (fullness > 80) {
    notify("⚠️ Bin 2 is almost full! Please schedule collection.");
  }
}

// Animate progress bars on Bin Status page
function animateProgressBars() {
  const bars = document.querySelectorAll(".progress-fill");

  bars.forEach(bar => {
    const value = bar.getAttribute("data-fill");

    // Animate width
    setTimeout(() => {
      bar.style.width = value + "%";
    }, 300);
  });
}

// Run only on binstatus page
if (window.location.pathname.includes("binstatus")) {

  // Smooth animated bars
  animateProgressBars();

  // Show bin alert
  setTimeout(checkBins, 1200);
}

// Smooth Fade-in Effect for all pages
window.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "1s";
    document.body.style.opacity = 1;
  }, 50);
});
