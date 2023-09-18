import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './AddContactScr.styles'
import { useState } from 'react'
import { HeadBar,SubHeader,InputForm,ListaContactos } from '../../components'
import { baseDatos } from '../../data/agendaDatos'

const AddContactScr = ({ navigation, route }) => {

    const [datosMostrados, setDatosMostrados] = useState(baseDatos.getRegistros())

    const accionarRenderizado = ()=> setDatosMostrados(baseDatos.getRegistros())
  return (
    <>
    
    <HeadBar title={'Pepe MSN'}/>
    <SubHeader navigation={navigation}/>
    <InputForm accionarRenderizado={accionarRenderizado}/>
    <ListaContactos datosMostrados={datosMostrados} screen={''}/>
    </>
  )
}

export default AddContactScr

