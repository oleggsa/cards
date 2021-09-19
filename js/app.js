function slidesPlugin(activeSlide = 3) {
        const slides = document.querySelectorAll('.slide');
        const active = document.querySelector('.container');
    slides[activeSlide].classList.add('active');

    active.addEventListener('click', (e) => {
        clearActiveClasses(e.target);

        e.target.classList.add('active');
    });

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    }
}

slidesPlugin(2);