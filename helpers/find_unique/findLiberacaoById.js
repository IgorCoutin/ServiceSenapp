const prismaClient = require("../../db/connection");

module.exports = async function findLiberacaoById(id) {
  try {
    const liberacao = await prismaClient.liberacoes_veiculo.findUnique({
      where: {
        id_liberacao_veiculo: id,
      },
    });

    return liberacao;
  } catch (error) {
    console.log(error);
    return false;
  }
};
