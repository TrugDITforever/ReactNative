import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { updateFoodName, updateOwnerId } from "../../../Redux/postforfood";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native";
import {
  collectionData,
  createCollection,
} from "../../../features/authentication/services/userService/createCollection";
import { setTrue } from "../../../Redux/action";
interface Props {
  visible?: boolean;
  onClose: any;
  ondelete?: () => void;
  setdonefetching: (prop: boolean) => void;
}
const ModalAddCollection: React.FC<Props> = ({
  visible,
  onClose,
  setdonefetching,
}) => {
  const user = useSelector((state: any) => state.userinfo);
  const [textinputValue, setinputvalue] = React.useState<string>("");
  const [disableButton, setdisablebutton] = React.useState<boolean>(true);
  const dispatch = useDispatch();

  /// submit to create a new collection
  const handleSave = () => {
    if (textinputValue) {
      const newCollection: collectionData = {
        id: "",
        name: textinputValue.trim(),
        ownerId: user.id,
        recipeID: [],
      };
      createCollection(newCollection).then(() => {
        onClose(false), setdonefetching(true), setinputvalue("");
      });
    }
    dispatch(setTrue());
  };

  React.useEffect(() => {
    if (textinputValue.length > 0) {
      setdisablebutton(false);
    } else {
      setdisablebutton(true);
    }
  }, [textinputValue]);
  const handlechangeText = (text: string) => {
    setinputvalue(text);
  };
  return (
    <KeyboardAvoidingView behavior="padding">
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => {
          onClose(true);
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
            onPress={() => onClose(false)}
          ></TouchableOpacity>
          <View
            style={{
              width: "100%",
              position: "absolute",
              bottom: 0,
              height: 200,
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                width: "100%",
                height: "100%",
                padding: 20,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 16, fontFamily: "Nunito-Bold" }}>
                  Add New Collection
                </Text>
                <TouchableOpacity onPress={() => onClose(false)}>
                  <AntDesign name="close" size={18} />
                </TouchableOpacity>
              </View>
              <TextInput
                value={textinputValue}
                placeholder="Enter collection name"
                style={styles.textInput}
                onChangeText={(text) => handlechangeText(text)}
                // onSubmitEditing={handleDonesubmit}
              />
              <View>
                <TouchableOpacity
                  style={[
                    styles.saveButton,
                    disableButton ? styles.disableButton : null,
                  ]}
                  disabled={disableButton}
                  onPress={handleSave}
                >
                  <Text
                    style={{
                      fontFamily: "Nunito-Medium",
                      fontSize: 18,
                      color: "#fff",
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default ModalAddCollection;
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#f6f6f6",
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    marginTop: 15,
    textAlignVertical: "top",
  },
  saveButton: {
    width: "100%",
    backgroundColor: "#F98A4F",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  disableButton: {
    opacity: 0.6,
  },
});
