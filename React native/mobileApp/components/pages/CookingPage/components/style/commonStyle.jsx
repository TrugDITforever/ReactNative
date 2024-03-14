import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  containerFordetails: {
    marginLeft: 15,
    marginTop: 15,
    marginRight: 10,
  },
  headerTextcontain: {
    backgroundColor: "#000",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "flex-start",
    paddingTop: 5,
    paddingBottom: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    elevation: 1,
    shadowColor: "#000",
  },
  headerText: {
    fontFamily: "Nunito-Bold",
    fontSize: 20,
    color: "#fff",
    paddingLeft: 5,
  },
  textDetais: {
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    paddingTop: 10,
  },
});
