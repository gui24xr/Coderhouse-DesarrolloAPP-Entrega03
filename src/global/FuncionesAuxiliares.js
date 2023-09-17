//Determina si se trata de una cadena alfabetica para determinar si realmente es un nombre.
function esPalabra(string_ingresado) {
    const regex = /^[A-Za-z]*$/;
    const esCadenaAlfabetica = regex.test(string_ingresado);
    return esCadenaAlfabetica;
  }
  
  //Determina si un telefono ingresado es valido. ( o sea si son todos numeros y si son entre 8 y 10 caracteres)
  function telefonoValido(unTelefono) {
    if (esNumero(unTelefono) && unTelefono.length>=8 && unTelefono.length<=10)return true;
    else return false;
  }
  
  function esNombreValido(unNombre){
    if (esPalabra(unNombre) && unNombre.length>=2 && unNombre.length<=15) return true;
    else return false;
  }
  
  //Determina si una cadena es numerica.
  function esNumero(string_ingresado) {
    const regex = /^[0-9,]*$/;
    const esCadenaNumerica = regex.test(string_ingresado);
    return esCadenaNumerica;
  }

  //----------- EXPORTO PARA UTILIZAR EN EL RESTO DEL PROYECTO -----------------------------------------//
  export {esPalabra,telefonoValido,esNombreValido,esNumero}