import { StyleSheet } from "react-native"
import { colors } from "../../Constants/colors";

const styles = StyleSheet.create({
    CardsContactos: {
      backgroundColor: colors.tertiary,
      width: "100%",
      borderRadius: 11,
      flex: 2,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      fontWeight: "bold",
      
      paddingHorizontal:10,

      paddingVertical:8,
      marginVertical: 3,
    },
    fotoPerfil: {
      width: 35,
      height: 35,
      alignSelf: "stretch",
      backgroundColor: "#00000000",
      alignItems: "flex-start",
      borderRadius: 25,
    },
    fotoContainer: {
      backgroundColor: "#3CB371",
      width: "10%",
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