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

    // Optional: Add explore button functionality
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            // Add navigation to collections page
            console.log('Navigating to collections');
            // window.location.href = 'collections.html';
        });
    }
});