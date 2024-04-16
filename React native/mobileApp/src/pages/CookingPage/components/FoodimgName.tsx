import * as React from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
const FoodimgName = () => {
  const foodinfo = useSelector((state: any) => state.foodinfo);
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
            source={{ uri: foodinfo.foodImage }}
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
      <View style={{ margin: 15 }}>
        <Text style={{ fontFamily: "Nunito-Bold", fontSize: 22 }}>
          {foodinfo.foodName}
        </Text>
      </View>
    </View>
  );
};
export default FoodimgName;
