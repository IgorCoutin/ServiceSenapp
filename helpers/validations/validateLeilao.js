module.exports = async function validateLeilao(leilao) {
  // if (
  //   leilao.data_leilao === undefined ||
  //   leilao.data_leilao === null ||
  //   !leilao.data_leilao
  // ) {
  //   return false;
  // }

  if (
    leilao.id_leiloreiro === undefined ||
    leilao.id_leiloreiro === null ||
    !leilao.id_leiloreiro
  ) {
    return false;
  }

  if (
    leilao.id_veiculo === undefined ||
    leilao.id_veiculo === null ||
    !leilao.id_veiculo
  ) {
    return false;
  }

  return true;
};
