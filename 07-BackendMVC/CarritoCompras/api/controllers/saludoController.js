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
    }
};
