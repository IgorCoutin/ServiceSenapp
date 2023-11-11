const CreateUserService = require("../services/user/CreateUserService");
const GetAllUsersService = require("../services/user/GetAllUsersService");
const DeleteUserService = require("../services/user/DeleteUserService");
const EditPasswordService = require("../services/user/EditPasswordService");
const EditUserService = require("../services/user/EditUserService");
const GetUserService = require("../services/user/GetUserService");
const AuthenticateUserService = require("../services/auth/AuthenticateUserService");
const UserActivityService = require("../services/user/UserActivityService");
const GetUserActivity = require("../services/user/GetUserActivityService");
const ApiError = require("./ApiErrorController");
const { decodeBase64 } = require("bcryptjs");
const decripta = require("../helpers/auth/decripta")

module.exports = class UserController {
  static async Login(req, res, next) {
    // #swagger.tags = ["users"]

    // get body
    const { login, senha } = req.body;

  console.log(login, senha)

    // auth user
    const authUser = await AuthenticateUserService.execute(login, senha);

    if (authUser instanceof ApiError) {
      return next(authUser);
    }

    // send response to front
    return res.status(200).json({
      status: "success",
      success: true,
      message: "User logged in",
      authUser,
    });
  }

  static async CreateUser(req, res, next) {
    // #swagger.tags = ["users"]



    const base = decripta(atob(req.body.encoded))
    console.log('DATA',base) 
    // get body
    const user = JSON.parse(base)

    // create user
    const createdUser = await CreateUserService.execute(user, next);
    
    if (createdUser instanceof ApiError) {
      return next(createdUser);
    }

    // save user activity in db
    const userActivity = await UserActivityService.execute(
      1,
      req.headers.authorization
    );

    // if something went wrong in insertion, returns an error
    if (userActivity instanceof ApiError) {
      return next(userActivity);
    }

    // response to front
    return res.status(200).json({
      status: "success",
      success: true,
      message: "User created",
      createdUser,
    });
  }

  static async GetAllUsers(req, res, next) {
    // #swagger.tags = ["users"]

    // get filters
    const filters = {
      ...req.query,
    };

    // get all users
    const allUsers = await GetAllUsersService.execute(filters);

    if (allUsers instanceof ApiError) {
      return next(allUsers);
    }

    // save user activity in db
    const userActivity = await UserActivityService.execute(
      2,
      req.headers.authorization
    );

    // if something went wrong in insertion, returns an error
    if (userActivity instanceof ApiError) {
      return next(userActivity);
    }

    // response to front case success
    return res.status(200).json({
      status: "success",
      success: true,
      message: "Returning all users",
      allUsers,
    });
  }

  static async DeleteUser(req, res, next) {
    // #swagger.tags = ["users"]

    // get id
    const id = Number.parseInt(req.params.id);

    // delete user
    const deletedUser = await DeleteUserService.execute(id);
    console.log(deletedUser)

    if (deletedUser instanceof ApiError) {
      return next(deletedUser);
    }

    // save user activity in db
    const userActivity = await UserActivityService.execute(
      3,
      req.headers.authorization
    );

    // if something went wrong in insertion, returns an error
    if (userActivity instanceof ApiError) {
      return next(userActivity);
    }

    // if succes, return response to front
    return res.status(200).json({
      status: "success",
      success: true,
      message: "User deleted",
    });
  }

  static async EditPassword(req, res, next) {
    // #swagger.tags = ["users"]

    // get body
    const data = {
      id: Number.parseInt(req.body.id),
      senha: req.body.senha,
    };

    // edit password
    const editedPassword = await EditPasswordService.execute(data);

    if (editedPassword instanceof ApiError) {
      return next(editedPassword);
    }

    // response to front
    return res.status(200).json({
      status: "success",
      success: true,
      message: "Password updated",
      editedPassword,
    });
  }

  static async EditUser(req, res, next) {
    // #swagger.tags = ["users"]

    const id = Number.parseInt(req.params.id);

    const data = {
      ...req.body,
      updated_at: new Date(),
    };

    console.clear()

    console.log(data)

    const editedUser = await EditUserService.execute(data, id);

    if (editedUser instanceof ApiError) {
      return next(editedUser);
    }

    // save user activity in db
    const userActivity = await UserActivityService.execute(
      4,
      req.headers.authorization
    );

    // if something went wrong in insertion, returns an error
    if (userActivity instanceof ApiError) {
      return next(userActivity);
    }

    return res.status(200).json({
      status: "success",
      success: true,
      message: "User updated",
      editedUser,
      
    });
  }

  static async GetUser(req, res, next) {
    // #swagger.tags = ["users"]

    // get user id
    const id = Number.parseInt(req.params.id);

    // find user
    const user = await GetUserService.execute(id);

    if (user instanceof ApiError) {
      return next(user);
    }

    // save user activity in db
    const userActivity = await UserActivityService.execute(
      5,
      req.headers.authorization
    );

    // if something went wrong in insertion, returns an error
    if (userActivity instanceof ApiError) {
      return next(userActivity);
    }

    return res.status(200).json({
      status: "success",
      success: true,
      message: "Returning user",
      user,
    });
  }

  static async GetUserActivity(req, res, next) {
    // #swagger.tags = ["users"]

    // get user id
    const id = Number.parseInt(req.params.id);

    // find user activity
    const userActivity = await GetUserActivity.execute(id);

    if (userActivity instanceof ApiError) {
      return next(userActivity);
    }

    // save user activity in db
    const registerUserActivity = await UserActivityService.execute(
      25,
      req.headers.authorization
    );

    // if something went wrong in insertion, returns an error
    if (userActivity instanceof ApiError) {
      return next(userActivity);
    }

    // return response to front
    return res.status(200).json({
      status: "success",
      success: true,
      message: "Returning user activity",
      userActivity,
    });
  }
};
