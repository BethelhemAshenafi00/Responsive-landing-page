
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();
    
    if(name === '' || email === '' || message === '') {
        alert('Please fill in all fields!');
        return;
    }
    
    // Simple email regex check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)) {
        alert('Please enter a valid email address!');
        return;
    }
    
    alert('Thank you! Your message has been sent successfully.');
    
    // Reset form
    form.reset();
});


const heroImage = document.querySelector('.hero-image img');

heroImage.addEventListener('mouseenter', () => {
    heroImage.style.transform = 'scale(1.05)';
    heroImage.style.transition = 'transform 0.5s ease';
});

heroImage.addEventListener('mouseleave', () => {
    heroImage.style.transform = 'scale(1)';
});