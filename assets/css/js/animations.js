// === ANIMACIÓN SCROLL ===
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// === FONDO ANIMADO TIPO PARTÍCULAS ===
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -1;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: Math.random() * 0.5,
    dy: Math.random() * 0.5
}));

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56,189,248,0.6)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x > canvas.width || p.y > canvas.height) {
            p.x = Math.random() * canvas.width;
            p.y = Math.random() * canvas.height;
        }
    });

    requestAnimationFrame(animateParticles);
}
animateParticles();

// === MODO CLARO / OSCURO ===
const toggle = document.getElementById("theme-toggle");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("light");
    });
}
// === BARRAS DE HABILIDADES ===
const skills = document.querySelectorAll(".progress");

const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.width;
        }
    });
});

skills.forEach(skill => skillObserver.observe(skill));

// === CONTADORES ===
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    let target = +counter.dataset.target;
    let count = 0;

    let interval = setInterval(() => {
        count++;
        counter.innerText = count;
        if (count === target) clearInterval(interval);
    }, 20);
});
