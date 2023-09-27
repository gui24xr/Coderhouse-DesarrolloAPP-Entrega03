import { Text, View, Switch } from 'react-native'
import { useState } from 'react'
import React from 'react'
import { HeadBar,SubHeader } from '../../../components'
import styles from '../ConfigScr.styles'

const OptionsScr = ({navigation,route}) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);




  return (
    <>
    <HeadBar title='Messenger-Options'/>
      <SubHeader navigation={navigation} />

      <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
    </>
  )
}

export default OptionsScr

