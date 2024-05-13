import { fetchUserPostById } from "../services/userService/fetchUserPostbyId";
import { userPostData } from "../commonData/userPostData";
import * as React from "react";
export const usefetchUserPostById = (
  id: string,
  fetching: boolean,
  setisfetching: any
) => {
  const [isloading, setisloading] = React.useState<boolean>(false);
  const [userpost, setuserpost] = React.useState<userPostData[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setisfetching(true);
        await fetchUserPostById(id).then((res) => {
          setuserpost(res);
          // setisfetching(false);
        });
      } catch (error: any) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [fetching]);
  return { userpost, isloading };
};
