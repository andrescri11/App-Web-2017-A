/**
 * Created by USRDEL on 22/5/17.
 */

var texto = "";
var texto2 = '';
var numero = 1;
var booleano = false;
var decimal = 1.2;
var fecha = new Date();
var objeto = {};

texto = 2;
texto = booleano;
texto = decimal;
texto = fecha;
texto = objeto;

//Arreglos

var arregloNumeros = [1,2,3,4,5];
var arregloStrings = ['a',"b",'c'];

arregloNumeros = [1,"a",true,[1,"b"],{}];

var matriz = [[1,2],[3,4]];

//Objeto JSON(JavaScript Object Notation)

var ovjetoNotacion = {};

var objeto2 = {
    llave : "valor",
    llave2 : "valor",
    llave3 : "valor",
};

objeto2.llave;
objeto2.llave2;
objeto2.llave3;

var objetoComplejo = {
    nombre : "",
    apellido : "",
    fechaNacimiento : new Date(),
    mayorEdad : true,
    peso : 70.2,
    altura : 127,
    saltar:function () {
        console.log("Saltar");
    },
    correr:function () {
        console.log("correr");
    },
    sumar:function (a,b) {
        return a + b;
    },
    imprimirNombre:function () {
        //return objetoComplejo.nombre + " " + objetoComplejo.apellido;
        return this.nombre + " " * this.apellido;
    }
};

objetoComplejo.altura; //127
objetoComplejo.apellido;
objetoComplejo.nombre;

objetoComplejo.nombre = "Cristhian";
objetoComplejo.nombre; // Cristhian

//objetoComplejo.titulo; //undefined
objetoComplejo.titulo = "Ingeniero";

delete objetoComplejo.nombre;

var arregloStrings = ["1","2"];
arregloStrings.push("3"); //["1","2","3"]
arregloStrings.pop(); //["1","2"]

console.log(arregloStrings);
