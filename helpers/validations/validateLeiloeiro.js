module.exports = function validateLeiloeiro(data) {
  if (
    !data.nome_leiloeiro ||
    data.nome_leiloeiro === undefined ||
    data.nome_leiloeiro === null
  ) {
    return false;
  }

  if (
    !data.id_junta_comercial ||
    data.id_junta_comercial === undefined ||
    data.id_junta_comercial === null
  ) {
    return false;
  }

  if (
    !data.cpf_leiloeiro ||
    data.cpf_leiloeiro === undefined ||
    data.cpf_leiloeiro === null
  ) {
    return false;
  }

  return true;
};
