module.exports = function validateServicoExtra(data) {
  if (
    !data.valor_servico ||
    data.valor_servico === null ||
    data.valor_servico === undefined
  ) {
    return false;
  }

  if (
    !data.descricao_servico ||
    data.descricao_servico === null ||
    data.descricao_servico === undefined
  ) {
    return false;
  }

  if (
    !data.id_guincho ||
    data.id_guincho === null ||
    data.id_guincho === undefined
  ) {
    return false;
  }

  return true;
};
