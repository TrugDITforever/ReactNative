const dbconnection = require("../database/getUser");
exports.getUser = (req, res) => {
  dbconnection.getUser((err, rows) => {
    if (rows && rows.length > 0) {
      res.status(200).json({
        dataUser: rows,
        message: "success",
      });
      console.log(rows);
    } else {
      res.status(200).json({
        message: "error",
      });
    }
  });
};
