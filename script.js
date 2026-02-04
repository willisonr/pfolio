/* ========================================
   PORTFOLIO SCRIPTS - CLEAN VERSION
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

});

/* ========================================
   VIDEO MODAL LOGIC (GLOBAL SCOPE)
   ======================================== */

function openVideo(videoSrc) {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('modalVideoPlayer');
    
    if (modal && player) {
        player.src = videoSrc;
        modal.style.display = 'flex';
        player.play();
        document.body.style.overflow = 'hidden'; // Stop background scroll
    }
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('modalVideoPlayer');
    
    if (modal && player) {
        modal.style.display = 'none';
        player.pause();
        player.src = "";
        document.body.style.overflow = 'auto'; // Enable background scroll
    }
}

// Close modal if user clicks the dark background area
window.addEventListener('click', function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
        closeVideo();
    }
});
