import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { usefetchFoodByID } from "../../features/authentication/hooks/useFetchFoodById";
import { Prop } from "./commonProp";
const CardCollections: React.FC<Prop> = ({
  navigation,
  image,
  index,
  foodId,
  nameofFood,
  dispatch,
}) => {
  const screenWidth = Dimensions.get("window");
  const [liked, setlike] = React.useState(
    Array.from({ length: 8 }, () => false)
  );
  const handlePress = React.useCallback((index: number) => {
    setlike((prevLiked) => {
      const newLikes = [...prevLiked];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  }, []);
  return (
    <View
      style={[
        styles.cardContainBorder,
        [index === liked.length - 1 ? styles.marginLastIndex : {}],
      ]}
    >
      <TouchableOpacity
        style={styles.cardContain}
        activeOpacity={1}
        onPress={() => {
          usefetchFoodByID(foodId, navigation, dispatch).then(() => {
            navigation.push("Cooking");
          });
        }}
      >
        <View style={styles.cardContain}>
          <Image source={{ uri: image }} style={styles.backgroundImage} />
          {/* rating and like button */}
          <View style={styles.containerForRatingandLike}>
            {/* for button like */}
            <View>
              <View style={styles.buttonlike}>
                <TouchableOpacity onPress={() => handlePress(index)}>
                  {liked[index] ? (
                    <Ionicons name={"heart"} size={20} color={"red"} />
                  ) : (
                    <Ionicons name={"heart-outline"} size={20} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* details of food */}
        </View>
        <View style={styles.containerForNameofFood}>
          <Text numberOfLines={1} style={styles.textNameFood}>
            {nameofFood}
          </Text>
          <Text style={styles.textRating}>
            <AntDesign name={"star"} color={"orange"} size={11} />
            <AntDesign name={"star"} color={"orange"} size={11} />
            <AntDesign name={"star"} color={"orange"} size={11} />
            <AntDesign name={"star"} color={"orange"} size={11} />
            <AntDesign name={"star"} color={"orange"} size={11} />
          </Text>
          <View style={{ flexDirection: "row", opacity: 0.8 }}>
            {/* calories */}
            <Text
              style={{
                width: "50%",
                fontFamily: "Nunito-Medium",
                padding: 5,
              }}
            >
              <FontAwesome5 name={"fire"} size={16} /> 123 calories
            </Text>
            {/* time cooking */}
            <Text
              style={{
                fontFamily: "Nunito-Medium",
                padding: 5,
              }}
            >
              <FontAwesome5 name={"clock"} size={16} /> 15-20 mins
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default CardCollections;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 270,
    marginBottom: 20,
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 20,
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
    width: 280,
    height: 230,
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 5,
    marginBottom: 25,
    backgroundColor: "#F8F8F8",
    shadowColor: "#000",
  },
  marginLastIndex: {
    marginRight: 15,
  },
  containerForRatingandLike: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
  },
  textRating: {
    paddingLeft: 5,
    letterSpacing: 2,
  },
  buttonlike: {
    position: "absolute",
    margin: 10,
    width: 32,
    height: 32,
    backgroundColor: "#fff",
    borderRadius: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  containerForNameofFood: {
    bottom: 0,
  },
  textNameFood: {
    padding: 5,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: "Nunito-Bold",
  },
});
