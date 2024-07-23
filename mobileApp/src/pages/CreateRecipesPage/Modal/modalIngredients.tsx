import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { updateingredients } from "../../../Redux/postforfood";
interface Props {
  visible?: boolean;
  message?: string;
  onClose?: any;
  title?: string;
  setingredients?: any;
  ingredients?: any;
  ondelete?: () => void;
}
const Modalingredients: React.FC<Props> = ({
  visible,
  message,
  onClose,
  ingredients,
  setingredients,
  title,
}) => {
  const [textinputValue, setinputvalue] = React.useState<string>();
  const dispatch = useDispatch();
  /// insert ingredients into redux to store

  React.useEffect(() => {
    dispatch(updateingredients({ ingredients: ingredients }));
  }, [ingredients]);
  const handleDonesubmit = () => {
    setingredients([...ingredients, textinputValue]);
    onClose(false);
    setinputvalue("");
  };
  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => {
          onClose(true);
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          style={{
            flex: 1,
          }}
          onPress={() => onClose(!visible)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                width: "100%",
                padding: 20,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            >
              <Text style={{ fontSize: 16 }}>{title}</Text>
              <Text style={{ fontSize: 16, color: "#888" }}>{message}</Text>
              <TextInput
                value={textinputValue}
                placeholder=""
                style={styles.textInput}
                onChangeText={(text) => setinputvalue(text)}
                onSubmitEditing={handleDonesubmit}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default Modalingredients;
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
    marginBottom: 20,
    textAlignVertical: "top",
  },
});
