const prismaClient = require("../../db/connection");

module.exports = async function findLacreByNumero(numero) {
  try {
    const lacre = await prismaClient.lacres.findFirst({
      where: {
        AND: {
          numero_lacre: numero,
        },
      },
    });

    return lacre;
  } catch (error) {
    console.log(error);
    return false;
  }
};
