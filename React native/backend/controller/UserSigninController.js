const dbconnection = require("../database/UserSignin");
exports.checkUserSignin = (req, res) => {
  const state = req.body;
  console.log(state);
  dbconnection.checkUser(state.email, state.password, (err, rows) => {
    if (rows && rows.length > 0) {
      res.status(200).json({
        dataUser: rows,
        success: true,
      });
      console.log(rows);
    } else {
      res.status(200).json({
        success: false,
      });
    }
  });
};
