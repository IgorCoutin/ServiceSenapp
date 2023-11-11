const prismaClient = require("../../db/connection");

module.exports = async function findLeilaoById(id) {
  try {
    const leilao = await prismaClient.leiloes.findUnique({
      where: {
        id_leilao: id,
      },
      include: {
        leiloeiros: true,
        resultados_leiloes: true,
        status_leilao: true,
        veiculos: true,
      },
    });
    return leilao;
  } catch (error) {
    console.log(error);
    return false;
  }
};
