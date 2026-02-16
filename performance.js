/**
 * PERFORMANCE MONITORING & OPTIMIZATION
 * Adaptive quality, FPS monitoring, and performance utilities
 */

class PerformanceOptimizer {
    constructor() {
        this.fps = 60;
        this.lastFrameTime = performance.now();
        this.frameCount = 0;
        this.fpsHistory = [];
        this.isLowPerformance = false;

        this.init();
    }

    init() {
        this.monitorFPS();
        this.optimizeForDevice();
        this.setupReducedMotion();
        this.debounceScrollListeners();
        this.lazyLoadAnimations();
    }

    // Monitor FPS
    monitorFPS() {
        const checkFPS = (currentTime) => {
            this.frameCount++;
            const elapsed = currentTime - this.lastFrameTime;

            if (elapsed >= 1000) {
                this.fps = Math.round((this.frameCount * 1000) / elapsed);
                this.fpsHistory.push(this.fps);

                if (this.fpsHistory.length > 10) {
                    this.fpsHistory.shift();
                }

                const avgFPS = this.fpsHistory.reduce((a, b) => a + b, 0) / this.fpsHistory.length;

                // If average FPS drops below 45, reduce quality
                if (avgFPS < 45 && !this.isLowPerformance) {
                    this.reducedQuality();
                }

                this.frameCount = 0;
                this.lastFrameTime = currentTime;
            }

            requestAnimationFrame(checkFPS);
        };

        requestAnimationFrame(checkFPS);
    }

    // Reduce quality for low performance
    reducedQuality() {
        this.isLowPerformance = true;
        console.log('Performance optimization: Reducing visual quality');

        // Reduce particle count
        const canvas = document.getElementById('particles-canvas');
        if (canvas) {
            canvas.style.opacity = '0.2';
        }

        // Disable some animations
        document.body.classList.add('reduced-quality');

        // Add CSS to disable heavy effects
        const style = document.createElement('style');
        style.textContent = `
      .reduced-quality .gradient-mesh,
      .reduced-quality .spotlight,
      .reduced-quality .shimmer::before {
        display: none !important;
      }
      .reduced-quality .hardware-accelerated {
        animation-duration: 0.5s !important;
      }
    `;
        document.head.appendChild(style);
    }

    // Optimize based on device
    optimizeForDevice() {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const isTablet = /iPad|Android/i.test(navigator.userAgent) && window.innerWidth > 768;

        if (isMobile && !isTablet) {
            document.body.classList.add('mobile-device');

            // Reduce particles on mobile
            const canvas = document.getElementById('particles-canvas');
            if (canvas) {
                canvas.style.opacity = '0.15';
            }

            // Disable custom cursor on mobile
            const cursor = document.querySelector('.custom-cursor');
            const follower = document.querySelector('.custom-cursor-follower');
            if (cursor) cursor.remove();
            if (follower) follower.remove();
        }

        // Check for low-end device
        const memory = navigator.deviceMemory;
        const cores = navigator.hardwareConcurrency;

        if ((memory && memory < 4) || (cores && cores < 4)) {
            this.reducedQuality();
        }
    }

    // Setup reduced motion preference
    setupReducedMotion() {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        const handleReducedMotion = (e) => {
            if (e.matches) {
                document.body.classList.add('reduced-motion');

                // Hide particle canvas
                const canvas = document.getElementById('particles-canvas');
                if (canvas) canvas.style.display = 'none';

                // Hide gradient mesh
                const mesh = document.querySelector('.gradient-mesh');
                if (mesh) mesh.style.display = 'none';
            }
        };

        handleReducedMotion(mediaQuery);
        mediaQuery.addEventListener('change', handleReducedMotion);
    }

    // Debounce scroll listeners
    debounceScrollListeners() {
        let scrollTimeout;
        let lastScrollY = window.pageYOffset;

        window.addEventListener('scroll', () => {
            if (scrollTimeout) clearTimeout(scrollTimeout);

            scrollTimeout = setTimeout(() => {
                const currentScrollY = window.pageYOffset;

                // Only trigger if scroll changed significantly
                if (Math.abs(currentScrollY - lastScrollY) > 10) {
                    lastScrollY = currentScrollY;

                    // Dispatch custom event for optimized scroll handling
                    window.dispatchEvent(new CustomEvent('optimizedScroll', {
                        detail: { scrollY: currentScrollY }
                    }));
                }
            }, 50);
        });
    }

    // Lazy load animations
    lazyLoadAnimations() {
        const animatedElements = document.querySelectorAll('[data-animate]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animation = entry.target.getAttribute('data-animate');
                    entry.target.style.animation = animation;
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px'
        });

        animatedElements.forEach(el => observer.observe(el));
    }

    // Utility: Throttle function
    static throttle(func, delay) {
        let lastCall = 0;
        return function (...args) {
            const now = Date.now();
            if (now - lastCall >= delay) {
                lastCall = now;
                return func(...args);
            }
        };
    }

    // Utility: Debounce function
    static debounce(func, delay) {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // Utility: Request idle callback fallback
    static requestIdleCallback(callback) {
        if ('requestIdleCallback' in window) {
            return window.requestIdleCallback(callback);
        } else {
            return setTimeout(callback, 1);
        }
    }
}

// Initialize performance optimizer
document.addEventListener('DOMContentLoaded', () => {
    new PerformanceOptimizer();
});

// Export utilities
window.PerformanceUtils = {
    throttle: PerformanceOptimizer.throttle,
    debounce: PerformanceOptimizer.debounce,
    requestIdleCallback: PerformanceOptimizer.requestIdleCallback
};
