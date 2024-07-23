import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
interface Props {
  visible: boolean;
  message: string;
  onClose: any;
  ondelete?: () => void;
}
const CustomAlert: React.FC<Props> = ({
  visible,
  message,
  onClose,
  ondelete,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
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
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "#888" }}>{message}</Text>
          <View
            style={{
              flexDirection: "column",
              marginTop: 20,
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={ondelete}
              style={{
                padding: 10,
                borderRadius: 5,
                width: "100%",
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            >
              <Text
                style={{
                  color: "red",
                  fontSize: 18,
                  fontFamily: "Nunito-Bold",
                  textAlign: "center",
                }}
              >
                Delete
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onClose}
              style={{
                padding: 10,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Nunito-Medium",
                  textAlign: "center",
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
