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

interface Prop {
  navigation: any;
}
const fakeArrray = [
  {
    _id: "6615ae3507a0cfd0cde4d13b",
    foodName: "Chicken Alfredo Pasta",
    foodImage:
      "https://th.bing.com/th/id/OIP.exQhgOEPwS6wSvoJvCeQNgHaJQ?rs=1&pid=ImgDetMain",
  },
  {
    _id: "66183743efba40ad42f6f3a8",
    foodName: "Spaghetti Carbonara",
    foodImage:
      "https://www.adashofginger.co.uk/wp-content/uploads/2014/11/spaghetti-carbonara.jpg",
  },
  {
    _id: "66183743efba40ad42f6f3a9",
    foodName: "Caprese Salad",
    foodImage:
      "https://th.bing.com/th/id/OIP.x5x4j74u7R1v989fMYxFCgHaJn?rs=1&pid=ImgDetMain",
  },
  {
    _id: "66183743efba40ad42f6f3aa",
    foodName: "Beef Stir Fry",
    foodImage:
      "https://th.bing.com/th/id/OIP.cM0v1ACbOfkOT8AqmeapmAHaKz?rs=1&pid=ImgDetMain",
  },
  {
    _id: "66183743efba40ad42f6f3ab",
    foodName: "Grilled Salmon",
    foodImage:
      "https://www.cookingclassy.com/wp-content/uploads/2018/05/grilled-salmon-3.jpg",
  },
  {
    _id: "66183743efba40ad42f6f3ac",
    foodName: "Vegetable Curry",
    foodImage:
      "https://www.tasteofhome.com/wp-content/uploads/2017/10/Slow-Cooked-Vegetable-Curry_EXPS_SDAS17_148481_D04_07_5b.jpg",
  },
];
const CollectionsCard: React.FC<Prop> = ({ navigation }) => {
  const screenWidth = Dimensions.get("window");
  const [liked, setlike] = React.useState(
    Array.from({ length: 5 }, () => true)
  );
  const handlePress = React.useCallback((index: number) => {
    setlike((prevLiked) => {
      const newLikes = [...prevLiked];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {fakeArrray.map((value, index) => (
          <View key={index} style={styles.cardContain}>
            <TouchableOpacity
              style={styles.cardContain}
              onPress={() => {
                navigation.navigate("Cooking");
              }}
              activeOpacity={1}
            >
              <Image
                source={{ uri: value.foodImage }}
                style={styles.backgroundImage}
              />
              <View style={styles.overlay} />
              {/* name of food */}
              <View style={styles.containerForNameofFood}>
                <View style={{ width: "70%" }}>
                  <Text numberOfLines={2} style={styles.textNameFood}>
                    {value.foodName}
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
                      <Ionicons name={"bookmark"} size={25} color={"#F98A4F"} />
                    </TouchableOpacity>
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
export default CollectionsCard;
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "94%",
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  cardContain: {
    width: 370,
    height: 210,
    marginBottom: 20,
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 20,
  },
});
