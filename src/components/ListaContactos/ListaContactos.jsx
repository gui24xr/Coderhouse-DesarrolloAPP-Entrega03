import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState,useEffect } from "react";
import React from "react";
import CardContactos from "../CardContactos/CardContactos";
import styles from "./ListaContactos.styles";



/* 

    RENDERIZADO CONDICIONAL MODIFICADO PARA GANAR ESCALABILIDAD 
 En lugar de utilizar operadores ternarios en los return me parecio mejor usar directamentre condicionales y depende el parametro
 recibido por el componentre en el parametro 'formaRenderizado ' hago un retorno u otro y si eventualmente necesito agregar otro tipo renderizado
 uso otro if o un switch, ya que utilizando operadores ternarios en el return como en la actualizacion anterior me limitaba a 2 opciones. 
 
 */


 
const renderizarChat = ({ item }) => (
  <CardContactos
    cardType= 'chat'
    id={item.id}
    nombre={item.nombre}
    apellido={item.apellido}
    telefono={item.telefono}
    imgPerfil={item.imgPerfil}
    ultimoMensaje={item.mensajes[0].texto}
    ultimoMensajeHora={item.mensajes[0].Hora}

    
    
  />
);

const renderizarListaContactos = ({ item }) => (
  <CardContactos
    cardType= 'contactCard'
    id={item.id}
    nombre={item.nombre}
    apellido={item.apellido}
    telefono={item.telefono}
    imgPerfil={item.imgPerfil}
    estado={item.estado}
   
  />
);

//Componente


const ListaContactos = ({ datosMostrados, formaRenderizado }) => {
  
  //De acuerdo a el parametro recibido en formaRenderizado renderizo de una manera u otra.
  if (formaRenderizado == 'chatsScreen'){
  return (
    <> <FlatList style={styles.ListaContactos}  data={datosMostrados} renderItem={renderizarChat} /> </>);
  }

  if (formaRenderizado == 'allContacts'){
  return (
    <> <FlatList style={styles.ListaContactos}  data={datosMostrados} renderItem={renderizarListaContactos}/> </>);
  }


};

export default ListaContactos;
