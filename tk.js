// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll-to-Top button logic
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    // Show the button after scrolling down 20px
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks the button, scroll to the top of the document
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in sections when scrolling
const fadeInSections = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once the animation has played
        }
    });
}, {
    threshold: 0.1
});

fadeInSections.forEach(section => {
    observer.observe(section);
});
