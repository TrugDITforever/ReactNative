import { fetchUserPostById } from "../services/userService/fetchUserPostbyId";
import { userPostData } from "../commonData/userPostData";
import * as React from "react";
export const usefetchUserPostById = (id: string) => {
  const [isloading, setisloading] = React.useState<boolean>(true);
  const [userpost, setuserpost] = React.useState<userPostData[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        fetchUserPostById(id).then((res) => {
          setisloading(false);
          setuserpost(res);
        });
      } catch (error: any) {
        setisloading(true);
        throw new Error(error);
      }
    };
    fetchData();
  }, [isloading]);
  return { userpost, isloading };
};
