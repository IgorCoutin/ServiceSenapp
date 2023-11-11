module.exports = function validateOrgao(orgao) {
  if (!sigla || typeof sigla !== "string") {
    return false;
  }

  return true;
};
