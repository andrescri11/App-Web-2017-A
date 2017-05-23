/**
 * Created by USRDEL on 22/5/17.
 */
//void - undefined
function ImprimirHolaMundo() {
    console.log("Hola Mundo");
}

ImprimirHolaMundo(); //undefined

function Imprimir(texto) {
    console.log(texto);
}

Imprimir("Cristhian"); //undefined

function Suma2Numeros(a,b) {
    return a+b;
}

console.log(Suma2Numeros(1,2)); //3

function Operar2Numeros(n1,n2,funcion) {
    n1 = n1 + 1;
    n2 = n2 + 2;
    funcion(n1,n2);
}

Operar2Numeros(2,4, function (primerNumero, segundoNumero) {
    //primerNumero = 3
    //segundoNumero = 6

    return primerNumero*segundoNumero; //3*6=18
})

//[1,2,3,4].forEach(function(valorIteracion,Indice,Arreglo){
//    console.log(valorIeracion);
//})

