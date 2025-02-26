document.addEventListener("DOMContentLoaded", function() {
    function revealOnScroll() {
        let sections = document.querySelectorAll(".hidden");
        let windowHeight = window.innerHeight;
        
        sections.forEach(section => {
            let sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < windowHeight - 50) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
});
