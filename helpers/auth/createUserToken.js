const jwt = require("jsonwebtoken");

module.exports = async function createUserToken(user) {
  // create token
  const token = jwt.sign(
    {
      id: user.id_usuario,
    },
    process.env.SECRET,
    {
      expiresIn: "2h",
      subject: `${user.id_usuario}`,
    }
  );

  // return token
  return token;
};
