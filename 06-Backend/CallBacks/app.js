const fs = require('fs');
//viene instalado x defecto en el node
/*
const calculadora = require('cristhianandres');

//const Passwords = require('machinepack-passwords');

 let a = 2,
    b = 3,
    resultado;

    resultado = calculadora.calculadoraUdla.sumar(a,b);

    console.log(`Resultado es : ${resultado}`);

    calculadora.calculadoraUdla.passwords.encryptedPassword(
        {
            password : passwordAEncriptar,
        })
        .exec ({
            error:(error)=>{
                console.log(`Error : ${error})
            }
        }
    )



//npm express
// modulo que gestiona los request y response del servidor
*/
console.log("Empieza");

//CALLBACK


// 1 nombre y ruta del archivo
// 2 codificacion
// 3 anonymous function
// (error!, contenido del archivo)



fs.readFile('texto.txt',"utf8",function
    (err, data){
    if (err) throw err;
console.log(data);
});

console.log("Termina");