/* Carrusel 1 */
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

function updateCarousel() {
    const imageWidth = images[0].clientWidth;
    carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});
/* Carrusles 2 */
const prevButton2 = document.querySelector('.prev2');
const nextButton2 = document.querySelector('.next2');
const carouselImages2 = document.querySelector('.carousel2 .carousel-images');
const images2 = document.querySelectorAll('.carousel2 .carousel-images img');
let currentIndex2 = 0;

function updateCarousel2() {
    const imageWidth2 = images2[0].clientWidth;
    carouselImages2.style.transform = `translateX(-${currentIndex2 * imageWidth2}px)`;
}

prevButton2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 > 0) ? currentIndex2 - 1 : images2.length - 1;
    updateCarousel2();
});

nextButton2.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 < images2.length - 1) ? currentIndex2 + 1 : 0;
    updateCarousel2();
});
