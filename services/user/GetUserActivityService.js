const ApiError = require("../../controllers/ApiErrorController");
const prismaClient = require("../../db/connection");

module.exports = class GetUserActivityService {
  static async execute(id) {
    // check if user exists
    const userExists = await prismaClient.usuarios.findUnique({
      where: {
        id_usuario: id,
      },
    });

    if (userExists === null || userExists === undefined) {
      return ApiError.NotFound("User not found");
    }

    try {
      const userActivity = await prismaClient.atividade_usuario.findMany({
        where: {
          id_usuario: id,
        },
      });

      return userActivity;
    } catch (error) {
      return ApiError.Internal(error.message);
    }
  }
};
