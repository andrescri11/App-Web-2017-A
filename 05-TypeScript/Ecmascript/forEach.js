/**
 * Created by USRDEL on 29/5/17.
 */
var arregloNumeros = [1, 2, 3, 4, 5];
var resultado = arregloNumeros.forEach(function (valor, indice, arreglo) {
    console.log("el valor es : " + valor);
    console.log("el indice es : " + indice);
    console.log("el arreglo es : " + arreglo);
});
console.log("resultado es igual a :", resultado);
