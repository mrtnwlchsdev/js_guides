// Una funcion constructura permite instanciar objetos con propiedades en comun
// Las funciones constructuras deben iniciar con mayuscula
// Una funcion constructura puede contener propiedades y metodos
function Person(firstName,lastName,email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.printName = function() {
        return this.firstName;
    }
}

// El proceso de instanciacion se realiza mediante la palabra clave new
const person1 = new Person('Martin','Wilches','martin@gmail.com');  

// Una instancia puede acceder a las propiedades y metodos de la funcion mediante la notacion de punto
console.log(person1.printName())