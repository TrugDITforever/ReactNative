import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
    height: "95%",
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  boxword: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
  },
  textbox: {
    fontFamily: "Nunito-Bold",
    fontSize: 18,
    fontWeight: "600",
    width: "77%",
    marginLeft: 10,
  },
  cardContain: {
    width: "100%",
    height: 180,
    position: "relative",
  },
  cardContainBorder: {
    marginRight: 20,
    width: 380,
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 25,
    elevation: 2,
    shadowColor: "#000",
  },
  textViewall: {
    fontSize: 13,
    textAlign: "center",
    alignItems: "center",
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    borderRadius: 10,
    fontFamily: "Nunito-Regular",
  },
  containerForRatingandLike: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
  },
  textRating: {
    letterSpacing: 2,
    paddingBottom: 5,
  },
  buttonlike: {
    position: "absolute",
    right: 0,
    margin: 10,
    width: 32,
    height: 32,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
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
  imageView: {
    width: 30,
    height: 30,
    borderRadius: 50,
    resizeMode: "contain",
    borderWidth: 2,
    borderColor: "#fff",
    marginRight: -10,
  },
});
const CardImage = ({ index, liked, handlePress }) => {
  return (
    <View style={styles.cardContain}>
      <Image
        source={require("../../../../../assets/image/porkrice.jpg")}
        style={styles.backgroundImage}
      />
      {/* rating and like button */}
      <View style={styles.containerForRatingandLike}>
        {/* for button like */}
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: " center",
          }}
        >
          <View style={styles.buttonlike}>
            <TouchableOpacity onPress={() => handlePress(index)}>
              {liked[index] ? (
                <Ionicons name={"heart"} size={20} color={"red"} />
              ) : (
                <Ionicons name={"heart-outline"} size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CardImage;
