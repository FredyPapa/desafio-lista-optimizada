import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
    mainTitle:{
        marginTop: 60,
        flexDirection: "row",
        justifyContent: "space-around",
        fontSize:18,
        marginHorizontal: 20,
        color: "#502B1C"
      },
    content:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginHorizontal: 20,
    },
    containerList: {
        marginHorizontal: 20,
      },
      modalContent: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
      },
      modalTitleContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor:"#145430",
      },
      modalTitle: {
        fontSize: 18,
        marginVertical: 20,
        marginHorizontal: 20,
        color:"#fff"
      },
      modalText: {
        fontSize: 18,
        marginHorizontal: 20,
      },
      modalMessage: {
        fontSize: 18,
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: "bold",
      },
      modalButtonContainer:{
          flexDirection:"row",
          justifyContent:"space-between"
      }
});