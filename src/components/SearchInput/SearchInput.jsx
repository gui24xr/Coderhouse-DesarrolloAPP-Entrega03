import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './SearchInput.styles'
import { filtrarDatos } from '../../features/datos/datosSlice'
import { useDispatch } from 'react-redux'

const SearchInput = () => {


  //Aca la cuestion es capturo el ingreeso y mediante un useeffect actualizo datos mostrados
    const dispatch = useDispatch()
    const [buscado, SetBuscado] = useState('')

    useEffect(() => {
        
      dispatch(filtrarDatos(buscado))
      
      }, [buscado])
  
  return (
    <View style={styles.Formulario}>

      <Image source={require('../../../assets/icons/busquedaicon.png')} style={styles.icontab}/>
      
      <TextInput
      style={styles.searchBox}
      placeholder="Buscar"
      value={buscado}
      onChangeText={(text) => SetBuscado(text)}
    />
    </View>
  )
}

export default SearchInput

