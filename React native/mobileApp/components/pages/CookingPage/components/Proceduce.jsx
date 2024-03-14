import * as React from "react";
import { View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { commonStyles } from "./style/commonStyle";
const Proceduce = () => {
  const splitText = React.useCallback((text) => {
    return text.split(".");
  });
  // Example usage:
  const text = `Peheat the grill to medium-high heat.Season the salmon fillets with salt and pepper.In a small bowl, mix together softened butter, minced herbs, and lemon juice.Grill the salmon fillets for about 4-5 minutes per side or until cooked through.During the last minute of grilling, spread the lemon herb butter over the salmon.Serve hot, garnished with additional fresh herbs if desired`;
  const resultSplitingredients = splitText(text);
  return (
    <View style={{ width: "100%" }}>
      <View style={commonStyles.containerFordetails}>
        <View style={commonStyles.headerTextcontain}>
          <Ionicons name="bonfire-outline" size={20} color={"#fff"} />
          <Text style={commonStyles.headerText}>Directions</Text>
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
