module.exports = async function validateLiberacao(data) {
  if (
    !data.id_usuario ||
    data.id_usuario === undefined ||
    data.id_usuario === null
  ) {
    return false;
  }

  if (
    !data.id_veiculo ||
    data.id_veiculo === undefined ||
    data.id_veiculo === null
  ) {
    return false;
  }

  return true;
};
