import { StyleSheet } from "react-native"
import { colors } from "../../Constants/colors";


const styles = StyleSheet.create({
    
    container:{
        
      
        backgroundColor: colors.quaternary,
        width: '100%',
        minHeight: 60,
       
        borderWidth: 0,
    },
       
    text: {
      width: '100%',
      backgroundColor: 'transparent',
      color: 'white',
      fontSize: 35,
      fontFamily: 'PoppinsLight',
  
    
      paddingTop: 25,
    },
  })

  export default styles

