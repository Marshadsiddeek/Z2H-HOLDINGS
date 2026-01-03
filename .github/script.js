document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 2. Intersection Observer for Scroll Animations
    // This triggers the 'visible' class when elements come into view
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once loaded
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all cards to animate them
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        // Add a slight stagger effect based on index
        card.style.transitionDelay = `${index * 100}ms`;
        card.classList.add('hidden-scroll'); // Add initial hidden state via JS
        observer.observe(card);
    });
});

/* Note: You need to add these utility classes to your CSS file if you want the JS animation to work. 
   I have appended the necessary CSS below for you to add to the bottom of style.css */