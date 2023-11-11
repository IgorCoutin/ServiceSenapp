const bcrypt = require("bcryptjs");
const createUserToken = require("../../helpers/auth/createUserToken");
const validateLogin = require("../../helpers/validations/validateLogin");
const findUserByLogin = require("../../helpers/find_unique/findUserByLogin");
const ApiError = require("../../controllers/ApiErrorController");

module.exports = class AuthenticateUserService {
  static async execute(login, senha) {
    // check if field are filled in
    const isValid = validateLogin(login, senha);

    if (!isValid) {
      return ApiError.BadRequest(
        "Login or password are not valid. Try it again please."
      );
    }

    // find/check if user exists
    const user = await findUserByLogin(login);

    if (!user || user === undefined || user === null) {
      return ApiError.NotFound("User not found.");
    }

    // check if password matches
    const passwordMatch = await bcrypt.compare(senha, user.senha);

    if (!passwordMatch) {
      return ApiError.BadRequest("Password wrong.");
    }

    // send token to the controller
    const token = await createUserToken(user);

    return token;
  }
};
