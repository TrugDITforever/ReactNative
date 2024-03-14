import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
    height: "95%",
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  boxword: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
  },
  textbox: {
    fontFamily: "Nunito-Bold",
    fontSize: 18,
    fontWeight: "600",
    width: "77%",
    marginLeft: 10,
  },
  cardContain: {
    width: "100%",
    height: 180,
    position: "relative",
  },
  cardContainBorder: {
    marginRight: 20,
    width: 380,
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 25,
    elevation: 2,
    shadowColor: "#000",
  },
  textViewall: {
    fontSize: 13,
    textAlign: "center",
    alignItems: "center",
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRadius: 10,
    fontFamily: "Nunito-Regular",
  },
  containerForRatingandLike: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
  },
  textRating: {
    letterSpacing: 2,
    paddingBottom: 5,
  },
  buttonlike: {
    margin: 10,
    width: 32,
    height: 32,
    backgroundColor: "#fff",
    borderRadius: 20,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  containerForNameofFood: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textNameFood: {
    borderRadius: 10,
    fontSize: 18,
    fontFamily: "Nunito-Bold",
    paddingBottom: 5,
  },
  imageViewContainer: {
    height: 30,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  imageView: {
    width: 27,
    height: 27,
    borderRadius: 50,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#fff",
    marginRight: -10,
  },
});
const FoodeDetails = ({}) => {
  return (
    <View style={styles.containerForNameofFood}>
      <Text style={styles.textNameFood}>Veggie cheese extravaganza</Text>
      {/* Rating star */}
      <Text style={styles.textRating}>
        <AntDesign name={"star"} color={"orange"} size={11} />
        <AntDesign name={"star"} color={"orange"} size={11} />
        <AntDesign name={"star"} color={"orange"} size={11} />
        <AntDesign name={"star"} color={"orange"} size={11} />
        <AntDesign name={"star"} color={"orange"} size={11} />
      </Text>
      {/* people view */}
      <View style={styles.imageViewContainer}>
        <Image
          source={require("../../../../../assets/image/avatar.jpg")}
          style={styles.imageView}
        />
        <Image
          source={require("../../../../../assets/image/avatar.jpg")}
          style={styles.imageView}
        />
        <Image
          source={require("../../../../../assets/image/avatar.jpg")}
          style={styles.imageView}
        />
        <Text
          style={{
            fontFamily: "Nunito-Bold",
            marginLeft: 15,
            opacity: 0.5,
          }}
        >
          +200 Views
        </Text>
      </View>
      {/* subDetails */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* calories */}
        <Text
          style={{
            fontFamily: "Nunito-Medium",
            opacity: 0.6,
          }}
        >
          <Ionicons name={"flame-outline"} size={16} /> 123 calories
        </Text>
        {/* time cooking */}
        <Text
          style={{
            fontFamily: "Nunito-Medium",
            opacity: 0.6,
          }}
        >
          <Ionicons name={"timer-outline"} size={16} /> 15-20 mins
        </Text>
        {/* Level */}
        <Text
          style={{
            fontFamily: "Nunito-Medium",
            opacity: 0.6,
          }}
        >
          <Ionicons name={"flash-outline"} size={16} /> Easy
        </Text>
        <Text
          style={{
            fontFamily: "Nunito-Medium",
            opacity: 0.6,
          }}
        >
          <Ionicons name={"git-branch-outline"} size={16} /> Serves 4
        </Text>
      </View>
    </View>
  );
};
export default FoodeDetails;
