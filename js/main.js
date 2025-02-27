document.addEventListener('DOMContentLoaded', function () {
    const reveals = document.querySelectorAll('.reveal');
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.tagName === 'H2') {
                    entry.target.classList.add('revealed');
                }
            } else {
                entry.target.classList.remove('active');
                if (entry.target.tagName === 'H2') {
                    entry.target.classList.remove('revealed');
                }
            }
        });
    }, options);
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});
