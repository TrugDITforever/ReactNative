import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import ModalAdd from "../Modal/ModalAdd";
import Modalingredients from "../Modal/modalIngredients";
import { useDispatch, useSelector } from "react-redux";
import {
  updatedinstructions,
  updateingredients,
} from "../../../Redux/postforfood";

const IngredientsScreen: React.FC = () => {
  const postforfood = useSelector((state: any) => state.postforfood);
  const [ingredients, setIngredients] = useState<[]>(postforfood.ingredients);
  const [ishow, setIshow] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>("");
  const dispatch = useDispatch();
  const handleishow = (content: string) => {
    setIshow(!ishow);
    setTitle(content);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
        <View style={{ margin: 25, backgroundColor: "#fff", height: "50%" }}>
          {/* add ingredients */}
          <View style={{ width: "100%", height: 50 }}>
            <TouchableOpacity
              style={{
                width: "100%",
                height: "100%",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                justifyContent: "center",
              }}
              onPress={() => handleishow("Add ingredient")}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="add-circle" size={24} color={"#FE724C"} />
                <Text
                  style={{
                    fontFamily: "Nunito-semiBold",
                    paddingLeft: 5,
                    fontSize: 16,
                  }}
                >
                  Add Ingredients*
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Add ingredient from input fields */}
          {postforfood.ingredients.map((ingredient: string, index: number) => (
            <View key={index} style={{ padding: 5 }}>
              <Text style={{ fontFamily: "Nunito-Medium", fontSize: 14 }}>
                {ingredient}
              </Text>
            </View>
          ))}

          <Modalingredients
            onClose={handleishow}
            visible={ishow}
            ingredients={ingredients}
            setingredients={setIngredients}
            title={title}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default IngredientsScreen;
