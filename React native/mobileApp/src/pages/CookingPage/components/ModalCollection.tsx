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
  ScrollView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-native";
import {
  collectionResponse,
  fetchUserCollections,
} from "../../../features/authentication/services/userService/fetchUserCollections";
import {
  CollectionProp,
  addRecipeToCollection,
} from "../../../features/authentication/services/userService/addRecipetoCollection";
interface Props {
  visible?: boolean;
  onClose: any;
  ondelete?: () => void;
  setsubmitDone: (prop: boolean) => void;
}
const ModalCollection: React.FC<Props> = ({
  visible,
  onClose,
  setsubmitDone,
}) => {
  const user = useSelector((state: any) => state.userinfo);
  const food = useSelector((state: any) => state.foodinfo);
  const [usercollection, setusercollection] = React.useState<
    collectionResponse[]
  >([]);
  // function fetchingCollection
  const fetchingCollections = async () => {
    try {
      const res = await fetchUserCollections(user.id);
      setusercollection(res);
    } catch (error: any) {
      return;
    }
  };
  /// function for user add favorite recipe to selected collection
  const handleSubmitAdd = (collectionID: string) => {
    const newValue: CollectionProp = {
      ownerID: user.id,
      collectionID: collectionID,
      recipeID: food.foodId,
    };
    addRecipeToCollection(newValue).then(() => {
      onClose(false), setsubmitDone(true);
    });
  };
  React.useEffect(() => {
    fetchingCollections();
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding">
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => {
          onClose(false);
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
              backgroundColor: "rgba(0, 0, 0, 0.2)",
            }}
            onPress={() => onClose(false)}
          ></TouchableOpacity>
          <View
            style={{
              width: "100%",
              position: "absolute",
              bottom: 0,
              height: 300,
              backgroundColor: "#fff",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <View
              style={{
                width: "100%",
                bottom: 0,
                padding: 15,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontFamily: "Nunito-Bold", fontSize: 18 }}>
                Add to collection
              </Text>
              <TouchableOpacity onPress={() => onClose(false)}>
                <AntDesign name="close" size={18} />
              </TouchableOpacity>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 15,
              }}
            >
              {usercollection.map((value, index) => (
                <View key={index} style={styles.cardContain}>
                  <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => {
                      handleSubmitAdd(value._id);
                    }}
                    activeOpacity={0}
                  >
                    {/* name of collection */}
                    <View style={styles.containerForNameofFood}>
                      <View>
                        <Text numberOfLines={1} style={styles.textNameFood}>
                          {value.name}
                        </Text>
                        <Text numberOfLines={2} style={styles.textNumberRecipe}>
                          {value.recipeID.length} Recipe
                        </Text>
                      </View>
                      {/* container for star and like button */}
                    </View>
                    <View
                      style={{
                        // width: "30%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        //   backgroundColor: "black",
                      }}
                    >
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          borderWidth: 1,
                          borderRadius: 50,
                        }}
                      >
                        <Image
                          source={require("../../../assets/image/default-image.jpg")}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 50,
                            resizeMode: "cover",
                          }}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default ModalCollection;
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
  container: {
    width: "100%",
    height: "90%",
  },
  cardContain: {
    width: "100%",
    height: 80,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  touchable: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  containerForNameofFood: {
    // width: "70%",
    // padding: 15,
    justifyContent: "center",
  },
  textNameFood: {
    fontSize: 16,
    fontFamily: "Nunito-Bold",
    marginBottom: 10,
  },
  textNumberRecipe: {
    fontSize: 14,
    fontFamily: "Nunito-semiBold",
    color: "#adadad",
  },
});
