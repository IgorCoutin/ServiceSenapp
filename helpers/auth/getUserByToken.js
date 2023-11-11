const findUserById = require("../find_unique/findUserById");
const jwt = require("jsonwebtoken");

module.exports = async function getUserByToken(headers) {
  // clear token
  const [, token] = headers.split(" ");

  // verify token
  const { sub } = jwt.verify(token, process.env.SECRET);

  // find user
  const user = await findUserById(Number.parseInt(sub));

  // check if user exists
  if (!user || user === null || user === undefined) {
    return false;
  }

  return user;
};
