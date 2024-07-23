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
import { useDispatch, useSelector } from "react-redux";
import { updatedinstructions } from "../../../Redux/postforfood";
interface Props {
  visible?: boolean;
  onClose?: any;
  title?: string;
  setDirections: any;
  ondelete?: () => void;
}
const Modaldirection: React.FC<Props> = ({
  visible,
  onClose,
  setDirections,
  title,
}) => {
  const postforfood = useSelector((state: any) => state.postforfood);

  const [textinputValue, setinputvalue] = React.useState<string>("");
  const dispatch = useDispatch();
  const onchangeText = (text: string) => {
    setinputvalue("");
    onClose(false);
    dispatch(updatedinstructions({ instructions: text }));
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
              <TextInput
                value={textinputValue}
                placeholder=""
                style={styles.textInput}
                onChangeText={onchangeText}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default Modaldirection;
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
