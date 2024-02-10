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
  FlatList,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from "react-native";
const Separator = () => <View style={styles.separator} />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonmain: {
    width: "20",
    color: "rgba(255, 255, 255)",
  },
  logo: {
    width: 150,
    height: 180,
    objectFit: "contain",
  },
  text: {
    fontSize: 16,
  },
});
const SearchPage = () => {
  const [onload, setonload] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={{ width: "100%", height: "100%" }}>
        <Text>This is SearhingPage</Text>
      </View>
    </SafeAreaView>
  );
};
export default SearchPage;
