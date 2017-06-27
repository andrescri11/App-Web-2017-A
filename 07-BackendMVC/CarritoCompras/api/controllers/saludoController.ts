declare var module;
declare var respuesta;
declare var Usuario;



module.exports = {
  welcome:(req, res)=> {
    //console.log(req.method);
    //GET
    //return req.method; //Metodo : GET POST PUT DELETE
    //Metodo req.method

    //return res.send("Error en el metodo");

    //return res.json({saludo : "hola"});
    if(req.method=="POST"){
      return res.json({saludo : "hola"});
    }else{
      return res.send("ERROR");
    }

  },
  bienvenido:(req,res)=>{
    //return res.send("Hola");
    if(req.method=="PUT"){
      return res.json({saludo : "hola"});
    }else{
      return res.send("ERROR");
    }
  },


  //Saludo/crearUSuarioQuemado
  crearUsuarioQuemado:(req,res)=>{
    let nuevoUsuario={
      nombres:"Cristhian",
      apellidos:"Chulca",
      password:"1234",
      correo:"1@1.com",
      fechaNacimiento:new Date()
    }

    Usuario.create(nuevoUsuario)
      .exec((error,usuarioCreado)=>{
          if(error){
            return res.serverError(error);
          }
          else{
            return res.ok(usuarioCreado);
          }
        }
      )
  }
};
