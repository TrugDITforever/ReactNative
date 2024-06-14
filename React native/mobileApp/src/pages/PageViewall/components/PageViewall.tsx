import * as React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import Card from "./Card/Card";
import Statusbar from "../../../components/Statusbar/Statusbar";
import HeadervsButtonBack from "../../../components/Header/HeadervsButtonBack";
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
  route: any;
}

const PageViewall: React.FC<Prop> = ({ navigation, route }) => {
  const { title } = route.params;
  const [onload, setonload] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Statusbar />
      <View style={{ width: "100%", height: "100%" }}>
        {/* button back and title of page */}
        {/* <View style={{ flexDirection: "row", margin: 10 }}>
          <View style={{ width: "15%" }}>
            <TouchableOpacity
              style={styles.buttonBackandLike}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "70%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "Nunito-Bold", fontSize: 18 }}>
              Title of Page when click on
            </Text>
          </View>
        </View> */}
        <HeadervsButtonBack isShown={false} navigation={navigation} />

        <View style={{ width: "100%" }}>
          {/* Card render */}
          <Card navigation={navigation} title={title}></Card>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default PageViewall;
