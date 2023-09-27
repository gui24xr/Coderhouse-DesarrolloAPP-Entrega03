import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './ConfigScr.styles'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemesScr,OptionsScr} from './index'
const Tab = createBottomTabNavigator();



//Este componente es la pantalla de configuraciones que tendra las pestañas themes y options.
const ConfigScr = () => {
  return (
    <>
    <Tab.Navigator
            screenOptions={{headerShown: false, tabBarStyles: styles.tabBar}}>
    <Tab.Screen name="Themes" component={ThemesScr} />
    <Tab.Screen name="General" component={OptionsScr} />
    </Tab.Navigator>
 
    </>
  )
}

export default ConfigScr

