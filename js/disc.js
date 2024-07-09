let botonAvanzar = document.getElementById("avanzar");
let botonRetroceder = document.getElementById("retroceder");
let fotos = [
    "media/img/estopia.jpg",
    "media/img/amazon_estopa.jpg",
    "media/img/fons_estopa.jpg",
];
let div = document.getElementById("divParaImg");
let img = document.createElement("img");
let posicionActual = 0;
let intervaloRefresco;

function iniciarIntervalo() {
    intervaloRefresco = setInterval(avanzarFoto, 6000);
}

function reiniciarIntervalo() {
    clearInterval(intervaloRefresco);
    iniciarIntervalo();
}

function avanzarFoto() {
    if (posicionActual >= (fotos.length - 1)) {
        posicionActual = 0;
    } else {
        posicionActual = posicionActual + 1;
    }
    renderizarImagen();
}

function retrocederFoto() {
    if (posicionActual <= 0) {
        posicionActual = fotos.length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
}

function renderizarImagen() {
    img.src = fotos[posicionActual];
    div.innerHTML = '';
    div.appendChild(img);
    console.log('imagen mostrada', img.src);
}

renderizarImagen();
botonAvanzar.addEventListener("click", function(event) {
    event.preventDefault();
    avanzarFoto();
    reiniciarIntervalo();
});

botonRetroceder.addEventListener("click", function(event) {
    event.preventDefault();
    retrocederFoto();
    reiniciarIntervalo();
});

iniciarIntervalo();
