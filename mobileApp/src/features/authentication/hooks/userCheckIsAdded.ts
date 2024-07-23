import * as React from "react";
import {
  PropCheckCollection,
  checkIsaddToCollection,
} from "../services/userService/checkisAddtoCollection";

export const checkIsAdded = (userID: string, recipeID: string) => {
  const [isexist, setisexist] = React.useState<boolean>(false);
  const propvalue: PropCheckCollection = {
    userID: userID,
    recipeID: recipeID,
  };
  const fetching = async () => {
    const exist = await checkIsaddToCollection(propvalue);
    setisexist(exist);
  };
  fetching();
};
