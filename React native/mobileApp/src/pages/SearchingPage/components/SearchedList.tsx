import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface ListSearchItem {
  listtext: string;
  isselected: boolean;
}

interface Styles {
  listContainer: ViewStyle;
  textcontain: ViewStyle;
  text: TextStyle;
  ischosse: {
    backgroundColor: ViewStyle;
    textcolor: TextStyle;
  };
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
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
  ischossebackgroundColor: {
    backgroundColor: "#FE724C",
  },
  ischossetextcolor: {
    color: "#fff",
  },
});

const SearchedList: React.FC = () => {
  const [listSearch, setList] = React.useState<ListSearchItem[]>([
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

  const onclickselected = (index: number) => {
    const newlist = listSearch.map((item, i) => ({
      ...item,
      isselected: i === index,
    }));
    setList(newlist);
  };

  return (
    <View style={{ height: "4%" }}>
      <View style={styles.listContainer}>
        {listSearch.map((value, index) => (
          <View
            key={index}
            style={[
              styles.textcontain,
              value.isselected ? styles.ischossebackgroundColor : {},
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
                  value.isselected ? styles.ischossetextcolor : {},
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
