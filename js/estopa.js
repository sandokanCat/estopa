console.log(
    "%c💻 ¡Gracias por curiosear el código! ¿Te apetece un café virtual mientras terminamos el proyecto? ☕\n" +
    "🚧 PD: Estamos en construcción activa. ¡Feedback bienvenido!",
    "color: #2ecc71; font-weight: bold; font-size: 16px;"
);

import * as cookies from './cookies.js';
cookies.initCookieBar();

import { abrirModal } from './contacto.js';
abrirModal();
