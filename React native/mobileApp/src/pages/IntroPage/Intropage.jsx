import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native";
const styles = StyleSheet.create({
  container: {
    with: "100%",
    height: "100%",
  },
});
const Intropage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <LinearGradient
        colors={["#D10030", "#4B1832"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
      >
        <View
          style={{
            width: "100%",
            height: "50%",
            backgroundColor: "#fff",
            borderRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 150,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: 250,
              height: 300,
              borderRadius: 400,
              objectFit: "contain",
            }}
            source={{
              uri: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/157765/Originals/2(1).jpg",
            }}
          />
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#fff",
              marginHorizontal: 30,
              padding: 10,
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#C03A3A",
              padding: 20,
              borderRadius: 20,
              marginTop: 30,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
            onPress={() => navigation.navigate("AccountPage")}
          >
            <Text
              style={{
                fontSize: 25,
                color: "#fff",
              }}
            >
              Get's started{" "}
            </Text>
            <FontAwesomeIcon
              icon={faArrowRight}
              size={24}
              style={{ color: "#fff" }}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default Intropage;
