import * as React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import commonStyle from "./commonstyles/style";
import { usefetchFoodByID } from "../../features/authentication/hooks/useFetchFoodById";
import { Prop } from "./commonProp";
const CardRecommend: React.FC<Prop> = ({
  navigation,
  image,
  foodId,
  index,
  nameofFood,
  dispatch,
}) => {
  const screenWidth = Dimensions.get("window");
  const [liked, setlike] = React.useState(
    Array.from({ length: 5 }, () => false)
  );
  const handlePress = React.useCallback((index: number) => {
    setlike((prevLiked) => {
      const newLikes = [...prevLiked];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  }, []);
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.cardContain,
          [index === liked.length - 1 ? styles.marginLastIndex : {}],
        ]}
        onPress={() => usefetchFoodByID(foodId, navigation, dispatch)}
        activeOpacity={1}
      >
        <Image source={{ uri: image }} style={styles.backgroundImage} />
        <View style={styles.overlay} />
        {/* name of food */}
        <View style={styles.containerForNameofFood}>
          <View style={{ width: "70%" }}>
            <Text numberOfLines={2} style={styles.textNameFood}>
              {nameofFood}
            </Text>
          </View>
          {/* container for star and like button */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={styles.containerForRatingandLike}>
              {/* rating, level, love */}
              <View style={styles.ratingContain}>
                {/* for rating */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: 10,
                  }}
                >
                  <AntDesign name={"star"} color={"#fff"} size={11} />
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
                  <AntDesign name={"heart"} color={"#fff"} size={11} />
                  <Text style={styles.textRating}>273k</Text>
                </View>
              </View>
            </View>
            <View style={styles.buttonlike}>
              <TouchableOpacity
                style={styles.buttonlike}
                onPress={() => handlePress(index)}
              >
                {liked[index] ? (
                  <Ionicons name={"heart"} size={25} color={"red"} />
                ) : (
                  <Ionicons name={"heart-outline"} size={25} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default CardRecommend;
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  cardContain: {
    width: 280,
    height: 400,
    marginLeft: 15,
    marginRight: 5,
    position: "relative",
  },
  marginLastIndex: {
    marginRight: 10,
  },
  containerForRatingandLike: {
    flexDirection: "row",
  },
  ratingContain: {
    borderRadius: 20,
    width: "85%",
    flexDirection: "row",
    fontFamily: "Nunito-semiBold",
  },
  textRating: {
    fontFamily: "Nunito-semiBold",
    color: "#fff",
    paddingLeft: 5,
  },
  buttonlike: {
    width: 35,
    height: 35,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  containerForNameofFood: {
    position: "absolute",
    bottom: 0,
    margin: 15,
  },
  textNameFood: {
    borderRadius: 10,
    fontSize: 20,
    fontFamily: "Nunito-Bold",
    color: "#fff",
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 20,
  },
});
