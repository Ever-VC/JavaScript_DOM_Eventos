// querySelector nos permite seleccionar un elemento de la página

const heading = document.querySelector('.header__texto h2');
heading.textContent = 'Nuevo Heading';
console.log(heading);

// querySelectorAll nos permite seleccionar todos los elementos de la página
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].href = 'http://google.com';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');

// getElementById nos permite seleccionar un elemento por su id
const heading2 = document.getElementById('heading');
console.log(heading2);