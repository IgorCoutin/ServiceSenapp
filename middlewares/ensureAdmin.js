const prismaClient = require("../db/connection");

module.exports = async function ensureAdmin(req, res, next) {
  // require id from headers
  const id = Number.parseInt(req.id_usuario);

  // check if user is admin
  const user = await prismaClient.usuarios.findUnique({
    where: {
      id_usuario: id,
    },
  });

  // if user is not admin, then return an error
  if (user.id_perfil !== 1) {
    return res.status(403).json({
      status: "error",
      success: false,
      message: "You don't have permission to access this!",
    });
  }

  // pass to next middleware
  return next();
};
