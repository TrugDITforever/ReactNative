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
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
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
    borderRadius: 5,
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
    width: 280,
    height: 150,
    position: "relative",
  },
  cardContainBorder: {
    marginRight: 20,
    width: 280,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
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
    paddingLeft: 5,
    letterSpacing: 2,
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
    bottom: 0,
  },
  textNameFood: {
    padding: 5,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: "Nunito-Bold",
  },
});
const CardBox = ({ navigation }) => {
  const screenWidth = Dimensions.get("window");
  const [liked, setlike] = React.useState(
    Array.from({ length: 4 }, () => false)
  );
  const handlePress = React.useCallback((index) => {
    setlike((prevLiked) => {
      const newLikes = [...prevLiked];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  }, []);
  return (
    <View style={[styles.container]}>
      <View style={styles.boxword}>
        <Text style={styles.textbox}>Collections</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Viewall")}>
          <Text style={styles.textViewall}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 4 }).map((value, index) => (
          <View key={index} style={[styles.cardContainBorder]}>
            <TouchableOpacity
              style={styles.cardContain}
              onPress={() => {
                navigation.navigate("Cooking");
              }}
              activeOpacity={1}
            >
              <View style={styles.cardContain}>
                <Image
                  source={require("../../../../../assets/image/salmon.jpg")}
                  style={styles.backgroundImage}
                />
                {/* rating and like button */}

                <View style={styles.containerForRatingandLike}>
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
                {/* details of food */}
              </View>
              <View style={styles.containerForNameofFood}>
                <Text style={styles.textNameFood}>
                  Veggie cheese extravaganza
                </Text>
                <Text style={styles.textRating}>
                  <AntDesign name={"star"} color={"orange"} size={11} />
                  <AntDesign name={"star"} color={"orange"} size={11} />
                  <AntDesign name={"star"} color={"orange"} size={11} />
                  <AntDesign name={"star"} color={"orange"} size={11} />
                  <AntDesign name={"star"} color={"orange"} size={11} />
                </Text>
                <View style={{ flexDirection: "row" }}>
                  {/* calories */}
                  <Text
                    style={{
                      width: "50%",
                      fontFamily: "Nunito-Medium",
                      padding: 5,
                    }}
                  >
                    <FontAwesome5 name={"fire"} size={16} color={"red"} /> 123
                    calories
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
        ))}
      </ScrollView>
    </View>
  );
};
export default CardBox;
