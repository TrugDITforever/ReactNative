import { fetchUserPost } from "../services/adminServices/fetchUserPost";
import { userPostData } from "../commonData/userPostData";
import * as React from "react";
// interface UserInfo {
//   _id: string;
//   username: string;
// }
// interface FoodInfo {
//   _id: string;
//   foodName: string;
//   foodImage: string;
// }
// interface PostData {
//   userInfo: UserInfo[];
//   foodInfo: FoodInfo[];
//   posData: any;
// }

export function useFetchUserPost() {
  const [isloading, setisloading] = React.useState<boolean>(true);
  const [userpost, setUserPost] = React.useState<userPostData[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchUserPost();
        setisloading(false);
        setUserPost(res);
      } catch (error: any) {
        setisloading(true);
      }
    };
    fetchData();
  }, [isloading]);
  return { isloading, userpost };
}
