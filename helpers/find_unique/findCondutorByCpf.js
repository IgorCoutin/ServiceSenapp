const prismaClient = require("../../db/connection");

module.exports = async function findCondutorByCpf(cpf) {
  try {
    const condutor = await prismaClient.condutores.findFirst({
      where: {
        cpf_condutor: cpf,
      },
    });
    return condutor;
  } catch (error) {
    console.log(error);
    return false;
  }
};
