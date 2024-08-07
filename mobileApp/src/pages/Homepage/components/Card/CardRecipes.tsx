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
import Card from "../../../../components/Card/CardRecipes";
import { useFetchFoodData } from "../../../../features/authentication/hooks/useFetchFoodData";

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
    height: 200,
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  textbox: {
    fontFamily: "Nunito-Bold",
    fontSize: 18,
    fontWeight: "600",
  },
  textViewall: {
    fontSize: 13,
    fontFamily: "Nunito-Regular",
    color: "#F98A4F",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 20,
  },
});
interface Prop {
  navigation?: any;
  foodData?: any;
  dispatch?: any;
  image?: string;
}
const CardRecipes: React.FC<Prop> = ({ navigation, dispatch, image }) => {
  const prop = "recipes for today";
  const { foodData, isloading } = useFetchFoodData(prop);
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
    <View style={styles.container}>
      <View style={styles.boxword}>
        <Text style={styles.textbox}>Recipes for today</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Viewall", { title: prop })}
        >
          <Text style={commonStyle.textViewall}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {foodData
          ? foodData.map((value: any, index: number) => (
              <Card
                dispatch={dispatch}
                foodId={value._id}
                key={index}
                index={index}
                navigation={navigation}
                image={value.foodImage ? value.foodImage : image}
                nameofFood={value.foodName}
              />
            ))
          : liked.map((value: any, index: number) => (
              <Card
                dispatch={dispatch}
                foodId={value._id}
                key={index}
                index={index}
                navigation={navigation}
                image={value.foodImage ? value.foodImage : image}
                nameofFood={value.foodName}
              />
            ))}
      </ScrollView>
    </View>
  );
};
export default CardRecipes;
