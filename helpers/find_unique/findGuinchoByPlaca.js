const prismaClient = require("../../db/connection");

module.exports = async function findGuinchoByPlaca(placa) {
  try {
    const guincho = await prismaClient.guinchos.findFirst({
      where: {
        placa: placa,
      },
    });

    return guincho;
  } catch (error) {
    console.log(error);
    return false;
  }
};
