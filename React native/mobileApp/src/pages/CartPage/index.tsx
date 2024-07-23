import * as React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import Card from "./Card/Card";
import Statusbar from "../../components/Statusbar/Statusbar";
import HeadervsButtonBack from "../../components/Header/HeadervsButtonBack";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  Cart,
  cartResponse,
  fetchShoppingCart,
} from "../../features/authentication/services/userService/fetchUserShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { checkoutPayment } from "../../features/authentication/services/userService/userCheckoutPayment";
import { setFalse } from "../../Redux/action";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 15,
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
  text: {
    fontSize: 24,
    color: "#333",
    marginTop: 20,
  },
  subtext: {
    fontSize: 16,
    color: "#777",
    marginTop: 10,
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
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetching();
  }, []);
  const boolean = useSelector((state: any) => state.boolean.value);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (boolean) fetching().then(() => dispatch(setFalse()));
  }, [boolean]);
  const totalAmount = cartList?.shoppingcarts.reduce(
    (accumulator, currentItem) => {
      return accumulator + currentItem.price;
    },
    0
  );
  const handleCheckout = async (userID: string) => {
    if (!cartList) {
      console.log("Cart list is not available");
      return;
    }
    var shoppingCarts = cartList.shoppingcarts;
    try {
      await checkoutPayment(userID, shoppingCarts);
      navigation.navigate("CoursePage");
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };
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
          {!cartList?.shoppingcarts || cartList.shoppingcarts.length === 0 ? (
            <EmptyCartScreen navigation={navigation} />
          ) : (
            <Card navigation={navigation}></Card>
          )}
          <View
            style={{
              padding: 15,
              borderTopWidth: 1,
              borderColor: "#ccc",
            }}
          >
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
const EmptyCartScreen: React.FC<Prop> = ({ navigation }) => {
  return (
    <View style={{ padding: 15, height: "83%" }}>
      <Icon name="shopping-cart" size={100} color="#ff6347" />
      <Text style={styles.text}>Your shopping cart is empty</Text>
      <Text style={styles.subtext}>Nothing here, let's go shopping!</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CoursePage")}>
        <Text
          style={{
            fontFamily: "Nunito-semiBold",
            fontSize: 20,
            color: "#F98A4F",
          }}
        >
          Shopping
        </Text>
      </TouchableOpacity>
    </View>
  );
};
