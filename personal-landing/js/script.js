// Smooth Section Reveal on Scroll
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

// Active Navigation Highlight
const navLinks = document.querySelectorAll("nav a");
document.getElementById("nameClick").addEventListener("click", fireConfetti);

function setActiveLink() {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 80) current = section.getAttribute("id");
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
}

// Update active link on scroll
window.addEventListener("scroll", setActiveLink);

// Update active link on click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Welcome Alert on Header Click 
document.querySelector("h1").addEventListener("click", () => {
  alert("Welcome to Yohana's Portfolio!");
});

// Conffeti function
function fireConfetti() {
    const duration = 1200;
    const end = Date.now() + duration;

    (function frame() {
        for (let i = 0; i < 40; i++) {
            createSingleConfetti();
        }

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function fireConfettiSoft() {
    let count = 0;
    const total = 35; 

    const interval = setInterval(() => {
        createSoftConfetti();
        count++;

        if (count >= total) clearInterval(interval);
    }, 100); 
}

function createSoftConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-soft");

    // random position
    confetti.style.left = Math.random() * window.innerWidth + "px";

    // colour
    const colors = ["#ffd6e0", "#f7c8c8", "#ffe5d9", "#e8f3d6", "#e7d8ff"];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // sizes
    const size = Math.random() * 5 + 4;
    confetti.style.width = size + "px";
    confetti.style.height = size * 1.4 + "px";

    // animated
    confetti.style.animationDuration = 2 + Math.random() * 1 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
}

// Listener to my name
document.getElementById("nameClick").addEventListener("click", fireConfettiSoft);


