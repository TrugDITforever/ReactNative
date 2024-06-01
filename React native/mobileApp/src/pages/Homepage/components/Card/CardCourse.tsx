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
interface Prop {
  navigation: any;
}

const CardCourse: React.FC<Prop> = ({ navigation }) => {
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
    <View style={{ width: "100%", padding: 15 }}>
      <TouchableOpacity style={[styles.cardContain]} activeOpacity={1}>
        <Image
          source={{
            uri: "https://img.freepik.com/premium-photo/chef-cooking-restaurant-kitchen_25996-8009.jpg",
          }}
          style={styles.backgroundImage}
        />
        <View style={styles.overlay} />
        {/* name of food */}
        <View style={styles.containerForNameofFood}>
          <View style={{ width: "90%" }}>
            <Text style={styles.textNameFood}>
              Learn how to cook like a chef right now!
            </Text>
            <View>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate("CoursePage")}
              >
                <Text
                  style={{
                    fontFamily: "Nunito-semiBold",
                    fontSize: 18,
                    color: "#fff",
                  }}
                >
                  Explore now!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* container for star and like button */}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default CardCourse;

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
    width: "100%",
    height: 200,
    marginRight: 5,
    position: "relative",
    justifyContent: "center",
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
  containerForNameofFood: {
    position: "relative",
    bottom: 0,
    margin: 20,
  },
  textNameFood: {
    fontSize: 22,
    fontFamily: "Nunito-Bold",
    color: "#fff",
    padding: 10,
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
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 20,
  },
  buttonContainer: {
    position: "absolute",
    backgroundColor: "#F98A4F",
    borderRadius: 20,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
});
