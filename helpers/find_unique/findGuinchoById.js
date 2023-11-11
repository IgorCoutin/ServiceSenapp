const prismaClient = require("../../db/connection");

module.exports = async function findGuinchoById(id) {
  try {
    const guincho = await prismaClient.guinchos.findUnique({
      where: {
        id_guincho: id,
      },
      include: {
        servicos_extras: true,
        boletos: true,
        condutores: true,
        reboques: true,
        transferencias_patio_leilao: true,
      },
    });

    return guincho;
  } catch (error) {
    console.log(error);
    return false;
  }
};
