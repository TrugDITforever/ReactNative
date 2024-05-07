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
interface Props {
  navigation: any;
}
const FoodimgName: React.FC<Props> = ({ navigation }) => {
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
        <View
          style={{
            width: "95%",
          }}
        >
          <ImageBackground
            source={{ uri: foodinfo.foodImage }}
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
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  borderRadius: 50,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  margin: 15,
                }}
              >
                <View style={{ padding: 7, paddingBottom: 5 }}>
                  <Ionicons name={"heart-outline"} size={24} />
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
            {foodinfo.foodName}
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
