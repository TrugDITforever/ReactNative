import { Text, View } from "react-native";
import React, { Component } from "react";
import PostCard from "../../../components/Card/PostCard";
import { usefetchUserPostById } from "../../../features/authentication/hooks/useFetchUserPostbyId";
import { useDispatch, useSelector } from "react-redux";
import { getUserAsyncData } from "../../../features/authentication/auth/getUserDataFromAsync";
import { updateUser } from "../../../Redux/user";

interface Prop {
  navigation: any;
}

const PostCardofUser: React.FC<Prop> = ({ navigation }) => {
  const userinfo = useSelector((state: any) => state.userinfo);
  const dispatch = useDispatch();
  const [fetching, setisfetching] = React.useState<boolean>(false);
  const { userpost, isloading } = usefetchUserPostById(
    userinfo.id,
    fetching,
    setisfetching
  );
  return (
    <View>
      <PostCard
        navigation={navigation}
        userpost={userpost}
        dispatch={dispatch}
      />
    </View>
  );
};
export default PostCardofUser;
