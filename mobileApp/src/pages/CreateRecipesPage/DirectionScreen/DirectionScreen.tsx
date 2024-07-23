import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import Modaldirection from "../Modal/modaldirection";
import { useDispatch, useSelector } from "react-redux";
import { updatedinstructions } from "../../../Redux/postforfood";

const DirectionsScreen = () => {
  const postforfood = useSelector((state: any) => state.postforfood);

  const [directions, setDirections] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [ishow, setIshow] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>("");
  const handleishow = (content: string) => {
    setIshow(!ishow);
    setTitle(content);
  };
  const dispatch = useDispatch();

  const onchangeText = (text: string) => {
    setDirections(text);
    dispatch(updatedinstructions({ instructions: text }));
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ margin: 20 }}>
        {/* Add directions input field */}
        <TextInput
          placeholder="Jot down ideas, instructions, or any other notes for this recipe"
          multiline={true}
          numberOfLines={15}
          style={styles.textInput}
          value={postforfood.instructions}
          onChangeText={onchangeText}
        />
        {/* Add total time input field */}
        {/* <View style={{ width: "100%", height: 50 }}>
          {totalTime.length > 0 ? (
            <View
              style={{
                width: "100%",
                height: "100%",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: "Nunito-Medium" }}>
                {totalTime}
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.touchableAdd}
              onPress={() => handleishow("Add Title")}
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
                  Add Time*
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View> */}
        <Modaldirection
          onClose={handleishow} 
          visible={ishow}
          title={title}
          setDirections={setDirections}
        />
      </View>
    </SafeAreaView>
  );
};

export default DirectionsScreen;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#f6f6f6",
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: "top",
  },
  touchableAdd: {
    width: "100%",
    height: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    justifyContent: "center",
  },
});
