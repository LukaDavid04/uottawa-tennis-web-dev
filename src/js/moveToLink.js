document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the target section's ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll smoothly to the target section
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});