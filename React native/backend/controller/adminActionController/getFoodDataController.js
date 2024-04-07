const adminService = require("../../database/services/admin.services");
exports.fetchfoodData = (req, res) => {
  adminService.fetchFoodData((err, rows) => {
    if (rows && rows.length > 0) {
      res.status(200).json({
        foodData: rows,
        success: true,
      });
    } else {
      res.status(200).json({
        success: false,
      });
    }
  });
};
