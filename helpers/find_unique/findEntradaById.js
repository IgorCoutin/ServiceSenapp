const ApiError = require("../../controllers/ApiErrorController");
const prismaClient = require("../../db/connection");

module.exports = async function findEntradaById(id) {
  try {
    const entrada = await prismaClient.entrada_patio.findUnique({
      where: {
        id_entrada: id,
      },
      include: {
        areas_apreensao: true,
        lacres: true,
        orgaos: true,
        processos: true,
        reboques: true,
        tipos_apreensao: true,
        tipos_formulario: true,
        usuarios: true,
        vagas: true,
        veiculos: true,
      },
    });

    return entrada;
  } catch (error) {
    return ApiError.Internal(error);
  }
};
