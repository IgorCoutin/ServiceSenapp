module.exports = function validateReboque(reboque) {
  if (
    !reboque.data_solicitacao ||
    reboque.data_solicitacao === "" ||
    reboque.data_solicitacao === null ||
    reboque.data_solicitacao === undefined
  ) {
    reboque.data_solicitacao = new Date();
  }

  if (
    !reboque.motivo_reboque ||
    reboque.motivo_reboque === "" ||
    reboque.motivo_reboque === undefined ||
    reboque.motivo_reboque === null
  ) {
    return false;
  }

  return true;
};
