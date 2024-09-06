let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function moveSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto slide change every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);
