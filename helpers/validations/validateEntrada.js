module.exports = function validateEntradaService(data) {
  if (
    !data.id_processo ||
    data.id_processo === null ||
    data.id_processo === undefined
  ) {
    return false;
  }

  if (
    !data.id_tipo_formulario ||
    data.id_tipo_formulario === null ||
    data.id_tipo_formulario === undefined
  ) {
    return false;
  }

  if (
    !data.id_veiculo ||
    data.id_veiculo === null ||
    data.id_veiculo === undefined
  ) {
    return false;
  }

  if (!data.id_orgao || data.id_orgao === null || data.id_orgao === undefined) {
    return false;
  }

  if (
    !data.id_usuario ||
    data.id_usuario === null ||
    data.id_usuario === undefined
  ) {
    return false;
  }

  if (
    !data.id_tipo_apreensao ||
    data.id_tipo_apreensao === undefined ||
    data.id_tipo_apreensao === null
  ) {
    return false;
  }

  if (
    !data.id_area_apreensao ||
    data.id_area_apreensao === null ||
    data.id_area_apreensao === undefined
  ) {
    return false;
  }

  return true;
};
