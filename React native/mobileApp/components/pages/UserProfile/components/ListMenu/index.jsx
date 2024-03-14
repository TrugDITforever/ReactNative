import * as React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "80%",
  },
  listContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  listTextContainer: {
    width: "100%",
  },
  textMenu: {
    fontFamily: "Nunito-semiBold",
    fontSize: 18,
  },
  subMenu: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
    marginBottom: 15,
  },
});
const ListMenu = ({ navigation }) => {
  const [list, setList] = React.useState([
    {
      text: "Personal Details",
      icon: "person",
    },
    {
      text: "Privacy Settings",
      icon: "alert",
    },
    {
      text: "About Us",
      icon: "help-circle",
    },
    {
      text: "Feedback & Support",
      icon: "chatbox-ellipses",
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <View style={styles.listTextContainer}>
          {/* start list of menu */}
          {list.map((value, index) => (
            <View key={index}>
              <TouchableOpacity
                style={styles.subMenu}
                onPress={() => navigation.navigate("PageSubmenu")}
              >
                {/* icon */}
                <View style={{ width: "10%", margin: 10 }}>
                  <Ionicons name={value.icon} size={30} />
                </View>
                {/* Text */}
                <View style={{ width: "70%" }}>
                  <Text style={styles.textMenu}>{value.text}</Text>
                </View>
                {/* icon arrow */}
                <View>
                  <AntDesign name="caretright" size={20} />
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
export default ListMenu;
