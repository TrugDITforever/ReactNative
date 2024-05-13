import React from "react";
import {
  fetchUserLikedPost,
  likedPostResponse,
} from "../services/userService/fetchUserLikedPost";

export const fetchUserLikedPosts = (userID: string) => {
  const [userpost, setuserpost] = React.useState<likedPostResponse[]>([]);
  React.useEffect(() => {
    const fetching = async () => {
      try {
        await fetchUserLikedPost(userID).then((res) => {
          setuserpost(res);
        });
      } catch (error) {
        return "error fetching userliked posts";
      }
    };
    fetching();
  }, [1]);
  return { userpost };
};
