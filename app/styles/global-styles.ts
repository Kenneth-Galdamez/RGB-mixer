import { Colors } from "../../constants/Colors"
import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
    background:{
        backgroundColor: Colors.backgorund,
        flex: 1
    },

    colorContainer:{
        flex: 1,
        justifyContent: "flex-start",
        paddingBottom: 20,
    },

    canvas:{
        backgroundColor: "white",
        marginHorizontal: 50,
        marginTop: 150,
        height:200,
    },

    button: {
        height:70,
        width:70,
        backgroundColor: Colors.buttonBackground,
        borderRadius: 20,
        justifyContent: "center",
        marginHorizontal: 70
    },

    row: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 40,
        paddingHorizontal: 5
    },

    input: {
        height: 70,
        width: 70,
        borderWidth: 1,
        borderColor: "gray",
        backgroundColor:Colors.textBar,
        fontSize: 18, 
        fontWeight: "bold",
        justifyContent: "center",
        textAlign: "center",
      },

    
    buttonText: {
        textAlign: "center",
        padding: 10,
        fontSize: 30,
        color: Colors.textPrimary,
        fontWeight: 900
    },

})