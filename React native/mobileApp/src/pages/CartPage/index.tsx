import * as React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Card from "./Card/Card";
import Statusbar from "../../components/Statusbar/Statusbar";
import HeadervsButtonBack from "../../components/Header/HeadervsButtonBack";
import {
  courseResponse,
  fetchingCourses,
} from "../../features/authentication/services/adminServices/fetchCourse";
import {
  Cart,
  cartResponse,
  fetchShoppingCart,
} from "../../features/authentication/services/userService/fetchUserShoppingCart";
import { useSelector } from "react-redux";
import { checkoutPayment } from "../../features/authentication/services/userService/userCheckoutPayment";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonBackandLike: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    elevation: 2,
    shadowColor: "#000",
  },
});
interface Prop {
  navigation: any;
}

const CartPage: React.FC<Prop> = ({ navigation }) => {
  const [onload, setonload] = React.useState(false);
  const [isfetching, setisfetching] = React.useState<boolean>(false);
  const [cartList, setCartList] = React.useState<cartResponse>();
  const user = useSelector((state: any) => state.userinfo);

  const fetching = async () => {
    try {
      const res = await fetchShoppingCart(user.id);
      if (res) {
        setCartList(res);
        // console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(cartList?.shoppingcarts);
  React.useEffect(() => {
    fetching();
  }, []);
  React.useEffect(() => {
    if (onload) fetching().then(() => setonload(false));
  }, [onload]);
  const totalAmount = cartList?.shoppingcarts.reduce(
    (accumulator, currentItem) => {
      return accumulator + currentItem.price;
    },
    0
  );
  console.log("jagsdga");
  const handleCheckout = async (userID: string) => {
    if (!cartList) {
      console.log("Cart list is not available");
      return;
    }
    const shoppingCarts = cartList.shoppingcarts; // Sử dụng cartList.shoppingcarts
    try {
      await checkoutPayment(userID, shoppingCarts);
      navigation.navigate("CoursePage");
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  // console.log(totalAmount);
  return (
    <SafeAreaView style={styles.container}>
      <Statusbar />
      <View style={{ width: "100%", height: "100%" }}>
        {/* button back and title of page */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <HeadervsButtonBack isShown={false} navigation={navigation} />
          <View>
            <Text style={{ fontFamily: "Nunito-semiBold", fontSize: 18 }}>
              SHOPPING CART ({`${cartList?.shoppingcarts.length}`})
            </Text>
          </View>
        </View>
        <View style={{ width: "100%" }}>
          {/* Card render */}
          <Card navigation={navigation}></Card>
          <View style={{ padding: 15, borderTopWidth: 1, borderColor: "#ccc" }}>
            <View
              style={{
                // height: "5%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontFamily: "Nunito-semiBold", fontSize: 18 }}>
                Total:
              </Text>
              <Text
                style={{
                  fontFamily: "Nunito-semiBold",
                  fontSize: 20,
                  color: "#F98A4F",
                }}
              >
                ${totalAmount}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                marginTop: 5,
                padding: 15,
                backgroundColor: "orange",
                borderRadius: 10,
              }}
              onPress={() => handleCheckout(user.id)}
            >
              <Text
                style={{
                  fontFamily: "Nunito-Bold",
                  fontSize: 18,
                  textAlign: "center",
                  color: "#FFF",
                }}
              >
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default CartPage;
