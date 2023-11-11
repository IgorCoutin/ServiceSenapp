const prismaClient = require("../../db/connection");
const getUserByToken = require("../../helpers/auth/getUserByToken");

module.exports = class UserActivityService {
  static async execute(id_modulo, headers) {
    // get user who performed the activity
    const user = await getUserByToken(headers);
    if (!user) {
      return ApiError.NotFound("User not found");
    }

    // insert into db the activity
    try {
      const insertedActivity = await prismaClient.atividade_usuario.create({
        data: {
          id_usuario: user.id_usuario,
          id_modulo: id_modulo,
          data_atividade: new Date(),
          created_at: new Date(),
        },
      });

      return insertedActivity;
    } catch (error) {
      return ApiError.Internal(error.message);
    }
  }
};
