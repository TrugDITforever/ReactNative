import * as React from "react";
import { View, SafeAreaView, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const SearchInput = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#EFF0F0",
        borderRadius: 30,
        height: 50,
        marginTop: 30,
        marginRight: 15,
        marginHorizontal: 10,
      }}
    >
      <View
        style={{ marginLeft: 10, height: "auto", justifyContent: "center" }}
      >
        <Ionicons name="search" size={22} color={"#ccc"} />
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
          placeholder="Looking for recipe?"
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};
export default SearchInput;
