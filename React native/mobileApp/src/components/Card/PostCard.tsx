import * as React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { usefetchFoodByID } from "../../features/authentication/hooks/useFetchFoodById";
interface Prop {
  navigation: any;
  userpost?: any;
  dispatch?: any;
}
const PostCard: React.FC<Prop> = ({ navigation, userpost, dispatch }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.flexCard}>
        {userpost.map((value: any, index: number) => (
          <TouchableOpacity
            key={index}
            style={styles.cardContain}
            onPress={() =>
              usefetchFoodByID(value._id, navigation, dispatch).then(() => {
                navigation.push("Cooking");
              })
            }
            activeOpacity={1}
          >
            <Image
              source={{ uri: value.foodImage }}
              style={styles.backgroundImage}
            />
            <View style={styles.overlay} />
            {/* name of food */}
            <View style={styles.containerForNameofFood}>
              {/* container for star and like button */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                <View style={styles.containerForRatingandLike}>
                  {/* rating, level, love */}
                  <View style={styles.ratingContain}>
                    {/* for rating */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingRight: 10,
                      }}
                    >
                      <AntDesign name={"star"} color={"#fff"} size={11} />
                      <Text style={styles.textRating}>4.5</Text>
                    </View>
                    {/* for like */}
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AntDesign name={"heart"} color={"#fff"} size={11} />
                      <Text style={styles.textRating}>273k</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};
export default PostCard;
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "86%",
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  flexCard: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardContain: {
    width: "33%",
    height: 180,
    marginLeft: 1,
    marginBottom: 1,
  },
  marginLastIndex: {
    marginRight: 10,
  },
  containerForRatingandLike: {
    flexDirection: "row",
  },
  ratingContain: {
    borderRadius: 20,
    width: "85%",
    flexDirection: "row",
    fontFamily: "Nunito-semiBold",
  },
  textRating: {
    fontFamily: "Nunito-semiBold",
    color: "#fff",
    paddingLeft: 5,
  },
  containerForNameofFood: {
    position: "absolute",
    bottom: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});
