let swiper = new Swiper(".cursos-slider", {
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

let btn1 = document.getElementById('matricula');
let btn2 = document.getElementById('cursos');
let btn3 = document.getElementById('historico');

let subtitulo = document.getElementById('subtitulo');

function matriculas () {
    subtitulo.innerText = "Minhas Matrículas";
}

function cursos () {
    subtitulo.innerText = "Cursos Favoritos";
}

function historico () {
    subtitulo.innerText = "Histórico de Cursos";
}


