import { StyleSheet } from "react-native"
import { colors } from "../../Constants/colors";

const styles = StyleSheet.create({

    
    Formulario:{

     
      backgroundColor: '#008080',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: 200,
      paddingVertical: 30,
      


    },
    InputBox: {

        backgroundColor: colors.primary,
        borderColor: "#000000",
        borderRadius: 6,
        borderWidth: 1,
        width: '90%',
        marginVertical:4,
        height: 40,
        paddingHorizontal: 10,
      
      },
      BotonFormulario:{
        marginTop: 100,

      }
})

export default styles
