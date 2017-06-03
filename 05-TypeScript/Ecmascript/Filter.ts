/**
 * Created by USRDEL on 3/6/17.
 */
let arreglo =[
    {
        nombre: "Cristhian",
        apellido : "Chulca",
        nota:10,
        id:1
    },
    {
        nombre: "Andres",
        apellido : "Azcasivar",
        nota:6,
        id:2
    },
    {
        nombre: "Alann",
        apellido : "Chulca",
        nota : 8,
        id:3
    },
    {
        nombre: "BBBB",
        apellido : "AAAA",
        nota : 2,
        id:4
    }
];

let resultado = arreglo.filter((valor,indice,arreglo)=>{
    //return valor.nota > 3 && valor.apellido == "Chulca";
    return valor.nota < 3 || valor.nota > 8;
});

console.log(resultado);

//funcion anonima, que no tiene nombre