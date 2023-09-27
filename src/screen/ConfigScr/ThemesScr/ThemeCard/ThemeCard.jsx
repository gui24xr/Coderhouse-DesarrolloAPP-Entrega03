import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import styles from './ThemeCard.style'

const ThemeCard = ({color1}) => {

  color1='blue'
  return (
    <Pressable style={styles.cardStyle}>
       
     
        <View style={styles.colorItem2}/>
        <View style={styles.colorItem2}/>
        <View style={styles.colorItem2}/>
        <View style={styles.colorItem2}/>
        
      
      </Pressable>
  )
}

export default ThemeCard
