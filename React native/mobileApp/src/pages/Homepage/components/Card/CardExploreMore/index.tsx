import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CardImage from "./Cardimage";
import FoodeDetails from "./FoodDetails";
import { useFetchUserPost } from "../../../../../features/authentication/hooks/useFetchUserPost";
import { usefetchFoodByID } from "../../../../../features/authentication/hooks/useFetchFoodById";
import UserProfile from "../../../../UserProfile/UserProfile";

interface Prop {
  navigation: any;
  dispatch: any;
}
const CardExploreMore: React.FC<Prop> = ({ navigation, dispatch }) => {
  const { userpost, isloading } = useFetchUserPost();
  // console.log(userpost);
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
    <View style={[styles.container]}>
      <View style={styles.boxword}>
        <Text style={styles.textbox}>Explore more from others</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {userpost.map((value, index) => (
          <View key={index} style={[styles.cardContainBorder]}>
            <TouchableOpacity
              onPress={() =>
                usefetchFoodByID(value.foodInfo[0]._id, navigation, dispatch)
              }
              activeOpacity={1}
            >
              {/* card image */}
              <CardImage
                index={index}
                liked={liked}
                handlePress={handlePress}
                foodImage={value.foodInfo[0].foodImage}
              />
              {/* details of food */}
              <FoodeDetails foodname={value.foodInfo[0].foodName} 
              username= {value.userInfo[0].username}
                userProfile={value.userInfo[0].profileImage}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default CardExploreMore;
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  cardContain: {
    width: "100%",
    height: 180,
    position: "relative",
  },
  cardContainBorder: {
    width: 380,
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 25,
    elevation: 2,
    shadowColor: "#000",
  },
  boxword: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
  },
  textbox: {
    fontFamily: "Nunito-Bold",
    fontSize: 20,
    color: "#F98A4F",
    fontWeight: "600",
    width: "77%",
    marginLeft: 15,
  },
});
