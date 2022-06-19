// Recorrer un arreglo mediante el metodo forEach()
const nums = [1,2,3,4,5];
nums.forEach(element => {
    console.log(element); // 12345
})

// El metodo map() retorna un nuevo arreglo
// Los elementos del arreglo original pueden ser modificados al incluirlos en el nuevo arreglo
const newArr = nums.map(element => {
    return element * element;
})
console.log(newArr); // [1,4,9,16,25]

// El metodo filter() retorna un nuevo arreglo
// El nuevo arreglo contendra los elementos de un arreglo que ha sido iterado y que cumplan con una condicion especifica
const evenNumbers = nums.filter(element => {
    return element % 2 === 0;
})