/**
 * Created by USRDEL on 5/6/17.
 */
let Passwords = require('machinepack-passwords');
exports.calculadoraUdla = {
    sumar:(n1,n2)=>{
        return n1 + n2;
    },

    restar : (n1,n2)=>{
    return n1 - n2;
    },
    multiplicar : (n1,n2)=>{
    return n1 * n2;
    },
    passwords: Passwords
};