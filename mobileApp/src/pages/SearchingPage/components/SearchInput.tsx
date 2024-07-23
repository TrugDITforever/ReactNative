import * as React from "react";
import { View, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { searchingRecipe } from "../../../features/authentication/services/userService/userSearchingRecipe";
import { useFetchFoodData } from "../../../features/authentication/hooks/useFetchFoodData";
// import { TouchableOpacity } from "react-native-gesture-handler";
interface Props {
  setSearchValue: (value: string) => void;
  searchValue: string;
}
const SearchInput: React.FC<Props> = ({ setSearchValue, searchValue }) => {
  const recommended = "recommended";
  // const { foodData, isloading } = useFetchFoodData(recommended);
  const [isShow, setisShow] = React.useState<boolean>(false);
  const handleChange = (value: string) => {
    setSearchValue(value);
  };
  React.useEffect(() => {
    if (searchValue) {
      setisShow(true);
    } else setisShow(false);
  }, [searchValue]);

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#EFF0F0",
        borderRadius: 30,
        height: 50,
        marginTop: 30,
        marginRight: 15,
        marginHorizontal: 15,
      }}
    >
      {/* icon search */}
      <View
        style={{ marginLeft: 10, height: "auto", justifyContent: "center" }}
      >
        <Ionicons name="search" size={22} color={"#ccc"} />
      </View>
      {/* input */}
      <View
        style={{
          width: "80%",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: 10,
          flexDirection: "row",
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
          value={searchValue}
          onChangeText={handleChange}
        />
      </View>
      {/* close clear input */}
      {isShow ? (
        <TouchableOpacity
          style={{ justifyContent: "center" }}
          onPress={() => setSearchValue("")}
        >
          <Ionicons name="close-circle-outline" size={22} color={"#000000"} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export default SearchInput;
