import { StyleSheet, Text, View, Image, Button, Pressable } from "react-native";
import { useState } from "react";
import React from "react";
import styles from "./CardContactos.styles";

/* 

    RENDERIZADO CONDICIONAL MODIFICADO PARA GANAR ESCALABILIDAD 
 En lugar de utilizar operadores ternarios en los return me parecio mejor usar directamentre condicionales y depende el parametro
 recibido en props.cardType(Que viene de ListaContactos) hago un retorno u otro y si eventualmente necesito agregar otro tipo de card uso
 otro if, ya que utilizando operadores ternarios en el return como en la actualizacion anterior me limitaba a 2 opciones. 
 
 */

const CardContactos = (props) => {

  if (props.cardType == "chat")
    return (
      <>
        <Pressable
          style={styles.CardsContactos}
          onLongPress={() => alert("Proximamente abrir chat")}
        >
          <Image source={{ uri: props.imgPerfil }} style={styles.fotoPerfil} />
          {/*<Text style={styles.peopleTextCard}>{props.id}</Text>*/}
          <View>
            <Text style={styles.peopleTextCard}>
              {props.apellido} {props.nombre} {props.ultimoMensajeHora}
            </Text>
            <Text style={styles.numberTextCard}>{props.ultimoMensaje}</Text>
          </View>
          {/*<Button title="Eliminar" onPress={()=>alert("S")} />*/}
        </Pressable>
      </>
    );


  if (props.cardType == "contactCard")
    return (
      <>
        <Pressable
          style={styles.CardsContactos}
          onLongPress={() => alert("Funcionalidad en desarrollo!")}
        >
          <Image source={{ uri: props.imgPerfil }} style={styles.fotoPerfil} />
          {/*<Text style={styles.peopleTextCard}>{props.id}</Text>*/}
          <View>
            <Text style={styles.peopleTextCard}>
              {props.apellido + "  " + props.nombre}
            </Text>
            <Text style={styles.numberTextCard}>{props.telefono}</Text>
            <Text style={styles.numberTextCard}>{props.estado}</Text>
          </View>
          {/*<Button title="Eliminar" onPress={()=>alert("S")} />*/}
        </Pressable>
      </>
    );
};

export default CardContactos;





