// Function to handle the contact link click
document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('a[href^="mailto:"]');

    if (contactLink) {
        contactLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default action
            alert('Thank you for your interest! I will get back to you soon.');
            window.location.href = contactLink.href; // Redirect to email
        });
    }

    // Smooth scroll for internal links (if any)
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});