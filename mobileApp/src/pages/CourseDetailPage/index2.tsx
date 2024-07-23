// src/components/CourseDetail.js
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import HeadervsButtonBack from "../../components/Header/HeadervsButtonBack";
import { fetchingCoursesByID } from "../../features/authentication/services/adminServices/fetchCourseByID";
import { courseResponse } from "../../features/authentication/services/adminServices/fetchCourse";
import { checkoutPayment } from "../../features/authentication/services/userService/userCheckoutPayment";
import { useSelector } from "react-redux";
import { Video, ResizeMode } from "expo-av";
interface Prop {
  navigation: any;
  route: any;
}
const CourseDetailPaid: React.FC<Prop> = ({ navigation, route }) => {
  const { id } = route.params;
  const [course, setCourseList] = React.useState<courseResponse>();
  const user = useSelector((state: any) => state.userinfo);

  const reviews = [
    {
      id: "1",
      name: "John Doe",
      review: "Great course! Learned a lot.",
      rating: 5,
    },
    {
      id: "2",
      name: "Jane Smith",
      review: "Very informative and well presented.",
      rating: 4,
    },
    { id: "3", name: "Bob Johnson", review: "I loved the recipes!", rating: 5 },
    { id: "4", name: "Bob Johnson", review: "I loved the recipes!", rating: 5 },
  ];
  const fetching = async () => {
    try {
      const res = await fetchingCoursesByID(id);
      if (res) {
        setCourseList(res);
      }
    } catch (error) {
      console.error("Cant fetching");
    }
  };
  React.useEffect(() => {
    fetching();
  }, []);
  const handleCheckout = async (userID: string) => {
    if (!course) {
      console.log("Cart list is not available");
      return;
    }
    const shoppingCarts = course.courses; // Sử dụng cartList.shoppingcarts
    try {
      await checkoutPayment(userID, shoppingCarts);
      navigation.navigate("CoursePage");
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };
  const videos = [
    {
      id: "1",
      title: "Introduction to Cooking",
      url: require("./Video/cookingCourse.mp4"),
    },
    {
      id: "2",
      title: "Basic Knife Skills",
      url: require("./Video/cookingCourse2.mp4"),
    },
    {
      id: "3",
      title: "Making Pasta from Scratch",
      url: require("./Video/cookingCourse.mp4"),
    },
  ];
  return (
    <View style={styles.container}>
      <HeadervsButtonBack navigation={navigation} />
      <View style={{ paddingLeft: 15, paddingRight: 15, height: "94%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={{
              uri: course?.courses[0].image,
            }}
            style={styles.image}
          />
          <Text style={styles.title}>{course?.courses[0].name}</Text>
          <Text style={styles.rating}>
            ⭐️{course?.courses[0].rating} (500 reviews)
          </Text>
          <View style={styles.ownerContainer}>
            <Image
              source={{
                uri: "https://th.bing.com/th/id/R.672212381b4893096723bcecdb7f1c27?rik=YvWkjp4%2fJ3e0OQ&pid=ImgRaw&r=0",
              }}
              style={styles.ownerImage}
            />
            <Text style={styles.ownerName}>CookMate</Text>
          </View>
          <Text style={styles.description}>
            Learn how to cook delicious meals from the comfort of your home with
            our expert chefs.
          </Text>
          <Text style={styles.sectionTitle}>Videos</Text>
          {videos.map((video) => (
            <View key={video.id} style={styles.videoContainer}>
              <Text style={styles.videoTitle}>{video.title}</Text>
              <Video
                source={video.url}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                style={styles.video}
              />
            </View>
          ))}
          <Text style={styles.sectionTitle}>Reviews</Text>
          {reviews.map((item, index) => (
            <View style={styles.reviewContainer} key={index}>
              <Text style={styles.reviewName}>{item.name}</Text>
              <Text style={styles.reviewText}>{item.review}</Text>
              <Text style={styles.reviewRating}>Rating: {item.rating}⭐️</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  ownerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  ownerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  ownerName: {
    fontSize: 18,
  },
  sectionTitle: {
    fontFamily: "Nunito-Bold",
    fontSize: 20,
    marginBottom: 8,
    color: "#F98A4F",
  },
  reviewContainer: {
    marginBottom: 16,
    backgroundColor: "#f8f8f8",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  reviewName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  reviewText: {
    fontSize: 14,
    marginVertical: 8,
  },
  reviewRating: {
    fontSize: 14,
    color: "#888",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
  },
  addtocartButton: {
    padding: 10,
    backgroundColor: "#F98A4F",
    borderRadius: 10,
  },
  videoContainer: {
    marginBottom: 16,
  },
  videoTitle: {
    fontFamily: "Nunito-semiBold",
    fontSize: 18,
    marginBottom: 8,
  },
  video: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});

export default CourseDetailPaid;
