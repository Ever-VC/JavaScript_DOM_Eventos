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

console.log(nuevoEnlace);