import { Text, View } from "react-native";
import React, { Component } from "react";
import PostCard from "../../../components/Card/PostCard";
import { usefetchUserPostById } from "../../../features/authentication/hooks/useFetchUserPostbyId";
import { useDispatch, useSelector } from "react-redux";
import { getUserAsyncData } from "../../../features/authentication/auth/getUserDataFromAsync";
import { updateUser } from "../../../Redux/user";
import { fetchUserPostById } from "../../../features/authentication/services/userService/fetchUserPostbyId";
import { userPostData } from "../../../features/authentication/commonData/userPostData";
import { setFalse } from "../../../Redux/action";

interface Prop {
  navigation: any;
  route: any;
}

const PostCardofUser: React.FC<Prop> = ({ navigation, route }) => {
  const { success } = route.params || false;
  const userinfo = useSelector((state: any) => state.userinfo);
  const dispatch = useDispatch();
  const boolean = useSelector((state: any) => state.boolean.value);
  const [fetching, setisfetching] = React.useState<boolean>(true);
  // const { userpost, isloading } = usefetchUserPostById(
  //   userinfo.id,
  //   fetching,
  //   setisfetching
  // );
  const [isloading, setisloading] = React.useState<boolean>(false);
  const [userpost, setuserpost] = React.useState<userPostData[]>([]);
  const fetchData = async () => {
    try {
      setisfetching(true);
      await fetchUserPostById(userinfo.id).then((res) => {
        setuserpost(res);
        // setisfetching(false);
      });
    } catch (error: any) {
      console.error("Error fetching data:", error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  React.useEffect(() => {
    if (boolean) fetchData().then(() => dispatch(setFalse()));
  }, [boolean]);
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <PostCard
        navigation={navigation}
        userpost={userpost}
        dispatch={dispatch}
      />
    </View>
  );
};
export default PostCardofUser;
