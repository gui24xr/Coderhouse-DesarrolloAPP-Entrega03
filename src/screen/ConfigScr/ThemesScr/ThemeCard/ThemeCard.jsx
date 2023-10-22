import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import styles from './ThemeCard.style'

//const estilo = {}

// Este objeto le da estilo a cada color de las paletas y lo anexo luego al color que vendra por parametro.
const formaCard = {marginHorizontal: 10,marginVertical: 20,flex:0.5, minHeight: 50}


//Componenente 
const ThemeCard = ({color1,color2, color3,color4}) => {


  return (


    <Pressable style={styles.cardStyle}>
       
     
        <View style={{...formaCard,backgroundColor:color1}} />
        <View style={{...formaCard,backgroundColor:color2}} />
        <View style={{...formaCard,backgroundColor:color3}} />
        <View style={{...formaCard,backgroundColor:color4}} />
        
      
      </Pressable>
  )
}

export default ThemeCard


/*
{...formaCard,backgroundColor:color1}
 esto es la union de 2 objetos

*/