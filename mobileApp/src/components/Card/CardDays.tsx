import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { usefetchFoodByID } from "../../features/authentication/hooks/useFetchFoodById";

interface Prop {
  Time?: string;
  navigation?: any;
  image?: string;
  nameofFood?: string;
  foodId: string;
  index: number;
  key?: number;
  dispatch: any;
}
const CardDay: React.FC<Prop> = ({
  navigation,
  image,
  index,
  nameofFood,
  foodId,
  dispatch,
}) => {
  const [liked, setlike] = React.useState(
    Array.from({ length: 8 }, () => false)
  );
  const handlePress = React.useCallback((index: number) => {
    setlike((prevLiked) => {
      const newLikes = [...prevLiked];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  }, []);
  return (
    <View
      key={index}
      style={[
        styles.cardContainBorder,
        index === liked.length - 1 ? styles.marginLastIndex : {},
      ]}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          usefetchFoodByID(foodId, navigation, dispatch).then(() => {
            navigation.push("Cooking");
          });
        }}
      >
        <View style={styles.cardContain}>
          <Image source={{ uri: image }} style={styles.backgroundImage} />
          {/* details of food */}
        </View>
        <View style={styles.containerForNameofFood}>
          {/* rating, level */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              alignItems: "center",
            }}
          >
            {/* Rating */}
            <View
              style={{
                flexDirection: "row",
                width: "35%",
                opacity: 0.8,
                alignItems: "center",
              }}
            >
              <AntDesign name={"hearto"} size={16} />
              <Text
                style={{
                  fontFamily: "Nunito-Medium",

                  paddingLeft: 5,
                }}
              >
                9,5K
              </Text>
            </View>
            {/* level icon and text */}
            <View
              style={{
                flexDirection: "row",
                width: "45%",
                opacity: 0.8,
                alignItems: "center",
              }}
            >
              <Ionicons name={"layers-outline"} size={16} />
              <Text
                style={{
                  fontFamily: "Nunito-Medium",
                  paddingLeft: 5,
                }}
              >
                Easy
              </Text>
            </View>
            {/* button like */}
            <View style={styles.buttonlike}>
              <TouchableOpacity onPress={() => handlePress(index)}>
                {liked[index] ? (
                  <AntDesign name={"heart"} size={16} color={"red"} />
                ) : (
                  <AntDesign name={"hearto"} size={16} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          {/* name of food */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
              }}
            >
              <Text numberOfLines={2} style={styles.textNameFood}>
                {nameofFood}
              </Text>
            </View>
            <View
              style={{
                width: "20%",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default CardDay;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  boxword: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
  },
  textbox: {
    fontFamily: "Nunito-Bold",
    fontSize: 18,
    fontWeight: "600",
    width: "77%",
    marginLeft: 15,
  },
  cardContain: {
    width: "100%",
    height: 150,
    position: "relative",
  },
  cardContainBorder: {
    width: 180,
    height: 220,
    marginLeft: 15,
    marginRight: 5,
    backgroundColor: "#fff",
  },
  marginLastIndex: {
    marginRight: 15,
  },
  containerForRatingandLike: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
  },
  textRating: {
    paddingLeft: 5,
    opacity: 0.5,
    fontFamily: "Nunito-Medium",
  },
  containerForNameofFood: {
    bottom: 0,
    marginLeft: 5,
  },
  textNameFood: {
    borderRadius: 10,
    fontSize: 16,
    fontFamily: "Nunito-Bold",
  },
  buttonlike: {
    width: 30,
    height: 30,
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
