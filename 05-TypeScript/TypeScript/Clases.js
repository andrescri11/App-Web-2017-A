/**
 * Created by USRDEL on 3/6/17.
 */
var UsuarioClass = (function () {
    /*
    public nombre:string;
    private  apellido:string;
*/
    //parametros opcionales siempre al final
    function UsuarioClass(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        /*      this.nombre = nombre;
              this.apellido = apellido;
              */
    }
    UsuarioClass.prototype.ImprimirNombre = function (saludo, titulo) {
        return saludo + " " + this.nombre + " " + this.apellido;
    };
    return UsuarioClass;
}());
var adrian = new UsuarioClass("Cristhian", "Chulca");
console.log(adrian.ImprimirNombre("Hi", "Sr. "));
