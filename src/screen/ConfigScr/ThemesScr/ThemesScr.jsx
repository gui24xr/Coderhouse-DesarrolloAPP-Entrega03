import { Text, View, FlatList, Pressable } from 'react-native'
import { HeadBar,SubHeader } from '../../../components'
import React from 'react'
import styles from '../ConfigScr.styles'
import ThemeCard from './ThemeCard/ThemeCard'








const ThemesScr = ({navigation,route}) => {
  return (
    <>
    <HeadBar title='Messenger-Themes'/>
    <SubHeader navigation={navigation} />
    <ThemeCard/>
    </>

  )
}

export default ThemesScr

