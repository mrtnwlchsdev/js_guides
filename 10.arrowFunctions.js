// Una funcion pueden ser anonima
// Una funcion puede ser asignada a una variable
const sum = (x,y) => {
    return x+y;
}
console.log(sum(10,20)); // 30

// Las funciones de flecha permiten simplificar la declaracion de funciones
const prod = x => x * x;

/*
- Si la funcion solo recibe un parametro, se puede omitir el uso de parentesis
- Si el cuerpo de la funcion solo es de una linea, se puede realizar un retorno implicito
- El retorno implicito de valores permiti omitir el uso de la palabra clave return y de las llaves {}
*/
console.log(prod(10)); // 100