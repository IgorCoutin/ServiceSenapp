const prismaClient = require("../../db/connection");

module.exports = async function findVeiculoByPlaca(placa) {
  try {
    const veiculo = await prismaClient.veiculos.findFirst({
      where: {
        placa_ostentada: placa,
      },
    });

    return veiculo;
  } catch (error) {
    console.log(error);
    return false;
  }
};
