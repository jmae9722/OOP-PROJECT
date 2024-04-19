document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let currentSlide = 0;

    function showSlide(slideIndex) {
        if (slideIndex < 0) {
            currentSlide = totalSlides - 1;
        } else if (slideIndex >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = slideIndex;
        }

        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        slides[currentSlide].classList.add('active');
    }

    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    showSlide(currentSlide);
});
// JavaScript for carousel functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("carousel-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// JavaScript for carousel controls
document.querySelector('.prev').addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("carousel-slide").length;
    }
    showSlides();
});

document.querySelector('.next').addEventListener('click', () => {
    slideIndex++;
    if (slideIndex > document.getElementsByClassName("carousel-slide").length) {
        slideIndex = 1;
    }
    showSlides();
});
