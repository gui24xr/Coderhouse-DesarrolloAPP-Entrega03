

import { StyleSheet } from "react-native"
import { colors } from "../../Constants/colors";

const styles = StyleSheet.create({

    
    Formulario:{

        flexDirection: 'row',
        backgroundColor: '#008080',
        width: '100%',
        justifyContent: 'center',
        alignItems: "flex-start",
        maxHeight: 200,
        paddingVertical: 10,
  
  
    },
    searchBox: {

        backgroundColor: colors.primary,
        borderColor: "#000000",
        borderRadius: 6,
        borderWidth: 1,
        width: '80%',
        marginVertical:4,
        height: 40,
        paddingHorizontal: 10,
        marginLeft: 20,
        paddingLeft:10,
      
      
      },

      icontab:{
        backgroundColor: 'transparent',
        width: 32,
        height: 32,
        alignSelf: "center",
        marginVertical: 0,
        paddingHorizontal: 10,
        
        
  
      }
    
})

export default styles
