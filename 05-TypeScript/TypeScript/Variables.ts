/**
 * Created by USRDEL on 3/6/17.
 */
let numero : number = 2;
//nombreVariable : tipoVariable


//numero = "Andres"
//no se puede igualar un string auna variable de tipo entero

let verdad : boolean = true;
verdad = null;
verdad = undefined;
verdad = false;

let nombre:string = "Andres";
nombre = `yo no soy ${verdad}`;

let arregloNumeros:number[] = [1,2];

let arregloNumeros2 : Array<number> = [1,2];

interface UsuarioInt{
    nombre:string,
    apellido:string,
    nota?:number,
    //signo de interrogacion para decir que puede o no estar declarado cuando se instancie
    id:number
}

let andres:UsuarioInt = {
    nombre:"Cristhian",
    apellido:"Chulca",
    id:21,
};

var juego = {};
juego = 2;
juego = "string";

//tipo de variable any para declarar cualquier tipo de variable
let juego:any = 2;
juego = "Nombre";

const amigo = "Amigo";
//amigo = "Hola";