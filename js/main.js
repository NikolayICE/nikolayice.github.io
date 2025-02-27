document.addEventListener('DOMContentLoaded', function () {
    const reveals = document.querySelectorAll('.reveal');
  
    const options = {
      threshold: 0.2
    };
  
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); 
        }
      });
    }, options);
  
    reveals.forEach(reveal => {
      revealOnScroll.observe(reveal);
    });
  });
  