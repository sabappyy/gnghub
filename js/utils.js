let currentSlide = 0;

function showSlide(index){

    const slides = document.querySelectorAll(".gallery-slide");

    if(!slides.length) return;

    slides.forEach(slide => slide.classList.remove("active"));

    slides[index].classList.add("active");

}

function nextSlide(){

    const slides = document.querySelectorAll(".gallery-slide");

    if(!slides.length) return;

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

function prevSlide(){

    const slides = document.querySelectorAll(".gallery-slide");

    if(!slides.length) return;

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}

setInterval(() => {
    nextSlide();
}, 4000);