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
import SearchInput from "./components/SearchInput";
import SearchedList from "./components/SearchedList";
import SearchResults from "./components/SearchResults";

const Separator = () => <View style={styles.separator} />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonBackandLike: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    elevation: 2,
    shadowColor: "#000",
  },
});
const SearchPage = ({ navigation }) => {
  const [onload, setonload] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={{ width: "100%", height: "100%" }}>
        <View style={{ flexDirection: "row", margin: 10 }}>
          
          <View style={{ width: "15%" }}>
            <TouchableOpacity
              style={styles.buttonBackandLike}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "70%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "Nunito-Bold", fontSize: 18 }}>
              Search Food
            </Text>
          </View>
        </View>
        {/* search input */}
        <SearchInput />
        {/* List searching */}
        <SearchedList />
        {/* Results search */}
        <SearchResults navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
export default SearchPage;
