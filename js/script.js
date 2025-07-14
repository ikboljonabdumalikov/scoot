// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggler = document.querySelector('.site-header__menu-toggler');
  const siteHeader = document.querySelector('.site-header');
  
  if (menuToggler && siteHeader) {
    menuToggler.addEventListener('click', function() {
      siteHeader.classList.toggle('site-header--open');
    });
    
    // Close menu when clicking outside of it
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = siteHeader.contains(event.target);
      const isMenuOpen = siteHeader.classList.contains('site-header--open');
      
      if (!isClickInsideMenu && isMenuOpen) {
        siteHeader.classList.remove('site-header--open');
      }
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && siteHeader.classList.contains('site-header--open')) {
        siteHeader.classList.remove('site-header--open');
      }
    });
  }
});