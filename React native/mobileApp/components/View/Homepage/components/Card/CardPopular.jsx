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
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 280,
    marginTop: 10,
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
    width: "100%",
    height: 150,
    position: "relative",
  },
  cardContainBorder: {
    marginRight: 20,
    width: 180,
    // backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
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
    opacity: 0.5,
    fontFamily: "Nunito-Medium",
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
const CardPopular = () => {
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
        <Text style={styles.textbox}>Popular</Text>
        <TouchableOpacity>
          <Text style={styles.textViewall}>View all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 4 }).map((value, index) => (
          <View key={index} style={[styles.cardContainBorder]}>
            <View style={styles.cardContain}>
              <Image
                source={require("../../../../../assets/image/food.jpg")}
                style={styles.backgroundImage}
              />
              {/* details of food */}
            </View>
            <View style={styles.containerForNameofFood}>
              <Text style={styles.textNameFood}>Pasta & Pork</Text>
              <Text style={styles.textRating}>Breakfast</Text>
              <View style={{ flexDirection: "row" }}>
                {/* calories */}
                {/* <Text
                  style={{
                    width: "40%",
                    fontFamily: "Nunito-Medium",
                    padding: 5,
                  }}
                >
                  <FontAwesome5 name={"fire"} size={16} color={"red"} /> 123
                  calories
                </Text> */}
                {/* time cooking */}
                <Text
                  style={{
                    width: "80%",
                    fontFamily: "Nunito-Medium",
                    padding: 5,
                    opacity: 0.5,
                  }}
                >
                  <FontAwesome5 name={"clock"} size={16} /> 15-20 mins
                </Text>
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
                        <Ionicons name={"heart"} size={25} color={"red"} />
                      ) : (
                        <Ionicons name={"heart-outline"} size={25} />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default CardPopular;
