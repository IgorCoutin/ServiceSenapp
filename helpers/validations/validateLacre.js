module.exports = function validateLacre(data) {
  if (data.numero_lacre === null || data.numero_lacre === undefined) {
    return false;
  }

  return true;
};
