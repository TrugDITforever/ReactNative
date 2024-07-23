import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
interface Props {
  visible: boolean;
  message?: string;
  onClose: any;
  handleEdit: () => void;
  handleDelete: () => void;
}
const ModalEditvsDel: React.FC<Props> = ({
  visible,
  onClose,
  handleEdit,
  handleDelete,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableOpacity
        onPress={() => onClose(!visible)}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View>
          <View
            style={{
              backgroundColor: "#fff",
              width: "100%",
              padding: 20,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                marginTop: 20,
                width: "100%",
              }}
            >
              <TouchableOpacity
                onPress={handleEdit}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  width: "100%",
                  borderBottomWidth: 1,
                  borderBottomColor: "#ccc",
                  flexDirection: "row",
                }}
              >
                <AntDesign name="edit" size={24} color={"#ffa800"} />
                <Text
                  style={{
                    color: "#ffa800",
                    fontSize: 18,
                    fontFamily: "Nunito-Bold",
                    textAlign: "left",
                  }}
                >
                  Edit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleDelete}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <Ionicons name="trash" color={"red"} size={24} />
                <Text
                  style={{
                    color: "red",
                    fontSize: 18,
                    fontFamily: "Nunito-Medium",
                    textAlign: "center",
                  }}
                >
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalEditvsDel;
