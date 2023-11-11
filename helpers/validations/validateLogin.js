module.exports = function validateLogin(login, senha) {
  if (!login || login === "" || login === undefined) {
    return false;
  }

  if (!senha || senha === "" || senha === undefined) {
    return false;
  }

  return true;
};
