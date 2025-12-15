// ===== CONFIGURATION ===== //
const typingPhrases = [
    "Ingeniería • Ciencia de Datos • Desarrollo Digital",
    "Transformando datos en decisiones inteligentes",
    "Creando soluciones con Python y JavaScript",
    "Automatización • Análisis • Innovación"
];

let typingPhraseIndex = 0;
let typingCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

// ===== INITIALIZATION ===== //
document.addEventListener('DOMContentLoaded', function () {
    hideLoadingScreen();
    initializeTypingAnimation();
    initializeScrollProgress();
    initializeCustomCursor();
    initializeAnimations();
    initializeThemeToggle();
    initializeSkillBars();
    initializeCounters();
    initializeContactForm();
    initializeSmoothScroll();
    initializeBackToTop();
    initializeCurrentYear();
});

// ===== LOADING SCREEN ===== //
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1500); // Show loading for 1.5 seconds
    }
}

// ===== TYPING ANIMATION ===== //
function initializeTypingAnimation() {
    const typedTextElement = document.getElementById('typed-text');
    if (!typedTextElement) return;

    function type() {
        const currentPhrase = typingPhrases[typingPhraseIndex];

        if (isDeleting) {
            typedTextElement.textContent = currentPhrase.substring(0, typingCharIndex - 1);
            typingCharIndex--;
            typingSpeed = 50;
        } else {
            typedTextElement.textContent = currentPhrase.substring(0, typingCharIndex + 1);
            typingCharIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && typingCharIndex === currentPhrase.length) {
            // Pause at end of phrase
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && typingCharIndex === 0) {
            isDeleting = false;
            typingPhraseIndex = (typingPhraseIndex + 1) % typingPhrases.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// ===== SCROLL PROGRESS BAR ===== //
function initializeScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ===== CUSTOM CURSOR ===== //
function initializeCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (!cursorDot || !cursorOutline) return;
    if (window.innerWidth <= 768) return; // Skip on mobile

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    // Smooth follow for outline
    function animateOutline() {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        cursorOutline.style.left = outlineX + 'px';
        cursorOutline.style.top = outlineY + 'px';

        requestAnimationFrame(animateOutline);
    }
    animateOutline();

    // Expand cursor on clickable elements
    const clickables = document.querySelectorAll('a, button, input, textarea, .card');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'scale(1.5)';
            cursorDot.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'scale(1)';
            cursorDot.style.transform = 'scale(1)';
        });
    });
}

// ===== CARD ANIMATIONS ===== //
function initializeAnimations() {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 100); // Stagger animation
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    // Add 3D tilt effect to cards
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ===== PARTICLE BACKGROUND ===== //
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.zIndex = -1;
canvas.style.pointerEvents = "none";

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particleCount = window.innerWidth <= 768 ? 30 : 60;
let particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3
}));

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(56,189,248,0.4)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(56,189,248,0.5)";
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        // Wrap around edges
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
    });

    requestAnimationFrame(animateParticles);
}
animateParticles();

// ===== THEME TOGGLE ===== //
function initializeThemeToggle() {
    const toggle = document.getElementById("theme-toggle");

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light');
    }

    if (toggle) {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("light");

            // Save preference
            if (document.body.classList.contains('light')) {
                localStorage.setItem('theme', 'light');
                toggle.innerHTML = '🌙 Modo';
            } else {
                localStorage.setItem('theme', 'dark');
                toggle.innerHTML = '🌓 Modo';
            }

            // Animation
            toggle.style.transform = 'scale(0.9) rotate(180deg)';
            setTimeout(() => {
                toggle.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });

        // Set initial text
        if (document.body.classList.contains('light')) {
            toggle.innerHTML = '🌙 Modo';
        }
    }
}

// ===== SKILL BARS ===== //
function initializeSkillBars() {
    const skills = document.querySelectorAll(".progress");

    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.width = entry.target.dataset.width;
                }, 200);
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skills.forEach(skill => skillObserver.observe(skill));
}

// ===== ANIMATED COUNTERS ===== //
function initializeCounters() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;
        const increment = target / 50;

        const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };

        const counterObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counterObserver.observe(counter);
    });
}

// ===== CONTACT FORM ===== //
function initializeContactForm() {
    const form = document.getElementById('contact-form');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('contact-name');
        const email = document.getElementById('contact-email');
        const message = document.getElementById('contact-message');
        const submitBtn = document.getElementById('contact-submit');

        // Validation
        if (!name.value.trim()) {
            showFormMessage('Por favor ingresa tu nombre', 'error');
            name.focus();
            return;
        }

        if (!email.value.trim() || !isValidEmail(email.value)) {
            showFormMessage('Por favor ingresa un correo válido', 'error');
            email.focus();
            return;
        }

        if (!message.value.trim()) {
            showFormMessage('Por favor ingresa un mensaje', 'error');
            message.focus();
            return;
        }

        // Simulate sending
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        setTimeout(() => {
            showFormMessage('¡Mensaje enviado con éxito! Te contactaré pronto. 🚀', 'success');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar';
        }, 1500);
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showFormMessage(message, type) {
    const existingMsg = document.querySelector('.form-message');
    if (existingMsg) existingMsg.remove();

    const msgDiv = document.createElement('div');
    msgDiv.className = `form-message ${type}`;
    msgDiv.textContent = message;
    msgDiv.style.cssText = `
        margin-top: 15px;
        padding: 12px 20px;
        border-radius: 8px;
        text-align: center;
        font-weight: 600;
        animation: slideDown 0.3s ease;
        ${type === 'success' ?
            'background: linear-gradient(135deg, #22c55e, #16a34a); color: white;' :
            'background: linear-gradient(135deg, #ef4444, #dc2626); color: white;'}
    `;

    const form = document.getElementById('contact-form');
    form.appendChild(msgDiv);

    setTimeout(() => {
        msgDiv.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => msgDiv.remove(), 300);
    }, 4000);
}

// ===== SMOOTH SCROLL ===== //
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== BACK TO TOP BUTTON ===== //
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== AUTO UPDATE YEAR ===== //
function initializeCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ===== PARALLAX EFFECT ===== //
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const header = document.querySelector('header');
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== ADDITIONAL ANIMATIONS CSS ===== //
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// ===== PAGE LOAD FADE IN ===== //
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    });
});

// ===== RIPPLE EFFECT ON BUTTONS ===== //
document.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

console.log('🚀 Premium Portfolio StDiego initialized successfully! ✨');
console.log('💎 Features: Typing Animation, Custom Cursor, 3D Cards, Scroll Progress, and more!');
