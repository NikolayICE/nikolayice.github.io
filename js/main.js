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

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list li a');
    const navObserverOptions = { rootMargin: '-50% 0px -50% 0px' };
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const navLink = document.querySelector(`.nav-list li a[href="#${id}"]`);
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }, navObserverOptions);
    sections.forEach(section => {
        navObserver.observe(section);
    });
});
