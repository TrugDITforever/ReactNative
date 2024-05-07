import React, { useState } from "react";
import {
  View,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateFoodImage } from "../../../Redux/postforfood";
interface Prop {
  ishow: boolean;
  setshowmodalimage: (value: boolean) => void;
  setimage: (value: string) => void;
}
const images = [
  {
    id: 1,
    uri: "https://th.bing.com/th/id/R.99a429149891b8331ab9a4d9dcdeca89?rik=ZFGjK2aI0XNcog&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFresh-hot-delicious-food-wallpaper.jpg&ehk=YcpVrjnOnSm%2fhnTl3VFd3ve98wBRCKiyDEZj%2fJ43ix8%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    uri: "https://th.bing.com/th/id/R.da0f9d4f79ede796113d198e964631b1?rik=ba4nm8LaaalLow&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    uri: "https://th.bing.com/th/id/R.909c0a545dcf0b4b3109ceb8edcc3127?rik=wUgnPJcOD9bLng&pid=ImgRaw&r=0",
  },
  {
    id: 4,
    uri: "https://www.greenleafservices.com/wp-content/uploads/2017/03/cuisines-live-s.jpg",
  },
  // Thêm các đối tượng hình ảnh khác nếu cần
];

const ModalImage: React.FC<Prop> = ({ ishow, setshowmodalimage, setimage }) => {
  const dispatch = useDispatch();
  const postforfood = useSelector((state: any) => state.postforfood);
  const handleImagePress = (image: string) => {
    setshowmodalimage(false);
    dispatch(updateFoodImage({ foodImage: image }));
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
                  onPress={() => handleImagePress(image.uri)}
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
