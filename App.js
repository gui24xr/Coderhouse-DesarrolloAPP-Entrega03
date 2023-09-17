import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import Card from './src/components/CardContactos/CardContactos' //Aca se importa sin llaves
import InputForm from './src/components/InputForm/InputForm';

import CardContactos from './src/components/CardContactos/CardContactos';
import ListaContactos from './src/components/ListaContactos/ListaContactos';
import { baseDatos as agendaDatosInicial , verDatos, updateDataBase, asignarId} from './src/data/agendaDatos';



export default function App() {

  //Este es el estado actual de la agenda.
  const [agenda,setAgenda] = useState(agendaDatosInicial)

  



  function funcionAgregarDatos(nombreIngresado,apellidoIngresado,telefonoIngresado,imgPerfilIngresado){
    setAgenda((prevState) => [...prevState,{id:asignarId(agenda), apellido:apellidoIngresado,nombre: nombreIngresado, telefono:telefonoIngresado,imgPerfil:imgPerfilIngresado}]);
    updateDataBase(agenda)
  }

  return (
   
    <View style={styles.container}>


    <Text>Funcionando</Text>
    <InputForm  funcionAgregarDatos={funcionAgregarDatos}/>
    <ListaContactos agenda={agenda} setAgenda={setAgenda}/>

    <Button title='Agenda' onPress={verDatos}/>
    
    </View>

  )
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/*  <View style={styles.container}>
     <Card  parametro1={'Hola'} 
            parametro2={'Hola'} 
            parametro3={'Hola'}/>

            <Button title="Variable" onPress={()=> alert('Variable: ' + misDatos)} />
            <Button title="Variable" onPress={()=> alert('H')} />
            
         
    </View>*/ 