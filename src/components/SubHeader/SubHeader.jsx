import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import styles from './Subheader.styles'


const SubHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
    
    <Pressable style={styles.tabButtonTipo1} onPressIn={()=> navigation.navigate('Home')}>
    <Image source={require('../../../assets/icons/icon_chat.png')} style={styles.icontabTipo1}/>
    <Text style={styles.textTab}>CHAT</Text>
    </Pressable>

    <Pressable style={styles.tabButtonTipo1} onPressIn={()=> alert("Funcionalidad en desarrollo!")}>
    <Image source={require('../../../assets/icons/icon_estados.png')} style={styles.icontabTipo1}/>
    <Text style={styles.textTab}>ESTADOS</Text>
    </Pressable>

    <Pressable style={styles.tabButtonTipo1} onPressIn={()=> alert("Funcionalidad en desarrollo")}>
    <Image source={require('../../../assets/icons/icon_llamadas.png')} style={styles.icontabTipo1}/>
    <Text style={styles.textTab}>LLAMADAS</Text>
    </Pressable>


    <Pressable style={styles.tabButtonTipo2} onPressIn={()=> navigation.navigate('AddContactScr')}>
    <Image source={require('../../../assets/icons/icon_adduser.png')} style={styles.icontabTipo2}/>
   
    </Pressable>

    <Pressable style={styles.tabButtonTipo2} onPressIn={()=> navigation.navigate('SearchScr')}>
    <Image source={require('../../../assets/icons/icon_busqueda.png')} style={styles.icontabTipo2}/>

    </Pressable>

    <Pressable style={styles.tabButtonTipo2} onPressIn={()=> navigation.navigate('ConfigScr')}>
    <Image source={require('../../../assets/icons/icon_config.png')} style={styles.icontabTipo2}/>
   
    </Pressable>

  </View>
  )
}

export default SubHeader
