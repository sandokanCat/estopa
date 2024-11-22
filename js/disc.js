const iniciarCarrousel = () => {
    const fotos = [
        "img/estopia.jpg",
        "img/fuego.jpg",
        "img/rumba-a-lo-desconocido.jpg",
        "img/esto-es-estopa.jpg",
        "img/estopa-20.jpg",
        "img/x-anniversarivm.jpg",
        "img/allenrok.jpg",
        "img/voces-de-ultrarumba.jpg",
        "img/la-calle-es-tuya.jpg",
        "img/mas-destrangis.jpg",
        "img/destrangis.jpg",
        "img/estopa.jpg",
    ].reverse();
    const descripciones = [
        "Estopia (2024)",
        "Fuego (2019)",
        "Rumba a lo desconocido (2015)",
        "Esto es estopa (2014)",
        "Estopa 2.0 (2011)",
        "Estopa X anniversarivm (2009)",
        "Allenrok (2008)",
        "Voces de ultrarumba (2005)",
        "¿La calle es tuya? (2004)",
        "Más destrangis (2002)",
        "Destrangis (2001)",
        "Estopa (1999)",
    ].reverse();
    const imgContainer = document.createElement("div");
    imgContainer.style.display = "flex";
    imgContainer.style.transition = "transform 0.5s ease";
    imgContainer.style.width = `${fotos.length * 100}%`;
    fotos.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = descripciones[index];
        img.style.width = `${100 / fotos.length}%`;
        imgContainer.appendChild(img);
    });
    document.getElementById("divParaImg").appendChild(imgContainer);
    let posicionActual = 11;
    let intervalId = setInterval(() => cambiarFoto(-1), 6000);
    const cambiarFoto = (avance) => {
        posicionActual = (posicionActual + avance + fotos.length) % fotos.length;
        imgContainer.style.transform = `translateX(-${(posicionActual * 100) / fotos.length}%)`;
        clearInterval(intervalId);
        intervalId = setInterval(() => cambiarFoto(-1), 6000);
    };
    ['avanzar', 'retroceder'].forEach((id, i) => 
        document.getElementById(id).addEventListener("click", (e) => {
            e.preventDefault();
            cambiarFoto(i === 0 ? 1 : -1);
        })
    );
    cambiarFoto(0);
};
iniciarCarrousel(0);