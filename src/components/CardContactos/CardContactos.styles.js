import { StyleSheet } from "react-native"
import { colors } from "../../Constants/colors";

const styles = StyleSheet.create({
    
  CardsContactos: {
      backgroundColor: colors.tertiary,
      width: "100%",
      borderRadius: 12,
      
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      
      paddingHorizontal:10,

      paddingVertical:8,
      marginVertical: 3,
    },
    fotoPerfil: {
      width: 45,
      height: 45,
      alignSelf: "stretch",
      backgroundColor: "#00000000",
      alignItems: "flex-start",
      borderRadius: 25,
    },
    fotoContainer: {
      backgroundColor: "#3CB371",
   
      alignItems: "center",
      justifyContent: "flex-start",
    },
    datosContainer: {
      flexDirection: "column",
    },
    peopleTextCard: {
      color: "#FFFFFF",
   
      marginBottom: 5,
    },
    numberTextCard: {
      color: "#FFFFFF",
  
      marginBottom: 5,
    },
  });

  export default styles