const ApiError = require("../../controllers/ApiErrorController");
const prismaClient = require("../../db/connection");

module.exports = class DeleteUserService {
  static async execute(id) {
    // check if user exists
    const user = await prismaClient.usuarios.findUnique({
      where: { id_usuario: id },
    });

    if (user === null || user === undefined) {
      return ApiError.NotFound("User not found");
    }

    // check if user is already deleted
    if (user.ativo === false) {
      return ApiError.BadRequest("User already deleted");
    }

    // delete user
    try {
      const deletedUser = await prismaClient.usuarios.update({
        where: { id_usuario: id },
        data: {
          removed_at: new Date(),
          ativo: false,
        },
      });

      return deletedUser;
    } catch (err) {
      return ApiError.Internal(err.message);
    }
  }
};
