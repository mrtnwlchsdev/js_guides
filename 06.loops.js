// Los ciclos son estructuras que permiten iterar un bloque de codigo multiples veces
// La ejecucion del codigo en un ciclo se finaliza cuando una condicion deja de cumplirse

// for
for (let i = 1; i <= 10; i++) {
    console.log(i); // 12345678910
}

// while
let x = 1;
while (x <= 10) {
    console.log(x); // 12345678910
    x++;
}

// for of
const numbers = [1,2,3,4,5];
for (const i of numbers) {
    console.log(i); // 12345678910
}