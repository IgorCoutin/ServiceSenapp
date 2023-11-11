const prismaClient = require("../../db/connection");

module.exports = async function findLacreById(id) {
  try {
    const lacre = await prismaClient.lacres.findUnique({
      where: {
        id_lacre: id,
      },
    });

    return lacre;
  } catch (error) {
    console.log(error);
    return false;
  }
};
