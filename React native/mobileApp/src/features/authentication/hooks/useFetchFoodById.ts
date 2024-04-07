import { getFoodbyID } from "../services/userService/getFoodbyId";
import { updateFoodInfo } from "../../../Redux/food";
export const usefetchFoodByID = async (
  id: number,
  navigation: any,
  dispatch: any
) => {
  try {
    getFoodbyID(id).then((res) => {
      if (res) {
        console.log(res);
        const newFoodInfo = {
          foodId: res.foodData.foodId,
          foodName: res.foodData.foodName,
          calories: res.foodData.calories,
          level: res.foodData.level,
          serves: res.foodData.serves,
          description: res.foodData.description,
          ingredients: res.foodData.ingredients,
          instruction: res.foodData.instruction,
        };
        navigation.navigate("Cooking");
        dispatch(updateFoodInfo(newFoodInfo));
      }
    });
  } catch (error: any) {
    throw new Error(error);
  }
};
