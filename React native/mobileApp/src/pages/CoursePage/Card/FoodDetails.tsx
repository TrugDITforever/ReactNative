import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { checkIsaddToCart } from "../../../features/authentication/services/userService/checkisAddtoCart";
import { addCoursetoCart } from "../../../features/authentication/services/userService/addCoursetoCart";

interface Props {
  id: string;
  name: string;
  price: number;
}
const FoodeDetails: React.FC<Props> = ({ name, price, id }) => {
  const user = useSelector((state: any) => state.userinfo);
  const [isAdded, setIsAdded] = React.useState(false);
  const [loadAgain, setLoadAgain] = React.useState(false);
  const addtoCart = (courseID: string) => {
    addCoursetoCart(user.id, courseID).then(() => {
      setLoadAgain(true);
    });
  };
  const checkIsadd = async () => {
    try {
      const isAdded = await checkIsaddToCart(user.id, id);
      setIsAdded(isAdded);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    checkIsadd();
  }, []);
  React.useEffect(() => {
    if (loadAgain) checkIsadd().then(() => setLoadAgain(false));
  }, [loadAgain]);
  return (
    <View style={styles.containerForNameofFood}>
      <Text style={styles.textNameFood}>{name}</Text>
      {/* owner */}
      <View style={styles.imageViewContainer}>
        <Image
          source={{
            uri: "https://th.bing.com/th/id/R.672212381b4893096723bcecdb7f1c27?rik=YvWkjp4%2fJ3e0OQ&pid=ImgRaw&r=0",
          }}
          style={styles.imageView}
        />
        <Text
          style={{
            fontFamily: "Nunito-Bold",
            fontSize: 16,
            marginLeft: 15,
            opacity: 0.5,
          }}
        >
          CookMate
        </Text>
      </View>
      {/* Price */}
      <View style={styles.flexContainer}>
        <View style={styles.imageViewContainer}>
          <Text
            style={{
              fontFamily: "Nunito-Bold",
              fontSize: 18,
            }}
          >
            ${price}
          </Text>
        </View>
        {/*  button add to cart */}

        {!isAdded ? (
          <TouchableOpacity onPress={() => addtoCart(id)}>
            <View style={styles.addtocartButton}>
              <Text
                style={{
                  fontFamily: "Nunito-semiBold",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Add To Cart
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => addtoCart(id)}>
            <View style={styles.addtocartButton}>
              <Text
                style={{
                  fontFamily: "Nunito-semiBold",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Added To Cart
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default FoodeDetails;
const styles = StyleSheet.create({
  textRating: {
    paddingBottom: 5,
  },
  containerForNameofFood: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textNameFood: {
    borderRadius: 10,
    fontSize: 18,
    fontFamily: "Nunito-Bold",
    paddingBottom: 5,
  },
  imageViewContainer: {
    height: 30,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  flexContainer: {
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageView: {
    width: 30,
    height: 30,
    borderRadius: 50,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#fff",
    marginRight: -10,
  },
  addtocartButton: {
    padding: 10,
    backgroundColor: "#F98A4F",
    borderRadius: 10,
  },
});