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
import commonstyles from "./commonstyles/style";
import Card from "../../../../components/Card/CardDays";
import { useFetchFoodData } from "../../../../features/authentication/hooks/useFetchFoodData";
import { useDispatch } from "react-redux";

interface Prop {
  Time?: string;
  navigation?: any;
  foodData?: any;
  dispatch?: any;
}
const CardDay: React.FC<Prop> = ({ Time, navigation, dispatch }) => {
  const prop = "Breakfast";
  const { foodData, isloading } = useFetchFoodData(prop);
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
    <View style={[styles.container]}>
      <View style={styles.boxword}>
        <Text style={styles.textbox}>{Time}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Viewall")}>
          <Text style={commonstyles.textViewall}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {foodData.map((value: any, index: number) => (
          <Card
            Time={Time}
            key={index}
            foodId={value._id}
            index={index}
            navigation={navigation}
            image={value.foodImage}
            nameofFood={value.foodName}
            dispatch={dispatch}
          />
        ))}
      </ScrollView>
    </View>
  );
};
export default CardDay;
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
    borderRadius: 20,
  },
  boxword: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  textbox: {
    fontFamily: "Nunito-Bold",
    fontSize: 18,
  },
  cardContain: {
    width: "100%",
    height: 150,
    position: "relative",
  },
  cardContainBorder: {
    width: 180,
    height: 220,
    marginLeft: 15,
    marginRight: 5,
    backgroundColor: "#fff",
  },
  marginLastIndex: {
    marginRight: 15,
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
  buttonlike: {
    width: 30,
    height: 30,
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
