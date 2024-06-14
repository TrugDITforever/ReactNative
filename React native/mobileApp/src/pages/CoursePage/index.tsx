import * as React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Card from "./Card/Card";
import Statusbar from "../../components/Statusbar/Statusbar";
import HeadervsButtonBack from "../../components/Header/HeadervsButtonBack";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonBackandLike: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    elevation: 2,
    shadowColor: "#000",
  },
});
interface Prop {
  navigation: any;
}

const CoursePage: React.FC<Prop> = ({ navigation }) => {
  const [onload, setonload] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Statusbar />
      <View style={{ width: "100%", height: "100%" }}>
        {/* button back and title of page */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <HeadervsButtonBack isShown={false} navigation={navigation} />
          <TouchableOpacity
            style={{ margin: 15 }}
            onPress={() => navigation.navigate("CartPage")}
          >
            <AntDesign name="shoppingcart" size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%" }}>
          {/* Card render */}
          <Card navigation={navigation}></Card>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default CoursePage;
