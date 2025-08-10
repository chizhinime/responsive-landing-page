// Mobile Navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('active');
    
    // Burger Animation
    burger.classList.toggle('active');
    
    // Disable scroll when mobile menu is open
    document.body.classList.toggle('no-scroll');
});

// Close mobile menu when clicking on a nav item
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
        
        // Smooth scroll to target
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky Navigation on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .project-card, .testimonial-card, .about-content, .about-image');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.service-card, .project-card, .testimonial-card, .about-content, .about-image');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger animation for elements already in view
    setTimeout(animateOnScroll, 100);
});

// Run animation check on scroll
window.addEventListener('scroll', animateOnScroll);

// Contact buttons functionality
const contactButtons = document.querySelectorAll('.cta-button, .secondary-button');
contactButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent.includes('Call')) {
            // In a real implementation, this would initiate a phone call
            console.log('Initiating call to +234 812 345 6789');
        } else if (button.textContent.includes('Email')) {
            // In a real implementation, this would open email client
            window.location.href = 'mailto:hello@afritech.ng';
        } else if (button.textContent.includes('Watch Video')) {
            // In a real implementation, this would open a video modal
            console.log('Opening company video');
        }
    });
});

// Add this to your CSS for the no-scroll class
/*
.no-scroll {
    overflow: hidden;
}
*/