import { Text, View } from "react-native";
import React, { Component } from "react";
import PostCard from "../../../components/Card/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../Redux/user";
import { fetchUserLikedPosts } from "../../../features/authentication/hooks/useFetchUserLikedPost";

interface Prop {
  navigation: any;
}

const LikedPostCard: React.FC<Prop> = ({ navigation }) => {
  const userinfo = useSelector((state: any) => state.userinfo);
  const dispatch = useDispatch();
  const [fetching, setisfetching] = React.useState<boolean>(false);
  const { userpost } = fetchUserLikedPosts(userinfo.id);
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
export default LikedPostCard;
