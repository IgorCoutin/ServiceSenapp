const prismaClient = require("../../db/connection");

module.exports = async function findJuntaByName(data) {
  try {
    const junta = await prismaClient.juntas_comerciais.findFirst({
      where: {
        name: data.nome_junta,
      },
    });

    return junta;
  } catch (error) {
    console.log(error);
    return false;
  }
};
