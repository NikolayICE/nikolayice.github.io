document.addEventListener('DOMContentLoaded', function () {
    const reveals = document.querySelectorAll('.reveal');
    const options = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
      });
    }, options);
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
  });
  