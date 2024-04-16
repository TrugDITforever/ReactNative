import { getFoodbyID } from "../services/userService/getFoodbyId";
import { updateFoodInfo } from "../../../Redux/food";
import { useDispatch } from "react-redux";
export const usefetchFoodByID = async (
  id: String,
  navigation: any,
  dispatch: any
) => {
  try {
    if (id) {
      getFoodbyID(id).then((res) => {
        if (res) {
          const newFoodInfo = {
            foodId: res.foodData._id,
            foodName: res.foodData.foodName,
            foodImage: res.foodData.foodImage,
            calories: res.foodData.calories,
            level: res.foodData.level,
            serves: res.foodData.serves,
            description: res.foodData.description,
            ingredients: res.foodData.ingredients,
            instructions: res.foodData.instructions,
          };
          navigation.navigate("Cooking");
          dispatch(updateFoodInfo(newFoodInfo));
        }
      });
    }else return
  } catch (error: any) {
    throw new Error(error);
  }
};
