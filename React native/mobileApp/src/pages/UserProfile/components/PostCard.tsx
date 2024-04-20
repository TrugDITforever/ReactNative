import { Text, View } from "react-native";
import React, { Component } from "react";
import PostCard from "../../../components/Card/PostCard";
import { usefetchUserPostById } from "../../../features/authentication/hooks/useFetchUserPostbyId";
import { useDispatch, useSelector } from "react-redux";

interface Prop {
  navigation: any;
}

const PostCardofUser: React.FC<Prop> = ({ navigation }) => {
  const userinfo = useSelector((state: any) => state.userinfo);
  const dispatch = useDispatch();
  const { userpost, isloading } = usefetchUserPostById(userinfo.id);
  return (
    <View style={{ }}>
      <PostCard
        navigation={navigation}
        userpost={userpost}
        dispatch={dispatch}
      />
    </View>
  );
};
export default PostCardofUser;
