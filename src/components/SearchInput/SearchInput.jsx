import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './SearchInput.styles'

const SearchInput = ({SetOnSearch}) => {

    const [buscado, SetBuscado] = useState('')
  
    const capturarBuscado = (text) => SetBuscado(text)

    useEffect(() => {
        
      SetOnSearch(buscado)
      
      }, [buscado])
  
  return (
    <View style={styles.Formulario}>

    <Image source={require('../../../assets/icons/busquedaicon.png')} style={styles.icontab}/>
    <TextInput
    style={styles.searchBox}
    placeholder="Buscar"
    value={buscado}
    onChangeText={capturarBuscado}
  />
    </View>
  )
}

export default SearchInput

