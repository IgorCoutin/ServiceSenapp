const prismaClient = require("../../db/connection");
const bcrypt = require("bcryptjs");
const ApiError = require("../../controllers/ApiErrorController");

module.exports = class EditPasswordService {
  static async execute(data) {
    // check if user exists
    const user = await prismaClient.usuarios.findUnique({
      where: {
        id_usuario: data.id,
      },
    });

    if (user === null || user === undefined) {
      return ApiError.NotFound("User not found");
    }

    user.senha = "";

    // encrypt password
    const salt = await bcrypt.genSalt(18);
    const hashedPassword = await bcrypt.hashPassword(password, salt);

    // update password
    try {
      const updatedUser = await prismaClient.usuarios.update({
        where: { id_usuario: data.id },
        data: {
          senha: hashedPassword,
        },
      });

      return updatedUser;
    } catch (err) {
      return ApiError.Internal(err.message);
    }
  }
};
