const prismaClient = require("../../db/connection");

module.exports = async function findLeiloeiroById(id) {
  try {
    const leiloeiro = await prismaClient.leiloeiros.findUnique({
      where: {
        id_leiloeiro: id,
      },
      include: {
        enderecos: true,
        juntas_comerciais: true,
        leiloes: true,
      },
    });

    return leiloeiro;
  } catch (error) {
    console.log(error);
    return false;
  }
};
