import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useState } from 'react'
import React from 'react'
import CardContactos from '../CardContactos/CardContactos'
import styles from './ListaContactos.styles'

const ListaContactos = ({agenda,setAgenda}) => {



  
  const funcionRenderizadora = (  
    { item }) => <CardContactos id={item.id}  nombre={item.nombre}  apellido={item.apellido}
                                                                telefono={item.telefono}
                                                                imgPerfil={item.imgPerfil}
                                                               
                                                                //Le paso la agenda para poder eliminar
                                                                datos={agenda}
                                                                setAgenda={setAgenda}
                                                                />
      





  return (
    <View>
     
    <Text style={styles.AgendaHeader}>Mis Contactos</Text>
    
      
    <FlatList
    style={styles.ListaContactos}
    data={agenda}
    renderItem={funcionRenderizadora}
    />

    </View>
  )
}

export default ListaContactos