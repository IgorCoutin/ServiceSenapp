module.exports = function validateGuincho(data) {
  if (!data.placa || data.placa === undefined || data.placa === null) {
    return false;
  }

  if (
    !data.termo_credenciamento ||
    data.termo_credenciamento === undefined ||
    data.termo_credenciamento === null
  ) {
    return false;
  }

  return true;
};
