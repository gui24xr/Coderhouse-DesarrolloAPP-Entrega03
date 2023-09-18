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



const Home = () => {
 

    const [datosMostrados, setDatosMostrados] = useState(baseDatos.getRegistros())
    const [screenActiva,setScreenActiva] = useState('chatsScreen')
    

  return (
    <View style={styles.container}>
        <HeadBar title="Mis Contactos" />
        <SubHeader />
        <ListaContactos datosMostrados={datosMostrados} screen={screenActiva} />
    </View>
  );
}

export default Home

