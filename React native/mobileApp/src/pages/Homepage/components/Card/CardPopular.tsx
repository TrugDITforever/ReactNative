import * as React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import commonStyle from "./commonstyles/style";
import Card from "../../../../components/Card/CardPopular";

interface Prop {
  navigation?: any;
  foodData?: any;
  dispatch?: any;
}
const CardPopular: React.FC<Prop> = ({ navigation, foodData, dispatch }) => {
  const screenWidth = Dimensions.get("window");
  const [liked, setlike] = React.useState(
    Array.from({ length: 8 }, () => false)
  );
  const handlePress = React.useCallback(
    (index: number) => {
      setlike((prevLiked) => {
        const newLikes = [...prevLiked];
        newLikes[index] = !newLikes[index];
        return newLikes;
      });
    },
    [liked]
  );
  return (
    <View style={[styles.container]}>
      <View style={styles.boxword}>
        <Text style={styles.textbox}>Popular</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Viewall")}>
          <Text style={commonStyle.textViewall}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {foodData &&
          foodData.map((value: any, index: number) => (
            <Card
              dispatch={dispatch}
              foodId={value._id}
              key={index}
              index={index}
              navigation={navigation}
              image={value.foodImage}
              nameofFood={value.foodName}
            />
          ))}
      </ScrollView>
    </View>
  );
};
export default CardPopular;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 15,
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
    marginLeft: 15,
  },
  cardContain: {
    width: "100%",
    height: 150,
    position: "relative",
  },
  cardContainBorder: {
    width: 180,
    height: 230,
    borderRadius: 20,
    padding: 5,
    marginLeft: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  marginLastIndex: {
    marginRight: 15,
  },
  textViewall: {
    fontSize: 14,
    textAlign: "center",
    alignItems: "center",
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRadius: 10,
    fontFamily: "Nunito-Medium",
  },
  containerForRatingandLike: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
  },
  textRating: {
    paddingLeft: 5,
    opacity: 0.5,
    fontFamily: "Nunito-Medium",
  },
  containerForNameofFood: {
    bottom: 0,
    marginLeft: 5,
  },
  textNameFood: {
    borderRadius: 10,
    fontSize: 16,
    fontFamily: "Nunito-Bold",
  },
});
