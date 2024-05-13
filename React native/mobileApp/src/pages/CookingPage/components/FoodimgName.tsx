import * as React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import { likeRecipe } from "../../../features/authentication/services/userService/userLikeRecipe";
import { checkIsLike } from "../../../features/authentication/services/userService/checkisLike";
interface Props {
  navigation: any;
}
const FoodimgName: React.FC<Props> = ({ navigation }) => {
  const food = useSelector((state: any) => state.foodinfo);
  const user = useSelector((state: any) => state.userinfo);
  const [islike, setislike] = React.useState<boolean>(false);
  const [ischeck, setcheck] = React.useState<boolean>(true);
  React.useEffect(() => {
    const islikedState = async () => {
      await checkIsLike(user.id, food.foodId).then((isLike) =>
        setislike(isLike)
      );
    };
    islikedState();
  }, [food.foodId]);
  const handleLike = async () => {
    const res = await likeRecipe(user.id, food.foodId);
    setislike(res);
  };
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
        <View
          style={{
            width: "95%",
          }}
        >
          <ImageBackground
            source={{ uri: food.foodImage }}
            borderRadius={20}
            resizeMode="cover"
            style={{
              // backgroundColor: "black",
              width: "100%",
              height: 250,
            }}
          >
            {/* like button */}
            <View
              style={{
                position: "absolute",
                right: 0,
              }}
            >
              {/* <Text>{food.foodId}</Text> */}
              <TouchableOpacity
                onPress={handleLike}
                // activeOpacity={1}
                style={{
                  borderRadius: 50,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  margin: 15,
                }}
              >
                <View style={{ padding: 7, paddingBottom: 5 }}>
                  {islike ? (
                    <Ionicons name={"heart"} size={24} color={"red"} />
                  ) : (
                    <Ionicons name={"heart-outline"} size={24} />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // backgroundColor: "black",
        }}
      >
        {/* Food's name */}
        <View style={{ margin: 10, width: "70%" }}>
          <Text style={{ fontFamily: "Nunito-Bold", fontSize: 22 }}>
            {food.foodName}
          </Text>
        </View>
        {/* button save */}
        <View
          style={{
            position: "absolute",
            right: 0,
            margin: 25,
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={{
              borderRadius: 12,
              backgroundColor: "#ccc",
            }}
          >
            <View style={{ padding: 5, paddingRight: 7, paddingLeft: 7 }}>
              <Feather name={"bookmark"} size={24} color={"#fff"} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default FoodimgName;
