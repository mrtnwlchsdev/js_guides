// DOM (Document Object Model)
// El DOM es un estructura jerarquica
// Los elementos que componen el DOM pueden ser manipulados mediante un lenguaje de scripts (JavaScript)

// El objeto document representa la raiz del DOM
// Desde document es posible accecder al resto de elementos que component el DOM
document.title = 'Hello World';

// Selectores de un elemento

// Seleccionar un elemento del DOM a traves de su   tipo
// Si existen mas elementos de un mismo tipo en el DOM, solo se seleccionara el primero encontrado en la estructura
document.querySelector('p');

// Seleccionar un elemento del DOM que contenga un id especifico
document.getElementById('id-data');

// Asignar un elemento seleccionado del DOM a una variable
const header = document.querySelector('h1');

// Seleccionar multiples elementos del DOM
// Todos los elementos que coincidan con la seleccionar haran parte de un nuevo arreglo de nodos
// El arreglo de nodos que contiene los elementos puede ser iterado
const items = document.querySelectorAll('.item');
items.forEach(element => {
    console.log(element);
});