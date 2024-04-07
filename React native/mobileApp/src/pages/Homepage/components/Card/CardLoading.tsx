import { Text, View, ScrollView } from "react-native";
import React, { Component } from "react";
import CardRecommend from "./CardRecommend";
import CardCollections from "./CardCollection";
import CardRecipes from "./CardRecipes";
import CardPopular from "./CardPopular";
import CardDay from "./CardDays";
const CardLoading: React.FC = () => {
  const imageLoading =
    "https://www.pixelstalk.net/wp-content/uploads/2016/10/Blank-Wallpaper-Widescreen.jpg";
  return (
    <View style={{ width: "100%", height: "92%" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: "Nunito-Bold",
            margin: 10,
            color: "orange",
          }}
        >
          What do you want to cook today?
        </Text>
        <CardRecommend image={imageLoading} />
        <CardRecipes image={imageLoading} />
        <CardPopular />
        <CardCollections />
      </ScrollView>
    </View>
  );
};
export default CardLoading;
