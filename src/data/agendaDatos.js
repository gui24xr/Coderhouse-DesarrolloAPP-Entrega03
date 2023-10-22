

const datosArray = 
[
  {
    "id": 0,
    "apellido": "Lopez",
    "nombre": "Juan",
    "telefono": "1145321267",
    "imgPerfil": "https://imgs.search.brave.com/U624KT9Sm-xy7B8zS46q1e9i-spDyB4ZMupKT6Jexiw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWN1/cmUuZ3JhdmF0YXIu/Y29tL2F2YXRhci84/NGI5MDUzMGE5NmVk/MjRhNTRjMmU1YmQ5/YzVkZjJjZD9zPTMw/JmQ9bW0mcj1y.jpeg",
    "estado": "Hola. Estoy usando Messenger !!",
    "mensajes": [{"Hora":"09:30","texto":"Hola amigo. Como estas?"},{"Hora":"09:32","texto":"Hoy jugas?"}]
  },
  {
    "id": 1,
    "apellido": "Lopez",
    "nombre": "Pedro",
    "telefono": "1148321267",
    "imgPerfil": "https://imgs.search.brave.com/gd1zisHKUByVtrKJHgHXBXjpj-RtBhwaL-ZSgs8a21E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2dhbGxl/cnkvUGxhbnRpbGxh/LWRlLWltYWdlbi1k/ZS1wZXJmaWwtYWJz/dHJhY3RhLW5lZ3Jh/LmpwZw",
    "estado": "Hola. Estoy usando Messenger !!",
    "mensajes": [{"Hora":"09:30","texto":"Hola amigo. Como estas?"},{"Hora":"09:32","texto":"Hoy jugas?"}]
  },
  {
    "id": 2,
    "apellido": "Guardia",
    "nombre": "Guillermo",
    "telefono": "1159149165",
    "imgPerfil": "https://reactjs.org/logo-og.png",
    "estado": "Hola. Estoy usando Messenger !!",
    "mensajes": [{"Hora":"09:30","texto":"Hola amigo. Como estas?"},{"Hora":"09:32","texto":"Hoy jugas?"}]
  },
  {
    "id": 3,
    "apellido": "Mendoza",
    "nombre": "Isabel",
    "telefono": "1132851478",
    "imgPerfil": "https://www.nobbot.com/wp-content/uploads/2023/09/PD-137x137.jpg",
    "estado": "Hola. Estoy usando Messenger !!",
    "mensajes": [{"Hora":"09:30","texto":"Hola amigo. Como estas?"},{"Hora":"09:32","texto":"Hoy jugas?"}]
  },
  {
    "id": 4,
    "apellido": "Lopez",
    "nombre": "Juan",
    "telefono": "1145321267",
    "imgPerfil": "https://reactjs.org/logo-og.png",
    "estado": "Hola. Estoy usando Messenger !!",
    "mensajes": [{"Hora":"09:30","texto":"Hola amigo. Como estas?"},{"Hora":"09:32","texto":"Hoy jugas?"}]
  },
  {
    "id": 6,
    "apellido": "Solis",
    "nombre": "Mario",
    "telefono": "114897458",
    "imgPerfil": "https://reactjs.org/logo-og.png",
    "estado": "Hola. Estoy usando Messenger !!",
    "mensajes": [{"Hora":"09:30","texto":"Hola amigo. Como estas?"},{"Hora":"09:32","texto":"Hoy jugas?"}]
  }
  
]






//----------------------------------------------------------------------------------

class baseDatosObjeto {
  constructor() {
    this.datos = require("./database.json");
  }

  asignarID() {
    let arrayID = [];
    this.datos.forEach((item) => arrayID.push(item.id));
    arrayID.sort(); //En este array ordenado busco el primer huevo y ese sera el nuevo id.

    //Si la diferencia y-x es 2 entonces Y es el nuevo valor y sera el nuevo array.
    let i = 0;
    let encontrado = false;
    let nuevoID = undefined;

    while (!encontrado && i < arrayID.length) {
      if (arrayID[i + 1] - arrayID[i] === 1) i++;
      else {
        encontrado = true;
        nuevoID = arrayID[i] + 1;
        break;
      }
    }

    if (nuevoID === undefined) nuevoID = arrayID.length;

    return nuevoID;
  }

  agregarRegistro(apellido, nombre, telefono) {
    let nuevoRegistro = {
      id: this.asignarID(),
      apellido: apellido,
      nombre: nombre,
      telefono: telefono,
      imgPerfil: defaultAvatar,
      estado: defaultEstado,
      mensajes : defaultMessage

    }

    //this.datos.push(nuevoRegistro);
    //Por algu  motivo push tira un error de objeto no exensible al ser llamado desde otro modulo
    //Alternativamente lo solucione asi y funciona
    this.datos = [...this.datos,nuevoRegistro]
  }

  meter(){

    let nuevoRegistro = {
      id: this.asignarID(),
      apellido: 'apellido',
      nombre: 'nombre',
      telefono: 'telefono',
      /*imgPerfil: defaultAvatar,
      estado: defaultEstado,
      mensajes : defaultMessage*/

    }

    console.log('regis',this.getRegistros())
    

  }

  eliminarRegistro(idRegistro) {
    let indiceElementoBuscado = this.datos.findIndex((x) => x.id === idRegistro);
    alert(indiceElementoBuscado +  " " + idRegistro)

    if (indiceElementoBuscado != -1) this.datos.splice(indiceElementoBuscado, 1);
    console.log(this.getRegistros())
  }

  getRegistros = () => this.datos;
}

//--------------------------------------------------------------------------------------------------------------------------------------


const defaultAvatar =
  "https://imgs.search.brave.com/U624KT9Sm-xy7B8zS46q1e9i-spDyB4ZMupKT6Jexiw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWN1/cmUuZ3JhdmF0YXIu/Y29tL2F2YXRhci84/NGI5MDUzMGE5NmVk/MjRhNTRjMmU1YmQ5/YzVkZjJjZD9zPTMw/JmQ9bW0mcj1y.jpeg";

const defaultMessage = [{"Hora":"09:30","texto":"Hola amigo. Como estas?"},{"Hora":"09:32","texto":"Hoy jugas?"}]
const defaultEstado = "Hola. Estoy usando Messenger !!"

var baseDatos = new baseDatosObjeto()

export { baseDatos, defaultAvatar, defaultMessage, defaultEstado };





