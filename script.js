// This is where I will add the smooth scroll effect for a dynamic experience
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Adding animations on scroll using JavaScript
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.section-img');
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('fadeIn');
        }
    });
});

// Additional Animation for Navigation Bar
const navbar = document.querySelector('header');
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "#444";
    } else {
        navbar.style.backgroundColor = "#333";
    }
};

