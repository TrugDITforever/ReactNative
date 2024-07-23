import { fetchUserPost } from "../services/adminServices/fetchUserPost";
import { userPostData } from "../commonData/userPostData";
import * as React from "react";
import { useSelector } from "react-redux";
export function useFetchUserPost() {
  const [isloading, setisloading] = React.useState<boolean>(true);
  const [userpost, setUserPost] = React.useState<userPostData[]>([]);
  const user = useSelector((state: any) => state.userinfo);
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
  }, [user.username]);
  return { isloading, userpost };
}
