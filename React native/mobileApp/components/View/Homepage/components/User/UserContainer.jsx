import * as React from "react";
import { Image, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
const UserContainer = () => {
  const userinfo = useSelector((state) => state.userinfo);
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{ width: "15%", marginLeft: 10 }}>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 10,
            objectFit: "cover",
          }}
          source={{
            uri: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/157765/Originals/2(1).jpg",
          }}
        />
      </View>
      {/* name user */}
      <View style={{ width: "50%" }}>
        <Text style={{ fontSize: 16, color: "#535353" }}>
          Hello
          <Ionicons name={"hand-left-outline"} size={16} color={"orange"} />
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
    </View>
  );
};
export default UserContainer;
