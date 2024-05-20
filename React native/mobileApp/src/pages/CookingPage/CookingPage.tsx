import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import FoodimgName from "./components/FoodimgName";
import { ListofDecrip } from "./components/ListofDecrip";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
// import for component
import Description from "./components/Decription";
import Ingredients from "./components/Ingredients";
import Proceduce from "./components/Proceduce";
import CardForMore from "./components/CardFormore";
import HeadervsButtonBack from "../../components/Header/HeadervsButtonBack";
import { useDispatch, useSelector } from "react-redux";
import Statusbar from "../../components/Statusbar/Statusbar";
import ModalEditvsDel from "./components/ModalinCookPage";
import { usefetchFoodByID } from "../../features/authentication/hooks/useFetchFoodById";
import { deleteRecipe } from "../../features/authentication/services/userService/userDeleteRecipe";
import ModalCollection from "./components/ModalCollection";
import { checkIsAdded } from "../../features/authentication/hooks/userCheckIsAdded";
import {
  CollectionProp,
  addRecipeToCollection,
} from "../../features/authentication/services/userService/addRecipetoCollection";
import {
  PropCheckCollection,
  checkIsaddToCollection,
} from "../../features/authentication/services/userService/checkisAddtoCollection";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
interface Prop {
  navigation: any;
}
const CookingPage: React.FC<Prop> = ({ navigation }) => {
  const user = useSelector((state: any) => state.userinfo);
  const food = useSelector((state: any) => state.foodinfo);
  ///
  const [visible, setVisible] = React.useState<boolean>(false);
  const [showmodal, setshowmodal] = React.useState(false);
  const [submitDone, setsubmitDone] = React.useState(false);
  const [fetchingDone, setfetchingDone] = React.useState(false);
  const [isadded, setisadded] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  ///
  const propvalue: PropCheckCollection = {
    userID: user.id,
    recipeID: food.foodId,
  };
  const fetching = async () => {
    await checkIsaddToCollection(propvalue).then((exist) => setisadded(exist));
  };
  //function
  React.useEffect(() => {
    fetching().then(() => {
      setTimeout(() => {
        setfetchingDone(true);
      }, 1000);
    });
  });
  // submit base on state of is added to collection
  const handleShowmodal = () => {
    if (isadded) {
      const newValue: CollectionProp = {
        ownerID: user.id,
        collectionID: "",
        recipeID: food.foodId,
      };
      addRecipeToCollection(newValue).then(() => setisadded(false));
      return;
    }
    setshowmodal(true);
  };
  const handleEdit = () => {
    usefetchFoodByID(food.foodId, navigation, dispatch).then(
      navigation.push("CreateRecipePage", { showupdate: true })
    );
  };
  const handleDelete = () => {
    deleteRecipe(food.foodId).then(() => navigation.navigate("Profile"));
  };

  if (!fetchingDone) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        <Statusbar />
        <HeadervsButtonBack navigation={navigation} />
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Statusbar />
      {/* goback button and like button*/}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <HeadervsButtonBack navigation={navigation} />
        {/* show dot buttom base on id user */}
        {food.ownerId === user.id && (
          <View style={{ paddingRight: 15 }}>
            <TouchableOpacity onPress={() => setVisible(true)}>
              <View>
                <Entypo name={"dots-three-horizontal"} size={22} />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {/* Details of food */}
      <View style={{ height: "94%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <ListofOwnerAndCountry /> */}
          {/*  */}
          <View>
            <FoodimgName
              isadded={isadded}
              setisadded={setisadded}
              navigation={navigation}
              handleShowmodal={handleShowmodal}
              submitDone={submitDone}
              setsubmitDone={setsubmitDone}
            />
            {/* Stars */}
            <View style={{ marginLeft: 15 }}>
              <Text style={{ letterSpacing: 5 }}>
                <AntDesign name={"star"} color={"orange"} size={16} />
                <AntDesign name={"star"} color={"orange"} size={16} />
                <AntDesign name={"star"} color={"orange"} size={16} />
                <AntDesign name={"star"} color={"orange"} size={16} />
                <AntDesign name={"staro"} color={"orange"} size={16} />
              </Text>
            </View>
            {/* Calories, time, level, serves */}
            <View style={{ flexDirection: "row", marginLeft: 15 }}>
              <ListofDecrip nameIcon={"flame-outline"} text={"150 kcal"} />
              <ListofDecrip nameIcon={"timer-outline"} text={"50 mins"} />
              <ListofDecrip nameIcon={"flash-outline"} text={"Eazy"} />
              <ListofDecrip nameIcon={"git-branch-outline"} text={"Serves 4"} />
            </View>
            {/* Description, Ingredients, Proceduce  */}
            <Description />
            <Ingredients />
            <Proceduce />
            <CardForMore navigation={navigation} />
          </View>
        </ScrollView>
      </View>
      <ModalEditvsDel
        visible={visible}
        onClose={setVisible}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <ModalCollection
        visible={showmodal}
        onClose={setshowmodal}
        setsubmitDone={setsubmitDone}
      />
    </SafeAreaView>
  );
};
export default CookingPage;
