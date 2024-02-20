import * as React from "react";
import { View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
const Description = () => {
  return (
    <View style={{ width: "100%" }}>
      <View style={{ margin: 10 }}>
        <Text style={{ fontFamily: "Nunito-Bold", fontSize: 18 }}>
          <AntDesign name="paperclip" size={20} /> Description
        </Text>
        <Text
          style={{
            fontFamily: "Nunito-Regular",
            fontSize: 15,
            paddingTop: 10,
            opacity: 0.8,
          }}
        >
          Tender salmon fillet grilled to perfection, topped with a generous
          dollop of lemon herb butter that melts over the fish, releasing a
          burst of citrusy and savory flavors with each bite.
        </Text>
      </View>
    </View>
  );
};
export default Description;
