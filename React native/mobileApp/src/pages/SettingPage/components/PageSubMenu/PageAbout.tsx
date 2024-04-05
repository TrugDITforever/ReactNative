import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import data_AboutApp from "../../../../data/data_AboutApp.json";

const styles = StyleSheet.create({
  containForText: {
    width: "100%",
    padding: 15,
    height: "auto",
  },
  textHeader: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily: "Nunito-Bold",
  },
  textContent: {
    fontSize: 16,
    fontFamily: "Nunito-Regular",
  },
});
const PageAbout = () => {
  return (
    <View>
      {data_AboutApp.map((value, index) => (
        <View key={index} style={styles.containForText}>
          <Text style={styles.textHeader}>{value.textHeader}</Text>
          <Text style={styles.textContent}>{value.textContent}</Text>
        </View>
      ))}
    </View>
  );
};
export default PageAbout;
