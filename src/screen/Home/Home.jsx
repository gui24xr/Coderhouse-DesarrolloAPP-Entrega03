import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";


//Datos
import { baseDatos } from "../../data/agendaDatos";
//Estilos
import styles from './Home.styles';

//Componentes
import { HeadBar } from "../../components";
import { SubHeader } from "../../components";
import { ListaContactos } from "../../components";
import {useSelector } from 'react-redux';



const Home = ({ navigation, route }) => {
 
  
    //const [datosMostrados, setDatosMostrados] = useState(baseDatos.getRegistros())
    const datosMostrados = useSelector(state => state.datos.datosMostrados)
 
    

  return (
    <View style={styles.container}>
        <HeadBar title='Messenger' />
        <SubHeader navigation={navigation}/>
        <ListaContactos datosMostrados={datosMostrados} formaRenderizado='chatsScreen' />
    </View>
  );
}

export default Home

