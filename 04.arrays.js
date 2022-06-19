// Los arreglos son estructuras de datos indexadas
// Un arreglo puede contener multiples tipos de datos
const things = [1,true,'name'];

// Acceder al contenido de un arreglo
// Cada elemento del arreglo es accedido mediante su inidice
console.log(numbers[0]); // 1

// Metodos
numbers.push(10); // Agregar un nuevo valor al final del arreglo
numbers.unshift(false); // Agregar un nuevo valor al inicio del arreglo
numbers.pop(); // Remover el ultimo valor del arreglo

// Retornar el indice de un elemento contenido en el arreglo
console.log(things.indexOf('name')); // 2