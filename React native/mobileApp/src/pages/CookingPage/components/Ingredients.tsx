import * as React from "react";
import { View, Text, FlatList } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { commonStyles } from "./style/commonStyle";
import { useSelector } from "react-redux";

const Ingredients = () => {
  const foodInfo = useSelector((state: any) => state.foodinfo);
  const splitText = React.useCallback(
    (text: string): String[] => { 
      return text.split(",");
    },
    [1]
  );
  // const newText = splitText(foodInfo.ingredients);
  return (
    <View style={{ width: "100%" }}>
      <View style={commonStyles.containerFordetails}>
        {/* Header for text of Ingredient */}
        <View style={commonStyles.headerTextcontain}>
          <AntDesign name="book" size={20} color={"#fff"} />
          <Text style={commonStyles.headerText}>Ingredients</Text>
        </View>
        {foodInfo.ingredients.map((item: any, index: number) => (
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
