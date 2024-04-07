import { Text, View } from "react-native";
import React, { Component } from "react";
import PostCard from "../../../components/Card/PostCard";

interface Prop {
  navigation: any;
}

const PostCardofUser: React.FC<Prop> = ({ navigation }) => {
  return (
    <View>
      <PostCard navigation={navigation} />
    </View>
  );
};
export default PostCardofUser;
