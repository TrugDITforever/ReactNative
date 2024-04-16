import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import commonStyle from "./commonstyles/style";
import Card from "../../../../components/Card/CardCollection";
import { usefetchFoodByID } from "../../../../features/authentication/hooks/useFetchFoodById";
import { useDispatch } from "react-redux";

interface Prop {
  navigation?: any;
  foodData?: any;
  dispatch?: any;
}
const CardCollections: React.FC<Prop> = ({
  navigation,
  foodData,
  dispatch,
}) => {
  const screenWidth = Dimensions.get("window");
  return (
    <View style={[styles.container]}>
      <View style={styles.boxword}>
        <Text style={styles.textbox}>Healthy recipes</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Viewall")}>
          <Text style={commonStyle.textViewall}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {foodData &&
          foodData.map((value: any, index: number) => (
            <Card
              dispatch={dispatch}
              foodId={value._id}
              key={index}
              index={index}
              navigation={navigation}
              image={value.foodImage}
              nameofFood={value.foodName}
            />
          ))}
      </ScrollView>
    </View>
  );
};
export default CardCollections;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 270,
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
    width: 280,
    height: 230,
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 5,
    marginBottom: 25,
    backgroundColor: "#F8F8F8",
    shadowColor: "#000",
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
    letterSpacing: 2,
  },
  buttonlike: {
    position: "absolute",
    margin: 10,
    width: 32,
    height: 32,
    backgroundColor: "#fff",
    borderRadius: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
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
