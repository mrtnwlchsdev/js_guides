// Los strings son cadenas de caracteres encerrados entre comillas dobles o sencillas.
const name = 'Martin';

// Concatenacion de strings
// La concatenacion de 2 o mas strings se realiza mediante el operador +
const greeting = 'Hello';
console.log(name + greeting);

// Interpolacion de variables
// Desde ES6 se permite la insercion de variables dentro de un string.
console.log(`Hello ${name}`);

// Propiedades
const s = 'Hello World';
console.log(s.length); // Cantidad de caracteres contenidos en un string

// Metodos
console.log(s.toUpperCase()); // Cambiar caracteres a mayuscula
console.log(s.substring(0,2)); // Hel
console.log(s.split(' ')); // Dividir el contenido de un string en un nuevo arreglo