/**
 * Created by USRDEL on 29/5/17.
 */
var arreglo = [0, 8, 9, 10, 5, 7];
var resultado = arreglo.map(function (valor, indice, arreglo) {
    return valor + indice;
}).some(function (valor) {
    return valor <= 2;
});
console.log(resultado);
//and - todos cumplen verdadero sino falso
var resultado2 = arreglo.every(function (valor, indice, arreglo) {
    return (valor >= 2);
});
console.log(resultado2);
var resultado3 = arreglo.some(function (valor, indice, arreglo) {
    return (valor <= 2);
});
console.log(resultado3);
