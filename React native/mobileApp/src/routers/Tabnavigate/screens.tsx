import "react-native-gesture-handler";
import React from "react";
import HomePage from "../../pages/Homepage/HomePage";
import UserProfile from "../../pages/UserProfile/UserProfile";
import FavoritePage from "../../pages/FavoritePage/Collections";
import SearchPage from "../../pages/SearchingPage/SearchPage";
import CreateRecipeScreen from "../../pages/CreateRecipesPage";
// import for navigationP
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
// import for react-native icon
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import Foundation from "react-native-vector-icons/Foundation";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { StyleSheet, View } from "react-native";
import { getUserAsyncData } from "../../features/authentication/auth/getUserDataFromAsync";
import { updateUser } from "../../Redux/user";
import { useDispatch } from "react-redux";
// Start code navigation
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
interface Props {
  navigation: any;
}
export const TabScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const getuserData = async () => {
      const userdata = await getUserAsyncData();
      if (userdata) {
        const newValue = {
          id: userdata._id,
          userimage: userdata.profileImage,
          username: userdata.username,
          name: userdata.name,
          email: userdata.email,
          description: userdata.description,
        };
        dispatch(updateUser(newValue));
      }
    };
    getuserData();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <View style={styles.navbarShow}>
                  <View style={styles.containiconandText}>
                    <Foundation
                      name={"home"}
                      size={28}
                      color={styles.iconcolor.color}
                    />
                  </View>
                </View>
              ) : (
                <View style={styles.navbarhide}>
                  <Octicons name={"home"} size={24} color={"#000"} />
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <View style={styles.navbarShow}>
                  <View style={styles.containiconandText}>
                    <Feather
                      name={"search"}
                      size={styles.iconcolor.size}
                      color={styles.iconcolor.color}
                    />
                  </View>
                </View>
              ) : (
                <View style={styles.navbarhide}>
                  <Feather
                    name={"search"}
                    size={styles.iconcolor.size}
                    color={"#000"}
                  />
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CreateRecipe"
        component={CreateRecipeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name={"plus-square"} size={styles.iconcolor.size} />
            ) : (
              <Feather name={"plus-square"} size={styles.iconcolor.size} />
            ),
        }}
        /// more knowlegde about how can we interact with bottom tab
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("CreateRecipePage", { showupdate: false });
          },
        })}
      />
      <Tab.Screen
        name="Collections"
        component={FavoritePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <View style={styles.navbarShow}>
                  <View style={styles.containiconandText}>
                    <FontAwesome
                      name={"bookmark"}
                      size={styles.iconcolor.size}
                      color={styles.iconcolor.color}
                    />
                  </View>
                </View>
              ) : (
                <View style={styles.navbarhide}>
                  <FontAwesome
                    name={"bookmark-o"}
                    size={styles.iconcolor.size}
                    color={"#000"}
                  />
                </View>
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <View style={styles.navbarShow}>
                  <View style={styles.containiconandText}>
                    <Octicons
                      name={"person-fill"}
                      size={styles.iconcolor.size}
                      color={styles.iconcolor.color}
                    />
                  </View>
                </View>
              ) : (
                <View style={styles.navbarhide}>
                  <Octicons
                    name={"person"}
                    size={styles.iconcolor.size}
                    color={"#000"}
                  />
                </View>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  navbarShow: {},
  navbarhide: {},
  iconcolor: {
    color: "#FF8A00",
    size: 26,
  },
  containiconandText: {
    paddingBottom: 5,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: "#FE724C",
  },
});
// const listTapContent = [
//   {
//     name: "Home",
//     component: HomePage,
//     iconShow: (
//       <Foundation name={"home"} size={28} color={styles.iconcolor.color} />
//     ),
//     tabText: "Home",
//     iconhide: <Octicons name={"home"} size={24} color={"#000"} />,
//   },
//   {
//     name: "Search",
//     component: SearchPage,
//     iconShow: (
//       <Feather
//         name={"search"}
//         size={styles.iconcolor.size}
//         color={styles.iconcolor.color}
//       />
//     ),
//     tabText: "Search",
//     iconhide: (
//       <Feather name={"search"} size={styles.iconcolor.size} color={"#000"} />
//     ),
//   },
//   {
//     name: "Collections",
//     component: FavoritePage,
//     iconShow: (
//       <FontAwesome
//         name={"bookmark"}
//         size={styles.iconcolor.size}
//         color={styles.iconcolor.color}
//       />
//     ),
//     tabText: "Collect",
//     iconhide: (
//       <FontAwesome
//         name={"bookmark-o"}
//         size={styles.iconcolor.size}
//         color={"#000"}
//       />
//     ),
//   },
//   {
//     name: "Profile",
//     component: UserProfile,
//     iconShow: (
//       <Octicons
//         name={"person-fill"}
//         size={styles.iconcolor.size}
//         color={styles.iconcolor.color}
//       />
//     ),
//     tabText: "Profile",
//     iconhide: (
//       <Octicons name={"person"} size={styles.iconcolor.size} color={"#000"} />
//     ),
//   },
// ];
