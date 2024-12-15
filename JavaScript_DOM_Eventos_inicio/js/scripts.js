// querySelector nos permite seleccionar un elemento de la página

const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo Heading';
// console.log(heading);

// querySelectorAll nos permite seleccionar todos los elementos de la página
const enlaces = document.querySelectorAll('.navegacion a');
// console.log(enlaces);
// console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].href = 'http://google.com';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// getElementById nos permite seleccionar un elemento por su id
const heading2 = document.getElementById('heading');
// console.log(heading2);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar texto
nuevoEnlace.textContent = 'Tinda Virtual';

// Agregar clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

//console.log(nuevoEnlace);

// Eventos
/*
console.log(1);

window.addEventListener('load', imprimir); // Espera a que todo el HTML, CSS, imagenes y JS estén listos

window.onload = function() { // Espera a que todo el HTML, CSS, imagenes y JS estén listos
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() { // Espera a que el HTML esté listo, no espera CSS o imagenes
    console.log(4);
});

console.log(5);

function imprimir() {
    console.log(2);
}

window.onscroll = function() {
    console.log('scrolling...');
}

// Seleccionar eventos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault(); // Previene la acción por defecto
    console.log('enviando formulario...');
});*/

// Eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const formulario = document.querySelector('.formulario');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// El evento de submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    // Validar formulario
    const { nombre, email, mensaje} = datos;
    
    // Validar que el formulario tenga contenido
    if(nombre === '' || email === '' || mensaje === '') {
        mostrarError('Todos los campos son obligatorios');
        return; // Detiene la ejecución del código
    }
    
    //Enviar el formulario
    mostrarMensaje('Formulario enviado correctamente');
});

function leerTexto(evento) {
    //console.log(evento.target.value);

    // Accede al id del elemento que está siendo modificado y le asigna el valor del input
    datos[evento.target.id] = evento.target.value;

    //console.log(datos);
}

// Muetsra un error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    // Elimina la alerta después de 3 segundos
    setTimeout(() => {
        error.remove();
    }, 3000);
}

// Muestra un mensaje de exito
function mostrarMensaje(mensaje) {
    const exito = document.createElement('P');
    exito.textContent = mensaje;
    exito.classList.add('correcto');

    formulario.appendChild(exito);

    // Elimina la alerta después de 3 segundos
    setTimeout(() => {
        exito.remove();
    }, 3000);
}