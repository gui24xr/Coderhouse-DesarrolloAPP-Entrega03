//----------------------------------------------------------------------------------

class baseDatosObjeto {
  constructor() {
    this.datos = require("./database.json");
  }

  asignarID() {
    let arrayID = [];
    this.datos.map((item) => arrayID.push(item.id));
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

    };
    this.datos.push(nuevoRegistro);
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

var baseDatos = new baseDatosObjeto();
export { baseDatos, defaultAvatar };
