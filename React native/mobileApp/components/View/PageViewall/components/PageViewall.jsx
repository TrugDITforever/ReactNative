import * as React from "react";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Image,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import Card from "./Card/Card";
import Ionicons from "react-native-vector-icons/Ionicons";
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
const PageViewall = ({ navigation }) => {
  const [onload, setonload] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={{ width: "100%", height: "100%" }}>
        {/* button back and title of page */}
        <View style={{ flexDirection: "row", margin: 10 }}>
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
        </View>
        <View style={{ width: "100%" }}>
          {/* Card render */}
          <Card navigation={navigation}></Card>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default PageViewall;
