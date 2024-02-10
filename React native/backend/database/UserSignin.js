const database = require("./database");
const checkUser = (email, password, callback) => {
  const queryText = " SELECT * FROM useracc Where password = ? and email = ?";
  const values = [password, email];
  database.connection.query(queryText, values, function (err, result) {
    if (result.length > 0) {
      callback(null, result);
    } else {
      callback(err, null);
    }
  });
};
module.exports = {
  checkUser,
};
