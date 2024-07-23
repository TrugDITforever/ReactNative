import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
interface FoodInfo {
  _id: string;
  foodname: string;
  foodImage: string;
}
interface Props {
  foodname: string;
  username: string;
  userProfile: string;
  foodData?: FoodInfo[];
}
const FoodeDetails: React.FC<Props> = ({ foodname, username, userProfile }) => {
  return (
    <View style={styles.containerForNameofFood}>
      <Text style={styles.textNameFood}>{foodname}</Text>
      <View style={styles.containerForRatingandLike}>
        {/* rating, level, love */}
        <View style={styles.ratingContain}>
          {/* for rating */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <AntDesign name={"star"} size={16} color={"orange"} />
            </View>
            <Text style={styles.textRating}>4.5</Text>
          </View>
          {/* for like */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name={"heart"} size={16} color={"red"} />
            <Text style={styles.textRating}>273k</Text>
          </View>
        </View>
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
          <Ionicons name={"flame-outline"} size={16} />
          123 calories
        </Text>
        {/* time cooking */}
        <Text
          style={{
            fontFamily: "Nunito-Medium",
            opacity: 0.6,
          }}
        >
          <Ionicons name={"timer-outline"} size={16} />
          20 mins
        </Text>
        {/* Level */}
        <Text
          style={{
            fontFamily: "Nunito-Medium",
            opacity: 0.6,
          }}
        >
          <Ionicons name={"flash-outline"} size={16} />
          Easy
        </Text>
        <Text
          style={{
            fontFamily: "Nunito-Medium",
            opacity: 0.6,
          }}
        >
          <Ionicons name={"git-branch-outline"} size={16} />
          Serves 4
        </Text>
      </View>
    </View>
  );
};
export default FoodeDetails;
const styles = StyleSheet.create({
  textRating: {
    paddingLeft: 5,
    fontFamily: "Nunito-Regular",
  },
  containerForRatingandLike: {
    flexDirection: "row",
    width: "100%",
    paddingBottom: 10,
    paddingTop: 10,
  },
  ratingContain: {
    width: "27%",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "Nunito-semiBold",
  },
  containerForNameofFood: {
    marginTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textNameFood: {
    borderRadius: 10,
    fontSize: 18,
    fontFamily: "Nunito-Bold",
  },
});
