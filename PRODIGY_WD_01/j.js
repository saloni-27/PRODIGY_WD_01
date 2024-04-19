const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('data-target');
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active-section');
            } else {
                section.classList.remove('active-section');
            }
        });
    });
});