// El metodo addEventListener() permite agregar eventos a elementos del DOM
// Un evento es ejecutado cuando se realiza una accion sobre un elemento seleccionado
// addEventListener() recibe 2 parametros, el evento y la funcion a ejecutar cuando ocurra dicho evento
const btn = document.querySelector('.btn');

// Evento click
// El objeto e hace referencia al evento
btn.addEventListener('click', (e) => {

    // Obtener la clase asignada al elemento del DOM donde ocurre el evento
    console.log(e.target.className);
});

// Eventos del mouse

// Evento a ejecutar cuando el cursor del mouse se posiciona sobre el elemento del DOM
btn.addEventListener('mouseover', () => {
    btn.textContent = 'New Text';
});

// Evento a ejecutar cuando el cursor del mouse se posiciona fuera del elemento del DOM
btn.addEventListener('mouseout', () => {
    btn.style.background = 'grey';
});