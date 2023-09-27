import { StyleSheet} from "react-native";


const styles = StyleSheet.create({

    cardStyle:{
        backgroundColor:'green', 
        padding: 20, 
        marginHorizontal:40, 
        marginVertical:20, 
        flexDirection:'row', 
        justifyContent: 'space-evenly',
  
    },
    colorItem1:{
        marginHorizontal: 10,
        marginVertical: 20,
        flex:0.5,
        backgroundColor:'blue', 
        minHeight: 50,
        
    },

    colorItem2:{
        marginHorizontal: 10,
        marginVertical: 20,
        flex:0.5,
        backgroundColor:'red', 
        minHeight: 50,
        
    },

})

export default styles


