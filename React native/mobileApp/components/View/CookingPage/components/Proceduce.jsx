import * as React from "react";
import { View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
const Proceduce = () => {
  const splitText = React.useCallback((text) => {
    return text.split(".");
  });
  // Example usage:
  const text = `Peheat the grill to medium-high heat.Season the salmon fillets with salt and pepper.In a small bowl, mix together softened butter, minced herbs, and lemon juice.Grill the salmon fillets for about 4-5 minutes per side or until cooked through.During the last minute of grilling, spread the lemon herb butter over the salmon.Serve hot, garnished with additional fresh herbs if desired`;
  const resultSplitingredients = splitText(text);
  return (
    <View style={{ width: "100%" }}>
      <View style={{ margin: 10 }}>
        <Text
          style={{ fontFamily: "Nunito-Bold", fontSize: 18, paddingBottom: 10 }}
        >
          <Ionicons name="bonfire-outline" size={20} /> Proceduce
        </Text>
        {resultSplitingredients.map((value, index) => (
          <Text
            key={index}
            style={{
              fontFamily: "Nunito-Regular",
              fontSize: 15,
              opacity: 0.8,
              paddingBottom: 10,
            }}
          >
            {++index}. {value}
          </Text>
        ))}
      </View>
    </View>
  );
};
export default Proceduce;
