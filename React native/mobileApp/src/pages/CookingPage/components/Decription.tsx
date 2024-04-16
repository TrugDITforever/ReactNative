import * as React from "react";
import { View, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { commonStyles } from "./style/commonStyle";
import { useSelector } from "react-redux";
const Description = () => {
  const foodinfo = useSelector((state: any) => state.foodinfo);
  return (
    <View style={{ width: "100%" }}>
      <View style={commonStyles.containerFordetails}>
        {/* Header for text of description */}
        <View style={commonStyles.headerTextcontain}>
          <AntDesign name="paperclip" size={20} color={"#fff"} />
          <Text style={commonStyles.headerText}> Description</Text>
        </View>
        <Text style={commonStyles.textDetais}>{foodinfo.description}</Text>
      </View>
    </View>
  );
};
export default Description;
