// CARRUSEL DE IMAGENES DEL BACKGROUND
let slideIndex = 0;

function showSlide() {
    const slides = document.querySelectorAll('.carousel-slide img');
    const carouselSlide = document.querySelector('.carousel-slide');
    const totalSlides = slides.length;

    slideIndex = (slideIndex + totalSlides) % totalSlides;
    const offset = -slideIndex * 100;
    carouselSlide.style.transform = `translateX(${offset}%)`;
}

function moveSlider(direction) {
    const slides = document.querySelectorAll('.carousel-slide img');
    slideIndex = (slideIndex + direction + slides.length) % slides.length;
    showSlide();
}

function autoSlide() {
    moveSlider(1);
    setTimeout(autoSlide, 10000);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide();
    setTimeout(autoSlide, 1000);
});


// CARRUSEL DE IMAGENES DE PAQUETES BASICOS
let currentIndex = 0;
function moveSlide(step) {
    const slides = document.querySelector('.carousel-images');
    const totalSlides = document.querySelectorAll('.carousel-images img').length;
    const slidesPerView = window.innerWidth <= 450 ? 1 : 3; // Ajuste para móviles y escritorio

    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = totalSlides - slidesPerView;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    slides.style.transform = `translateX(-${currentIndex * (100 / slidesPerView)}%)`;
}


// MOSTRAR Y OCULTAR MODALES
document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('.modal');
    const openButtons = document.querySelectorAll('[class^="open-"]');
    const closeButtons = document.querySelectorAll('[class^="close-"]');

    openButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalId = this.className.replace('open-', '').replace('-modal', '-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = 'flex';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = this.closest('.modal');
            if (modal) modal.style.display = 'none';
        });
    });

    const carruseles = document.querySelectorAll('.carrusel');
    if (carruseles.length > 0) {
        carruseles.forEach(carrusel => {
            const prevButton = carrusel.closest('.modal').querySelector('.prev-btn');
            const nextButton = carrusel.closest('.modal').querySelector('.next-btn');
            const items = carrusel.querySelectorAll('.carousel-item');
            let index = 0;

            if (prevButton && nextButton && items.length > 0) {
                function updateCarrusel() {
                    const totalItems = items.length;
                    if (totalItems === 0) return;
                    if (index >= totalItems) index = 0;
                    if (index < 0) index = totalItems - 1;
                    const offset = -index * 100;
                    carrusel.style.transform = `translateX(${offset}%)`;
                }

                prevButton.addEventListener('click', function () {
                    index--;
                    updateCarrusel();
                });

                nextButton.addEventListener('click', function () {
                    index++;
                    updateCarrusel();
                });

                updateCarrusel();
            } else {
                console.error('No se encontraron botones de navegación o elementos de carrusel.');
            }
        });
    } else {
        console.error('No se encontraron carruseles.');
    }
});

//  MOSTRAR Y OCULTAR MENU DESPLEGABLE
document.querySelector('.menu-btn').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.add('open');
});
document.querySelector('.close-btn').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.remove('open');
});


// MODAL DE INICIO
var preload = document.getElementById("preloader");
var span = document.getElementsByClassName("close")[0];
window.onload = function () {
    preload.style.display = "flex";
    document.body.classList.add('preload-open');
}
span.onclick = function () {
    preload.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == preload) {
        preload.style.display = "none";
    }
}
function preloadContentAnimationOut() {
    var preloadContent = document.querySelector('.preload-content');
    preloadContent.style.animation = 'zoomOut 0.5s';
    setTimeout(function () {
        preload.style.display = "none";
    }, 500);
}