// Los prototipos permiten definir funciones y propiedades que podran ser accedidas por las instancias que lo requieran
function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getName = function() {
    return `Hello my name is ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Martin','Wilches');
console.log(person1.getName()); // Hello my name is Martin Wilches