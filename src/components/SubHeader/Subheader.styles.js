import { StyleSheet } from "react-native"
import { colors } from "../../Constants/colors";


const styles = StyleSheet.create({
    
    container:{

        backgroundColor: colors.tertiary,
        width: '100%',
        justifyitems: 'center',
        flexDirection: 'row',
        border: 10,
    },

    tabButtonTipo1: {
      flexDirection: 'row',
      backgroundColor: 'transparent',
      color: 'white',
     
      alignSelf: 'center',
    
      paddingTop: 25,
      width: '25%',
      alignContent: "space-between",
      borderWidth: 1,
      
      borderTopRightRadius: 10,
      
      
    },
    tabButtonTipo2: {
      backgroundColor: 'transparent',
      color: 'white',
     
      alignSelf: 'center',
    
      paddingTop: 25,
      width: '12.5%',
      alignContent: "center",
     
      
      borderTopRightRadius: 20,
      
      
    },
       
   textTab: {
      backgroundColor: 'transparent',
      color: 'white',
      fontSize: 10,
      fontFamily: 'PoppinsLight',
      alignSelf: 'center',
    
      paddingTop: 25,
      marginBottom: 10,

    },
    icontabTipo1:{
      
      backgroundColor: 'transparent',
      width: 25,
      height: 25,
      alignSelf: "center",
      marginVertical: 0,
          

    },
    icontabTipo2:{
      backgroundColor: 'transparent',
      width: 45,
      height: 45,
      alignSelf: "center",
      marginVertical: 0,
          

    }
  })

  export default styles

