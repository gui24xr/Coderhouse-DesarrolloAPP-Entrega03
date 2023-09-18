import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native'
import { useState } from 'react'
import React from 'react'
import styles from './CardContactos.styles'

const CardContactos = (props) => {
/*
  const [itemSeleccionado, setItemSeleccionado] = useState(0);

  
  const seleccionarItem = () => {
    //Selecciono el item presionado.
    setItemSeleccionado(props.id)
    //Aca iria el box de aviso

    //Aca llamo a la funcion eliminadora.
    let copiaAgenda = props.datos; //La copio para trabajar sobre una agenda y luego pasar como parametro a set agenda.
    let indiceElementoBuscado = props.datos.findIndex((x) => x.id === itemSeleccionado);
    copiaAgenda.splice(indiceElementoBuscado, 1);
    props.setAgenda([...copiaAgenda]);
        
  };*/

  return (

    <>
    { props.cardType == 'chat'  ?
                <Pressable style={styles.CardsContactos} 
                onLongPress={()=> alert("Proximamente abrir chat")}> 
                  
                  <Image source={{uri:props.imgPerfil}} style={styles.fotoPerfil}/>
                  {/*<Text style={styles.peopleTextCard}>{props.id}</Text>*/}
                  <View>
                    <Text style={styles.peopleTextCard}>{props.apellido}  {props.nombre}  {props.ultimoMensajeHora}</Text>
                    <Text style={styles.numberTextCard}>{props.ultimoMensaje}</Text>
                  </View>
                  {/*<Button title="Eliminar" onPress={()=>alert("S")} />*/}
    
  </Pressable>

  :

                    <Pressable style={styles.CardsContactos} 
                    onLongPress={()=> alert("Funcionalidad en desarrollo!")}> 

                  <Image source={{uri:props.imgPerfil}} style={styles.fotoPerfil}/>
                  {/*<Text style={styles.peopleTextCard}>{props.id}</Text>*/}
                  <View>
                  <Text style={styles.peopleTextCard}>{props.apellido +'  '+ props.nombre}</Text>
                  <Text style={styles.numberTextCard}>{props.telefono}</Text>
                  <Text style={styles.numberTextCard}>{props.estado}</Text>
                  </View>
                  {/*<Button title="Eliminar" onPress={()=>alert("S")} />*/}

                  </Pressable>

  }
  </>

  )
}

export default CardContactos

