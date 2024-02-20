import * as React from "react";
import { View, Text, Image } from "react-native";
const FoodimgName = () => {
  return (
    <View>
      {/* Food image */}
      <View
        style={{
          width: "100%",
          height: 280,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "95%", height: 280, position: "relative" }}>
          <Image
            source={require("../../../../assets/image/food.jpg")}
            style={{
              resizeMode: "cover",
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: 20,
            }}
          />
        </View>
      </View>
      {/* Food's name */}
      <View style={{ margin: 10 }}>
        <Text style={{ fontFamily: "Nunito-Bold", fontSize: 22 }}>
          Grilled Salmon with Lemon Herb Butter
        </Text>
      </View>
    </View>
  );
};
export default FoodimgName;
