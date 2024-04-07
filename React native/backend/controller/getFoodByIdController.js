const getFoodById = require("../database/services/getFoodById");

exports.getFoodById = (req, res) => {
  const state = req.body;
  console.log(state);
  getFoodById.getFoodById(state.foodId, (err, result) => {
    if (result) {
      res.status(200).json({
        foodData: result[0],
      });
      console.log(result[0]);
    } else {
      res.status(200).json({
        message: "error",
      });
    }
  });
};
