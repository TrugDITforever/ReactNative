import { Text, View } from "react-native";
import React, { Component } from "react";
import PostCard from "../../../components/Card/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../Redux/user";
import { fetchUserLikedPosts } from "../../../features/authentication/hooks/useFetchUserLikedPost";
import { setFalse } from "../../../Redux/action";
import {
  fetchUserLikedPost,
  likedPostResponse,
} from "../../../features/authentication/services/userService/fetchUserLikedPost";

interface Prop {
  navigation: any;
}

const LikedPostCard: React.FC<Prop> = ({ navigation }) => {
  const userinfo = useSelector((state: any) => state.userinfo);
  const dispatch = useDispatch();
  const boolean = useSelector((state: any) => state.boolean.value);
  const [userpost, setuserpost] = React.useState<likedPostResponse[]>([]);
  const fetching = async () => {
    try {
      await fetchUserLikedPost(userinfo.id).then((res) => {
        setuserpost(res);
      });
    } catch (error) {
      return "error fetching userliked posts";
    }
  };
  React.useEffect(() => {
    fetching();
  }, [1]);
  React.useEffect(() => {
    if (boolean) fetching().then(() => dispatch(setFalse()));
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
export default LikedPostCard;
