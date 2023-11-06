const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

function nextSlide() {
    if (slideIndex < slides.length - 1) {
        slideIndex++;
    } else {
        slideIndex = 0;
    }
    updateSlider();
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex--;
    } else {
        slideIndex = slides.length - 1;
    }
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(nextSlide, 3000);