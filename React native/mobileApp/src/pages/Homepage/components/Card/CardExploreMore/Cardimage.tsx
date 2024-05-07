import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  index: number;
  foodImage: string;
  liked: boolean[];
  handlePress: (index: number) => void;
}

const CardImage: React.FC<Props> = ({
  index,
  liked,
  handlePress,
  foodImage,
}) => {
  return (
    <View style={styles.cardContain}>
      <Image
        source={{
          uri: foodImage,
        }}
        style={styles.backgroundImage}
      />
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
                <Ionicons name={"heart"} size={24} color={"red"} />
              ) : (
                <Ionicons name={"heart-outline"} size={24} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CardImage;
const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  cardContain: {
    width: "100%",
    height: 330,
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
