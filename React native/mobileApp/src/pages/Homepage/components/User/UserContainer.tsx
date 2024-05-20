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
        height: "7%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ededed",
        paddingLeft: 15,
      }}
    >
      <View>
        <Image
          style={{
            width: 45,
            height: 45,
            borderRadius: 50,
            resizeMode: "cover",
            borderWidth: 2,
            borderColor: "#ccc",
          }}
          source={{ uri: userinfo.userimage }}
        />
      </View>
      {/* name user */}
      <View style={{ width: "70%" }}>
        <View style={{ paddingLeft: 5 }}>
          <Text
            style={{
              fontSize: 14,
              color: "#535353",
              fontFamily: "Nunito-Medium",
            }}
          >
            Hello!
            <Ionicons name={"hand-left-outline"} size={20} color={"orange"} />
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Nunito-Bold",
            }}
          >
            {userinfo.username ? userinfo.username : userinfo.name}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default UserContainer;
