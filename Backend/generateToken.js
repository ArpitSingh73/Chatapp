const jwt = require("jsonwebtoken");
const SECRET = "ArpiT"
const generateToken = (id) => {
  return jwt.sign({ id }, SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;