import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React from "react";
import { useState, prevState } from "react";
import {telefonoValido,esNombreValido} from '../../global/FuncionesAuxiliares'
import styles from './InputForm.styles'

import {defaultAvatar, baseDatos} from '../../data/agendaDatos';

//Este props me va a traer la funcion agregar datos y una variable para guardarle lo que hay escrito en el form.
//Ojo xq el otro va a ser un form de busqueda, va a tener que ser otro.
const InputForm = (props) => {
  
  //Estados
  const [nombreIngresado, setNombreIngresado] = useState("");
  const [apellidoIngresado, setApellidoIngresado] = useState("");
  const [telefonoIngresado, setTelefonoIngresado] = useState("");

  //Funciones
  const capturarNombreIngresado = (text) => {setNombreIngresado(text);}
  const capturarApellidoIngresado = (text) => setApellidoIngresado(text); 
  const capturarTelefonoIngresado = (text) => setTelefonoIngresado(text); //Faltara luego agregar validaciones que sean numeros.
 
  //const getValorInput = () => alert(nombreIngresado + " " + telefonoIngresado);

  const ingresarDatos = () => {
    
    if (telefonoValido(telefonoIngresado) && esNombreValido(nombreIngresado) && esNombreValido(apellidoIngresado)) {
        
       //La base de datos asigna ID x si sola. 
     
      baseDatos.agregarRegistro(apellidoIngresado,nombreIngresado,telefonoIngresado)
      props.accionarRenderizado(); 
      alert("Contacto agregado con exito !")
     
      
    }
    
        else
      alert(
        "Ingrese datos validos!\n Nota: Apellido y nombres 2 a 15 carateres, telefonos 8 a 10 digitos."
      ); //Aca iria el box de aviso 
  };

  return (
    <View style={styles.Formulario}>

       
    <TextInput
    style={styles.InputBox}
    placeholder="Apellido"
    value={apellidoIngresado}
    onChangeText={capturarApellidoIngresado}
  />
      <TextInput
        style={styles.InputBox}
        placeholder="Nombre"
        value={nombreIngresado}
        onChangeText={capturarNombreIngresado}
      />

      

      <TextInput
        style={styles.InputBox}
        placeholder="Telefono"
        keyboardType="numeric"
        value={telefonoIngresado}
        onChangeText={capturarTelefonoIngresado}

      />

      <Button
        style={styles.BotonFormulario}
        title="Ingresar"
        onPress={ingresarDatos}   
      />

    </View>
  );
};

export default InputForm;

