const validateUser = require("../../helpers/validations/validateUser");
const ApiError = require("../../controllers/ApiErrorController");
const prismaClient = require("../../db/connection");
const bcrypt = require("bcryptjs");


module.exports = class CreateUserService {
  static async execute(user, next) {
    // check if the field are filled in
    const isValidUser = validateUser(user, true);

    if (!isValidUser) {
      return ApiError.BadRequest("User not valid. Try it again please.");
    }

    // check if user already exists
    const userExists = await prismaClient.usuarios
      .findFirst({
        where: {
          login: user.login,
          matricula: user.matricula,
        },
      })
      .then((user) => {
        if (user !== null) {
          return true;
        }
        return false;
      });

    if (userExists) {
      return ApiError.BadRequest("User already exists");
    }

    // checks if the front sent the creation date
    if (
      !user.created_at ||
      user.created_at === undefined ||
      user.created_at === null
    ) {
      user.created_at = new Date();
    }

    // clean cpf
    user.cpf = user.cpf.replaceAll(".", "").replaceAll("-", "");

    // encrypt password
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(user.senha, salt);

    user.senha = hashedPassword;

    // send user to db
    try {
      const createdUser = await prismaClient.usuarios.create({
        data: user,
      });
      return createdUser;
    } catch (err) {
      console.log(err)
      return ApiError.Internal(err.message);
    }
  }
};
