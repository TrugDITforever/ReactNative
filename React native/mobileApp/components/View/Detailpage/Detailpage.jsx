import * as React from "react";
import { Button, Text, View } from "react-native";
export default function Details({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Button title="goback Home" onPress={() => navigation.goBack()} />
      <Text>lkdfhgjkdfh</Text>
    </View>
  );
}
