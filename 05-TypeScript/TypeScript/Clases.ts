/**
 * Created by USRDEL on 3/6/17.
 */
class  UsuarioClass{
    /*
    public nombre:string;
    private  apellido:string;
*/
    //parametros opcionales siempre al final
    constructor(public nombre:string, private  apellido?:string){
  /*      this.nombre = nombre;
        this.apellido = apellido;
        */
    }

    ImprimirNombre(saludo:string, titulo?:string):string{
        return `${saludo} ${this.nombre} ${this.apellido}`;
    }

}

let adrian:UsuarioClass = new UsuarioClass("Cristhian", "Chulca");

console.log(adrian.ImprimirNombre("Hi","Sr. "));