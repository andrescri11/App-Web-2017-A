/**
 * Created by USRDEL on 26/6/17.
 */

declare var module:any

module.exports = {
  attributes:{
    nombre:{
      type:"string"
    },
    password:{
      type:"string"
    },
    apellidos:{
      type:"string"
    },
    correo:{
      type:"email"
    },
    fechaNacimiento:{
      type:"date"
    }
  }
};
