import * as React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchInput from "./components/SearchInput";
import SearchedList from "./components/SearchedList";
import SearchResults from "./components/SearchResults";
import Statusbar from "../../components/Statusbar/Statusbar";
import { FoodData } from "../../features/authentication/commonData/foodData";
import { useFetchFoodData } from "../../features/authentication/hooks/useFetchFoodData";
import { searchingRecipe } from "../../features/authentication/services/userService/userSearchingRecipe";

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
  const recommended = "recommended";
  const { foodData, isloading } = useFetchFoodData(recommended);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [recipeList, setrecipeList] = React.useState<FoodData[]>(foodData);
  const [isServerSearch, setIsServerSearch] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (searchValue) {
      setTimeout(() => {
        fetching();
      }, 2000);
    } else {
      setIsServerSearch(false);
      setrecipeList(foodData);
    }
    const fetching = async () => {
      const res = await searchingRecipe(searchValue);
      setrecipeList(res);
      setIsServerSearch(true);
    };
  }, [foodData, searchValue]);
  /// searchValue filter
  const filteredRecipes = React.useMemo(() => {
    if (isServerSearch) return recipeList;
    const lowercasedTerm = searchValue.toLowerCase();
    return recipeList.filter((recipe) =>
      recipe.foodName.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchValue, recipeList, isServerSearch]);
  ///
  return (
    <SafeAreaView style={styles.container}>
      <Statusbar />
      <View style={{ width: "100%", height: "100%" }}>
        {/* search input */}
        <SearchInput
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />

        {/*  */}
        <SearchResults navigation={navigation} recipeList={filteredRecipes} />
      </View>
    </SafeAreaView>
  );
};
export default SearchPage;
