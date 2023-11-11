const prismaClient = require("../../db/connection");

module.exports = async function findJuntaById(id) {
  try {
    const junta = await prismaClient.juntas_comerciais.findUnique({
      where: {
        id_junta_comercial: id,
      },
    });

    return junta;
  } catch (error) {
    console.log(error);
    return false;
  }
};
