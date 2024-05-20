import { ListenerPredicateGuardedActionType } from "@reduxjs/toolkit/dist/listenerMiddleware/types";
import * as React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
} from "react-native";
import {
  collectionResponse,
  fetchUserCollections,
} from "../../../features/authentication/services/userService/fetchUserCollections";
import { useSelector } from "react-redux";
interface Props {
  donefetching: boolean;
  setdonefetching: (prop: boolean) => void;
  navigation: any;
}
const CollectionsList: React.FC<Props> = ({
  navigation,
  donefetching,
  setdonefetching,
}) => {
  const user = useSelector((state: any) => state.userinfo);
  const [usercollection, setusercollection] = React.useState<
    collectionResponse[]
  >([]);
  const fetchingCollections = async () => {
    try {
      const res = await fetchUserCollections(user.id);
      setusercollection(res);
    } catch (error: any) {
      return;
    }
  };
  React.useEffect(() => {
    if (donefetching) fetchingCollections().then(() => setdonefetching(false));
  }, [donefetching]);
  React.useEffect(() => {
    fetchingCollections();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {usercollection.map((value, index) => (
          <View key={index} style={styles.cardContain}>
            <TouchableOpacity
              style={styles.touchable}
              // onPress={() => {
              //   navigation.navigate("Cooking");
              // }}
              activeOpacity={0}
            >
              {/* name of food */}
              <View style={styles.containerForNameofFood}>
                <View>
                  <Text numberOfLines={1} style={styles.textNameFood}>
                    {value.name}
                  </Text>
                  <Text numberOfLines={2} style={styles.textNumberRecipe}>
                    {value.recipeID.length} Recipe
                  </Text>
                </View>
                {/* container for star and like button */}
              </View>
              <View
                style={{
                  // width: "30%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  //   backgroundColor: "black",
                }}
              >
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    borderRadius: 50,
                  }}
                >
                  <Image
                    source={require("../../../assets/image/default-image.jpg")}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 50,
                      resizeMode: "cover",
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "90%",
  },
  cardContain: {
    width: "90%",
    height: 80,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  touchable: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  containerForNameofFood: {
    // width: "70%",
    // padding: 15,
    justifyContent: "center",
  },
  textNameFood: {
    fontSize: 16,
    fontFamily: "Nunito-Bold",
    marginBottom: 10,
  },
  textNumberRecipe: {
    fontSize: 14,
    fontFamily: "Nunito-semiBold",
    color: "#adadad",
  },
});
export default CollectionsList;
