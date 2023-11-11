const prismaClient = require("../../db/connection");

module.exports = async function findVeiculoById(id) {
  try {
    // OBS: REFACTOR THIS!!!!!!!
    const veiculo = await prismaClient.veiculos.findUnique({
      where: {
        id_veiculo: id,
      },
      include: {
        condutores: {
          select: {
            nome_condutor: true,
            cpf_condutor: true,
            cnh_condutor: true,
            uf_cnh: true,
          },
        },
        categorias_veiculos: {
          select: {
            nome_categoria: true,
          },
        },
        entrada_patio: true,
        leiloes: true,
        especies_veiculos: {
          select: {
            nome_especie: true,
          },
        },
        fotos_veiculos: true,
        liberacoes_veiculo: true,
        notificacoes: true,
        proprietarios: true,
        reboques: true,
        status_liberacao_veiculo: true,
        tipos_documento_apreensao: true,
        tipos_restricao_veiculo: true,
        tipos_veiculos: {
          select: {
            nome_tipo: true,
          },
        },
      },
    });

    return veiculo;
  } catch (error) {
    console.log(error);
    return false;
  }
};
