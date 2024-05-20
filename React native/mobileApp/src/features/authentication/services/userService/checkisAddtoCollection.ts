import { ScreenStackHeaderConfigProps } from "react-native-screens";
import { BASE_URL } from "../fixIp/ip";
import axios from "axios";

export interface PropCheckCollection {
  userID: string;
  recipeID: string;
}
export async function checkIsaddToCollection(
  propvalue: PropCheckCollection
): Promise<boolean> {
  const recipeID = propvalue.recipeID;
  try {
    const res = await axios.get(
      `${BASE_URL}:8080/api/checkIsaddedtoCollection/${propvalue.userID}`,
      {
        params: {
          recipeID: propvalue.recipeID,
        },
      }
    );
    // console.log(res.data.exist);
    return res.data.exist;
  } catch (error) {
    return false;
  }
}
