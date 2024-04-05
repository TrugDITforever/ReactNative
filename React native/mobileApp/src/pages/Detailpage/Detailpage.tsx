import * as React from "react";
import { Button, Text, View } from "react-native";

interface Prop {
  navigation: any;
}

export default function Details(props: Prop) {
  const { navigation } = props;

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Button title="Go back Home" onPress={() => navigation.goBack()} />
      <Text>lkdfhgjkdfh</Text>
    </View>
  );
}
