import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './Headbar.styles'

const HeadBar = ({title}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
  )
}

export default HeadBar

