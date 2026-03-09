// Optional JS for form submission (demo only)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting us!');
            form.reset();
        });
    }
});
