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
import Ionicons from "react-native-vector-icons/Ionicons";
const SearchInput = () => {
  return (
    <View style={{ width: "100%", height: 80 }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#EFF0F0",
          borderRadius: 20,
          height: 55,
          margin: 15,
        }}
      >
        <View
          style={{ marginLeft: 10, height: "auto", justifyContent: "center" }}
        >
          <Ionicons name="search" size={22} />
        </View>
        <View
          style={{
            width: "60%",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <TextInput
            style={{
              width: "100%",
              fontFamily: "Nunito-semiBold",
              fontSize: 16,
            }}
            placeholder="Search your collections..."
            autoCapitalize="none"
          />
        </View>
      </View>
    </View>
  );
};
export default SearchInput;
