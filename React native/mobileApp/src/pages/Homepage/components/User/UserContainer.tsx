import * as React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Prop {
  navigation?: any;
}
const UserContainer: React.FC<Prop> = ({ navigation }) => {
  const userinfo = useSelector((state: any) => state.userinfo);
  return (
    <View
      style={{
        width: "100%",
        height: "7%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ededed",
        marginTop: 10,
        paddingBottom: 10,
      }}
    >
      <View
        style={{
          width: "16%",
          height: "100%",
          paddingLeft: 15,
        }}
      >
        <View style={{ width: "100%", height: "100%" }}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              objectFit: "contain",
              borderWidth: 2,
              borderColor: "#ccc",
            }}
            source={require("../../../../assets/image/default-image.jpg")}
          />
        </View>
      </View>
      {/* name user */}
      <View style={{ width: "70%" }}>
        <View style={{ paddingLeft: 15 }}>
          <Text
            style={{
              fontSize: 16,
              color: "#535353",
              fontFamily: "Nunito-Medium",
            }}
          >
            Hello!
            <Ionicons name={"hand-left-outline"} size={20} color={"orange"} />
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Nunito-Bold",
            }}
          >
            {userinfo.username}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default UserContainer;
