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
    width: "100%",
    height: 150,
    position: "relative",
  },
  cardContainBorder: {
    width: 180,
    height: 230,
    borderRadius: 10,
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
const CardPopular = ({ navigation }) => {
  const screenWidth = Dimensions.get("window");
  const [liked, setlike] = React.useState(
    Array.from({ length: 8 }, () => false)
  );
  const handlePress = React.useCallback(
    (index) => {
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
          <Text style={styles.textViewall}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {liked.map((value, index) => (
          <View
            key={index}
            style={[
              styles.cardContainBorder,
              [index === liked.length - 1 ? styles.marginLastIndex : ""],
            ]}
          >
            <TouchableOpacity
              style={styles.cardContain}
              onPress={() => {
                navigation.navigate("Cooking");
              }}
              activeOpacity={1}
            >
              <View style={styles.cardContain}>
                <Image
                  source={require("../../assets/image/food.jpg")}
                  style={styles.backgroundImage}
                />
                {/* details of food */}
              </View>
              <View style={styles.containerForNameofFood}>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 5,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: "80%",
                    }}
                  >
                    <Text numberOfLines={1} style={styles.textNameFood}>
                      Pasta & Pork
                    </Text>
                  </View>
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
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 5,
                    alignItems: "center",
                  }}
                >
                  {/* time cooking, level */}
                  <View
                    style={{
                      flexDirection: "row",
                      width: "50%",
                      opacity: 0.7,
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome5 name={"clock"} size={16} />
                    <Text
                      style={{
                        fontFamily: "Nunito-Medium",

                        paddingLeft: 5,
                      }}
                    >
                      20 mins
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      width: "50%",
                      opacity: 0.7,
                      alignItems: "center",
                    }}
                  >
                    <Ionicons name={"layers-outline"} size={16} />
                    <Text
                      style={{
                        fontFamily: "Nunito-Medium",

                        paddingLeft: 5,
                      }}
                    >
                      Easy
                    </Text>
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
export default CardPopular;
