import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './AddContactScr.styles'
import { useState } from 'react'
import {useSelector,useDispatch } from 'react-redux';
import { HeadBar,SubHeader,InputForm,ListaContactos } from '../../components'
import { baseDatos } from '../../data/agendaDatos'

const AddContactScr = ({ navigation, route }) => {

    //const [datosMostrados, setDatosMostrados] = useState(baseDatos.getRegistros())
    const datosMostrados = useSelector(state => state.datos.datosMostrados)
 
  //setDatosMostrados lo tengo que reemplazar x un action que reemplaza datos.
    const accionarRenderizado = ()=> setDatosMostrados(baseDatos.getRegistros())
 
    return (
    <>
    
    <HeadBar title='Messenger'/>
    <SubHeader navigation={navigation}/>
    <InputForm />
    <ListaContactos datosMostrados={datosMostrados} formaRenderizado={'allContacts'}/>
    </>
  )
}

export default AddContactScr

