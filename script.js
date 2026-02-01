/* ========================================
   PORTFOLIO SCRIPTS
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // ========================================
  // AUTO YEAR UPDATE
  // Automatically updates the copyright year
  // ========================================
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ========================================
  // SMOOTH SCROLL
  // Enables smooth scrolling for anchor links
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just a hash or empty
      if (href === '#' || href === '') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ========================================
  // SCROLL REVEAL ANIMATION
  // Fades in elements as they enter viewport
  // ========================================
  const revealElements = document.querySelectorAll('.project-card, .social-item');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Set initial state and observe
  revealElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    revealObserver.observe(el);
  });

  // ========================================
  // NAVBAR SCROLL EFFECT
  // Adds shadow to navbar on scroll
  // ========================================
  const nav = document.querySelector('.nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    } else {
      nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });

  // ========================================
  // PROJECT CARD HOVER EFFECT
  // Adds subtle lift effect on hover
  // ========================================
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  // ========================================
  // COMING SOON ALERT
  // Shows alert for projects marked "Coming Soon"
  // ========================================
  const comingSoonCards = document.querySelectorAll('.project-card:has(.project-badge)');
  
  comingSoonCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const projectName = card.querySelector('.project-name').textContent;
      alert(`${projectName} - Coming Soon!`);
    });
  });

  // ========================================
  // CONSOLE GREETING
  // Friendly message in browser console
  // ========================================
  console.log('%c 🎨 Welcome to My Portfolio ', 'background: #C4A77D; color: #1A1A1A; font-size: 16px; font-weight: bold; padding: 10px; border-radius: 4px;');
  console.log('%c Designed with love by Willison Roces ', 'color: #666; font-size: 12px;');

});
