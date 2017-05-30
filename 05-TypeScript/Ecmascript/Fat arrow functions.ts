/**
 * Created by USRDEL on 29/5/17.
 */
function holaMundo(){
    console.log("Hola Mundo");
};

let holaMundo2 = function () {
    console.log("Hola Mundo");
};

let holaMundo3 = ()=>{
    console.log("Hola Mundo");
};
//undefined - void
let holaMundo4 = ()=> console.log("Hola Mundo");

//llaves cuando es mas de una linea de codigo

let holaMundo5 = function () {
    return 5;
};

let holaMundo6 = () => 5;

//let holaMundo7 = () => "funcion"

let saludar = nombre=> "Hola" + nombre;

let saludarConApellido = (nombre, apellido)=> `hola ${nombre} ${apellido}`;

//tsc Fat arrow functions

console.log(saludarConApellido("Cristhian", "Chulca"));