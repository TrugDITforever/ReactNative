import React from "react";
import { ScrollView } from "react-native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  fetchUserPayments,
  paymentResponse,
} from "../../../../features/authentication/services/userService/fetchuserPayment";
import { useSelector } from "react-redux";
interface Prop {
  navigation: any;
}

const PageInvoices: React.FC<Prop> = ({ navigation }) => {
  const [paymentList, setPaymentList] = React.useState<paymentResponse>();
  const user = useSelector((state: any) => state.userinfo);
  React.useEffect(() => {
    const fetching = async () => {
      try {
        const res = await fetchUserPayments(user.id);
        if (res) {
          setPaymentList(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, [user.id]);
  return (
    <View style={{ marginHorizontal: 15 }}>
      <ScrollView>
        {paymentList?.payment.map((invoice, index) => (
          <View style={styles.card} key={index}>
            <Image source={{ uri: invoice.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.courseName}>{invoice.name}</Text>
              <Text style={styles.paymentDate}>
                Payment Date: {invoice.date}
              </Text>
              <Text style={styles.amount}> ${invoice.price}</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CourseDetailPaid", { id: invoice._id })
              }
            >
              <Text>lets go</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default PageInvoices;
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  info: {
    width: "70%",
    marginLeft: 10,
    justifyContent: "center",
  },
  courseName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  paymentDate: {
    fontSize: 14,
    color: "#666",
  },
  amount: {
    fontSize: 14,
    color: "#F98A4F",
    marginTop: 5,
  },
});
