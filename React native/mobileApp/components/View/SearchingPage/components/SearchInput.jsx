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
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
        }}
      >
        <View style={{ marginLeft: 10, height: 50, justifyContent: "center" }}>
          <Ionicons name="search" size={22} />
        </View>
        <View
          style={{
            width: "60%",
            height: 50,
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
            placeholder="Popular, Breakfast..."
            autoCapitalize="none"
          />
        </View>
      </View>
    </View>
  );
};
export default SearchInput;
