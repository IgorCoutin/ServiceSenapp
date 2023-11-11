const CreateJuntaService = require("../services/junta/CreateJuntaService");
const GetJuntaService = require("../services/junta/GetJuntaService.js");
const GetAllJuntasService = require("../services/junta/GetAllJuntasService.js");
const ApiError = require("./ApiErrorController");
const UserActivityService = require("../services/user/UserActivityService");

module.exports = class JuntasComerciaisContrller {
  static async CreateJuntaComercial(req, res, next) {
    //#swagger.tags = ["junta comercial"]

    // get data
    const data = {
      ...req.body,
    };

    // create junta
    const junta = await CreateJuntaService.execute(data);

    // if something went wrong, return an error
    if (junta instanceof ApiError) {
      return next(junta);
    }

    // save user activity in db
    const registerUserActivity = await UserActivityService.execute(
      50,
      req.headers.authorization
    );

    // if something went wrong in insertion, returns an error
    if (registerUserActivity instanceof ApiError) {
      return next(registerUserActivity);
    }

    // return response to front
    return res.status(201).json({
      status: "success",
      success: true,
      message: "Junta comercial created successfully",
      junta,
    });
  }

  static async GetJuntaComercial(req, res, next) {
    // #swagger.tags = ["junta"]

    // get id
    const id = Number.parseInt(req.params.id);

    // find junta comercial
    const junta = await GetJuntaService.execute(id);

    // if something went wrong, return an error
    if (junta instanceof ApiError) {
      return next(junta);
    }

    // save user activity in db
    const registerUserActivity = await UserActivityService.execute(
      51,
      req.headers.authorization
    );

    // if something went wrong in insertion, returns an error
    if (registerUserActivity instanceof ApiError) {
      return next(registerUserActivity);
    }

    // return response to front
    return res.status(200).json({
      status: "success",
      success: true,
      message: "Junta comercial retrieved successfully",
      junta,
    });
  }

  static async GetAllJuntaComercial(req, res, next) {
    // #swagger.tags = ["junta"]

    // get filteres
    const filters = {
      ...req.query,
    };

    // get juntas
    const juntas = await GetAllJuntasService.execute(filters);

    // if something went wrong return an error
    if (juntas instanceof ApiError) {
      return next(juntas);
    }

    // save user activity in db
    const registerUserActivity = await UserActivityService.execute(
      52,
      req.headers.authorization
    );

    // if something went wrong in insertion, returns an error
    if (registerUserActivity instanceof ApiError) {
      return next(registerUserActivity);
    }

    // return ressponse to front
    return res.status(200).json({
      status: "success",
      success: true,
      message: "Juntas retrieved successfully",
      juntas,
    });
  }
};
