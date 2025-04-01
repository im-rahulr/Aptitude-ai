document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('#mobileNav');
    
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = mobileNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }

    // Navigation scroll effect
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(8, 8, 8, 0.95)';
        } else {
            header.style.backgroundColor = 'rgba(8, 8, 8, 0.8)';
        }
    });

    // FAQ Accordion (if needed)
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const title = item.querySelector('h3');
        const content = item.querySelector('p');

        // Keep content visible by default, but add toggle functionality if needed
        title.addEventListener('click', () => {
            // Uncomment for accordion behavior
            // content.classList.toggle('active');
        });
    });

    // Points counter animation
    const pointsCounter = document.querySelector('.points-counter');

    if (pointsCounter) {
        animateValue(pointsCounter, 0, 0, 1500); // Currently set to 0

        // For demo purposes: Increment counter when signup button is clicked
        const signupBtn = document.querySelector('.signup-btn');
        let currentPoints = 0;

        if (signupBtn) {
            signupBtn.addEventListener('click', () => {
                currentPoints += 50;
                animateValue(pointsCounter, parseInt(pointsCounter.textContent), currentPoints, 500);
            });
        }
    }

    // Animation for counting
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
