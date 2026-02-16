// ========================================
// ANIMATED SVG SHAPES SYSTEM
// Dynamic geometric shapes with interaction
// ========================================

class AnimatedShapes {
    constructor() {
        this.shapes = [];
        this.colors = [
            '#0066FF',  // Electric Blue
            '#00E5FF',  // Cyan
            '#FF00FF',  // Magenta
            '#00FF88',  // Green
            '#FFD700'   // Gold
        ];
        this.container = null;
        this.mouse = { x: 0, y: 0 };
        this.init();
    }

    init() {
        this.createContainer();
        this.createShapes(12); // Create 12 animated shapes
        this.addEventListeners();
        this.animate();
    }

    createContainer() {
        this.container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.container.setAttribute('id', 'animated-shapes');
        this.container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            opacity: 0.3;
        `;
        document.body.insertBefore(this.container, document.body.firstChild);
    }

    createShapes(count) {
        for (let i = 0; i < count; i++) {
            const shape = {
                element: null,
                type: ['circle', 'rect', 'polygon'][Math.floor(Math.random() * 3)],
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: 30 + Math.random() * 80,
                color: this.colors[Math.floor(Math.random() * this.colors.length)],
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 2,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                scale: 1,
                targetScale: 1
            };

            shape.element = this.createShapeElement(shape);
            this.container.appendChild(shape.element);
            this.shapes.push(shape);
        }
    }

    createShapeElement(shape) {
        let element;

        if (shape.type === 'circle') {
            element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            element.setAttribute('r', shape.size / 2);
        } else if (shape.type === 'rect') {
            element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            element.setAttribute('width', shape.size);
            element.setAttribute('height', shape.size);
        } else if (shape.type === 'polygon') {
            element = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            const points = this.createPolygonPoints(shape.size / 2, 6);
            element.setAttribute('points', points);
        }

        element.setAttribute('fill', 'none');
        element.setAttribute('stroke', shape.color);
        element.setAttribute('stroke-width', '2');
        element.style.filter = `drop-shadow(0 0 10px ${shape.color})`;
        element.style.transition = 'transform 0.3s ease';

        return element;
    }

    createPolygonPoints(radius, sides) {
        const points = [];
        for (let i = 0; i < sides; i++) {
            const angle = (i / sides) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            points.push(`${x},${y}`);
        }
        return points.join(' ');
    }

    addEventListeners() {
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener('resize', () => {
            // Keep shapes within bounds on resize
            this.shapes.forEach(shape => {
                shape.x = Math.min(shape.x, window.innerWidth);
                shape.y = Math.min(shape.y, window.innerHeight);
            });
        });
    }

    updateShape(shape) {
        // Mouse interaction - repel shapes
        const dx = shape.x - this.mouse.x;
        const dy = shape.y - this.mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = 200;

        if (distance < minDistance) {
            const force = (minDistance - distance) / minDistance;
            shape.vx += (dx / distance) * force * 0.5;
            shape.vy += (dy / distance) * force * 0.5;
            shape.targetScale = 1.3;
        } else {
            shape.targetScale = 1;
        }

        // Apply velocity
        shape.x += shape.vx;
        shape.y += shape.vy;

        // Damping
        shape.vx *= 0.98;
        shape.vy *= 0.98;

        // Rotation
        shape.rotation += shape.rotationSpeed;

        // Scale animation
        shape.scale += (shape.targetScale - shape.scale) * 0.1;

        // Boundary bounce
        if (shape.x < 0 || shape.x > window.innerWidth) {
            shape.vx *= -1;
            shape.x = Math.max(0, Math.min(window.innerWidth, shape.x));
        }
        if (shape.y < 0 || shape.y > window.innerHeight) {
            shape.vy *= -1;
            shape.y = Math.max(0, Math.min(window.innerHeight, shape.y));
        }

        // Update DOM
        let transform = `translate(${shape.x}, ${shape.y}) rotate(${shape.rotation}) scale(${shape.scale})`;
        if (shape.type === 'rect') {
            transform += ` translate(${-shape.size / 2}, ${-shape.size / 2})`;
        }
        shape.element.setAttribute('transform', transform);
    }

    animate() {
        this.shapes.forEach(shape => this.updateShape(shape));
        requestAnimationFrame(() => this.animate());
    }

    // Performance optimization
    destroy() {
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
        this.shapes = [];
    }
}

// Initialize on load
if ('requestAnimationFrame' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.addEventListener('DOMContentLoaded', () => {
        // Check performance before initializing
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (!isMobile || window.innerWidth > 768) {
            new AnimatedShapes();
        }
    });
}
