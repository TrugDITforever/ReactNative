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
  KeyboardAvoidingView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchInput from "./components/SearchInput";
import SearchedList from "./components/SearchedList";
import SearchResults from "./components/SearchResults";
import Statusbar from "../../components/Statusbar/Statusbar";

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
interface Prop {
  navigation: any;
}
const SearchPage: React.FC<Prop> = ({ navigation }) => {
  const [onload, setonload] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Statusbar />
      <View style={{ width: "100%", height: "100%" }}>
        {/* <View style={{ flexDirection: "row", margin: 10 }}>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "Nunito-Bold", fontSize: 24 }}>
              Search Food
            </Text>
          </View>
        </View> */}
        {/* search input */}
        <SearchInput />
        <SearchResults navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
export default SearchPage;
