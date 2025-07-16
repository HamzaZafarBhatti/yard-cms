// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// FAQ toggle functionality
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const faqContent = button.nextElementSibling;
        const icon = button.querySelector('i');

        // Toggle content visibility
        faqContent.classList.toggle('hidden');

        // Rotate icon
        if (faqContent.classList.contains('hidden')) {
            icon.style.transform = 'rotate(0deg)';
        } else {
            icon.style.transform = 'rotate(180deg)';
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Form submission (example)
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Here you would typically send the form data to your server
        // For demo purposes, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Hero Slider Functionality
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.hero-slide');
        this.dots = document.querySelectorAll('.slider-dot');
        this.prevBtn = document.querySelector('.slider-prev');
        this.nextBtn = document.querySelector('.slider-next');
        this.currentIndex = 0;
        this.autoSlideInterval = null;

        this.init();
    }

    init() {
        // Show first slide
        this.showSlide(this.currentIndex);

        // Set up event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        this.dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                this.showSlide(parseInt(e.target.dataset.slide));
            });
        });

        // Start auto slide
        this.startAutoSlide();

        // Pause on hover
        const slider = document.querySelector('.hero-slider');
        slider.addEventListener('mouseenter', () => this.stopAutoSlide());
        slider.addEventListener('mouseleave', () => this.startAutoSlide());
    }

    showSlide(index) {
        // Update current index
        this.currentIndex = index;

        // Hide all slides
        this.slides.forEach(slide => slide.classList.remove('active'));

        // Show current slide
        this.slides[index].classList.add('active');

        // Update dots
        this.dots.forEach(dot => dot.classList.remove('opacity-100'));
        this.dots[index].classList.add('opacity-100');
    }

    nextSlide() {
        let newIndex = this.currentIndex + 1;
        if (newIndex >= this.slides.length) newIndex = 0;
        this.showSlide(newIndex);
    }

    prevSlide() {
        let newIndex = this.currentIndex - 1;
        if (newIndex < 0) newIndex = this.slides.length - 1;
        this.showSlide(newIndex);
    }

    startAutoSlide() {
        this.stopAutoSlide();
        this.autoSlideInterval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new HeroSlider();
});

// Scroll animation trigger
function checkScroll() {
    const elements = document.querySelectorAll('.animate-fadeIn');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Run once on page load
window.addEventListener('load', checkScroll);

// Run on scroll
window.addEventListener('scroll', checkScroll);