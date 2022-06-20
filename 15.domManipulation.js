// Remover elementos del DOM
const list = document.querySelector('ul');
list.remove();

// Remover el ultimo elemento contenido en un nodo del DOM
list.lastElementChild.remove();

// Editar el contenido del primer elemento contenido en el DOM
list.firstElementChild.textContent = 'Hello World';

// Manipular el contenido de un elemento ubicado en una posicion especifica dentro de un nodo
list[1].textContent = 'New Text';

// Agregar codigo HTML a un elemento contenido dentro de un nodo
list.lastElementChild.innerHTML = '<h4>Header</h4>';

// Modificar los estilos CSS de un elemento del DOM
const btn = document.querySelector('.btn');
btn.style.background = 'red';