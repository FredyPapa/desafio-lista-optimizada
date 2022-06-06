import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerItemList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  itemList: {
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: "#C18864",
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
