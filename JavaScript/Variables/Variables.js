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
};

objetoComplejo.altura;
objetoComplejo.apellido;