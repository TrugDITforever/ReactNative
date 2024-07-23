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
    borderRadius: 10,
  },
  cardContain: {
    width: "100%",
    height: 200,
    position: "relative",
  },
  containerForRatingandLike: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
  },
  buttonlike: {
    right: 0,
    margin: 10,
    width: 32,
    height: 32,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
interface Prop {
  index: number;
  liked: boolean[];
  handlePress: (index: number) => void;
}

const CardImage: React.FC<Prop> = ({ index, liked, handlePress }) => {
  return (
    <View style={styles.cardContain}>
      <Image
        source={require("../../../../assets/image/porkrice.jpg")}
        style={styles.backgroundImage}
      />
      {/* rating and like button */}
    </View>
  );
};
export default CardImage;
