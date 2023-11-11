const ApiError = require("../../controllers/ApiErrorController");
const prismaClient = require("../../db/connection");
const validateUser = require("../../helpers/validations/validateUser");

module.exports = class EditUserService {
  static async execute(data, id) {
    // check if user exists
    const user = await prismaClient.usuarios.findUnique({
      where: {
        id_usuario: id,
      },
    });

    if (user === false) {
      return ApiError.NotFound("User not found");
    }

    // edit user
    try {
      const editedUser = await prismaClient.usuarios.update({
        where: {
          id_usuario: id,
        },
        data: data,
      });
      return editedUser;
    } catch (error) {console.clear()
      console.log(error)
      return ApiError.Internal(error.message);
    }
  }
};
