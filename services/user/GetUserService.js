const ApiError = require("../../controllers/ApiErrorController");
const prismaClient = require("../../db/connection");
const findUserById = require("../../helpers/find_unique/findUserById");

module.exports = class GetUserService {
  static async execute(id) {
    try {
      // check if user exists
      const user = await findUserById(id);

      if (user === null || user === undefined || user === false) {
        return ApiError.NotFound("User not found");
      }

      user.senha = "";

      // return user
      return user;
    } catch (err) {
      return ApiError.Internal(err.message);
    }
  }
};
