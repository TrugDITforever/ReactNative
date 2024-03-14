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
    marginBottom: 20,
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
    marginLeft: 15,
  },
  cardContain: {
    width: 300,
    height: 200,
    marginLeft: 15,
    position: "relative",
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
    fontSize: 20,
    fontFamily: "Nunito-Bold",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 10,
  },
});
const CardRecipes = ({ navigation }) => {
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
        <TouchableOpacity onPress={() => navigation.navigate("Viewall")}>
          <Text style={styles.textViewall}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 3 }).map((value, index) => (
          <View key={index}>
            <TouchableOpacity
              style={[
                styles.cardContain,
                [index === liked.length - 1 ? styles.marginLastIndex : ""],
              ]}
              onPress={() => {
                navigation.navigate("Cooking");
              }}
              activeOpacity={1}
            >
              <Image
                source={require("../../../../../assets/image/porkrice.jpg")}
                style={styles.backgroundImage}
              />
              {/* make the image darken */}
              <View style={styles.overlay} />
              {/* rating and like button */}
              <View style={styles.containerForRatingandLike}></View>
              {/* detail*/}
              <View style={styles.containerForNameofFood}>
                {/* name of food */}
                <Text numberOfLines={1} style={styles.textNameFood}>
                  Salad Italian
                </Text>
                <Text
                  style={{
                    color: "#fff",
                    opacity: 0.8,
                    fontFamily: "Nunito-Medium",
                  }}
                >
                  Lunch
                </Text>
                {/* star, like */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingRight: 10,
                    }}
                  >
                    <AntDesign name={"star"} color={"white"} size={11} />
                    <Text style={{ color: "white", paddingLeft: 5 }}>4.6</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name={"heart"} color={"white"} size={11} />
                    <Text style={{ color: "white", paddingLeft: 5 }}>4.6</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default CardRecipes;
