/**
 * Created by USRDEL on 3/6/17.
 */
//devuelve la premiera instancia en el arreglo
//segun un criterio de busqueda
let arreglo =[
    {
        nombre: "Cristhian",
        apellido : "Chulca",
        id:1
    },
    {
        nombre: "Andres",
        apellido : "Azcasivar",
        id:2
    },
    {
        nombre: "Alann",
        apellido : "Chulca",
        id:3
    },
]
arreglo.find(function(value){
    return value.apellido == "Chulca"
})