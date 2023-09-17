
//const customData = require('./archivo.json');
//let agendaJson = JSON.stringify(agendaDatos)
const defaultAvatar = 'https://imgs.search.brave.com/U624KT9Sm-xy7B8zS46q1e9i-spDyB4ZMupKT6Jexiw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWN1/cmUuZ3JhdmF0YXIu/Y29tL2F2YXRhci84/NGI5MDUzMGE5NmVk/MjRhNTRjMmU1YmQ5/YzVkZjJjZD9zPTMw/JmQ9bW0mcj1y.jpeg'
//Inicio la app leyendo el archivo.
var baseDatos = require('./database.json');
let hola = require('fs')


//Por ahora esta seria la agenda de datos inicial pero la idea es que luego se modifique y se haga desde una base de datos


//Al modificar por la app los contactos ya sea por agregar, editar o eliminar necesitamos modificar el archivo.
function updateDataBase(nuevoArchivo){

  //Nuevo archivo va a ser la agenda que nos va a dar nuestra app.. tengo que transformar a json y reenescribir el archivo.
  //No creo sea eficiente borrar y poner todo de nuevo pero se trata de un programa sencillo asique lo hare.
 let nuevoContenidoJson = JSON.stringify(nuevoArchivo)

 console.log(nuevoContenidoJson)

}

const verDatos = ()=> console.log(agendaJson)


const asignarId = (basedatos)=>{

  //Supongo que el primer indice vacio es el ultimo
  let primerIndexVacio = 0
      
  return primerIndexVacio;

}


export { baseDatos, defaultAvatar, verDatos,updateDataBase,asignarId };