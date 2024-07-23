import * as React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomAlert from "../../../../components/Modal/CustomAlert";
import { useDeleteacc } from "../../../../features/authentication/hooks/useDeleteUser";
import { useSelector } from "react-redux";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginTop: "10%",
  },
  listContainer: {
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  listTextContainer: {
    width: "95%",
  },
  textMenu: {
    fontFamily: "Nunito-semiBold",
    fontSize: 18,
  },
  subMenu: {
    width: "100%",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  colorOfIcon: {
    color: "#888",
  },
});
interface Prop {
  navigation: any;
}
const ListMenu: React.FC<Prop> = ({ navigation }) => {
  const [list, setList] = React.useState([
    {
      text: "Personal Details",
      icon: "person",
    },
    {
      text: "My Invoices",
      icon: "receipt-outline",
    },
    {
      text: "Privacy",
      icon: "lock-closed",
    },
    {
      text: "Security & permissions",
      icon: "shield",
    },
    {
      text: "About Us",
      icon: "help-circle",
    },
    {
      text: "Feedback & Support",
      icon: "chatbox-ellipses",
    },
  ]);
  const userinfo = useSelector((state: any) => state.userinfo);
  const [isshow, setisshow] = React.useState<boolean>(false);
  const handleOppenmodal = () => {
    setisshow(true);
  };
  const handlecancel = () => {
    setisshow(false);
  };
  const handleDeleteAccount = () => {
    useDeleteacc(userinfo.id, navigation);
  };
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <View style={styles.listTextContainer}>
          {/* start list of menu */}
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 15,
              elevation: 2,
              shadowColor: "#000",
            }}
          >
            {list.map((value, index) => (
              <TouchableOpacity
                key={index}
                style={styles.subMenu}
                onPress={() =>
                  navigation.navigate("PageSubmenu", { index: index })
                }
              >
                {/* icon */}
                <View>
                  <Ionicons
                    name={value.icon}
                    size={24}
                    color={styles.colorOfIcon.color}
                  />
                </View>
                {/* Text */}
                <View style={{ width: "70%" }}>
                  <Text style={styles.textMenu}>{value.text}</Text>
                </View>
                {/* icon arrow */}
                <View>
                  <AntDesign
                    name="right"
                    size={20}
                    color={styles.colorOfIcon.color}
                  />
                </View>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.subMenu}
              onPress={() => {
                AsyncStorage.removeItem("token"), navigation.navigate("Home");
                navigation.replace("AccountPage");
              }}
            >
              {/* icon */}
              <View>
                <Ionicons
                  name="log-out-outline"
                  size={24}
                  color={styles.colorOfIcon.color}
                />
              </View>
              {/* Text */}
              <View style={{ width: "70%" }}>
                <Text style={styles.textMenu}>Log out</Text>
              </View>
              {/* icon arrow */}
              <View>
                <AntDesign
                  name="right"
                  size={20}
                  color={styles.colorOfIcon.color}
                />
              </View>
            </TouchableOpacity>
            {/* Delete Account */}
            <TouchableOpacity style={styles.subMenu} onPress={handleOppenmodal}>
              {/* icon */}
              <View>
                <Ionicons
                  name="trash"
                  size={24}
                  color={styles.colorOfIcon.color}
                />
              </View>
              {/* Text */}
              <View style={{ width: "70%" }}>
                <Text style={styles.textMenu}>Delete account</Text>
              </View>
              {/* icon arrow */}
              <View>
                <AntDesign
                  name="right"
                  size={20}
                  color={styles.colorOfIcon.color}
                />
              </View>
            </TouchableOpacity>
          </View>
          <CustomAlert
            visible={isshow}
            message="Are you sure you want to delete this account?"
            onClose={handlecancel}
            ondelete={handleDeleteAccount}
          />
        </View>
      </View>
    </View>
  );
};
export default ListMenu;
