import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState,useEffect } from "react";
import React from "react";
import CardContactos from "../CardContactos/CardContactos";
import styles from "./ListaContactos.styles";

const ListaContactos = ({ datosMostrados, screen }) => {
  
//const [datosMostrados,setDatosMostrados] = useState(agenda)


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

      
      //Le paso la agenda para poder eliminar
     
      //setAgenda={setAgenda}
    />
  );

  const renderizarListaContactos = ({ item }) => (
    <CardContactos
      cardType= 'contactsList'
      id={item.id}
      nombre={item.nombre}
      apellido={item.apellido}
      telefono={item.telefono}
      imgPerfil={item.imgPerfil}
      estado={item.estado}
      //Le paso la agenda para poder eliminar
    
      //setAgenda={setAgenda}
    />
  );


  return (
    <>
      

        {screen == 'chatsScreen' ? 
        <FlatList
          style={styles.ListaContactos}
          data={datosMostrados}
          renderItem={renderizarChat}
        />
        
        :

        <FlatList
        style={styles.ListaContactos}
        data={datosMostrados}
        renderItem={renderizarListaContactos}
      />
      
      }
    </>
  );
};

export default ListaContactos;
