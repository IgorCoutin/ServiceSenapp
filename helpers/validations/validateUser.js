module.exports = function validateUser(user, hasPassword = false) {
  // this will validate the REQUIRED fields
  // obs: refactor this
  if (!user.nome || user.nome === "") {
    console.log("Nome invalido");
    return false;
  }

  // if (!user.login || user.login === "") {
  //   console.log("Login invalido");
  //   return false;
  // }

  if (hasPassword) {
    if (!user.senha || user.senha === "") {
      console.log("Senha invalida");
      return false;
    }
  }

  if (!user.matricula || user.matricula === "") {
    console.log("Matricula invalido");
    return false;
  }

  if (!user.id_grupo || typeof user.id_grupo !== "number") {
    console.log("Grupo invalido");
    return false;
  }

  if (!user.id_orgao || typeof user.id_orgao !== "number") {
    console.log("Orgao invalido");
    return false;
  }

  if (!user.id_cargo || typeof user.id_cargo !== "number") {
    console.log("Cargo invalido");
    return false;
  }

  if (!user.id_perfil || typeof user.id_perfil !== "number") {
    console.log("Perfil invalido");
    return false;
  }

  if (!user.cpf || user.cpf === "") {
    console.log("cpf invalido");
    return false;
  }

  return true;
};
