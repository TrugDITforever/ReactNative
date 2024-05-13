import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OverviewScreen from "./OverviewScreen/OverviewScreen";
import IngredientsScreen from "./IngredientsScreen/IngredientsScreen";
import DirectionsScreen from "./DirectionScreen/DirectionScreen";
/// icons
import Ionicons from "react-native-vector-icons/Ionicons";
import Statusbar from "../../components/Statusbar/Statusbar";
import { useSelector, useDispatch } from "react-redux";
import {
  submitCreateRecipes,
  RecipeData,
} from "../../features/authentication/submitCreateRecipe";
import { clearAllFields } from "../../Redux/postforfood";
import {
  submitUpdateRecipe,
  updateRecipeData,
} from "../../features/authentication/hooks/useUpdateRecipe";
const Tab = createMaterialTopTabNavigator();
interface Prop {
  navigation: any;
  route: any;
}
const CreateRecipeScreen: React.FC<Prop> = ({ navigation, route }) => {
  const { showupdate } = route.params;
  const postforfood = useSelector((state: any) => state.postforfood);
  const dispatch = useDispatch();
  const recipeData: RecipeData = {
    foodid: postforfood.foodId,
    foodName: postforfood.foodName,
    foodImage: postforfood.foodImage,
    description: postforfood.description,
    ingredients: postforfood.ingredients,
    instructions: postforfood.instructions,
    ownerId: postforfood.ownerId,
  };
  const updaterecipeData: updateRecipeData = {
    foodId: postforfood.foodId,
    foodName: postforfood.foodName,
    foodImage: postforfood.foodImage,
    description: postforfood.description,
    ingredients: postforfood.ingredients,
    instructions: postforfood.instructions,
  };
  const handleClearRecipe = () => {
    dispatch(clearAllFields());
    navigation.goBack();
  };
  const handleSubmit = () => {
    submitCreateRecipes(recipeData).then((res) => {
      dispatch(clearAllFields());
      navigation.navigate("PostOfUser", { success: true });
    });
  };
  const handleupdateRecipe = () => {
    submitUpdateRecipe(updaterecipeData).then(() => {
      dispatch(clearAllFields());
      navigation.navigate("PostOfUser", { success: true });
    });
  };
  return (
    <View style={styles.container}>
      <Statusbar />
      <View style={styles.header}>
        <View style={{ marginTop: "10%" }}>
          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity onPress={handleClearRecipe}>
              <View
                style={{
                  alignItems: "flex-end",
                  padding: 5,
                  borderRadius: 60,
                  backgroundColor: "#ededed",
                }}
              >
                <Ionicons name="close-outline" size={30} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.headerText}>Create your recipe</Text>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIndicatorStyle: styles.tabBarIndicator,
          tabBarActiveTintColor: "#FE724C",
          tabBarInactiveTintColor: "#000",
          tabBarScrollEnabled: true,
        }}
      >
        <Tab.Screen name="Overview" component={OverviewScreen} />
        <Tab.Screen name="Ingredients" component={IngredientsScreen} />
        <Tab.Screen name="Directions" component={DirectionsScreen} />
      </Tab.Navigator>
      {showupdate ? (
        <View style={{ alignItems: "center", margin: 20 }}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleupdateRecipe}
          >
            <Text style={styles.textSubmit}>Update Recipe</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ alignItems: "center", margin: 20 }}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSubmit}
          >
            <Text style={styles.textSubmit}>Save Recipe</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default CreateRecipeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginHorizontal: 20,
    height: "15%",
  },
  headerText: {
    fontSize: 24,
    fontFamily: "Nunito-Bold",
  },
  tabBarStyle: {
    backgroundColor: "#fff",
    elevation: 0,
  },
  tabBarLabel: {
    fontSize: 16,
    fontFamily: "Nunito-Bold",
  },
  tabBarIndicator: {
    backgroundColor: "#FE724C",
    height: 2,
  },
  textSubmit: {
    color: "#fff",
    fontFamily: "Nunito-Bold",
    fontSize: 18,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FE724C",
    position: "absolute",
    borderRadius: 20,
    bottom: 0,
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
  },
});
