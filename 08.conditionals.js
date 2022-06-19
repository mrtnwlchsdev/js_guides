// Las estructuras condicionales permiten ejecutar un bloque de codigo a partir de una condicion

// Operadores de comparacion
/*
> :: Mayor que
< :: Menor que
>= :: Mayor o igual que
<= :: Meno r o igual que
== Igual que
=== Exactamente igual que
!= :: Diferente a
!== :: Exactamente diferente a
*/

// if
const age = 20;
if (age >= 18) {
    console.log('Adult');
}

// if else
if (age >= 60) {
    console.log('Old');
} else {
    console.log('Young');
}

// switch
switch(age) {
    case 18:
        console.log('Adult');
        break;
    case 17:
        console.log('Kid');
        break;
    default:
        break;
}

// Operadores logicos
// Los operadores logicos permiten definir expresiones logicas complejas
/*
&& :: And
|| :: Or
! :: Not
*/

const genre = 'male'
if (age >= 20 && genre === 'male') {
    console.log('Adult man')
}

// Operador ternario
// Simplificacion de estructuras condicionales if...else
age >= 18 ? console.log('Adult') : console.log('Kid');