import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const ListofDecrip = ({ nameIcon, text }) => {
  return (
    <View>
      <View
        style={{
          width: " 100%",
          height: 35,
          flexDirection: "row",
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#EFF0F0",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 5,
            paddingRight: 10,
            elevation: 2,
            shadowColor: "#000",
          }}
        >
          <Ionicons name={nameIcon} size={20} />
          <Text
            style={{
              fontFamily: "Nunito-semiBold",
              fontSize: 14,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              paddingLeft: 5,
            }}
          >
            {text}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ListofDecrip;
