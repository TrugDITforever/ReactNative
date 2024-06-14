import * as React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FoodeDetails from "./FoodDetails";
import {
  Course,
  courseResponse,
  fetchingCourses,
} from "../../../features/authentication/services/adminServices/fetchCourse";
import {
  cartResponse,
  fetchShoppingCart,
} from "../../../features/authentication/services/userService/fetchUserShoppingCart";
import { useSelector } from "react-redux";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "83%",
    paddingHorizontal: 15,
  },
  cardContain: {
    // width: "100%",
    height: 180,
    position: "relative",
  },
  cardContainBorder: {
    width: "100%",
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    marginBottom: 25,
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

interface Prop {
  navigation: any;
}
const Card: React.FC<Prop> = ({ navigation }) => {
  const [cartList, setCartList] = React.useState<cartResponse>();
  const [reload, setReload] = React.useState<boolean>(false);
  const user = useSelector((state: any) => state.userinfo);
  const fetching = async () => {
    try {
      const res = await fetchShoppingCart(user.id);
      if (res) {
        setCartList(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetching();
  }, [user.id]);
  React.useEffect(() => {
    if (reload) fetching().then(() => setReload(false));
  }, [reload]);
  // console.log(cartList?.shoppingcarts);

  return (
    <View style={[styles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cartList?.shoppingcarts.map((value, index) => (
          <View key={index} style={[styles.cardContainBorder]}>
            <TouchableOpacity
              // onPress={() => {
              //   navigation.navigate("Cooking");
              // }}
              activeOpacity={1}
            >
              {/* card image */}
              <View style={styles.cardContain}>
                <Image
                  source={{
                    uri: value.image,
                  }}
                  style={styles.backgroundImage}
                />
                <View>
                  <View
                    style={{
                      padding: 10,
                      paddingBottom: 5,
                      paddingTop: 5,
                      backgroundColor: "#fff",
                      position: "absolute",
                      borderRadius: 20,
                      margin: 10,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontFamily: "Nunito-semiBold" }}>
                      <AntDesign name={"star"} color={"orange"} size={11} />{" "}
                      {value.rating}
                    </Text>
                  </View>
                </View>
              </View>
              {/* details of food */}
              <FoodeDetails
                id={value._id}
                name={value.name}
                price={value.price}
                setReload={setReload}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default Card;
