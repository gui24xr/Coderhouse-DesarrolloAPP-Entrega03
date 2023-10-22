import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React from "react";
import { useState } from "react";
import {telefonoValido,esNombreValido} from '../../global/FuncionesAuxiliares'
import styles from './InputForm.styles'

import {useDispatch } from 'react-redux';
import { agregarDatos } from '../../features/datos/datosSlice';


const InputForm = () => {
  
  const dispatch = useDispatch()
  //Usestates para ingreso de datos
  const [nombreIngresado, setNombreIngresado] = useState("");
  const [apellidoIngresado, setApellidoIngresado] = useState("");
  const [telefonoIngresado, setTelefonoIngresado] = useState("");

  
  const ingresarDatos = () => {
    
    if (telefonoValido(telefonoIngresado) && esNombreValido(nombreIngresado) && esNombreValido(apellidoIngresado)) {
        
       //ACA TENGO QUE CAMBIAR POR UN ACTION DE REDUX SOBRE LA BASE DE DATOS
       /* Necesito: 1- Que la action actue sobre la BD guardando los datos. 2- Que la misma action actualice los datosMostrados */
      
       //Voy a a guardar los datos en un objeto para pasar como action.
      const datosNuevoContacto = { 
        apellidoIngresado:apellidoIngresado, 
        nombreIngresado: nombreIngresado,
        telefonoIngresado: telefonoIngresado
      }
      
      /*Ejecuto accion mediante dispatch con los datos*/     
      dispatch(agregarDatos(datosNuevoContacto))

      /*Aviso que la operacion se dio con exito */
      alert("Contacto agregado con exito !")
     
      
    }
    
        else
      alert(
        "Ingrese datos validos!\n Nota: Apellido y nombres 2 a 15 carateres, telefonos 8 a 10 digitos."
      ); 
  };

  return (
    <View style={styles.Formulario}>

       
    <TextInput
    style={styles.InputBox}
    placeholder="Apellido"
    value={apellidoIngresado}
    onChangeText={(text) => setApellidoIngresado(text)}
  />
      <TextInput
        style={styles.InputBox}
        placeholder="Nombre"
        value={nombreIngresado}
        onChangeText={(text) => {setNombreIngresado(text);}}
      />

      

      <TextInput
        style={styles.InputBox}
        placeholder="Telefono"
        keyboardType="numeric"
        value={telefonoIngresado}
        onChangeText={(text) => setTelefonoIngresado(text)}

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

