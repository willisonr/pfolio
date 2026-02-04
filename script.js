/* ========================================
   PORTFOLIO SCRIPTS - FULL UPDATE
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. AUTO YEAR UPDATE
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
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

  // 3. SCROLL REVEAL ANIMATION
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

  revealElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    revealObserver.observe(el);
  });

  // 4. NAVBAR SCROLL EFFECT
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) {
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
      } else {
        nav.style.boxShadow = 'none';
      }
    });
  }

  // 5. PROJECT CARD HOVER EFFECT
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px)';
      card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  console.log('%c 🎨 Portfolio Loaded ', 'background: #111; color: #fff; padding: 5px;');
});

/* ========================================
   VIDEO MODAL LOGIC (GLOBAL SCOPE)
   ======================================== */

// This must stay OUTSIDE the DOMContentLoaded block 
// so the HTML 'onclick' can find it.

function openVideo(videoSrc) {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('modalVideoPlayer');
    
    if (modal && player) {
        player.src = videoSrc;
        modal.style.display = 'flex';
        player.play();
        // Prevent background scrolling
        document.body.style.overflow = 'hidden';
    }
}

function closeVideo()
