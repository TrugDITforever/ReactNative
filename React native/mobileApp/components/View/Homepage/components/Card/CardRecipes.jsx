import * as React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
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
    width: 200,
    height: 150,
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
    fontFamily: "Nunito-Regular",
  },
  containerForRatingandLike: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
  },
  buttonlike: {
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
  },
  textNameFood: {
    borderRadius: 10,
    color: "#fff",
    fontSize: 18,
    fontFamily: "Nunito-Bold",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 10,
  },
});
const CardRecipes = () => {
  const screenWidth = Dimensions.get("window");
  const [liked, setlike] = React.useState(
    Array.from({ length: 3 }, () => false)
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
        <Text style={styles.textbox}>Recipes for today</Text>
        <TouchableOpacity>
          <Text style={styles.textViewall}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 3 }).map((value, index) => (
          <View key={index} style={styles.cardContain}>
            <Image
              source={require("../../../../../assets/image/salad.jpg")}
              style={styles.backgroundImage}
            />
            {/* make the image darken */}
            <View style={styles.overlay} />
            {/* rating and like button */}
            <View style={styles.containerForRatingandLike}>
              {/* for button like */}
              {/* <View
                style={{
                  margin: 10,
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
              </View> */}
            </View>
            {/* detail*/}
            <View style={styles.containerForNameofFood}>
              <Text style={{ letterSpacing: 3 }}>
                <AntDesign name={"star"} color={"orange"} size={11} />
                <AntDesign name={"star"} color={"orange"} size={11} />
                <AntDesign name={"star"} color={"orange"} size={11} />
                <AntDesign name={"star"} color={"orange"} size={11} />
                <AntDesign name={"staro"} color={"orange"} size={11} />
              </Text>
              <Text style={styles.textNameFood}>Salad Italian</Text>
              <Text
                style={{
                  color: "#fff",
                  opacity: 0.8,
                  fontFamily: "Nunito-Medium",
                }}
              >
                Lunch
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default CardRecipes;
