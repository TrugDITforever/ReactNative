import * as React from "react";
import { View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { commonStyles } from "./style/commonStyle";
const Description = () => {
  return (
    <View style={{ width: "100%" }}>
      <View style={commonStyles.containerFordetails}>
        {/* Header for text of description */}
        <View style={commonStyles.headerTextcontain}>
          <AntDesign name="paperclip" size={20} color={"#fff"} />
          <Text style={commonStyles.headerText}> Description</Text>
        </View>
        <Text style={commonStyles.textDetais}>
          Tender salmon fillet grilled to perfection, topped with a generous
          dollop of lemon herb butter that melts over the fish, releasing a
          burst of citrusy and savory flavors with each bite.
        </Text>
      </View>
    </View>
  );
};
export default Description;
