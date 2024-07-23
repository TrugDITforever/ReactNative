import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PostCardofUser from "./PostCard";
import LikedPostCard from "./LikedPostCard";
const Tab = createMaterialTopTabNavigator();

interface Prop {
  success?: any;
}
const TopTab: React.FC<Prop> = ({}) => {
  return (
    <View style={{ width: "100%", height: "70%", backgroundColor: "fff" }}>
      <Tab.Navigator
        screenOptions={{
          //   tabBarLabelStyle: styles.tabBarLabel,
          tabBarIndicatorStyle: styles.tabBarIndicator,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FE724C",
          tabBarInactiveTintColor: "#000",
          //   tabBarScrollEnabled: true,
        }}
      >
        <Tab.Screen
          name="PostOfUser"
          component={PostCardofUser}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View
                  style={{
                    width: "100%",
                    height: 30,
                  }}
                >
                  <View
                    style={{
                      borderBottomColor: "#FE724C",
                      borderBottomWidth: 1,
                      paddingBottom: 5,
                    }}
                  >
                    <Ionicons
                      name={"apps-outline"}
                      size={24}
                      color={"#FE724C"}
                    />
                  </View>
                </View>
              ) : (
                <Ionicons name={"apps-outline"} size={24} />
              ),
          }}
        />
        <Tab.Screen
          name="LikedPostOfUser"
          component={LikedPostCard}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <View
                  style={{
                    width: "100%",
                    height: 30,
                  }}
                >
                  <View
                    style={{
                      borderBottomColor: "#FE724C",
                      borderBottomWidth: 1,
                      paddingBottom: 5,
                    }}
                  >
                    <Ionicons
                      name={"heart-outline"}
                      size={24}
                      color={"#FE724C"}
                    />
                  </View>
                </View>
              ) : (
                <Ionicons name={"heart-outline"} size={24} />
              ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
export default TopTab;
const styles = StyleSheet.create({
  tabBarIndicator: {
    backgroundColor: "#fff",
    height: 2,
  },
});
