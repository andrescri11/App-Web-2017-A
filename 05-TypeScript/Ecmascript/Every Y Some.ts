/**
 * Created by USRDEL on 29/5/17.
 */
let arreglo = [0,8,9,10,5,7];
let resultado = arreglo.map((valor,indice,arreglo)=>{
    return valor + indice;
}).some((valor)=>{
    return valor<=2;
});

console.log(resultado);

//and - todos cumplen verdadero sino falso

 let resultado2 = arreglo.every((
     valor,indice,arreglo)=>{
        return (valor >= 2);
 });

 console.log(resultado2);

let resultado3 = arreglo.some((
    valor,indice,arreglo)=>{
    return (valor <= 2);
});

console.log(resultado3);