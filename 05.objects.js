// Estructuras de datos definidas mediante pares clave-valor
const person = {
    firstName: 'Martin',
    age: 27,
    languages: ['HTML', 'CSS', 'JS']
}

// Acceder a las propiedades de un objeto
console.log(person.name); // Martin

// Un objeto puede contener cualquier tipo de valor, incluyendo arreglos u otros objetos
console.log(person.languages[2]); // JS

// Desestructuracion
// Mediante la desestructuracion se pueden asignar las propiedades de un objeto a variables independientes
const {firstName, age} = person;
console.log(firstName); // Martin
console.log(age); // 27

// Agregar nuevas propiedades a un objeto
person.email = 'martin@email.com';