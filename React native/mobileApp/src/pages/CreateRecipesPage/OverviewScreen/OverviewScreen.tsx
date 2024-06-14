import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import ModalAdd from "../Modal/ModalAdd";
import ModalImage from "../Modal/modalImage";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFoodImage,
  updateFoodName,
  updatedecription,
} from "../../../Redux/postforfood";
interface Prop {
  navigation: any;
}
const OverviewScreen: React.FC<Prop> = ({ navigation }) => {
  const postforfood = useSelector((state: any) => state.postforfood);
  const [ishow, setIshow] = React.useState<boolean>(false);
  const [titlemess, settitle] = React.useState<string>(postforfood.foodName);
  const [directions, setDirections] = React.useState<string>("");
  const [title, setTitle] = React.useState<string>("");
  const [showmodalimage, setshowmodalimage] = React.useState<boolean>(false);
  const [image, setimage] = React.useState<string>(postforfood.foodImage);
  const dispatch = useDispatch();
  const handleishow = (content: string) => {
    setIshow(!ishow);
    setTitle(content);
  };
  const changedescription = (text: string) => {
    dispatch(updatedecription({ description: text }));
    // console.log(postforfood);
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ margin: 25, backgroundColor: "#fff" }}>
            {/* Add photo input */}
            <View style={{ width: "100%", height: 250 }}>
              {postforfood.foodImage.length > 0 ? (
                <View style={styles.touchableImage}>
                  <ImageBackground
                    borderRadius={10}
                    style={{ width: "100%", height: "100%" }}
                    source={{ uri: postforfood.foodImage }}
                  >
                    <View
                      style={{
                        alignItems: "flex-end",
                        padding: 5,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => dispatch(clearFoodImage())}
                      >
                        <View
                          style={{
                            alignItems: "flex-end",
                            padding: 1,
                            borderRadius: 60,
                            backgroundColor: "#fff",
                          }}
                        >
                          <Ionicons name="close-outline" size={20} />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </View>
              ) : (
                <TouchableOpacity
                  style={styles.touchableImage}
                  onPress={() => {
                    setshowmodalimage(true);
                  }}
                >
                  <Ionicons name="images-outline" size={24} color={"#FE724C"} />
                </TouchableOpacity>
              )}
            </View>
            {/* add title */}
            <View style={{ width: "100%", height: 50 }}>
              {/* check if user picked image or not */}
              {postforfood.foodName.length > 0 ? (
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    borderBottomColor: "#ccc",
                    borderBottomWidth: 1,
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ fontSize: 16, fontFamily: "Nunito-Medium" }}>
                    {postforfood.foodName}
                  </Text>
                  <TouchableOpacity
                    onPress={() => dispatch(updateFoodName({ foodName: "" }))}
                  >
                    <Ionicons name="close-outline" size={20} />
                  </TouchableOpacity>
                </View>
              ) : (
                // button add title
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
                      Add Title*
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
            <TextInput
              placeholder="Descripe somthing about your recipe"
              multiline={true}
              numberOfLines={15}
              style={styles.textInput}
              value={postforfood.description}
              onChangeText={changedescription}
            />
          </View>
          {/* Modal */}
          <ModalAdd
            onClose={handleishow}
            visible={ishow}
            titlemess={titlemess}
            setmess={settitle}
            title={title}
          />
          <ModalImage
            ishow={showmodalimage}
            setshowmodalimage={setshowmodalimage}
            setimage={setimage}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OverviewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  touchableImage: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#FE724C",
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
  },
  touchableAdd: {
    width: "100%",
    height: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    justifyContent: "center",
  },
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
    marginTop: 20,
    textAlignVertical: "top",
  },
});
