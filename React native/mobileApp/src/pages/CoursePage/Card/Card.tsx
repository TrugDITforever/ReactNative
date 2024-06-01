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
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import CardImage from "./Cardimage";
import FoodeDetails from "./FoodDetails";
import {
  Course,
  courseResponse,
  fetchingCourses,
} from "../../../features/authentication/services/adminServices/fetchCourse";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "97%",
  },
  cardContain: {
    // width: "100%",
    height: 180,
    position: "relative",
  },
  cardContainBorder: {
    width: 370,
    // height: 280,
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
  const [courseList, setCourseList] = React.useState<courseResponse>();
  const [isfetching, setisfetching] = React.useState<boolean>(false);
  React.useEffect(() => {
    const fetching = async () => {
      try {
        const res = await fetchingCourses();
        if (res) {
          setCourseList(res);
        }
      } catch (error) {
        console.error("Cant fetching");
      }
    };
    fetching();
  }, []);
  console.log(courseList?.courses);
  const screenWidth = Dimensions.get("window");
  const [liked, setlike] = React.useState(
    Array.from({ length: 18 }, () => false)
  );
  const handlePress = React.useCallback((index: number) => {
    setlike((prevLiked) => {
      const newLikes = [...prevLiked];
      newLikes[index] = !newLikes[index];
      return newLikes;
    });
  }, []);
  return (
    <View style={[styles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {courseList?.courses.map((value, index) => (
          <View
            key={index}
            style={[styles.cardContainBorder]}
            // source={require("../../../../assets/image/porkrice.jpg")}
          >
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
              <FoodeDetails name={value.name} price={value.price} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
export default Card;
