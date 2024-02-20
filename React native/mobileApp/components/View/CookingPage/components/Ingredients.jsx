import * as React from "react";
import { View, Text, FlatList } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";

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
      <View style={{ margin: 10 }}>
        <Text style={{ fontFamily: "Nunito-Bold", fontSize: 18 }}>
          <Octicons name="checklist" size={20} /> Ingredients
        </Text>
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
