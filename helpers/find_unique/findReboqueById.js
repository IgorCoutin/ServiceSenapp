const prismaClient = require("../../db/connection");

module.exports = async function findReboqueById(id, withCanceled = false) {
  try {
    // if include canceled reboques
    if (withCanceled) {
      const reboque = await prismaClient.reboques.findFirst({
        where: {
          id_reboque: id,
        },
        include: {
          usuarios: {
            select: {
              id_usuario: true,
              nome: true,
              orgaos: true,
              grupos: true,
            },
          },
          guinchos: {
            select: {
              condutores: {
                select: {
                  nome_condutor: true,
                  cnh_condutor: true,
                },
              },
              placa: true,
              termo_credenciamento: true,
            },
          },
          veiculos: true,
          orgaos: {
            select: {
              sigla: true,
              cnpj: true,
            },
          },
          entrada_patio: true,
        },
      });

      return reboque;
    }

    // if not include canceled reboques
    const reboque = await prismaClient.reboques.findFirst({
      where: {
        id_reboque: id,
        cancelado: false,
      },
      include: {
        usuarios: {
          select: {
            id_usuario: true,
            nome: true,
            orgaos: true,
            grupos: true,
          },
        },
        guinchos: {
          select: {
            condutores: {
              select: {
                nome_condutor: true,
                cnh_condutor: true,
              },
            },
            placa: true,
            termo_credenciamento: true,
          },
        },
        veiculos: true,
        orgaos: {
          select: {
            sigla: true,
            cnpj: true,
          },
        },
        entrada_patio: true,
      },
    });

    return reboque;
  } catch (error) {
    console.log(error);
    return false;
  }
};
