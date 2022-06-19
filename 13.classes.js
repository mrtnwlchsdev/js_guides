// Las clases permiten crear instancias, las cuales tendran atributos y metodos en comun
// El nombre de una clase debe iniciar con mayuscula
// El metodo constructor() sera invocado de forma automatica cada vez que se cree una nueva instancia
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return `Hello my name is ${this.name} and I'm ${this.age} years old`;
    }
}

// Instanciacion
const person1 = new Person('Martin',27);