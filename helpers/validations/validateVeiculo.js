module.exports = async function validateVeiculo(data) {
  if (
    !data.placa_ostentada ||
    data.placa_ostentada === undefined ||
    data.placa_ostentada === null
  ) {
    return false;
  }

  if (
    !data.numero_chassi ||
    data.numero_chassi === undefined ||
    data.numero_chassi === null
  ) {
    return false;
  }

  if (
    !data.numero_chassi ||
    data.numero_chassi === undefined ||
    data.numero_chassi === null
  ) {
    return false;
  }

  return true;
};
