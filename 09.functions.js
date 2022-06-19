// Las funciones son bloques de codigo que se puede ejecutar multiples veces
// La declaracion de una funcion se realiza mediante la palabra clave function
function sum() {
    console.log(2+2); // 4
}

// Una funcion puede recibir parametros, los cuales actuaran como variables locales
function substraction(x,y) {
    console.log(x-y); // 0
}

// La ejecucion de una funcion se realiza mediante la invocacion de la misma
// Los valores de los parametros de una funcion son pasados como argumentos durante la invocacion de la misma
substraction(5,5);

// Una funcion puede tener definidos parametros por defecto
function prod(x=10, y=20) {
    console.log(x*y);
}

// Cuando una funcion tiene definidos parametros por defecto, se puede omitir el pasar valores como argumentos.
prod();

// El valor por defecto de una funcion es undefined
// La palabra clave return le asigna un valor a una funcion
// La palabra clave return finaliza de forma inmediata la ejecucion de una funcion
function division(x,y) {
    return x/y;
}
console.log(division(10,2)); // 5