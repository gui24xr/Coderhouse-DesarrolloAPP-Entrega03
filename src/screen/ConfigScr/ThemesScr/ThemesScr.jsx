import { Text, View, FlatList, Pressable, SectionList } from 'react-native'
import { HeadBar,SubHeader } from '../../../components'
import React from 'react'
import styles from '../ConfigScr.styles'
import { colorThemes } from '../../../Constants/colors'
import ThemeCard from './ThemeCard/ThemeCard'



const ThemesScr = ({navigation,route}) => {

  const renderizarThemesOptions = ({item}) => <ThemeCard color1={item.primary} color2={item.secondary} color3={item.terciary} color4={item.quaternary}/>

  return (
    <>
    <HeadBar title='Messenger-Themes'/>
    <SubHeader navigation={navigation} />
    <Text>Seleccionar un tema: </Text>
    <FlatList 
      data={colorThemes}
      renderItem={renderizarThemesOptions}
      />
    </>

  )
}

export default ThemesScr

