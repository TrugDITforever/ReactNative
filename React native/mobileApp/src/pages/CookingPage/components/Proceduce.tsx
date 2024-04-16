import * as React from "react";
import { View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { commonStyles } from "./style/commonStyle";
import { useSelector } from "react-redux";
const Proceduce = () => {
  const foodinfo = useSelector((state: any) => state.foodinfo);
  const splitText = React.useCallback(
    (text: string): String[] => {
      return text.split(".").filter((str) => str.trim() !== "");
    },
    [1]
  );
  // Example usage:
  const resultSplitingredients = splitText(foodinfo.instructions);
  return (
    <View style={{ width: "100%" }}>
      <View style={commonStyles.containerFordetails}>
        <View style={commonStyles.headerTextcontain}>
          <Ionicons name="bonfire-outline" size={20} color={"#fff"} />
          <Text style={commonStyles.headerText}>Instructions</Text>
        </View>
        {resultSplitingredients.map((value, index) => (
          <Text key={index} style={commonStyles.textDetais}>
            {++index}. {value}
          </Text>
        ))}
      </View>
    </View>
  );
};
export default Proceduce;
