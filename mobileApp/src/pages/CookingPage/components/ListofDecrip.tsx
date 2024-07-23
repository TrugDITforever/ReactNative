import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Prop {
  nameIcon: string;
  text?: string;
}
export const ListofDecrip: React.FC<Prop> = ({ nameIcon, text }) => {
  return (
    <View>
      <View
        style={{
          width: " 100%",
          height: 35,
          flexDirection: "row",
          marginRight: 10,
          marginTop: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#f8f8f8",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 5,
            paddingRight: 10,
            elevation: 1,
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
export const ListofOwnerAndCountry: React.FC = () => {
  return (
    <View
      style={{
        width: " 100%",
        height: 30,
        flexDirection: "row",
        margin: 15,
      }}
    >
      <View
        style={{
          backgroundColor: "#f8f8f8",
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
        <Ionicons name="earth" size={18} />
        <Text
          style={{
            paddingLeft: 5,
            fontFamily: "Nunito-Medium",
            fontSize: 16,
          }}
        >
          {""}Japan
        </Text>
      </View>
    </View>
  );
};
