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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
    marginTop: 20,
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
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
    width: 300,
    height: 200,
    marginLeft: 10,
    marginRight: 10,

    position: "relative",
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
    fontFamily: "Nunito-Medium",
  },
  containerForRatingandLike: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
  },
  textRating: {
    margin: 10,
    padding: 5,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "40%",
    fontFamily: "Nunito-semiBold",
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
    position: "absolute",
    bottom: 0,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textNameFood: {
    borderRadius: 10,
    fontSize: 20,
    fontFamily: "Nunito-Bold",
    color: "#fff",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 10,
  },
});
const CardOffer = () => {
  const screenWidth = Dimensions.get("window");
  const [liked, setlike] = React.useState(
    Array.from({ length: 5 }, () => false)
  );
  const handlePress = React.useCallback((index) => {
    setlike((prevLiked) => {
      const newLikes = [...prevLiked];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.boxword}>
        <Text style={styles.textbox}>Recommended for you</Text>
        <TouchableOpacity>
          <Text style={styles.textViewall}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 5 }).map((value, index) => (
          <View key={index} style={styles.cardContain}>
            <Image
              source={require("../../../../../assets/image/food.jpg")}
              style={styles.backgroundImage}
            />
            <View style={styles.overlay} />
            {/* rating and like button */}

            <View style={styles.containerForRatingandLike}>
              {/* for rating star */}
              <View style={{ width: "82%" }}>
                <View>
                  <Text style={styles.textRating}>
                    4.5 {""}
                    <AntDesign name={"star"} color={"orange"} size={11} />
                    <Text style={{ fontSize: 11, color: "#535353" }}>
                      (100+)
                    </Text>
                  </Text>
                </View>
              </View>
              {/* for button like */}
              <View
                style={{
                  width: "20%",
                  alignItems: "center",
                  justifyContent: " center",
                }}
              >
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
            {/* name of food */}
            <View style={styles.containerForNameofFood}>
              <Text style={styles.textNameFood}>Chicken curry</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default CardOffer;
