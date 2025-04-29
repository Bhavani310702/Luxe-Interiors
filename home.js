// Script to handle mobile menu overlay and close button
document.addEventListener('DOMContentLoaded', function() {
    const menuOverlay = document.getElementById('menuOverlay');
    const menuClose = document.getElementById('menuClose');
    const navbarCollapse = document.getElementById('navbarContent');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    // Show overlay when menu opens
    navbarToggler.addEventListener('click', function() {
        if (navbarCollapse.classList.contains('show')) {
            menuOverlay.classList.remove('show');
        } else {
            menuOverlay.classList.add('show');
        }
    });
    
    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', function() {
        navbarCollapse.classList.remove('show');
        menuOverlay.classList.remove('show');
    });
    
    // Close menu when clicking close button
    menuClose.addEventListener('click', function() {
        navbarCollapse.classList.remove('show');
        menuOverlay.classList.remove('show');
    });

    // Optional: Add logout functionality
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Add logout logic here
            console.log('User logged out');
            // Redirect to login page or show logout confirmation
        });
    }

    // Add explore button functionality
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            // Add navigation to collections page
            console.log('Navigating to collections');
            window.location.href = 'collections.html';
            // Alternatively, scroll to collections section if on same page
            // document.querySelector('#collections').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Optional: Add hover effect for hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        heroImage.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
});

// JavaScript for Products Grid functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if AOS is already loaded, otherwise load it
    if (typeof AOS === 'undefined') {
        // Create link for AOS CSS
        const aosCSS = document.createElement('link');
        aosCSS.rel = 'stylesheet';
        aosCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css';
        document.head.appendChild(aosCSS);
        
        // Create script for AOS JS
        const aosScript = document.createElement('script');
        aosScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js';
        aosScript.onload = initAOS;
        document.body.appendChild(aosScript);
    } else {
        initAOS();
    }
    
    // Initialize AOS
    function initAOS() {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
    
    // Add click event for all category boxes - FIXED: updated class names
    const categoryBoxes = document.querySelectorAll('.luxe-products-grid .luxe-box:not(.luxe-promo)');
    categoryBoxes.forEach(box => {
        box.addEventListener('click', function(e) {
            const categoryLabel = this.querySelector('.category-label');
            if (categoryLabel) {
                const category = categoryLabel.textContent.trim();
                console.log(`Clicked on category: ${category}`);
                // You can add category-specific navigation here
            }
        });
    });
    
    // Add click event for promo box button - FIXED: updated class names
    const promoBtn = document.querySelector('.luxe-products-grid .promo-btn');
    if (promoBtn) {
        promoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Promo button clicked');
            // Add navigation or action for promo button
            window.location.href = 'collections.html';
        });
    }
    
    // Optional: Add hover effect for images - FIXED: updated class names
    const boxImages = document.querySelectorAll('.luxe-products-grid .luxe-box img');
    boxImages.forEach(img => {
        img.addEventListener('load', function() {
            // Add a class to indicate image is loaded
            this.classList.add('loaded');
        });
    });
});