const ApiError = require("../../controllers/ApiErrorController");
const prismaClient = require("../../db/connection");

module.exports = class GetAllUsersService {
  static async execute(filters = null) {
    // check if filters exists
    // if exists, turns the filter into the correct data type

    // OBS: I think there must be a better way to do this, if you know, please do.
    if (Object.keys(filters).includes("id_grupo")) {
      filters.id_grupo = parseInt(filters.id_grupo);
    }

    if (Object.keys(filters).includes("id_orgao")) {
      filters.id_orgao = parseInt(filters.id_orgao);
    }

    if (Object.keys(filters).includes("id_cargo")) {
      filters.id_cargo = parseInt(filters.id_cargo);
    }

    if (Object.keys(filters).includes("ativo")) {
      if (filters.ativo == 1) {
        filters.ativo = true;
      } else {
        filters.ativo = false;
      }
    }

    // get users
    try {
      let users;

      // get all users filtered
      if (Object.keys(filters).length !== 0 || filters !== null) {
        users = await prismaClient.usuarios.findMany({
          where: {
            AND: {
              id_grupo: filters.id_grupo,
              id_orgao: filters.id_orgao,
              id_cargo: filters.id_cargo,
              ativo: filters.ativo,
              cpf: filters.cpf,
              matricula: filters.matricula,
            },
          },
        });
      } else {
        // get all users without filter
        users = await prismaClient.usuarios.findMany();
      }

      // exclude password from response
      users.forEach((user) => {
        user.senha = "";
      });

      // return users
      return users;
    } catch (error) {
      return ApiError.Internal(error.message);
    }
  }
};
