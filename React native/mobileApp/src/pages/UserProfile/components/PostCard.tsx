import { Text, View } from "react-native";
import React, { Component } from "react";
import PostCard from "../../../components/Card/PostCard";
import { usefetchUserPostById } from "../../../features/authentication/hooks/useFetchUserPostbyId";
import { useDispatch, useSelector } from "react-redux";
import { getUserAsyncData } from "../../../features/authentication/auth/getUserDataFromAsync";
import { updateUser } from "../../../Redux/user";
import { fetchUserPostById } from "../../../features/authentication/services/userService/fetchUserPostbyId";
import { userPostData } from "../../../features/authentication/commonData/userPostData";

interface Prop {
  navigation: any;
  route: any;
}

const PostCardofUser: React.FC<Prop> = ({ navigation, route }) => {
  const { success } = route.params || false;
  console.log("render");
  const userinfo = useSelector((state: any) => state.userinfo);
  const dispatch = useDispatch();
  const [fetching, setisfetching] = React.useState<boolean>(true);
  const { userpost, isloading } = usefetchUserPostById(
    userinfo.id,
    fetching,
    setisfetching
  );

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
