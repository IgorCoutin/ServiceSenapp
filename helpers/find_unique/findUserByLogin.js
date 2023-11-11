const prismaClient = require("../../db/connection");

module.exports = async function findUserByLogin(login) {
  try {
    const user = await prismaClient.usuarios.findFirst({
      where: {
        login: login,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    return false;
  }
};
