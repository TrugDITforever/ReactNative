import * as React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Prop {
  navigation: any;
}
const UserContainer: React.FC<Prop> = ({ navigation }) => {
  const userinfo = useSelector((state: any) => state.userinfo);
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        paddingLeft: 15,
        paddingBottom: 10,
      }}
    >
      <View style={{ width: "16%" }}>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            objectFit: "contain",
          }}
          source={{
            uri: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/157765/Originals/2(1).jpg",
          }}
        />
      </View>
      {/* name user */}
      <View style={{ width: "70%" }}>
        <Text style={{ fontSize: 16, color: "#535353" }}>
          Hello!
          <Ionicons name={"hand-left-outline"} size={20} color={"orange"} />
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Nunito-Bold",
          }}
        >
          {userinfo.name}
        </Text>
      </View>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate("Settings");
        }}
      >
        <Ionicons name={"menu"} size={32} color={"#000"} />
      </TouchableOpacity> */}
    </View>
  );
};
export default UserContainer;
