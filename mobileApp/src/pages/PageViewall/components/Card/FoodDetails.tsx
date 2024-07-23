import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const styles = StyleSheet.create({
  textRating: {
    letterSpacing: 2,
    paddingBottom: 5,
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
