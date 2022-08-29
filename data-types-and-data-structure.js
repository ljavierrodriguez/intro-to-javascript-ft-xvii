/* 

Data Types:

String, Boolean, Number, Undefined

Data Structure:

Object :
    Array
    Null,
    Literal Object

functions

*/
/* var nombre = "Pedro";
let apellido = "Perez";
const PI = 3.1416; */


let titulo = "Titulo 1";
let subtitulo = 'Subtitulo 1';
let descripcion = `Esto es una descripcion`;


let nombre = "Pedro";
let apellido = "Perez";
let nombre_completo = nombre + " " + apellido;
let nombre_completo2 = `Bievenido, ${nombre} ${apellido} hoy estamos a 29 de agosto Lorem ipsum dolor sit 
amet consectetur adipisicing elit. Commodi, possimus? Odit quam accusamus aliquam minima dolor dolorem illo 
cum non. Omnis tenetur culpa odio laborum natus eos ducimus rem ${nombre} repudiandae.`

let active = false;
let single = true;

let edad = 40;
let temp = -20;
let altura = 1.70

let saldo = 1000000;

let resultado;

console.log(resultado);

/* function saludo(){
    let nombre = "Miguel";
    console.log(nombre);
}
let resultado = 0;
function suma(a, b){
    resultado = a + b;

    return resultado;
}

if(apellido === 'Arteaga'){
    let nombre = "Julio";
}

console.log(nombre); */

//            0.  1.  2.  3.  4.             
let notas = [12, 34, 32, 19, 23]

let valores = [true, 12, "nombre", [1, 2], null, -32, { id: 1, name: "luis" }]

let users = [
    { id: 1, name: "luis" },
    { id: 1, name: "luis" },
    { id: 1, name: "luis" }
]

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] 
]

console.log(matriz[2][2])


let matrix = [
    [
        [
            [11, 12, 13],
            [14, 15, 16],
            [17, 18, 19]
        ],
        [
            [21, 22, 23],
            [24, 25, 26],
            [27, 28, 29]
        ],
        [
            [31, 32, 33],
            [34, 35, 36],
            [37, 38, 39]
        ],
    ],
    [
        [
            [41, 42, 43],
            [44, 45, 46],
            [47, 48, 49]
        ],
        [
            [51, 52, 53],
            [54, 55, 56],
            [57, 58, 59]
        ],
        [
            [61, 62, 63],
            [64, 65, 66],
            [67, 68, 69]
        ],
    ],
    [
        [
            [71, 72, 73],
            [74, 75, 76],
            [77, 78, 79]
        ],
        [
            [81, 82, 83],
            [84, 85, 86],
            [87, 88, 89]
        ],
        [
            [91, 92, 93],
            [94, 95, 96],
            [97, 98, 99]
        ],
    ], 
]

console.log(matrix[2][2][2][2])


let persona = {
    nombre: "",
    apellido: "",
    edad: 0,
    soltero: false,
    0: { id: 1, name: 'John'},
    1: function(){}
}


// variables programada
let dato = "nombre";

console.log(persona["nombre"])
console.log(persona.apellido);

console.log(persona[dato]) // persona["nombre"]


let fields = ["name", "lastname", "rut"]

let persona2 = {
    [fields[0]]: "Hugo",
    [fields[1]]: "Boss"
}

let persona3 = {
    [fields[0]]: "Jane",
    [fields[1]]: "Doe"
}

console.log(persona2)
console.log(persona3)

console.log(Math.sqrt(9))
console.log(Math.round(45.49))
console.log(Math.ceil(45.3))
console.log(Math.floor(45.3))
console.log(Math.PI);