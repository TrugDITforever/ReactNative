import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const styles = StyleSheet.create({
  listContainer: {
    width: " 100%",
    height: 35,
    flexDirection: "row",
    marginTop: 10,
  },
  textcontain: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 15,
    marginLeft: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  text: {
    fontFamily: "Nunito-semiBold",
    fontSize: 16,
    paddingLeft: 5,
  },
  ischosse: {
    backGround: {
      backgroundColor: "#000",
    },
    textcolor: {
      color: "#fff",
    },
  },
});
const SearchedList = () => {
  const [ischoose, setischoose] = React.useState(true);

  const [listSearch, setlist] = React.useState([
    {
      listtext: "Popular",
      isselected: true,
    },
    {
      listtext: "Breakfast",
      isselected: false,
    },
    {
      listtext: "Lunch",
      isselected: false,
    },
  ]);
  const onclickselected = (index) => {
    const newlist = listSearch.map((item, i) => ({
      ...item,
      isselected: i === index,
    }));
    setlist(newlist);
  };
  return (
    <View style={{ height: "4%" }}>
      <View style={styles.listContainer}>
        {listSearch.map((value, index) => (
          <View
            key={index}
            style={[
              styles.textcontain,
              value.isselected ? styles.ischosse.backGround : "",
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                onclickselected(index);
              }}
            >
              <Text
                style={[
                  styles.text,
                  value.isselected ? styles.ischosse.textcolor : "",
                ]}
              >
                {value.listtext}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};
export default SearchedList;
