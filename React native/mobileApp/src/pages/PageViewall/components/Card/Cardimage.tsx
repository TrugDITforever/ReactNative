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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  cardContain: {
    width: "100%",
    height: 180,
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
  image: string;
}

const CardImage: React.FC<Prop> = ({ index, liked, handlePress, image }) => {
  return (
    <View style={styles.cardContain}>
      <Image source={{ uri: image }} style={styles.backgroundImage} />
      {/* rating and like button */}
      <View style={styles.containerForRatingandLike}>
        {/* for button like */}
        <View
          style={{
            width: "100%",
            alignItems: "flex-end",
            justifyContent: "center",
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
