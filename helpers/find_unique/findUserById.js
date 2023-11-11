const prismaClient = require("../../db/connection");

module.exports = async function findUserById(id) {
  try {
    const user = await prismaClient.usuarios.findUnique({
      where: {
        id_usuario: id,
      },
      include: {
        orgaos: {
          select: {
            sigla: true,
          },
        },
        grupos: {
          select: {
            nome_grupo: true,
          },
        },
        perfis: {
          select: {
            slug: true,
          },
        },
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    return false;
  }
};
