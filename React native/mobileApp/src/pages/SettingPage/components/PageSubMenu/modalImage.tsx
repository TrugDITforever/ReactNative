import React, { useState } from "react";
import {
  View,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
interface Prop {
  ishow: boolean;
  setshowmodalimage: (value: boolean) => void;
  setimage: (value: string) => void;
}
const images = [
  {
    id: 1,
    uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 2,
    uri: "https://th.bing.com/th/id/R.cc0234c86ae58bcce3fb2f910fe5912e?rik=q4pf1v1C2ayxRw&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    uri: "https://th.bing.com/th/id/OIP.NZbE92m3LD7huAf5EfNhtAAAAA?w=474&h=474&rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    uri: "https://static.vecteezy.com/system/resources/previews/008/170/131/original/cute-cartoon-logo-character-of-chef-hand-drawn-chibi-character-isolated-background-vector.jpg",
  },
];

const ModalImage: React.FC<Prop> = ({ ishow, setshowmodalimage, setimage }) => {
  const dispatch = useDispatch();
  const handleImagePress = (image: any) => {
    setshowmodalimage(false);
    setimage(image.uri);
  };
  return (
    <View style={styles.container}>
      <Modal visible={ishow} animationType="slide" transparent>
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={() => setshowmodalimage(false)}
        >
          <View style={styles.modalContent}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              {images.map((image) => (
                <TouchableOpacity
                  key={image.id}
                  onPress={() => handleImagePress(image)}
                  style={styles.imageContainer}
                >
                  <Image source={{ uri: image.uri }} style={styles.image} />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
  },
  scrollViewContent: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageContainer: {
    margin: 1,
  },
  image: {
    width: 120,
    height: 120,
  },
});

export default ModalImage;
