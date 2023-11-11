const jwt = require("jsonwebtoken");

module.exports = function ensureAuth(req, res, next) {
  // get token from headers
  const authToken = req.headers.authorization ;



  // verify if token is filled in
  if (!authToken) {
    return res.status(401).json({
      status: "error",
      success: false,
      message: "Unauthorized!",
    });
  }

  // split token
  const [, token] = authToken.split(" ");

  // console.log("token ", authToken);

  // verify if token is valid
  try {
    const { sub } = jwt.verify(token, process.env.SECRET);
    // const { sub } = jwt.verify(authToken, process.env.SECRET);

    // return user infos
    req.id_usuario = sub;

    return next();
  } catch (err) {
    return res.status(500).json({
      status: "error",
      success: false,
      message: err.message,
    });
  }
};
