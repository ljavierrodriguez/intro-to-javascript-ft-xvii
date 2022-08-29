/* 

Operaciones de Comparacion:

=== // Valor + Dato
== // Valor
!== // Valor + Dato
!=  // Valor
>=  // Mayor igual que
<=  // menor igual que
<  // menor que
>  // mayor que


Operadores Logicos: (&& || !)

true && true => true
true && false => false
false && false => false

true || true => true
true || false => true
false || false => false

!true && !true => false
!true && !false => false
!false && !false => true

!true || !true => false
!true || !false => true
!false || !false => true

condicionales:

if (condicion){
    sentencias
}


if (condicion){
    sentencias
} else {
    sentencias
}


if (condicion){
    sentencias
} else if (condicion) {
    sentencias
} else if (condicion) {
    sentencias
} else {
    sentencias
}

*/

let a = 5;
let b = 7;
let c = 6;

if (a < b) {
    console.log("He obtenido verdadero");
}


if (a > b) {
    console.log("He obtenido verdadero");
} else {
    console.log("He obtenido falso");
}


if (a > b && a > c) {
    console.log("Mayor es A")
} else if (b > c) {
    console.log("Mayor es B");
} else {
    console.log("Mayor es C");
}


let option = 5;
switch (option) {
    case 0:
        console.log("Opcion 0");
        break;
    case 1:
        console.log("Opcion 1");
        break;
    case 2:
        console.log("Opcion 2");
        break;
    case 3:
        console.log("Opcion 3");
        break;

    default:
        console.log("Opcion No Valida")
        break;
}