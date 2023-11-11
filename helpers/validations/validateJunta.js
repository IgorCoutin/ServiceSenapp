module.exports = function validateJunta(data) {
  if (
    !data.nome_junta ||
    data.nome_junta === null ||
    data.nome_junta === undefined
  ) {
    return false;
  }

  return true;
};
