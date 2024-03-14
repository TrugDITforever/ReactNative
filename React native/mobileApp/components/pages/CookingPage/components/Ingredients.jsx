import * as React from "react";
import { View, Text, FlatList } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import { commonStyles } from "./style/commonStyle";

const Ingredients = () => {
  const listIngredient = [
    "1/2 tablespoon. ",
    "1/2 tablespoon of butter for each salmon fillet.",
    "1/2 tablespoon of minced fresh herbs (such as parsley, dill, or thyme).",
    "1/2 tablespoon of butter for each salmon fillet.",
    "1/2 tablespoon of minced fresh herbs (such as parsley, dill, or thyme).",
    "1/2 tablespoon of butter for each salmon fillet.",
    "1/2 tablespoon of minced fresh herbs (such as parsley, dill, or thyme).",
    "1/2 tablespoon of butter for each salmon fillet.",
  ];
  return (
    <View style={{ width: "100%" }}>
      <View style={commonStyles.containerFordetails}>
        {/* Header for text of Ingredient */}
        <View style={commonStyles.headerTextcontain}>
          <AntDesign name="book" size={20} color={"#fff"} />
          <Text style={commonStyles.headerText}>Ingredients</Text>
        </View>
        {listIngredient.map((item, index) => (
          <Text
            key={index}
            style={{
              fontFamily: "Nunito-Regular",
              fontSize: 15,
              paddingTop: 10,
              opacity: 0.7,
            }}
          >
            <AntDesign name="pluscircle" /> {item}
          </Text>
        ))}
      </View>
    </View>
  );
};
export default Ingredients;
