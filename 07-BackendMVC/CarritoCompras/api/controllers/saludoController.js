module.exports = {
    welcome: function (req, res) {
        //console.log(req.method);
        //GET
        //return req.method; //Metodo : GET POST PUT DELETE
        //Metodo req.method
        //return res.send("Error en el metodo");
        //return res.json({saludo : "hola"});
        if (req.method == "POST") {
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("ERROR");
        }
    },
    bienvenido: function (req, res) {
        //return res.send("Hola");
        if (req.method == "PUT") {
            return res.json({ saludo: "hola" });
        }
        else {
            return res.send("ERROR");
        }
    },
    //Saludo/crearUSuarioQuemado
    crearUsuarioQuemado: function (req, res) {
        var parametros = req.allParams();
        var nuevoUsuario = {
            nombres: parametros.nombres,
            apellidos: parametros.apellidos,
            password: parametros.password,
            correo: parametros.correo,
            fechaNacimiento: parametros.fechaNacimiento
        };
        //1 - query parameters ?nombre=Adrian&apellidos=Eguez
        //2 - forms parameters
        /*let nuevoUsuario={
          nombres:"Cristhian",
          apellidos:"Chulca",
          password:"1234",
          correo:"1@j.com",
          fechaNacimiento:new Date()
        }*/
        Usuario.create(nuevoUsuario)
            .exec(function (error, usuarioCreado) {
            if (error) {
                return res.serverError(error);
            }
            else {
                return res.ok(usuarioCreado);
            }
        });
    }
};