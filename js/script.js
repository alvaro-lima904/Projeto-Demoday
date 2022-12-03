let swiper = new Swiper(".opcoes-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

let button = document.getElementById('btn');

function mudar() {
    let cursos = document.getElementById('hide');

    if (cursos.style.display === "none") {
        cursos.style.display = "block";
        button.style.display = "none";
        
    } else{
        cursos.style.display = "none";
    }
}

button.addEventListener('click', mudar);