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
  SafeAreaView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useFetchFoodData } from "../../../features/authentication/hooks/useFetchFoodData";
import { useDispatch } from "react-redux";
import { usefetchFoodByID } from "../../../features/authentication/hooks/useFetchFoodById";

interface Prop {
  navigation: any;
}
const SearchResults: React.FC<Prop> = ({ navigation }) => {
  const dispatch = useDispatch();
  const recommended = "recommended";
  const { foodData, isloading } = useFetchFoodData(recommended);
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
    <SafeAreaView style={[styles.container]}>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {foodData.map((value, index) => (
            <View key={index} style={styles.cardContain}>
              <TouchableOpacity
                style={styles.cardContain}
                onPress={() => {
                  usefetchFoodByID(value._id, navigation, dispatch);
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
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default SearchResults;
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
    height: "86%",
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    // borderRadius: 20,
  },
  cardContain: {
    width: "100%",
    height: 250,
    // marginBottom: 10,
  },
  containerForRatingandLike: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 50,
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
    // borderRadius: 20,
  },
});
