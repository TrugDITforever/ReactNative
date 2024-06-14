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
import CardImage from "./Cardimage";
import FoodeDetails from "./FoodDetails";
import { useFetchFoodData } from "../../../../features/authentication/hooks/useFetchFoodData";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "97%",
  },
  cardContain: {
    width: "100%",
    height: 180,
    position: "relative",
  },
  cardContainBorder: {
    width: 370,
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 25,
    elevation: 2,
    shadowColor: "#000",
  },
});

interface Prop {
  navigation: any;
  title: string;
}
const Card: React.FC<Prop> = ({ navigation, title }) => {
  const screenWidth = Dimensions.get("window");
  const [liked, setlike] = React.useState(
    Array.from({ length: 18 }, () => false)
  );
  const { foodData, isloading } = useFetchFoodData(title);
  const handlePress = React.useCallback((index: number) => {
    setlike((prevLiked) => {
      const newLikes = [...prevLiked];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  }, []);
  return (
    <View style={[styles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {foodData.map((value, index) => (
          <View key={index} style={[styles.cardContainBorder]}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Cooking");
              }}
              activeOpacity={1}
            >
              {/* card image */}
              <CardImage
                index={index}
                liked={liked}
                handlePress={handlePress}
                image={value.foodImage}
              />
              {/* details of food */}
              <FoodeDetails />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default Card;
