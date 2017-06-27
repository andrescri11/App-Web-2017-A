/**
 * Created by USRDEL on 29/5/17.
 */
function holaMundo() {
    console.log("Hola Mundo");
}
;
var holaMundo2 = function () {
    console.log("Hola Mundo");
};
var holaMundo3 = function () {
    console.log("Hola Mundo");
};
//undefined - void
var holaMundo4 = function () { return console.log("Hola Mundo"); };
//llaves cuando es mas de una linea de codigo
var holaMundo5 = function () {
    return 5;
};
var holaMundo6 = function () { return 5; };
//let holaMundo7 = () => "funcion"
var saludar = function (nombre) { return "Hola" + nombre; };
var saludarConApellido = function (nombre, apellido) { return "hola " + nombre + " " + apellido; };
//tsc Fat arrow functions
console.log(saludarConApellido("Cristhian", "Chulca"));
