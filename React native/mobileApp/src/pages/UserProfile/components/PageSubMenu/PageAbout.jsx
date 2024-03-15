import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
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
  const [listContain, setList] = React.useState([
    {
      textHeader: "About Us",
      textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      textHeader: "Terms of Use",
      textContent: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
  ]);
  return (
    <View>
      {listContain.map((value, index) => (
        <View key={index} style={styles.containForText}>
          <Text style={styles.textHeader}>{value.textHeader}</Text>
          <Text style={styles.textContent}>{value.textContent}</Text>
        </View>
      ))}
    </View>
  );
};
export default PageAbout;
